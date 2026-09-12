> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplerestapi/get-a-sign-in-with-apple-button-that-contains-just-the-apple-logo.](https://developer.apple.com/documentation/signinwithapplerestapi/get-a-sign-in-with-apple-button-that-contains-just-the-apple-logo.)

# Get a Sign in with Apple button that contains just the Apple logo.

**Interface language:** Data

**Framework:** Sign in with Apple REST API  
**Kind:** Web Service Endpoint

Generate a Sign in with Apple button image containing just the Apple logo.

## URL

```http
GET https://appleid.cdn-apple.com/appleid/button/logo
```

## Query Parameters

- `border` — `boolean`: A Boolean value that determines whether the button image has a border.
  **Default:** `false`
- `border_radius` — `int32`: The corner radius for the button image in points.
  **Default:** `15`  
  **Minimum:** `0`  
  **Maximum:** `50`
- `color` — `string`: The background color for the button image. The possible values are `white` and `black`.
  **Default:** `black`
- `scale` — `int32`: The scale of the button image.
  **Default:** `1`  
  **Minimum:** `1`  
  **Maximum:** `6`
- `size` — `int32`: The size, in points, of the Apple logo. This sets both the width and the height of the logo since the button is square.
  **Default:** `30`  
  **Minimum:** `30`  
  **Maximum:** `64`

## Response Codes

- `200` OK — `binary`: Request succeeded.
- `404` Not Found: Resource not found.

## Mentioned In

- [Incorporating Sign in with Apple into other platforms](https://developer.apple.com/documentation/signinwithapple/incorporating-sign-in-with-apple-into-other-platforms)

<a id="Discussion"></a>

### Discussion

Use this file to customize and embed your button of choice in your application or service. You can also test and preview custom buttons at [Sign in with Apple Button](https://appleid.apple.com/signinwithapple/button). For more information, see [Incorporating Sign in with Apple into other platforms](https://developer.apple.com/documentation/signinwithapple/incorporating-sign-in-with-apple-into-other-platforms).

## See Also

### Sign in with Apple buttons

- [Get a Sign in with Apple button that is center-aligned.](get-a-sign-in-with-apple-button-that-is-center-aligned_.md): Generate a Sign in with Apple button with center-aligned text.
- [Get a Sign in with Apple button that is left-aligned.](get-a-sign-in-with-apple-button-that-is-left-aligned_.md): Generate a Sign in with Apple button with left-aligned text.
