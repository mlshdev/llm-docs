> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scenebuilder/buildblock(_:)](https://developer.apple.com/documentation/swiftui/scenebuilder/buildblock(_:))

# buildBlock(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
@export(implementation) static func buildBlock<each Content>(_ content: repeat each Content) -> some Scene where repeat each Content : Scene

```

## See Also

### Building content

- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Processes scene content for a conditional compiler-control statement that performs an availability check.
- [buildOptional(\_:)](buildoptional%28__%29.md): Produces an optional scene for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.
