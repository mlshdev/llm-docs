> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/localizedstringresource/init(stringinterpolation:)

# init(stringInterpolation:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a localized string resource from the given string interpolation.

## Declaration

```swift
init(stringInterpolation: String.LocalizationValue.StringInterpolation)
```

## Parameters

- `stringInterpolation`: The key to use when looking up a localized value, created from a string interpolation.

<a id="Discussion"></a>

## Discussion

To create a localized string key from a string interpolation, use the `\()` string interpolation syntax. Swift matches the parameter types in the expression to one of the `appendInterpolation` methods in `LocalizedStringResource/StringInterpolation`.

This initializer uses the default values from `LocalizedStringResource/init(_:table:locale:bundle:comment:)` for the `table`, `locale`, `bundle`, and `comment`.

## See Also

### Creating a localized string resource from literal values

- [init(stringLiteral:)](init%28stringliteral_%29.md): Creates a localized string resource from the specified string literal.
