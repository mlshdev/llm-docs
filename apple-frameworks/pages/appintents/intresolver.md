> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intresolver](https://developer.apple.com/documentation/appintents/intresolver)

# IntResolver

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A resolver that validates an integer is within the parameter’s inclusive range.

## Declaration

```swift
struct IntResolver
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

### Integer resolution

- [IntFromDoubleResolver](intfromdoubleresolver.md): A resolver that converts a double into an integer using the specified rounding rule and validates the result is within the parameter’s inclusive range.
- [IntFromStringResolver](intfromstringresolver.md): A resolver that converts a string into an integer in the specified base and validates the result is within the parameter’s inclusive range.
