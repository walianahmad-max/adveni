import React from 'react'
import './layout.css'
import TermsConditionsContent from './TermsConditionsContent.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Footer2 from './Footer2.jsx'
import Footer3 from './Footer3.jsx'

export default function Page() {
  return (
    <>
      <div
        data-framer-root={''}
        className={
          'framer-BqJIp framer-yFeKe framer-tUHJR framer-SJrTC framer-AMEQg framer-43ext framer-Rr8Jp framer-6j539w !min-h-screen'
        }
        style={{ width: 'auto' }}
      >
        <TermsConditionsContent />
        <Navbar />
        <Footer />
        <Footer2 />
        <Footer3 />
      </div>
      <div
        id={'svg-templates'}
        aria-hidden={'true'}
        className={'!absolute !overflow-hidden'}
        style={{
          bottom: '0',
          left: '0',
          width: '0',
          height: '0',
          zIndex: '0',
          contain: 'strict',
        }}
      >
        <svg
          viewBox={'0 0 24 23.912'}
          overflow={'visible'}
          id={'svg-344525839_885'}
        >
          <path
            d={
              'M 9.101 23.647 L 9.101 15.667 L 6.627 15.667 L 6.627 12 L 9.101 12 L 9.101 10.42 C 9.101 6.335 10.949 4.442 14.959 4.442 C 15.36 4.442 15.914 4.484 16.427 4.545 C 16.811 4.585 17.192 4.65 17.568 4.74 L 17.568 8.065 C 17.351 8.045 17.133 8.033 16.915 8.029 C 16.671 8.023 16.426 8.02 16.182 8.02 C 15.475 8.02 14.923 8.116 14.507 8.329 C 14.227 8.469 13.992 8.685 13.828 8.951 C 13.57 9.371 13.454 9.946 13.454 10.703 L 13.454 12 L 17.373 12 L 16.987 14.103 L 16.7 15.667 L 13.454 15.667 L 13.454 23.912 C 19.396 23.194 24 18.135 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 C 0 17.628 3.874 22.35 9.101 23.647 Z'
            }
            fill={
              'var(--token-ee4f5955-cc41-466c-9e09-94e4f4c505ae, rgb(18, 18, 16)) /* {"name":"Ink"} */'
            }
          />
        </svg>
        <svg
          viewBox={'0 0 24 24.002'}
          overflow={'visible'}
          id={'svg850872621_2835'}
        >
          <path
            d={
              'M 7.03 0.085 C 5.753 0.145 4.881 0.349 4.12 0.648 C 3.32 0.951 2.595 1.424 1.996 2.036 C 1.387 2.636 0.916 3.362 0.616 4.163 C 0.321 4.927 0.12 5.801 0.064 7.077 C 0.008 8.355 -0.005 8.765 0.001 12.024 C 0.008 15.283 0.022 15.691 0.084 16.971 C 0.145 18.248 0.348 19.12 0.647 19.882 C 0.955 20.671 1.367 21.339 2.035 22.005 C 2.636 22.615 3.363 23.086 4.164 23.385 C 4.927 23.68 5.8 23.881 7.077 23.937 C 8.355 23.993 8.766 24.006 12.024 24 C 15.281 23.993 15.692 23.979 16.971 23.918 C 18.251 23.858 19.118 23.653 19.881 23.355 C 20.682 23.052 21.406 22.579 22.004 21.967 C 22.614 21.366 23.085 20.64 23.384 19.838 C 23.679 19.075 23.88 18.202 23.935 16.926 C 23.991 15.646 24.005 15.236 23.998 11.978 C 23.992 8.72 23.978 8.311 23.917 7.031 C 23.857 5.751 23.653 4.883 23.353 4.12 C 23.051 3.32 22.577 2.596 21.966 1.997 C 21.366 1.387 20.64 0.916 19.838 0.617 C 19.074 0.323 18.202 0.121 16.924 0.067 C 15.647 0.01 15.236 -0.005 11.977 0.001 C 8.718 0.009 8.31 0.022 7.03 0.085 M 7.17 21.778 C 6 21.728 5.365 21.533 4.942 21.37 C 4.421 21.178 3.949 20.873 3.56 20.475 C 3.161 20.089 2.853 19.618 2.66 19.097 C 2.495 18.674 2.297 18.039 2.243 16.869 C 2.183 15.605 2.171 15.225 2.163 12.021 C 2.157 8.817 2.169 8.438 2.224 7.173 C 2.274 6.004 2.47 5.368 2.632 4.945 C 2.848 4.384 3.109 3.985 3.527 3.563 C 3.914 3.164 4.385 2.856 4.906 2.663 C 5.329 2.498 5.963 2.302 7.133 2.246 C 8.398 2.186 8.777 2.174 11.981 2.166 C 15.184 2.16 15.564 2.172 16.831 2.228 C 17.999 2.278 18.635 2.472 19.058 2.636 C 19.618 2.852 20.018 3.111 20.44 3.531 C 20.861 3.951 21.121 4.348 21.34 4.909 C 21.505 5.331 21.702 5.965 21.757 7.136 C 21.817 8.401 21.831 8.781 21.837 11.984 C 21.842 15.187 21.831 15.567 21.776 16.832 C 21.725 18.002 21.531 18.637 21.368 19.062 C 21.152 19.622 20.891 20.022 20.472 20.442 C 20.086 20.842 19.615 21.149 19.094 21.342 C 18.672 21.507 18.036 21.704 16.868 21.76 C 15.602 21.82 15.223 21.832 12.018 21.839 C 8.814 21.846 8.436 21.833 7.17 21.779 M 16.953 5.587 C 16.954 6.17 17.306 6.694 17.844 6.916 C 18.383 7.139 19.002 7.014 19.413 6.602 C 19.825 6.189 19.947 5.569 19.723 5.032 C 19.499 4.494 18.973 4.144 18.39 4.145 C 17.595 4.147 16.952 4.792 16.953 5.587 M 5.839 12.013 C 5.846 15.416 8.61 18.169 12.013 18.163 C 15.416 18.156 18.169 15.392 18.162 11.989 C 18.113 8.617 15.362 5.91 11.989 5.917 C 8.616 5.923 5.875 8.64 5.839 12.013 M 8 12.009 C 7.996 9.8 9.783 8.006 11.992 8.001 C 14.201 7.997 15.996 9.784 16 11.993 C 16.005 14.202 14.217 15.997 12.008 16.001 C 10.947 16.003 9.929 15.584 9.178 14.835 C 8.426 14.087 8.002 13.07 8 12.009'
            }
            fill={
              'var(--token-ee4f5955-cc41-466c-9e09-94e4f4c505ae, rgb(18, 18, 16)) /* {"name":"Ink"} */'
            }
          />
        </svg>
        <svg
          viewBox={'0 0 24 16.91'}
          overflow={'visible'}
          id={'svg168169540_729'}
        >
          <path
            d={
              'M 23.498 2.641 C 23.222 1.602 22.414 0.788 21.376 0.505 C 19.505 0 12 0 12 0 C 12 0 4.495 0 2.623 0.505 C 1.586 0.788 0.778 1.602 0.502 2.641 C 0 4.525 0 8.455 0 8.455 C 0 8.455 0 12.385 0.502 14.269 C 0.778 15.308 1.586 16.122 2.624 16.405 C 4.495 16.91 12 16.91 12 16.91 C 12 16.91 19.505 16.91 21.377 16.405 C 22.415 16.122 23.223 15.309 23.499 14.269 C 24 12.385 24 8.455 24 8.455 C 24 8.455 24 4.525 23.498 2.641 Z M 9.545 12.023 L 9.545 4.887 L 15.818 8.455 Z'
            }
            fill={
              'var(--token-ee4f5955-cc41-466c-9e09-94e4f4c505ae, rgb(18, 18, 16)) /* {"name":"Ink"} */'
            }
          />
        </svg>
        <svg
          id={'3009116499'}
          display={'block'}
          role={'presentation'}
          viewBox={'0 0 24 24'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={'M 0 0 C 4.971 0 9 4.029 9 9'}
            fill={'transparent'}
            height={'9px'}
            id={'dneS7T_Hg'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--js9iwy, 2)'}
            stroke={'var(--1m973uw, rgb(0,0,0))'}
            transform={'translate(13 2)'}
            width={'9px'}
          />
          <path
            d={'M 0 0 C 2.761 0 5 2.239 5 5'}
            fill={'transparent'}
            height={'5px'}
            id={'F13BNtf41'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--js9iwy, 2)'}
            stroke={'var(--1m973uw, rgb(0,0,0))'}
            transform={'translate(13 6)'}
            width={'5px'}
          />
          <path
            d={
              'M 11.832 14.568 C 12.257 14.763 12.761 14.637 13.045 14.265 L 13.4 13.8 C 13.778 13.296 14.37 13 15 13 L 18 13 C 19.105 13 20 13.895 20 15 L 20 18 C 20 19.105 19.105 20 18 20 C 8.059 20 0 11.941 0 2 C 0 0.895 0.895 0 2 0 L 5 0 C 6.105 0 7 0.895 7 2 L 7 5 C 7 5.63 6.704 6.222 6.2 6.6 L 5.732 6.951 C 5.353 7.24 5.231 7.756 5.44 8.184 C 6.807 10.96 9.054 13.205 11.832 14.568'
            }
            fill={'transparent'}
            height={'20px'}
            id={'HuYXxzyXb'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--js9iwy, 2)'}
            stroke={'var(--1m973uw, rgb(0,0,0))'}
            transform={'translate(2 2)'}
            width={'20px'}
          />
        </svg>
        <svg
          id={'1175957644'}
          display={'block'}
          role={'presentation'}
          viewBox={'0 0 24 24'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={'M 0 0 L 14 0'}
            fill={'transparent'}
            height={'1px'}
            id={'h3fQSrHEV'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--js9iwy, 2)'}
            stroke={'var(--1m973uw, rgb(0,0,0))'}
            transform={'translate(5 12)'}
            width={'14px'}
          />
          <path
            d={'M 0 0 L 7 7 L 0 14'}
            fill={'transparent'}
            height={'14px'}
            id={'DAe82Eor1'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--js9iwy, 2)'}
            stroke={'var(--1m973uw, rgb(0,0,0))'}
            transform={'translate(12 5)'}
            width={'7px'}
          />
        </svg>
        <svg
          id={'3467097230'}
          display={'block'}
          role={'presentation'}
          viewBox={'0 0 24 24'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={'M 0 0 L 16 0'}
            fill={'transparent'}
            height={'1px'}
            id={'YnobPTYMb'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--js9iwy, 2)'}
            stroke={'var(--1m973uw, rgb(0,0,0))'}
            transform={'translate(4 5)'}
            width={'16px'}
          />
          <path
            d={'M 0 0 L 16 0'}
            fill={'transparent'}
            height={'1px'}
            id={'Cb0Gao21R'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--js9iwy, 2)'}
            stroke={'var(--1m973uw, rgb(0,0,0))'}
            transform={'translate(4 12)'}
            width={'16px'}
          />
          <path
            d={'M 0 0 L 16 0'}
            fill={'transparent'}
            height={'1px'}
            id={'oPtuyu4df'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--js9iwy, 2)'}
            stroke={'var(--1m973uw, rgb(0,0,0))'}
            transform={'translate(4 19)'}
            width={'16px'}
          />
        </svg>
        <svg
          id={'469908671'}
          display={'block'}
          role={'presentation'}
          viewBox={'0 0 24 24'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={'M 0 0 C 2.568 0.676 4.574 2.682 5.25 5.25'}
            fill={'transparent'}
            height={'5.25px'}
            id={'WzuMf0_io'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--pgex8v, 1.5)'}
            stroke={'var(--21h8s6, rgb(0, 0, 0))'}
            transform={'translate(14.25 4.5)'}
            width={'5.25px'}
          />
          <path
            d={'M 0 0 C 1.549 0.414 2.586 1.451 3 3'}
            fill={'transparent'}
            height={'3px'}
            id={'Ip9lA74Fq'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--pgex8v, 1.5)'}
            stroke={'var(--21h8s6, rgb(0, 0, 0))'}
            transform={'translate(13.5 7.5)'}
            width={'3px'}
          />
          <path
            d={
              'M 11.662 10.625 C 11.873 10.485 12.14 10.461 12.373 10.561 L 16.794 12.542 C 17.1 12.672 17.284 12.989 17.244 13.32 C 16.943 15.571 15.021 17.251 12.75 17.25 C 5.708 17.25 0 11.541 0 4.5 C -0.002 2.228 1.679 0.307 3.93 0.005 C 4.26 -0.034 4.577 0.149 4.708 0.455 L 6.689 4.88 C 6.788 5.111 6.765 5.376 6.627 5.586 L 4.624 7.968 C 4.479 8.187 4.46 8.465 4.573 8.701 C 5.348 10.288 6.989 11.909 8.581 12.677 C 8.818 12.789 9.097 12.768 9.315 12.621 Z'
            }
            fillOpacity={'var(--1m6trwb, 0)'}
            fill={'var(--21h8s6, rgb(0, 0, 0))'}
            height={'17.249643127578697px'}
            id={'Bt6PzjR3u'}
            transform={'translate(3 3.75)'}
            width={'17.2496431275787px'}
          />
          <path
            d={
              'M 11.662 10.625 C 11.873 10.485 12.14 10.461 12.373 10.561 L 16.794 12.542 C 17.1 12.672 17.284 12.989 17.244 13.32 C 16.943 15.571 15.021 17.251 12.75 17.25 C 5.708 17.25 0 11.541 0 4.5 C -0.002 2.228 1.679 0.307 3.93 0.005 C 4.26 -0.034 4.577 0.149 4.708 0.455 L 6.689 4.88 C 6.788 5.111 6.765 5.376 6.627 5.586 L 4.624 7.968 C 4.479 8.187 4.46 8.465 4.573 8.701 C 5.348 10.288 6.989 11.909 8.581 12.677 C 8.818 12.789 9.097 12.768 9.315 12.621 Z'
            }
            fill={'transparent'}
            height={'17.249643127578697px'}
            id={'iWLHlotSZ'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--pgex8v, 1.5)'}
            stroke={'var(--21h8s6, rgb(0, 0, 0))'}
            transform={'translate(3 3.75)'}
            width={'17.2496431275787px'}
          />
        </svg>
        <svg
          id={'99690465'}
          display={'block'}
          role={'presentation'}
          viewBox={'0 0 24 24'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={'M 18 0 L 9 8.25 L 0 0 Z'}
            fillOpacity={'var(--1m6trwb, 0)'}
            fill={'var(--21h8s6, rgb(0, 0, 0))'}
            height={'8.25px'}
            id={'vcLsrdoR2'}
            transform={'translate(3 5.25)'}
            width={'18px'}
          />
          <path
            d={
              'M 0 0 L 18 0 L 18 0 L 18 12.75 C 18 13.164 17.664 13.5 17.25 13.5 L 0.75 13.5 C 0.336 13.5 0 13.164 0 12.75 L 0 0 Z'
            }
            fill={'transparent'}
            height={'13.5px'}
            id={'IQRHKCjuC'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--pgex8v, 1.5)'}
            stroke={'var(--21h8s6, rgb(0, 0, 0))'}
            transform={'translate(3 5.25)'}
            width={'18px'}
          />
          <path
            d={'M 18 0 L 9 8.25 L 0 0'}
            fill={'transparent'}
            height={'8.25px'}
            id={'qKAGBBtCQ'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--pgex8v, 1.5)'}
            stroke={'var(--21h8s6, rgb(0, 0, 0))'}
            transform={'translate(3 5.25)'}
            width={'18px'}
          />
        </svg>
        <svg
          id={'2057380237'}
          display={'block'}
          role={'presentation'}
          viewBox={'0 0 24 24'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={
              'M 7.5 0 C 3.358 0 0 3.358 0 7.5 C 0 14.25 7.5 19.5 7.5 19.5 C 7.5 19.5 15 14.25 15 7.5 C 15 3.358 11.642 0 7.5 0 Z M 7.5 10.5 C 5.843 10.5 4.5 9.157 4.5 7.5 C 4.5 5.843 5.843 4.5 7.5 4.5 C 9.157 4.5 10.5 5.843 10.5 7.5 C 10.5 9.157 9.157 10.5 7.5 10.5 Z'
            }
            fillOpacity={'var(--1m6trwb, 0)'}
            fill={'var(--21h8s6, rgb(0, 0, 0))'}
            height={'19.5px'}
            id={'rGGNTRSoW'}
            transform={'translate(4.5 2.25)'}
            width={'15px'}
          />
          <path
            d={'M 0 0 L 13.5 0'}
            fill={'var(--21h8s6, rgb(0, 0, 0))'}
            height={'1px'}
            id={'jc5F1ME7I'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--pgex8v, 1.5)'}
            stroke={'var(--21h8s6, rgb(0, 0, 0))'}
            transform={'translate(5.25 21.75)'}
            width={'13.5px'}
          />
          <path
            d={
              'M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z'
            }
            fill={'transparent'}
            height={'6px'}
            id={'zwtml5eGx'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--pgex8v, 1.5)'}
            stroke={'var(--21h8s6, rgb(0, 0, 0))'}
            transform={'translate(9 6.75)'}
            width={'6px'}
          />
          <path
            d={
              'M 15 7.5 C 15 14.25 7.5 19.5 7.5 19.5 C 7.5 19.5 0 14.25 0 7.5 C 0 3.358 3.358 0 7.5 0 C 11.642 0 15 3.358 15 7.5 Z'
            }
            fill={'transparent'}
            height={'19.5px'}
            id={'cybxiCDyV'}
            strokeDasharray={''}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={'var(--pgex8v, 1.5)'}
            stroke={'var(--21h8s6, rgb(0, 0, 0))'}
            transform={'translate(4.5 2.25)'}
            width={'15px'}
          />
        </svg>
      </div>
      <div id={'__framer-badge-container'}>
        <a
          className={
            'framer-6jWyo framer-n0ccwk framer-v-n0ccwk framer-bmpgw8 __framer-badge'
          }
          data-framer-appear-id={'n0ccwk'}
          data-framer-name={'Light'}
          data-nosnippet={'true'}
          href={'https://www.framer.com'}
          rel={'noopener'}
          title={
            'Create a free website with Framer, the website builder loved by startups, designers and agencies.'
          }
          data-reveal={''}
          style={{
            willChange: 'transform',
            pointerEvents: 'auto',
            '--enter-offset': 'translateY(10px)',
          }}
        >
          <div
            className={'framer-13yxzio'}
            data-framer-name={'Backdrop'}
            style={{
              backgroundColor: 'rgb(255, 255, 255)',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              boxShadow:
                '0px 0.6021873017743928px 1.5656869846134214px -1.5px rgba(0, 0, 0, 0.17), 0px 2.288533303243457px 5.950186588432988px -3px rgba(0, 0, 0, 0.14), 0px 10px 26px -4.5px rgba(0, 0, 0, 0.02)',
            }}
          />
          <div
            className={'framer-19yaanm'}
            data-framer-name={'Content'}
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <div className={'framer-1kflzx5'}>
              <div
                data-framer-name={'Logo'}
                className={'framer-hcsc7 framer-e50co'}
                style={{
                  '--1bd4d3i': 'rgb(0, 0, 0)',
                  '--otdjsv': 'rgb(0, 0, 0)',
                  transform: 'translateX(-50%)',
                }}
              />
            </div>
            <p className={'!absolute'} style={{ transform: 'scale(0.001)' }}>
              {
                'Create a free website with Framer, the website builder loved by startups, designers and agencies.'
              }
            </p>
            <div
              data-framer-name={'Text'}
              className={'framer-g7oZR framer-1um7t9d'}
              style={{
                '--1bd4d3i': 'rgb(0, 0, 0)',
                '--otdjsv': 'rgb(0, 0, 0)',
              }}
            />
          </div>
          <div
            className={'framer-j4ugry'}
            data-framer-name={'Bottom'}
            style={{
              mask: 'linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add',
              WebkitMask:
                'linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add',
              borderBottomLeftRadius: '11px',
              borderBottomRightRadius: '11px',
              borderTopLeftRadius: '11px',
              borderTopRightRadius: '11px',
              boxShadow: 'inset 0px 0px 0px 1px rgb(0, 0, 0)',
              opacity: '0.06',
            }}
          />
          <div
            className={'framer-jnuwbw'}
            data-framer-name={'Border'}
            style={{
              borderBottomLeftRadius: '11px',
              borderBottomRightRadius: '11px',
              borderTopLeftRadius: '11px',
              borderTopRightRadius: '11px',
              boxShadow: 'inset 0px 0px 0px 1px rgb(0, 0, 0)',
              opacity: '0.04',
            }}
          />
        </a>
      </div>
    </>
  )
}
