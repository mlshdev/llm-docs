> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributedynamiclookup/subscript(dynamicmember:)-30vmv

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
subscript<T>(dynamicMember keyPath: KeyPath<AttributeScopes.FoundationAttributes.LocalizedStringArgumentAttributes, T>) -> T where T : AttributedStringKey { get }
```
