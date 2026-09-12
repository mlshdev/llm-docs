> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cktooldatabasemodule/touuid](https://developer.apple.com/documentation/cktooljs/cktooldatabasemodule/touuid)

# toUuid

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Type Method  
**Availability:** CKTool JS 1.2.15+

Converts a string to a `Uuid`.

## Declaration

```
static Uuid toUuid();
```

## Parameters

- `value`: A string to convert or validate.

<a id="return-value"></a>

## Return Value

If the value passes validation, this function returns a `Uuid`; otherwise it throws `ValueNotUuidError`. A string passes validation if it is a UUID string.

<a id="Discussion"></a>

## Discussion

In TypeScript, `Uuid` is a branded string type. In JavaScript, it’s a string.

```javascript
import { toUuid } from "@apple/cktool.database";
```
