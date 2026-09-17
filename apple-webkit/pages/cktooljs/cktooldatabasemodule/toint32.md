> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/cktooldatabasemodule/toint32

# toInt32

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Type Method  
**Availability:** CKTool JS 1.2.15+

Converts a number to an `Int32`.

## Declaration

```
static Int32 toInt32();
```

## Parameters

- `value`: A number to convert or validate.

<a id="return-value"></a>

## Return Value

If the value passes validation, this function returns an `Int32`; otherwise it throws `ValueNotInt32Error`. A numeric value passes validation if it’s within signed 32-bit integer range.

<a id="Discussion"></a>

## Discussion

In TypeScript, `Int32` is a branded number type. In JavaScript, it’s a number.

```javascript
import { toInt32 } from "@apple/cktool.database";
```
