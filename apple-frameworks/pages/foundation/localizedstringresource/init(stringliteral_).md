> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/localizedstringresource/init(stringliteral:)](https://developer.apple.com/documentation/foundation/localizedstringresource/init(stringliteral:))

# init(stringLiteral:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a localized string resource from the specified string literal.

## Declaration

```swift
init(stringLiteral value: String)
```

## Parameters

- `value`: The key to use when looking up a localized value.

<a id="Discussion"></a>

## Discussion

This initializer uses the default values from `LocalizedStringResource/init(_:table:locale:bundle:comment:)` for the `table`, `locale`, `bundle`, and `comment`.

## See Also

### Creating a localized string resource from literal values

- [init(stringInterpolation:)](init%28stringinterpolation_%29.md): Creates a localized string resource from the given string interpolation.
