import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchItem = useRef()

  const handleChange = () =>{
    setSearchTerm(searchItem.current.value)
  }
  useEffect(()=>{
    searchItem.current.focus()
  },[])
  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your cocktail here!!</label>
          <input type="text" id="name" ref={searchItem} onChange={handleChange}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
