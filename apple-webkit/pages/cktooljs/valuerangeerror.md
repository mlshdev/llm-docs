> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/valuerangeerror](https://developer.apple.com/documentation/cktooljs/valuerangeerror)

# ValueRangeError

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Class  
**Availability:** CKTool JS 1.2.15+

The base class of range-related validation errors.

## Declaration

```
interface ValueRangeError
```

<a id="overview"></a>

## Overview

Extends `ValidationError`.

## Topics

### Instance Properties

- [value](valuerangeerror/value.md): The value that failed validation.

## Relationships

### Inherits From

- [ValueGreaterThanMaxNumberError](valuegreaterthanmaxnumbererror.md)
- [ValueLessThanMinNumberError](valuelessthanminnumbererror.md)
- [ValueNotInNumberRangeError](valuenotinnumberrangeerror.md)

### Inherited By

- [ValidationError](validationerror.md)

## See Also

### Value Range Errors

- [ValueGreaterThanMaxNumberError](valuegreaterthanmaxnumbererror.md): An error a validator emits when a given value is greater than the allowed maximum.
- [ValueLessThanMinNumberError](valuelessthanminnumbererror.md): An error a validator emits when a given value is less than the allowed minimum.
- [ValueNotInNumberRangeError](valuenotinnumberrangeerror.md): An error a validator emits when a value can’t be represented by a JavaScript number due to being outside of the representable range.
