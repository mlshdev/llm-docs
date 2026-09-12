> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/viewbuilder/buildeither(second:)](https://developer.apple.com/documentation/swiftui/viewbuilder/buildeither(second:))

# buildEither(second:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Produces content for a conditional statement in a multi-statement closure when the condition is false.

## Declaration

```swift
@export(implementation) static func buildEither<TrueContent, FalseContent>(second: FalseContent) -> _ConditionalContent<TrueContent, FalseContent>
```

## See Also

### Conditionally building content

- [buildEither(first:)](buildeither%28first_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is true.
- [buildIf(\_:)](buildif%28__%29.md): Produces optional content for conditional statements in multi-statement closures that’s only included when the condition evaluates to true.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md)
