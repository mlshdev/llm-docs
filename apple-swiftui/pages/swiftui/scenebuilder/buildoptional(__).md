> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scenebuilder/buildoptional(_:)](https://developer.apple.com/documentation/swiftui/scenebuilder/buildoptional(_:))

# buildOptional(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Produces an optional scene for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.

## Declaration

```swift
@export(implementation) static func buildOptional(_ scene: (any Scene & _LimitedAvailabilitySceneMarker)?) -> some Scene

```

<a id="discussion"></a>

## Discussion

Conditional statements in a [SceneBuilder](../scenebuilder.md) can contain an `if` statement but not an `else` statement, and the condition can only perform a compiler check for availability, like in the following code:

```swift
var body: some Scene {
    if #available(iOS 16, *) {
        WindowGroup {
            ContentView()
        }
    }
}
```

## See Also

### Building content

- [buildBlock(\_:)](buildblock%28__%29.md)
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Processes scene content for a conditional compiler-control statement that performs an availability check.
