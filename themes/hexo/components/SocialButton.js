import { siteConfig } from '@/lib/config'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='w-full justify-center flex-wrap flex'>
    <div className='space-x-3 text-xl text-gray-600 dark:text-gray-300 '>
      {siteConfig('CONTACT_GITHUB') && <a target='_blank' rel='noreferrer' title={'github'} href={siteConfig('CONTACT_GITHUB')} >
        <i className='transform hover:scale-125 duration-150 fab fa-github dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {siteConfig('CONTACT_EMAIL') && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${siteConfig('CONTACT_EMAIL')}`} >
        <i className='transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
    </div>
  </div>
}
export default SocialButton
