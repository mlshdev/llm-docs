> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subtracting-numbers](https://developer.apple.com/documentation/appstoreconnectapi/subtracting-numbers)

# Subtracting numbers

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Article

Return the result of subtracting two numbers.

<a id="overview"></a>

## Overview

Use the `sub()` function in the expression of a matchmaking rule to subtract two numbers.

<a id="Declaration"></a>

### Declaration

```other
number sub(number $minuend, number $subtrahend)
```

<a id="Parameters"></a>

### Parameters

-`minuend`: The left side of the subtraction equation. -`subtrahend`: The right side of the subtraction equation.

<a id="Return-value"></a>

### Return value

The result of subtracting `subtrahend` from `minuend`. If either parameter isn’t a number, `null`.

## See Also

### Numeric functions

- [Dividing numbers](dividing-numbers.md): Return the result of dividing one number into another.
