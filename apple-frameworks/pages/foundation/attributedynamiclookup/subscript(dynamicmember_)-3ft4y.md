> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributedynamiclookup/subscript(dynamicmember:)-3ft4y

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
subscript<T>(dynamicMember keyPath: KeyPath<AttributeScopes.SpeechAttributes, T>) -> T where T : AttributedStringKey { get }
```
