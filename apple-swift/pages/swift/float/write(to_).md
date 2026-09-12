> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/write(to:)](https://developer.apple.com/documentation/swift/float/write(to:))

# write(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes a textual representation of this instance into the given output stream.

## Declaration

```swift
func write<Target>(to target: inout Target) where Target : TextOutputStream
```

## See Also

### Infrequently Used Functionality

- [init()](init%28%29.md)
- [init(integerLiteral:)](init%28integerliteral_%29.md): Creates an instance initialized to the specified integer value.
- [init(floatLiteral:)](init%28floatliteral_%29.md): Creates an instance initialized to the specified floating-point value.
- [init(integerLiteral:)](init%28integerliteral_%29-6hc7h.md): Conforms when `Self` conforms to `_ExpressibleByBuiltinIntegerLiteral`.
- [advanced(by:)](advanced%28by_%29.md): Returns a value that is offset the specified distance from this value.
- [distance(to:)](distance%28to_%29.md): Returns the distance from this value to the given value, expressed as a stride.
