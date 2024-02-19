'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function Welcome() {
  const searchParams = useSearchParams()

  const user_id = searchParams.get('user_id') || '0'
  const email_code = searchParams.get('email_code') || '0'


  return (
    <>
      <table role="presentation" border={0} cellPadding={0} cellSpacing="0" className="body" style={{
        "borderCollapse": "separate",
        "width": "100%",
        "backgroundColor": "#f4f5f6"
      }} width="100%" bgcolor="#f4f5f6">
        <tr>
          <td style={{
            "fontFamily": "Helvetica, sans-serif",
            "fontSize": "16px",
            "verticalAlign": "top"
          }} valign="top">&nbsp;</td>
          <td className="container" style={{
            "fontFamily": "Helvetica, sans-serif",
            "fontSize": "16px",
            "verticalAlign": "top",
            "display": "block",
            "maxWidth": "600px",
            "margin": "0 auto",
            "clear": "both",
            "padding": "0px",
            "paddingTop": "24px"
          }} width={600} valign="top">
            <div className="content" style={{
              "boxSizing": "border-box",
              "display": "block",
              "margin": "0 auto",
              "maxWidth": "600px",
              "padding": "0"
            }}>
              <span className="preheader" style={{
                "color": "transparent",
                "display": "none",
                "height": "0",
                "maxHeight": "0",
                "maxWidth": "0",
                "opacity": "0",
                "overflow": "hidden",
                "visibility": "hidden",
                "width": "0"
              }}>Bienvenido a Surcoteca, por favor confirma tu email.</span>
              <table role="presentation" border={0} cellPadding="0" cellSpacing="0" className="main"
                style={{
                  "borderCollapse": "separate",
                  "width": "100%",
                  "backgroundColor": "#ffffff",
                  "border": "1px solid #eaebed",
                  "borderRadius": "16px"
                }} width="100%">
                <tr>
                  <td className="wrapper"
                    style={{
                      "fontFamily": "Helvetica, sans-serif",
                      "fontSize": "16px",
                      "verticalAlign": "top",
                      "boxSizing": "border-box",
                      "padding": "24px"
                    }} valign="top">
                    <img src={"https://placehold.co/550x100"} alt="Surcoteca"></img>
                    <p style={{
                      "fontFamily": "Helvetica, sans-serif",
                      "fontSize": "16px",
                      "fontWeight": "normal",
                      "margin": "0",
                      "marginBottom": "16px",
                      "paddingTop": "24px",
                      "color": "#9a9ea6"
                    }}>Bienvenid@!</p>
                    <p style={{
                      "fontFamily": "Helvetica, sans-serif",
                      "fontSize": "16px",
                      "fontWeight": "normal",
                      "margin": "0",
                      "marginBottom": "16px",
                      "color": "#9a9ea6"
                    }}>¡Gracias por unirte a la familia de amantes de la música en vinilo! Para completar tu registro, por favor, haz clic en el botón de abajo para verificar tu dirección de correo electrónico.</p>
                    <table role="presentation" border={0} cellPadding="0" cellSpacing="0" className="btn btn-primary"
                      style={{
                        "borderCollapse": "separate",
                        "boxSizing": "border-box",
                        "width": "100%",
                        "minWidth": "100%"
                      }} width="100%">
                      <tbody>
                        <tr>
                          <td align="left" style={{
                            "fontFamily": "Helvetica, sans-serif",
                            "fontSize": "16px",
                            "verticalAlign": "top",
                            "paddingBottom": "16px"
                          }} valign="top">
                            <table role="presentation" border={0} cellPadding="0" cellSpacing="0"
                              style={{
                                "borderCollapse": "separate",
                                "width": "auto"
                              }}>
                              <tbody>
                                <tr>
                                  <td style={{
                                    "fontFamily": "Helvetica, sans-serif",
                                    "fontSize": "16px",
                                    "verticalAlign": "top",
                                    "borderRadius": "4px",
                                    "textAlign": "center",
                                    "backgroundColor": "#0867ec"
                                  }} valign="top" align="center">
                                    <a href={`https://surcoteca.cl/user/${user_id}/checkEmail/${email_code}`} target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        "border": "solid 2px #0867ec",
                                        "borderRadius": "4px",
                                        "boxSizing": "border-box",
                                        "cursor": "pointer",
                                        "display": "inline-block",
                                        "fontSize": "16px",
                                        "fontWeight": "bold",
                                        "margin": "0",
                                        "padding": "12px 24px",
                                        "textDecoration": "none",
                                        "textTransform": "capitalize",
                                        "backgroundColor": "#0867ec",
                                        "borderColor": "#0867ec",
                                        "color": "#ffffff"
                                      }}>Comprobar email</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p style={{
                      "fontFamily": "Helvetica, sans-serif",
                      "fontSize": "16px",
                      "fontWeight": "normal",
                      "margin": "0",
                      "marginBottom": "16px",
                      "color": "#9a9ea6"
                    }}>Al unirte a Surcoteca, tendrás acceso a una amplia selección de vinilos de alta calidad, desde clásicos atemporales hasta lanzamientos exclusivos. Además, te mantendremos al tanto de nuestras promociones especiales y de los nuevos títulos que llegan regularmente a nuestra tienda.</p>
                    <p style={{
                      "fontFamily": "Helvetica, sans-serif",
                      "fontSize": "16px",
                      "fontWeight": "normal",
                      "margin": "0",
                      "marginBottom": "16px",
                      "color": "#9a9ea6"
                    }}>No te pierdas la oportunidad de explorar nuestra tienda en línea y descubrir todo lo que tenemos para ofrecerte. ¡Visítanos hoy mismo y encuentra tu próxima joya musical en vinilo!</p>
                    <p style={{
                      "fontFamily": "Helvetica, sans-serif",
                      "fontSize": "16px",

                      "fontWeight": "normal",
                      "margin": "0",
                      "marginBottom": "16px",
                      "color": "#9a9ea6"

                    }}>Gracias por elegirnos.</p>

                  </td>
                </tr>
              </table>


              <div className="footer" style={{
                "clear": "both",
                "paddingTop": "24px",
                "textAlign": "center",
                "width": "100%"
              }}>
                <table role="presentation" border={0} cellPadding="0" cellSpacing="0" style={{
                  borderCollapse: "separate",
                  width: "100%"
                }} width="100%">
                  <tr>
                    <td className="content-block" style={{
                      "fontFamily": "Helvetica, sans-serif",
                      "verticalAlign": "top",
                      "color": "#9a9ea6",
                      "fontSize": "16px",
                      "textAlign": "center"
                    }} valign="top" align="center">
                      <span className="apple-link" style={{
                        "color": "#9a9ea6",
                        "fontSize": "16px",
                        "textAlign": "center"
                      }}>No contamos con tienda fisica, estamos 24/7 en <a href="">www.surcoteca.cl</a></span>
                      <br></br>
                      <span>No te gusta nuestros emails? 😟</span>
                      <a href="https://surcoteca.cl/user/${user_id}/unsub"
                        style={{
                          "textDecoration": "underline",
                          "color": "#9a9ea6",
                          "fontSize": "16px",
                          "textAlign": "center"
                        }}>Desuscribete de ellos</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-block powered-by"
                      style={{
                        "fontFamily": "Helvetica, sans-serif",
                        "verticalAlign": "top",
                        "color": "#9a9ea6",
                        "fontSize": "16px",
                        "textAlign": "center"
                      }} valign="top" align="center">
                      <a href="http://surcoteca.cl" style={{
                        "color": "#9a9ea6",
                        "fontSize": "16px",
                        "textAlign": "center",
                        "textDecoration": "none"
                      }}>Surcoteca</a>.

                    </td>
                  </tr>
                </table>
              </div>



            </div>
          </td>
          <td style={{
            fontFamily: "Helvetica, sans-serif",
            fontSize: "16px",
            verticalAlign: "top"
          }} valign="top">&nbsp;</td>
        </tr>
      </table>
    </>
  );
}
