> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandsbuilder/buildlimitedavailability(_:)](https://developer.apple.com/documentation/swiftui/commandsbuilder/buildlimitedavailability(_:))

# buildLimitedAvailability(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · visionOS 1.0+

Processes commands for a conditional compiler-control statement that performs an availability check.

## Declaration

```swift
@export(implementation) static func buildLimitedAvailability(_ content: any Commands) -> some Commands

```

## See Also

### Building conditionally

- [buildEither(first:)](buildeither%28first_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is true.
- [buildEither(second:)](buildeither%28second_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is false.
- [buildIf(\_:)](buildif%28__%29.md): Produces an optional widget for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
