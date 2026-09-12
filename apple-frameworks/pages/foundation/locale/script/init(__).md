> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/script/init(_:)](https://developer.apple.com/documentation/foundation/locale/script/init(_:))

# init(\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a script from a BCP 47 identifier.

## Declaration

```swift
init(_ identifier: String)
```

## Parameters

- `identifier`: A BCP 47 script subtag identifier, such as `Arab`, `Cyrl`, or `Latn`. This value is case-insensitive.

## See Also

### Creating a script

- [init(stringLiteral:)](init%28stringliteral_%29.md): Creates a script from a BCP 47 identifier as a string literal.
