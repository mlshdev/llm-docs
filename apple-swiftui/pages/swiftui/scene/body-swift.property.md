> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/body-swift.property](https://developer.apple.com/documentation/swiftui/scene/body-swift.property)

# body

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The content and behavior of the scene.

## Declaration

```swift
@SceneBuilder @MainActor @preconcurrency var body: Self.Body { get }
```

<a id="discussion"></a>

## Discussion

For any scene that you create, provide a computed `body` property that defines the scene as a composition of other scenes. You can assemble a scene from built-in scenes that SwiftUI provides, as well as other scenes that you’ve defined.

Swift infers the scene’s [Body](body-swift.associatedtype.md) associated type based on the contents of the `body` property.

## See Also

### Creating a scene

- [Body](body-swift.associatedtype.md): The type of scene that represents the body of this scene.
