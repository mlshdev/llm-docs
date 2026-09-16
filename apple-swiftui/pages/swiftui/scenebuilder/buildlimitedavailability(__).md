> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/scenebuilder/buildlimitedavailability(_:)

# buildLimitedAvailability(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

Processes scene content for a conditional compiler-control statement that performs an availability check.

## Declaration

```swift
@export(implementation) static func buildLimitedAvailability(_ scene: some Scene) -> any Scene & _LimitedAvailabilitySceneMarker
```

## See Also

### Building content

- [buildBlock(\_:)](buildblock%28__%29.md)
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
- [buildOptional(\_:)](buildoptional%28__%29.md): Produces an optional scene for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.
