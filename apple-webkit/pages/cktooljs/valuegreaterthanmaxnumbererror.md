> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/valuegreaterthanmaxnumbererror](https://developer.apple.com/documentation/cktooljs/valuegreaterthanmaxnumbererror)

# ValueGreaterThanMaxNumberError

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Class  
**Availability:** CKTool JS 1.2.15+

An error a validator emits when a given value is greater than the allowed maximum.

## Declaration

```
interface ValueGreaterThanMaxNumberError
```

<a id="overview"></a>

## Overview

Extends `ValueRangeError`.

## Topics

### Instance Properties

- [maximum](valuegreaterthanmaxnumbererror/maximum.md): The maximum value (inclusive) for the tested length property.

## Relationships

### Inherited By

- [ValueRangeError](valuerangeerror.md)

## See Also

### Value Range Errors

- [ValueRangeError](valuerangeerror.md): The base class of range-related validation errors.
- [ValueLessThanMinNumberError](valuelessthanminnumbererror.md): An error a validator emits when a given value is less than the allowed minimum.
- [ValueNotInNumberRangeError](valuenotinnumberrangeerror.md): An error a validator emits when a value can’t be represented by a JavaScript number due to being outside of the representable range.
