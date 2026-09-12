> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scenebuilder/buildexpression(_:)](https://developer.apple.com/documentation/swiftui/scenebuilder/buildexpression(_:))

# buildExpression(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Builds an expression within the builder.

## Declaration

```swift
@export(implementation) static func buildExpression<Content>(_ content: Content) -> Content where Content : Scene
```

## See Also

### Building content

- [buildBlock(\_:)](buildblock%28__%29.md)
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Processes scene content for a conditional compiler-control statement that performs an availability check.
- [buildOptional(\_:)](buildoptional%28__%29.md): Produces an optional scene for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.
