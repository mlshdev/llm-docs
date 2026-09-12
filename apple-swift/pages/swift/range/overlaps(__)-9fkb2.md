> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/range/overlaps(_:)-9fkb2](https://developer.apple.com/documentation/swift/range/overlaps(_:)-9fkb2)

# overlaps(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether this range and the given closed range contain an element in common.

## Declaration

```swift
func overlaps(_ other: ClosedRange<Bound>) -> Bool
```

## Parameters

- `other`: A closed range to check for elements in common.

<a id="return-value"></a>

## Return Value

`true` if this range and `other` have at least one element in common; otherwise, `false`.

<a id="discussion"></a>

## Discussion

This example shows two overlapping ranges:

```swift
let x: Range = 0..<20
print(x.overlaps(10...1000))
// Prints "true"
```

Because a half-open range does not include its upper bound, the ranges in the following example do not overlap:

```swift
let y = 20...30
print(x.overlaps(y))
// Prints "false"
```

## See Also

### Comparing Ranges

- [==(\_:\_:)](==%28____%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value indicating whether two ranges are equal.
- [!=(\_:\_:)](!=%28____%29.md): Returns a Boolean value indicating whether two values are not equal.
- [overlaps(\_:)](overlaps%28__%29-7osha.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value indicating whether this range and the given range contain an element in common.
