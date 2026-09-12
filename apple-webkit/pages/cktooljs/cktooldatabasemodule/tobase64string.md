> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cktooldatabasemodule/tobase64string](https://developer.apple.com/documentation/cktooljs/cktooldatabasemodule/tobase64string)

# toBase64String

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Type Method  
**Availability:** CKTool JS 1.2.15+

Converts a regular string to a `Base64String`.

## Declaration

```
static Base64String toBase64String();
```

## Parameters

- `value`: A string value to convert or validate.

<a id="return-value"></a>

## Return Value

If the value passes validation, this function returns a `Base64String`; otherwise it throws `ValueNotBase64StringError`. A string passes validation if it is a base 64 string.

<a id="Discussion"></a>

## Discussion

In TypeScript, `Base64String` is a branded string type. In JavaScript, it’s a string.

```javascript
import { toBase64String } from "@apple/cktool.database";
```
