> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/shadow(_:)-swift.type.method](https://developer.apple.com/documentation/swiftui/shapestyle/shadow(_:)-swift.type.method)

# shadow(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a shape style that applies the specified shadow style to the current style.

## Declaration

```swift
@export(implementation) static func shadow(_ style: ShadowStyle) -> some ShapeStyle

```

## Parameters

- `style`: The shadow style to apply.

<a id="return-value"></a>

## Return Value

A new shape style based on the current style that uses the specified shadow style.

<a id="discussion"></a>

## Discussion

In most contexts the current style is the foreground, but not always. For example, when setting the value of the background style, that becomes the current implicit style.

The following example creates a circle filled with the current foreground style that uses an inner shadow:

```swift
Circle().fill(.shadow(.inner(radius: 1, y: 1)))
```

## See Also

### Configuring the default shape style

- [blendMode(\_:)](blendmode%28__%29-swift.type.method.md): Conforms when `Self` is `AnyShapeStyle`. Returns a new style based on the current style that uses `mode` as its blend mode when drawing.
- [opacity(\_:)](opacity%28__%29-swift.type.method.md): Conforms when `Self` is `AnyShapeStyle`. Returns a new style based on the current style that multiplies by `opacity` when drawing.
