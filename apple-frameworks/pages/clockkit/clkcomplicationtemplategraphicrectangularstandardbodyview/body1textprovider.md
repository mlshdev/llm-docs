> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbodyview/body1textprovider

# body1TextProvider

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

The text provider for the first row of body text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@_NilHidden<CLKTextProvider> @objc final var body1TextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

The template supports multicolored text from this text provider.

## See Also

### Accessing the Content

- [headerLabel](headerlabel.md): Deprecated. The SwiftUI view displayed by the template.
- [headerTextProvider](headertextprovider.md): Deprecated. The text provider for the header text.
- [body2TextProvider](body2textprovider.md): Deprecated. The text provider for the second row of body text.
