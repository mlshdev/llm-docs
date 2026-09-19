> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornertextview/textprovider

# textProvider

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

The text provider for the text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@_NilHidden<CLKTextProvider> @objc final var textProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

The template supports multicolored text from this text provider.

## See Also

### Accessing the Content

- [label](label.md): Deprecated. The SwiftUI view displayed by the template.
