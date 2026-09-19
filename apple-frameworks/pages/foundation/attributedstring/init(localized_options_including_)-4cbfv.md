> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributedstring/init(localized:options:including:)-4cbfv

# init(localized:options:including:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
init<S>(localized resource: LocalizedStringResource, options: AttributedString.LocalizationOptions, including scope: KeyPath<AttributeScopes, S.Type>) where S : AttributeScope
```
