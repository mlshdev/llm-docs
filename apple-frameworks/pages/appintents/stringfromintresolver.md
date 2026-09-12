> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/stringfromintresolver](https://developer.apple.com/documentation/appintents/stringfromintresolver)

# StringFromIntResolver

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A resolver that converts one or more integers into one or more strings.

## Declaration

```swift
struct StringFromIntResolver<Input, Output> where Input : _IntentValue, Output : _IntentValue, Output.ValueType == String
```

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Resolver](resolver.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### String resolution

- [AttributedStringFromStringResolver](attributedstringfromstringresolver.md): A resolver that converts a string into an attributed string.
- [StringFromDoubleResolver](stringfromdoubleresolver.md): A resolver that converts a double into a string.
