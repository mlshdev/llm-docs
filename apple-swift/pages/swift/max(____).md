> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/max(_:_:)](https://developer.apple.com/documentation/swift/max(_:_:))

# max(\_:\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the greater of two comparable values.

## Declaration

```swift
func max<T>(_ x: T, _ y: T) -> T where T : Comparable
```

## Parameters

- `x`: A value to compare.
- `y`: Another value to compare.

<a id="return-value"></a>

## Return Value

The greater of `x` and `y`. If `x` is equal to `y`, returns `y`.

## See Also

### Choosing the Smallest and Largest Value

- [min(\_:\_:)](min%28____%29.md): Returns the lesser of two comparable values.
- [min(\_:\_:\_:\_:)](min%28________%29.md): Returns the least argument passed.
- [max(\_:\_:\_:\_:)](max%28________%29.md): Returns the greatest argument passed.
