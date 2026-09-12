> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/valuelessthanminnumbererror](https://developer.apple.com/documentation/cktooljs/valuelessthanminnumbererror)

# ValueLessThanMinNumberError

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Class  
**Availability:** CKTool JS 1.2.15+

An error a validator emits when a given value is less than the allowed minimum.

## Declaration

```
interface ValueLessThanMinNumberError
```

<a id="overview"></a>

## Overview

Extends `ValueRangeError`.

## Topics

### Instance Properties

- [minimum](valuelessthanminnumbererror/minimum.md): The minimum value (inclusive) for the tested length property.

## Relationships

### Inherited By

- [ValueRangeError](valuerangeerror.md)

## See Also

### Value Range Errors

- [ValueRangeError](valuerangeerror.md): The base class of range-related validation errors.
- [ValueGreaterThanMaxNumberError](valuegreaterthanmaxnumbererror.md): An error a validator emits when a given value is greater than the allowed maximum.
- [ValueNotInNumberRangeError](valuenotinnumberrangeerror.md): An error a validator emits when a value can’t be represented by a JavaScript number due to being outside of the representable range.
