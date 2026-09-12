> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/==(_:_:)-2htbb](https://developer.apple.com/documentation/swift/==(_:_:)-2htbb)

# ==(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the corresponding components of two tuples are equal.

## Declaration

```swift
func == <A, B>(lhs: (A, B), rhs: (A, B)) -> Bool where A : Equatable, B : Equatable
```

## Parameters

- `lhs`: A tuple of `Equatable` elements.
- `rhs`: Another tuple of elements of the same type as `lhs`.

<a id="discussion"></a>

## Discussion

For two tuples to compare as equal, each corresponding pair of components must be equal. The following example compares tuples made up of 2 components:

```swift
let a = ("a", 1)
let b = ("a", 1)
print(a == b)
// Prints "true"

let c = ("a", 2)
print(a == c)
// Prints "false"
```

## See Also

### Tuple Comparison

- [==(\_:\_:)](==%28____%29-958in.md): Returns a Boolean value indicating whether the corresponding components of two tuples are equal.
- [==(\_:\_:)](==%28____%29-h88g.md): Returns a Boolean value indicating whether the corresponding components of two tuples are equal.
- [==(\_:\_:)](==%28____%29-7lhq7.md): Returns a Boolean value indicating whether the corresponding components of two tuples are equal.
- [==(\_:\_:)](==%28____%29-1hbor.md): Returns a Boolean value indicating whether the corresponding components of two tuples are equal.
- [==(\_:\_:)](==%28____%29-1ud2a.md): Returns a Boolean value indicating whether the corresponding components of two tuples are equal.
- [==(\_:\_:)](==%28____%29-9kf9y.md): Returns a Boolean value indicating whether two types are identical.
- [!=(\_:\_:)](!=%28____%29-18co7.md): Returns a Boolean value indicating whether any corresponding components of the two tuples are not equal.
- [!=(\_:\_:)](!=%28____%29-7er1l.md): Returns a Boolean value indicating whether any corresponding components of the two tuples are not equal.
- [!=(\_:\_:)](!=%28____%29-754t2.md): Returns a Boolean value indicating whether any corresponding components of the two tuples are not equal.
- [!=(\_:\_:)](!=%28____%29-7ao4l.md): Returns a Boolean value indicating whether any corresponding components of the two tuples are not equal.
- [!=(\_:\_:)](!=%28____%29-4fzl6.md): Returns a Boolean value indicating whether any corresponding components of the two tuples are not equal.
- [!=(\_:\_:)](!=%28____%29-3nrcc.md): Returns a Boolean value indicating whether any corresponding components of the two tuples are not equal.
- [!=(\_:\_:)](!=%28____%29-1mxms.md): Returns a Boolean value indicating whether two types are not identical.
