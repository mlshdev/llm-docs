> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cktooldatabasemodule/tobytearray](https://developer.apple.com/documentation/cktooljs/cktooldatabasemodule/tobytearray)

# toByteArray

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Type Method  
**Availability:** CKTool JS 1.2.15+

Converts a numeric array to a `ByteArray`.

## Declaration

```
static ByteArray toByteArray();
```

## Parameters

- `value`: A numeric array to convert or validate.

<a id="return-value"></a>

## Return Value

If the value passes validation, this function returns a `ByteArray`; otherwise it throws `ValueNotByteArrayError`. A numeric array passes validation if every element of the array is an integer in the range 0 to 255, inclusive.

<a id="Discussion"></a>

## Discussion

In TypeScript, `ByteArray` is a branded `Uint8Array` type. In JavaScript, it’s a `Uint8Array`.

```javascript
import { toByteArray } from "@apple/cktool.database";
```
