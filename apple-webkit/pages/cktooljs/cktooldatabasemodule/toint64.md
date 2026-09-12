> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cktooldatabasemodule/toint64](https://developer.apple.com/documentation/cktooljs/cktooldatabasemodule/toint64)

# toInt64

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Type Method  
**Availability:** CKTool JS 1.2.15+

Converts a number or numeric string to a `Int64`.

## Declaration

```
static Int64 toInt64();
```

## Parameters

- `value`: A numeric or numeric string to convert or validate.

<a id="return-value"></a>

## Return Value

If the value passes validation, this function returns a `Int64`; otherwise it throws `ValueNotInt64Error`. A numeric value passes validation if it’s within signed 64-bit integer range. `toInt64` can accept a numeric string that represents a number that requires more precision than can be achieved with a JavaScript number.

<a id="Discussion"></a>

## Discussion

In TypeScript, `Int64` is a branded `BigNumber` type. In JavaScript, it’s a `BigNumber`. `BigNumber` is from the bignumber.js package.

```javascript
import { toInt64 } from "@apple/cktool.database";
```
