> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandsbuilder/buildexpression(_:)](https://developer.apple.com/documentation/swiftui/commandsbuilder/buildexpression(_:))

# buildExpression(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Builds an expression within the builder.

## Declaration

```swift
@export(implementation) static func buildExpression<Content>(_ content: Content) -> Content where Content : Commands
```

## See Also

### Building conditionally

- [buildEither(first:)](buildeither%28first_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is true.
- [buildEither(second:)](buildeither%28second_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is false.
- [buildIf(\_:)](buildif%28__%29.md): Produces an optional widget for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Processes commands for a conditional compiler-control statement that performs an availability check.
