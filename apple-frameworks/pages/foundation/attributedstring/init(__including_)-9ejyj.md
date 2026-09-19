> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributedstring/init(_:including:)-9ejyj

# init(\_:including:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an attributed string from another attributed string, including an attribute scope that a key path identifies.

## Declaration

```swift
init<S, T>(_ other: T, including scope: KeyPath<AttributeScopes, S.Type>) where S : AttributeScope, T : AttributedStringProtocol
```

## Parameters

- `other`: An attributed string or attributed substring.
- `scope`: An [AttributeScopes](../attributescopes.md) key path that identifies an attribute scope to associate with the attributed string.

## See Also

### Creating a Duplicate Attributed String

- [init(\_:including:)](init%28__including_%29-6u3ho.md): Creates an attributed string from another attributed string, including an attribute scope.
