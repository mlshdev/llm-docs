> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/min(_:_:)](https://developer.apple.com/documentation/swift/min(_:_:))

# min(\_:\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the lesser of two comparable values.

## Declaration

```swift
func min<T>(_ x: T, _ y: T) -> T where T : Comparable
```

## Parameters

- `x`: A value to compare.
- `y`: Another value to compare.

<a id="return-value"></a>

## Return Value

The lesser of `x` and `y`. If `x` is equal to `y`, returns `x`.

## See Also

### Choosing the Smallest and Largest Value

- [min(\_:\_:\_:\_:)](min%28________%29.md): Returns the least argument passed.
- [max(\_:\_:)](max%28____%29.md): Returns the greater of two comparable values.
- [max(\_:\_:\_:\_:)](max%28________%29.md): Returns the greatest argument passed.
