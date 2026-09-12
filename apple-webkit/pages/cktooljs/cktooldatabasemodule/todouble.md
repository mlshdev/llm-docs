> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cktooldatabasemodule/todouble](https://developer.apple.com/documentation/cktooljs/cktooldatabasemodule/todouble)

# toDouble

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Type Method  
**Availability:** CKTool JS 1.2.15+

Converts a number or numeric string to a `Double`.

## Declaration

```
static Double toDouble();
```

## Parameters

- `value`: A numeric or numeric string to convert or validate.

<a id="return-value"></a>

## Return Value

If the value passes validation, this function returns a `Double`; otherwise it throws `ValueNotDoubleError`. A value passes validation if it’s a number in the range of a double-precision 64-bit IEEE 754 floating-point value. `toDouble` can also accept a numeric string that represents a number that requires more precision than can be achieved with a JavaScript number.

<a id="Discussion"></a>

## Discussion

In TypeScript, `Double` is a branded `BigNumber` type. In JavaScript, it’s a `BigNumber`. `BigNumber` is from the bignumber.js package.

```javascript
import { toDouble } from "@apple/cktool.database";
```
