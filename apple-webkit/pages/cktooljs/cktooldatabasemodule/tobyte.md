> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cktooldatabasemodule/tobyte](https://developer.apple.com/documentation/cktooljs/cktooldatabasemodule/tobyte)

# toByte

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Type Method  
**Availability:** CKTool JS 1.2.15+

Converts a numeric value to a `Byte`.

## Declaration

```
static Byte toByte();
```

## Parameters

- `value`: A numeric value to convert or validate.

<a id="return-value"></a>

## Return Value

If the value passes validation, this function returns a `Byte`; otherwise it throws `ValueNotByteError`. A numeric value passes validation if it’s an integer in the range 0 to 255, inclusive.

<a id="Discussion"></a>

## Discussion

In TypeScript, `Byte` is a branded number type. In JavaScript, it’s a number.

```javascript
import { toByte } from "@apple/cktool.database";
```
