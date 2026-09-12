> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbodyview/body2textprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbodyview/body2textprovider)

# body2TextProvider

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

The text provider for the second row of body text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@objc final var body2TextProvider: CLKTextProvider?
```

<a id="Discussion"></a>

## Discussion

The template supports multicolored text from this text provider.

## See Also

### Accessing the Content

- [headerLabel](headerlabel.md): Deprecated. The SwiftUI view displayed by the template.
- [headerTextProvider](headertextprovider.md): Deprecated. The text provider for the header text.
- [body1TextProvider](body1textprovider.md): Deprecated. The text provider for the first row of body text.
