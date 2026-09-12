> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/computing-numeric-differences](https://developer.apple.com/documentation/appstoreconnectapi/computing-numeric-differences)

# Computing numeric differences

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Article

Return the absolute difference between the maximum and minimum numerical values in an array.

<a id="overview"></a>

## Overview

Use the `diff()` function in the expression of a matchmaking rule to compute the greatest difference between two or more values. For example, `diff([ `4`, `3`, `2`, `1` ])` returns `3`, and  `diff([ `50`, `19`, `21`, `61` ]` returns `42`.

<a id="Declaration"></a>

### Declaration

```other
number diff(array[number] $values)
```

<a id="Parameters"></a>

### Parameters

-`values`: An array that contains the numeric values to compare.

<a id="Return-value"></a>

### Return value

The absolute difference between the maximum and minimum items in the `values` array.

## See Also

### Array functions

- [Converting arrays to sets](converting-arrays-to-sets.md): Return the content of a list, with duplicates removed and sorted, so that you can compare it to another set.
- [Intersecting sets](intersecting-sets.md): Return the intersection of two or more arrays treated as sets.
