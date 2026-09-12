> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/lengthlessthanminerror](https://developer.apple.com/documentation/cktooljs/lengthlessthanminerror)

# LengthLessThanMinError

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Class  
**Availability:** CKTool JS 1.2.15+

An error a validator emits when the length property of the value given is less than the allowed minimum.

## Declaration

```
interface LengthLessThanMinError
```

<a id="overview"></a>

## Overview

Extends `LengthError`.

## Topics

### Instance Properties

- [minimum](lengthlessthanminerror/minimum.md): The minimum value (inclusive) for the tested length property.

## Relationships

### Inherited By

- [LengthError](lengtherror.md)

## See Also

### Length Errors

- [LengthError](lengtherror.md): The base class of length-related validation errors.
- [LengthGreaterThanMaxError](lengthgreaterthanmaxerror.md): An error a validator emits when the length property of the value given is greater than the allowed maximum.
- [LengthNotNumericError](lengthnotnumericerror.md): An error a validator emits when the length property of a value isn’t numeric.
