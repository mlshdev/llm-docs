> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/region-swift.struct/init(stringliteral:)](https://developer.apple.com/documentation/foundation/locale/region-swift.struct/init(stringliteral:))

# init(stringLiteral:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a region from a BCP 47 identifier as a string literal.

## Declaration

```swift
init(stringLiteral value: String)
```

## Parameters

- `value`: A BCP 47 identifier, such as `US` for the United States. This parameter is case-insensitive.

## See Also

### Creating a region

- [init(\_:)](init%28__%29.md): Creates a region from a BCP 47 identifier.
