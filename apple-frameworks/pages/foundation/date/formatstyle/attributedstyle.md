> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/formatstyle/attributedstyle

# attributedStyle

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Return the type preserving attributed variant of this style.

## Declaration

```swift
var attributedStyle: Date.FormatStyle.Attributed { get }
```

<a id="discussion"></a>

## Discussion

This style attributes the formatted date with the `AttributeScopes.FoundationAttributes.DateFormatFieldAttribute`.
