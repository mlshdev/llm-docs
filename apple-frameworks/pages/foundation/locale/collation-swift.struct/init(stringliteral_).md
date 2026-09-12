> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/collation-swift.struct/init(stringliteral:)](https://developer.apple.com/documentation/foundation/locale/collation-swift.struct/init(stringliteral:))

# init(stringLiteral:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a collation from a BCP 47 identifier as a string literal.

## Declaration

```swift
init(stringLiteral value: String)
```

## Parameters

- `value`: The BCP 47 collation identifier, like `standard` for a language’s standard ordering, or `phonetic` for phonetic ordering.

## See Also

### Creating a collation

- [init(\_:)](init%28__%29.md): Creates a collation from a BCP 47 identifier.
