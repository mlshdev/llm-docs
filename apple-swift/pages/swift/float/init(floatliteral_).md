> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/init(floatliteral:)](https://developer.apple.com/documentation/swift/float/init(floatliteral:))

# init(floatLiteral:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance initialized to the specified floating-point value.

## Declaration

```swift
init(floatLiteral value: Float)
```

## Parameters

- `value`: The value to create.

<a id="discussion"></a>

## Discussion

Do not call this initializer directly. Instead, initialize a variable or constant using a floating-point literal. For example:

```swift
let x = 21.5
```

In this example, the assignment to the `x` constant calls this floating-point literal initializer behind the scenes.

## See Also

### Infrequently Used Functionality

- [init()](init%28%29.md)
- [init(integerLiteral:)](init%28integerliteral_%29.md): Creates an instance initialized to the specified integer value.
- [init(integerLiteral:)](init%28integerliteral_%29-6hc7h.md): Conforms when `Self` conforms to `_ExpressibleByBuiltinIntegerLiteral`.
- [advanced(by:)](advanced%28by_%29.md): Returns a value that is offset the specified distance from this value.
- [distance(to:)](distance%28to_%29.md): Returns the distance from this value to the given value, expressed as a stride.
- [write(to:)](write%28to_%29.md): Writes a textual representation of this instance into the given output stream.
