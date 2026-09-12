> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandsbuilder/buildeither(first:)](https://developer.apple.com/documentation/swiftui/commandsbuilder/buildeither(first:))

# buildEither(first:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Produces content for a conditional statement in a multi-statement closure when the condition is true.

## Declaration

```swift
@export(implementation) static func buildEither<T, F>(first: T) -> _ConditionalContent<T, F> where T : Commands, F : Commands
```

## See Also

### Building conditionally

- [buildEither(second:)](buildeither%28second_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is false.
- [buildIf(\_:)](buildif%28__%29.md): Produces an optional widget for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Processes commands for a conditional compiler-control statement that performs an availability check.
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
