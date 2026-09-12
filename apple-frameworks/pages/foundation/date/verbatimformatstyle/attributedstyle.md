> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/verbatimformatstyle/attributedstyle](https://developer.apple.com/documentation/foundation/date/verbatimformatstyle/attributedstyle)

# attributedStyle

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Return the type preserving attributed variant of this style.

## Declaration

```swift
var attributedStyle: Date.VerbatimFormatStyle.Attributed { get }
```

<a id="discussion"></a>

## Discussion

This style attributes the formatted date with the `AttributeScopes.FoundationAttributes.DateFormatFieldAttribute`.
