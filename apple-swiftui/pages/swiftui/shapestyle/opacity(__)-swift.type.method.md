> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/opacity(_:)-swift.type.method](https://developer.apple.com/documentation/swiftui/shapestyle/opacity(_:)-swift.type.method)

# opacity(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a new style based on the current style that multiplies by `opacity` when drawing.

## Declaration

```swift
@export(implementation) static func opacity(_ opacity: Double) -> some ShapeStyle

```

<a id="discussion"></a>

## Discussion

In most contexts the current style is the foreground but e.g. when setting the value of the background style, that becomes the current implicit style.

For example, a circle filled with the current foreground style at fifty-percent opacity:

```swift
Circle().fill(.opacity(0.5))
```

## See Also

### Configuring the default shape style

- [blendMode(\_:)](blendmode%28__%29-swift.type.method.md): Conforms when `Self` is `AnyShapeStyle`. Returns a new style based on the current style that uses `mode` as its blend mode when drawing.
- [shadow(\_:)](shadow%28__%29-swift.type.method.md): Conforms when `Self` is `AnyShapeStyle`. Returns a shape style that applies the specified shadow style to the current style.
