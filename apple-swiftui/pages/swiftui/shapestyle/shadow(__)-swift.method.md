> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/shadow(_:)-swift.method](https://developer.apple.com/documentation/swiftui/shapestyle/shadow(_:)-swift.method)

# shadow(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Applies the specified shadow effect to the shape style.

## Declaration

```swift
func shadow(_ style: ShadowStyle) -> some ShapeStyle

```

## Parameters

- `style`: The shadow style to apply.

<a id="return-value"></a>

## Return Value

A new shape style that uses the specified shadow style.

<a id="discussion"></a>

## Discussion

For example, you can create a rectangle that adds a drop shadow to the [red](red.md) shape style.

```swift
Rectangle().fill(.red.shadow(.drop(radius: 2, y: 3)))
```

## See Also

### Modifying a shape style

- [blendMode(\_:)](blendmode%28__%29-swift.method.md): Returns a new style based on `self` that applies the specified blend mode when drawing.
- [opacity(\_:)](opacity%28__%29-swift.method.md): Returns a new style based on `self` that multiplies by the specified opacity when drawing.
