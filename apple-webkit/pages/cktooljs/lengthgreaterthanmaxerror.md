> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/lengthgreaterthanmaxerror](https://developer.apple.com/documentation/cktooljs/lengthgreaterthanmaxerror)

# LengthGreaterThanMaxError

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Class  
**Availability:** CKTool JS 1.2.15+

An error a validator emits when the length property of the value given is greater than the allowed maximum.

## Declaration

```
interface LengthGreaterThanMaxError
```

<a id="overview"></a>

## Overview

Extends `LengthError`.

## Topics

### Instance Properties

- [maximum](lengthgreaterthanmaxerror/maximum.md): The maximum value (inclusive) for the tested length property.

## Relationships

### Inherited By

- [LengthError](lengtherror.md)

## See Also

### Length Errors

- [LengthError](lengtherror.md): The base class of length-related validation errors.
- [LengthLessThanMinError](lengthlessthanminerror.md): An error a validator emits when the length property of the value given is less than the allowed minimum.
- [LengthNotNumericError](lengthnotnumericerror.md): An error a validator emits when the length property of a value isn’t numeric.
