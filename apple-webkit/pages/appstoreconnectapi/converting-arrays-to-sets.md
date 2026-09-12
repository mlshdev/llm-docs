> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/converting-arrays-to-sets](https://developer.apple.com/documentation/appstoreconnectapi/converting-arrays-to-sets)

# Converting arrays to sets

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Article

Return the content of a list, with duplicates removed and sorted, so that you can compare it to another set.

<a id="overview"></a>

## Overview

Use the `asSet()` function in the expression of a matchmaking rule to convert arrays to sets. For example, `asSet([ `4`, `3`, `2`, `1`, `4`, `1` ])` returns `[ `1`, `2`, `3`, `4` ]` with the duplicates removed and ordered incrementally, and `asSet([ ‘d’, ‘c’, ‘b’, ‘a’, ‘d’, ‘a’ ])` returns `[ ‘a’, ‘b’, ‘c’, ‘d’ ]` ordered alphabetically.

<a id="Declaration"></a>

### Declaration

```other
array[Any] asSet(array[Any] list)
```

<a id="Parameters"></a>

### Parameters

-`list`: An array to convert to a set.

<a id="Return-value"></a>

### Return value

A set that contains the contents of `list` with the duplicates removed and sorted in an order that’s natural to the contents.

## See Also

### Array functions

- [Computing numeric differences](computing-numeric-differences.md): Return the absolute difference between the maximum and minimum numerical values in an array.
- [Intersecting sets](intersecting-sets.md): Return the intersection of two or more arrays treated as sets.
