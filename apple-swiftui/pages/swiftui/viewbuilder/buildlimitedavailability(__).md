> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/viewbuilder/buildlimitedavailability(_:)

# buildLimitedAvailability(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

## Declaration

```swift
@export(implementation) static func buildLimitedAvailability(_ content: any Commands) -> some Commands

```

## See Also

### Conditionally building content

- [buildEither(first:)](buildeither%28first_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is true.
- [buildEither(second:)](buildeither%28second_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is false.
- [buildIf(\_:)](buildif%28__%29.md): Produces optional content for conditional statements in multi-statement closures that’s only included when the condition evaluates to true.
