> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/!=(_:_:)-8pggn](https://developer.apple.com/documentation/swift/!=(_:_:)-8pggn)

# !=(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the two arguments are not equal.

## Declaration

```swift
func != <T>(lhs: T, rhs: T) -> Bool where T : Equatable, T : RawRepresentable, T.RawValue : Equatable
```

## Parameters

- `lhs`: A raw-representable instance.
- `rhs`: A second raw-representable instance.

## See Also

### Comparing Values

- [==(\_:\_:)](==%28____%29-9hu5c.md): Returns a Boolean value indicating whether the two arguments are equal.
- [!=(\_:\_:)](!=%28____%29-9wy5n.md): Returns a Boolean value indicating whether the two arguments are not equal.
