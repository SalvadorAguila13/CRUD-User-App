import React from 'react'
import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {
  
  
  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }
  return (
    <section className='userCard'>
        <article className='userCard__conteiner'>
            <div className='userCard__info'>
              <h3 className='userCard__title'>{user.first_name} {user.last_name}</h3>
              <img className='userCard__img' src="/react-galaxia.png" alt="" />
            <hr />
            </div>
            <ul className='userCard__list'>
              <li><span  className='userCard__span'>Email: </span>{user.email}</li>
              <li><span className='userCard__span'>BirthDay: </span><i className='bx bx-gift'></i>{user.birthday}</li>

              <footer className='userCard__footer'>
                <button className='userCard__btn btn'  onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
                <button className='userCard__btn btn' onClick={handleClickEdit}><i className='bx bxs-edit'></i></button>
              </footer>
            </ul>
        </article>
      </section>
  )
}



export default UserCard
