> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/doubleresolver](https://developer.apple.com/documentation/appintents/doubleresolver)

# DoubleResolver

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A resolver that validates a double is within the parameter’s inclusive range.

## Declaration

```swift
struct DoubleResolver
```

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RangeCheckingResolver](rangecheckingresolver.md)
- [Resolver](resolver.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Floating-point resolution

- [DoubleFromIntResolver](doublefromintresolver.md)
- [DoubleFromStringResolver](doublefromstringresolver.md): A resolver that converts a string into a double and validates the result is within the parameter’s inclusive range.
