> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/viewbuilder/buildeither(first:)

# buildEither(first:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Produces content for a conditional statement in a multi-statement closure when the condition is true.

## Declaration

```swift
@export(implementation) static func buildEither<TrueContent, FalseContent>(first: TrueContent) -> _ConditionalContent<TrueContent, FalseContent>
```

## See Also

### Conditionally building content

- [buildEither(second:)](buildeither%28second_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is false.
- [buildIf(\_:)](buildif%28__%29.md): Produces optional content for conditional statements in multi-statement closures that’s only included when the condition evaluates to true.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md)
