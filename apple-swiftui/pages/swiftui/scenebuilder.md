> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scenebuilder](https://developer.apple.com/documentation/swiftui/scenebuilder)

# SceneBuilder

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A result builder for composing a collection of scenes into a single composite scene.

## Declaration

```swift
@resultBuilder struct SceneBuilder
```

## Topics

### Building content

- [buildBlock(\_:)](scenebuilder/buildblock%28__%29.md)
- [buildExpression(\_:)](scenebuilder/buildexpression%28__%29.md): Builds an expression within the builder.
- [buildLimitedAvailability(\_:)](scenebuilder/buildlimitedavailability%28__%29.md): Processes scene content for a conditional compiler-control statement that performs an availability check.
- [buildOptional(\_:)](scenebuilder/buildoptional%28__%29.md): Produces an optional scene for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.

## See Also

### Creating scenes

- [Scene](scene.md): A part of an app’s user interface with a life cycle managed by the system.
