> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/_(_:_:)-8mgtp](https://developer.apple.com/documentation/swift/_(_:_:)-8mgtp)

# \<(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the first tuple is ordered before the second in a lexicographical ordering.

## Declaration

```swift
func < <A, B, C, D, E, F>(lhs: (A, B, C, D, E, F), rhs: (A, B, C, D, E, F)) -> Bool where A : Comparable, B : Comparable, C : Comparable, D : Comparable, E : Comparable, F : Comparable
```

## Parameters

- `lhs`: A tuple of `Comparable` elements.
- `rhs`: Another tuple of elements of the same type as `lhs`.

<a id="discussion"></a>

## Discussion

Given two tuples `(a1, a2, ..., aN)` and `(b1, b2, ..., bN)`, the first tuple is before the second tuple if and only if `a1 < b1` or (`a1 == b1` and `(a2, ..., aN) < (b2, ..., bN)`).

## See Also

### Tuple Comparison

- [\<(\_:\_:)](_%28____%29-1b1cu.md): Returns a Boolean value indicating whether the first tuple is ordered before the second in a lexicographical ordering.
- [\<(\_:\_:)](_%28____%29-4ck5h.md): Returns a Boolean value indicating whether the first tuple is ordered before the second in a lexicographical ordering.
- [\<(\_:\_:)](_%28____%29-23151.md): Returns a Boolean value indicating whether the first tuple is ordered before the second in a lexicographical ordering.
- [\<(\_:\_:)](_%28____%29-6p1tf.md): Returns a Boolean value indicating whether the first tuple is ordered before the second in a lexicographical ordering.
- [\<(\_:\_:)](_%28____%29-3hhjy.md): Returns a Boolean value indicating whether the first tuple is ordered before the second in a lexicographical ordering.
- [\<=(\_:\_:)](_=%28____%29-16p1e.md): Returns a Boolean value indicating whether the first tuple is ordered before or the same as the second in a lexicographical ordering.
- [\<=(\_:\_:)](_=%28____%29-3jpod.md): Returns a Boolean value indicating whether the first tuple is ordered before or the same as the second in a lexicographical ordering.
- [\<=(\_:\_:)](_=%28____%29-8u5uu.md): Returns a Boolean value indicating whether the first tuple is ordered before or the same as the second in a lexicographical ordering.
- [\<=(\_:\_:)](_=%28____%29-6kea2.md): Returns a Boolean value indicating whether the first tuple is ordered before or the same as the second in a lexicographical ordering.
- [\<=(\_:\_:)](_=%28____%29-1hzxz.md): Returns a Boolean value indicating whether the first tuple is ordered before or the same as the second in a lexicographical ordering.
- [\<=(\_:\_:)](_=%28____%29-7n746.md): Returns a Boolean value indicating whether the first tuple is ordered before or the same as the second in a lexicographical ordering.
- [\>(\_:\_:)](_%28____%29-yktb.md): Returns a Boolean value indicating whether the first tuple is ordered after the second in a lexicographical ordering.
- [\>(\_:\_:)](_%28____%29-4xg09.md): Returns a Boolean value indicating whether the first tuple is ordered after the second in a lexicographical ordering.
- [\>(\_:\_:)](_%28____%29-7p512.md): Returns a Boolean value indicating whether the first tuple is ordered after the second in a lexicographical ordering.
- [\>(\_:\_:)](_%28____%29-5gb41.md): Returns a Boolean value indicating whether the first tuple is ordered after the second in a lexicographical ordering.
