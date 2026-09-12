> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandsbuilder/buildeither(second:)](https://developer.apple.com/documentation/swiftui/commandsbuilder/buildeither(second:))

# buildEither(second:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Produces content for a conditional statement in a multi-statement closure when the condition is false.

## Declaration

```swift
@export(implementation) static func buildEither<T, F>(second: F) -> _ConditionalContent<T, F> where T : Commands, F : Commands
```

## See Also

### Building conditionally

- [buildEither(first:)](buildeither%28first_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is true.
- [buildIf(\_:)](buildif%28__%29.md): Produces an optional widget for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Processes commands for a conditional compiler-control statement that performs an availability check.
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
