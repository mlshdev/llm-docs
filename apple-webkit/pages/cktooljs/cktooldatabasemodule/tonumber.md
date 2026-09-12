> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cktooldatabasemodule/tonumber](https://developer.apple.com/documentation/cktooljs/cktooldatabasemodule/tonumber)

# toNumber

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Type Method  
**Availability:** CKTool JS 1.2.15+

Converts a supported numeric type to a JavaScript number.

## Declaration

```
static number toNumber();
```

## Parameters

- `value`: A numeric value to convert or validate.

<a id="Discussion"></a>

## Discussion

If the value passed in isn’t a number, this function throws `ValueNotNumericError`. If the value is numeric but can’t be represented by a JavaScript number, it throws `ValueNotInNumberRangeError`.

```javascript
import { toNumber } from "@apple/cktool.database";
```
