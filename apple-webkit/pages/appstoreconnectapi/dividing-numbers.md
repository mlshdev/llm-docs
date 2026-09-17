> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/dividing-numbers

# Dividing numbers

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Article

Return the result of dividing one number into another.

<a id="overview"></a>

## Overview

Use the `div()` function in the expression of a matchmaking rule to divide two numbers.

<a id="Declaration"></a>

### Declaration

```other
number div(number $dividend, number $divisor)
```

<a id="Parameters"></a>

### Parameters

-`dividend`: The number that the function divides. -`divisor`: The number that the function divides into `dividend`.

<a id="Return-value"></a>

### Return value

The result or quotient of dividing `divisor` into `dividend`. If `divisor` is `zero`, `null`.

## See Also

### Numeric functions

- [Subtracting numbers](subtracting-numbers.md): Return the result of subtracting two numbers.
