"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resource/[id]",{

/***/ "./components/resource/subpages/Main.js":
/*!**********************************************!*\
  !*** ./components/resource/subpages/Main.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _recogito_recogito_js_dist_recogito_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @recogito/recogito-js/dist/recogito.min.css */ \"./node_modules/@recogito/recogito-js/dist/recogito.min.css\");\n/* harmony import */ var _recogito_recogito_js_dist_recogito_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_recogito_recogito_js_dist_recogito_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _recogito_annotorious_dist_annotorious_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @recogito/annotorious/dist/annotorious.min.css */ \"./node_modules/@recogito/annotorious/dist/annotorious.min.css\");\n/* harmony import */ var _recogito_annotorious_dist_annotorious_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_recogito_annotorious_dist_annotorious_min_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { id  } = router.query;\n    const [resource, setResource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (event)=>{\n        setComment(event.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const { id  } = router.query;\n        if (!id) return;\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"http://3.89.218.253:8000/app/discussion/\", {\n            content: id,\n            body: comment\n        }, {\n            headers: {\n                Authorization: \"token \".concat(localStorage.getItem(\"token\"))\n            }\n        }).then(function(response) {\n            console.log(\"Success\", response);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    };\n    console.log(comments);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { id  } = router.query;\n        if (!id) return;\n        const getResource = async ()=>{\n            const baseURL = \"http://3.89.218.253:8000/app/content/?id=\".concat(id);\n            const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(baseURL, {\n                headers: {\n                    Authorization: \"token \".concat(localStorage.getItem(\"token\"))\n                }\n            });\n            setResource(res.data);\n        };\n        const getComments = async ()=>{\n            const baseURL = \"http://3.89.218.253:8000/app/discussion-list/?content_id=\".concat(id);\n            const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(baseURL, {\n                headers: {\n                    Authorization: \"token \".concat(localStorage.getItem(\"token\"))\n                }\n            });\n            setComments(res.data.data);\n        };\n        getResource();\n        getComments();\n    }, [\n        router\n    ]);\n    const paraEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const imgEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [reco, setReco] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [anno, setAnno] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [called, setCalled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Current drawing tool name\n    const [tool, setTool] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"rect\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (called) return;\n        setCalled(true);\n        __webpack_require__.e(/*! import() */ \"node_modules_recogito_recogito-js_dist_recogito_min_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @recogito/recogito-js */ \"./node_modules/@recogito/recogito-js/dist/recogito.min.js\", 23)).then((mod)=>{\n            const Recogito = mod.Recogito;\n            const r = new Recogito({\n                content: paraEl.current\n            });\n            r.setAuthInfo({\n                id: localStorage.getItem(\"token\"),\n                displayName: localStorage.getItem(\"user\")\n            });\n            r.on(\"createAnnotation\", (annotation)=>{\n                console.log(annotation);\n            });\n            setReco(r);\n        });\n        __webpack_require__.e(/*! import() */ \"node_modules_recogito_annotorious_dist_annotorious_min_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @recogito/annotorious */ \"./node_modules/@recogito/annotorious/dist/annotorious.min.js\", 23)).then((mod)=>{\n            const Annotorious = mod.Annotorious;\n            console.log(mod);\n            const a = new Annotorious({\n                image: imgEl.current\n            });\n            a.setAuthInfo({\n                id: localStorage.getItem(\"token\"),\n                displayName: localStorage.getItem(\"user\")\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                        mb: 2,\n                        variant: \"h4\",\n                        textAlign: \"center\",\n                        children: \"\".concat(resource === null || resource === void 0 ? void 0 : resource.name)\n                    }, void 0, false, {\n                        fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n                        lineNumber: 129,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                        mb: 2,\n                        variant: \"h5\",\n                        ref: (paraEl, imgEl),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            children: resource === null || resource === void 0 ? void 0 : resource.text\n                        }, void 0, false, {\n                            fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n                            lineNumber: 138,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n                        lineNumber: 133,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Divider, {}, void 0, false, {\n                        fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n                        lineNumber: 140,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n                lineNumber: 127,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                        mb: 2,\n                        variant: \"h6\",\n                        textAlign: \"center\",\n                        children: \"Discussion\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, this),\n                    comments && comments.map((comment)=>{\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Card, {\n                            sx: {\n                                p: 1.5,\n                                borderRadius: \"16px\",\n                                m: 1\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                                    gutterBottom: true,\n                                    color: \"text.secondary\",\n                                    children: [\n                                        comment === null || comment === void 0 ? void 0 : comment.owner.username,\n                                        \" | \",\n                                        (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.format)(new Date(comment === null || comment === void 0 ? void 0 : comment.created_on), \"d MMMM, yyyy\")\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n                                    lineNumber: 153,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                                    gutterBottom: true,\n                                    sx: {\n                                        ml: 8\n                                    },\n                                    children: \"        \".concat(comment === null || comment === void 0 ? void 0 : comment.body)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n                                    lineNumber: 157,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n                            lineNumber: 152,\n                            columnNumber: 13\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {\n                        margin: \"normal\",\n                        fullWidth: true,\n                        name: \"comment\",\n                        label: \"Enter your comment\",\n                        type: \"comment\",\n                        id: \"comment\",\n                        onChange: (e)=>setComment(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n                        lineNumber: 183,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        type: \"submit\",\n                        fullWidth: true,\n                        variant: \"contained\",\n                        onClick: handleSubmit,\n                        sx: {\n                            mt: 3,\n                            mb: 2,\n                            borderRadius: \"16px\"\n                        },\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n                        lineNumber: 193,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n                lineNumber: 143,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ecesarkin/Documents/courses/22-23_fall/451/bounswe2022group1/frontend/components/resource/subpages/Main.js\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"Od5xe9jB42wENw7fQmQPAF9Cgfo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Jlc291cmNlL3N1YnBhZ2VzL01haW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtQztBQUNpRTtBQUNsRTtBQUMwQjtBQUNJO0FBQ2pDO0FBQzZCO0FBQ2xDO0FBQ2M7QUFDRTtBQUNXO0FBQ0c7QUFHekMsU0FBU3NCLE9BQU87O0lBQzNCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUMxQixNQUFNLEVBQUVJLEdBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzNCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzdDLE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDLElBQUk7SUFDN0MsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHbkIsK0NBQVFBLENBQUM7SUFLdkMsTUFBTW9CLGVBQWUsQ0FBQ0MsUUFBVTtRQUM5QkYsV0FBV0UsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQy9CO0lBRUEsTUFBTUMsZUFBZUMsQ0FBQUEsSUFBSztRQUN4QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNLEVBQUVkLEdBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO1FBQzNCLElBQUksQ0FBQ0QsSUFBSTtRQUNUTCxrREFDTyxDQUNGLDRDQUNEO1lBQ0VxQixTQUFTaEI7WUFDVGlCLE1BQU1YO1FBQ1IsR0FDQTtZQUNFWSxTQUFTO2dCQUNQQyxlQUFlLFNBQXVDLE9BQTlCQyxhQUFhQyxPQUFPLENBQUM7WUFDL0M7UUFDRixHQUVEQyxJQUFJLENBQUMsU0FBVUMsUUFBUSxFQUFFO1lBQ3hCQyxRQUFRQyxHQUFHLENBQUMsV0FBV0Y7UUFDM0IsR0FDR0csS0FBSyxDQUFDLENBQUNDLFFBQVU7WUFDaEJILFFBQVFDLEdBQUcsQ0FBQ0U7UUFDZDtJQUNKO0lBRUFILFFBQVFDLEdBQUcsQ0FBQ3JCO0lBR1pmLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNLEVB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Uzs7Ozs7O29CQU1sRHRELFlBQ0NBLFNBQVMwRCxHQUFHLENBQUMsQ0FBQ3hEO3NDQUNaLHFFQUFDdkIsK0NBQUlBOzRCQUFDZ0YsSUFBSztnQ0FBQ0MsR0FBRztnQ0FBS0MsY0FBYztnQ0FBUUMsR0FBRTs0QkFBQzs7OENBQ3pDLDhEQUFDekYscURBQVVBO29DQUFDMEYsWUFBWTtvQ0FBQ0MsT0FBTzs7d0NBQzNCOUQsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTK0QsS0FBSyxDQUFDQyxRQUFRO3dDQUFDO3dDQUFJckYsZ0RBQU1BLENBQUMsSUFBSXNGLEtBQUtqRSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNrRSxVQUFVLEdBQUc7Ozs7Ozs7OENBR3ZFLDhEQUFDL0YscURBQVVBO29DQUFDMEYsWUFBWTtvQ0FBQ0osSUFBSzt3Q0FBQ1UsSUFBSTtvQ0FBQzs4Q0FDbkMsV0FBeUIsT0FBZG5FLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU1csSUFBSTs7Ozs7Ozs7Ozs7OztrQ0F5QnpDLDhEQUFDakMsb0RBQVNBO3dCQUNFMEYsUUFBTzt3QkFDUEMsU0FBUzt3QkFDVGhCLE1BQUs7d0JBQ0xpQixPQUFNO3dCQUNOQyxNQUFLO3dCQUNMN0UsSUFBRzt3QkFDSDhFLFVBQVUsQ0FBQ2pFLElBQU1OLFdBQVdNLEVBQUVILE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7O2tDQUc1Qyw4REFBQzdCLGlEQUFNQTt3QkFDTCtGLE1BQUs7d0JBQ0xGLFNBQVM7d0JBQ1RsQixTQUFRO3dCQUNSc0IsU0FBU25FO3dCQUNUbUQsSUFBSTs0QkFBRWlCLElBQUk7NEJBQUd4QixJQUFJOzRCQUFHUyxjQUFjO3dCQUFPO2tDQUMxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1gsQ0FBQztHQS9MdUJuRTs7UUFDTEYsa0RBQVNBOzs7S0FESkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNvdXJjZS9zdWJwYWdlcy9NYWluLmpzPzg2N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQ29udGFpbmVyLCBCb3gsIERpdmlkZXIsIFBhcGVyLCBCdXR0b24sIENhcmQsIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHRzL0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSwgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5pbXBvcnQgXCJAcmVjb2dpdG8vcmVjb2dpdG8tanMvZGlzdC9yZWNvZ2l0by5taW4uY3NzXCI7XG5pbXBvcnQgXCJAcmVjb2dpdG8vYW5ub3RvcmlvdXMvZGlzdC9hbm5vdG9yaW91cy5taW4uY3NzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbcmVzb3VyY2UsIHNldFJlc291cmNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG5cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRDb21tZW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBpZiAoIWlkKSByZXR1cm47XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFxuICAgICAgICBgaHR0cDovLzMuODkuMjE4LjI1Mzo4MDAwL2FwcC9kaXNjdXNzaW9uL2AsXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiBpZCxcbiAgICAgICAgICBib2R5OiBjb21tZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKX1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzcycsIHJlc3BvbnNlKTtcbiAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhjb21tZW50cyk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBpZiAoIWlkKSByZXR1cm47XG5cbiAgICBjb25zdCBnZXRSZXNvdXJjZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGJhc2VVUkwgPSBgaHR0cDovLzMuODkuMjE4LjI1Mzo4MDAwL2FwcC9jb250ZW50Lz9pZD0ke2lkfWA7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYmFzZVVSTCwge1xuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGB0b2tlbiAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIil9YCB9LFxuICAgICAgfSk7XG4gICAgICBzZXRSZXNvdXJjZShyZXMuZGF0YSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGJhc2VVUkwgPSBgaHR0cDovLzMuODkuMjE4LjI1Mzo4MDAwL2FwcC9kaXNjdXNzaW9uLWxpc3QvP2NvbnRlbnRfaWQ9JHtpZH1gO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGJhc2VVUkwsIHtcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpfWAgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0Q29tbWVudHMocmVzLmRhdGEuZGF0YSk7XG4gICAgfTtcbiAgICBnZXRSZXNvdXJjZSgpO1xuICAgIGdldENvbW1lbnRzKCk7XG4gIH0sIFtyb3V0ZXJdKTtcblxuICBjb25zdCBwYXJhRWwgPSB1c2VSZWYoKTtcbiAgIGNvbnN0IGltZ0VsID0gdXNlUmVmKCk7XG5cbiAgIGNvbnN0IFtyZWNvLCBzZXRSZWNvXSA9IHVzZVN0YXRlKCk7XG4gICBjb25zdCBbYW5ubywgc2V0QW5ub10gPSB1c2VTdGF0ZSgpO1xuXG4gICBjb25zdCBbY2FsbGVkLCBzZXRDYWxsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAvLyBDdXJyZW50IGRyYXdpbmcgdG9vbCBuYW1lXG4gICBjb25zdCBbdG9vbCwgc2V0VG9vbF0gPSB1c2VTdGF0ZShcInJlY3RcIik7XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIGlmIChjYWxsZWQpIHJldHVybjtcbiAgICAgc2V0Q2FsbGVkKHRydWUpO1xuICAgICBpbXBvcnQoXCJAcmVjb2dpdG8vcmVjb2dpdG8tanNcIikudGhlbigobW9kKSA9PiB7XG4gICAgICAgY29uc3QgUmVjb2dpdG8gPSBtb2QuUmVjb2dpdG87XG5cbiAgICAgICBjb25zdCByID0gbmV3IFJlY29naXRvKHsgY29udGVudDogcGFyYUVsLmN1cnJlbnQgfSk7XG5cbiAgICAgICByLnNldEF1dGhJbmZvKHtcbiAgICAgICAgIGlkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICAgZGlzcGxheU5hbWU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSxcbiAgICAgICB9KTtcblxuICAgICAgIHIub24oXCJjcmVhdGVBbm5vdGF0aW9uXCIsIChhbm5vdGF0aW9uKSA9PiB7XG4gICAgICAgICBjb25zb2xlLmxvZyhhbm5vdGF0aW9uKTtcbiAgICAgICB9KTtcblxuICAgICAgIHNldFJlY28ocik7XG4gICAgIH0pO1xuXG4gICAgIGltcG9ydChcIkByZWNvZ2l0by9hbm5vdG9yaW91c1wiKS50aGVuKChtb2QpID0+IHtcbiAgICAgICBjb25zdCBBbm5vdG9yaW91cyA9IG1vZC5Bbm5vdG9yaW91cztcblxuICAgICAgIGNvbnNvbGUubG9nKG1vZCk7XG4gICAgICAgY29uc3QgYSA9IG5ldyBBbm5vdG9yaW91cyh7IGltYWdlOiBpbWdFbC5jdXJyZW50IH0pO1xuXG4gICAgICAgYS5zZXRBdXRoSW5mbyh7XG4gICAgICAgIGlkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICBkaXNwbGF5TmFtZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpLFxuICAgICAgIH0pO1xuICAgICB9KTtcbiAgIH0sIFtdKTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxCb3g+XG4gICAgICAgXG4gICAgICA8VHlwb2dyYXBoeSBtYj17Mn0gdmFyaWFudD1cImg0XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIHtgJHtyZXNvdXJjZT8ubmFtZX1gfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICA8VHlwb2dyYXBoeVxuXG4gICAgICAgIG1iPXsyfVxuICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICByZWY9e3BhcmFFbCwgaW1nRWx9XG4gICAgICA+ezxSZWFjdE1hcmtkb3duPntyZXNvdXJjZT8udGV4dH08L1JlYWN0TWFya2Rvd24+fTwvVHlwb2dyYXBoeT5cblxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgXG4gICAgPC9Cb3g+XG4gICAgPEJveD5cbiAgICAgICAgPFR5cG9ncmFwaHkgbWI9ezJ9IHZhcmlhbnQ9XCJoNlwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICBEaXNjdXNzaW9uXG4gICAgICA8L1R5cG9ncmFwaHk+XG5cblxuXG4gICAgICAgIHtjb21tZW50cyAmJlxuICAgICAgICAgIGNvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxuICAgICAgICAgICAgPENhcmQgc3ggPXt7cDogMS41LCBib3JkZXJSYWRpdXM6ICcxNnB4JywgbToxfX0gPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSBjb2xvcj0gJ3RleHQuc2Vjb25kYXJ5Jz5cbiAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQ/Lm93bmVyLnVzZXJuYW1lfSB8IHtmb3JtYXQobmV3IERhdGUoY29tbWVudD8uY3JlYXRlZF9vbiksIFwiZCBNTU1NLCB5eXl5XCIpfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSBzeCA9e3ttbDogOH19PlxuICAgICAgICAgICAgICAgIHtgICAgICAgICAke2NvbW1lbnQ/LmJvZHl9YH1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIHsvKiA8Zm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBjb21tZW50LlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPiAqL31cblxuPFRleHRGaWVsZFxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbnRlciB5b3VyIGNvbW1lbnRcIlxuICAgICAgICAgICAgdHlwZT1cImNvbW1lbnRcIlxuICAgICAgICAgICAgaWQ9XCJjb21tZW50XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIHN4PXt7IG10OiAzLCBtYjogMiwgYm9yZGVyUmFkaXVzOiBcIjE2cHhcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlR5cG9ncmFwaHkiLCJDb250YWluZXIiLCJCb3giLCJEaXZpZGVyIiwiUGFwZXIiLCJCdXR0b24iLCJDYXJkIiwiVGV4dEZpZWxkIiwiZm9ybWF0IiwiQXV0aENvbnRleHQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VSZWYiLCJSb3V0ZXMiLCJSb3V0ZSIsInVzZVBhcmFtcyIsImF4aW9zIiwidXNlUm91dGVyIiwiUmVhY3RNYXJrZG93biIsIk1haW4iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicmVzb3VyY2UiLCJzZXRSZXNvdXJjZSIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiY29udGVudCIsImJvZHkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImdldFJlc291cmNlIiwiYmFzZVVSTCIsInJlcyIsImdldCIsImRhdGEiLCJnZXRDb21tZW50cyIsInBhcmFFbCIsImltZ0VsIiwicmVjbyIsInNldFJlY28iLCJhbm5vIiwic2V0QW5ubyIsImNhbGxlZCIsInNldENhbGxlZCIsInRvb2wiLCJzZXRUb29sIiwibW9kIiwiUmVjb2dpdG8iLCJyIiwiY3VycmVudCIsInNldEF1dGhJbmZvIiwiZGlzcGxheU5hbWUiLCJvbiIsImFubm90YXRpb24iLCJBbm5vdG9yaW91cyIsImEiLCJpbWFnZSIsImRpdiIsIm1iIiwidmFyaWFudCIsInRleHRBbGlnbiIsIm5hbWUiLCJyZWYiLCJ0ZXh0IiwibWFwIiwic3giLCJwIiwiYm9yZGVyUmFkaXVzIiwibSIsImd1dHRlckJvdHRvbSIsImNvbG9yIiwib3duZXIiLCJ1c2VybmFtZSIsIkRhdGUiLCJjcmVhdGVkX29uIiwibWwiLCJtYXJnaW4iLCJmdWxsV2lkdGgiLCJsYWJlbCIsInR5cGUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/resource/subpages/Main.js\n"));

/***/ })

});