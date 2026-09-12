> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargestandardbody/body1textprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargestandardbody/body1textprovider)

# body1TextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The top line of body text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var body1TextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a value for the [body2TextProvider](body2textprovider.md) property, the text in this property wraps to the second line.

## See Also

### Setting the Complication Data

- [headerImageProvider](headerimageprovider.md): Deprecated. An optional image to display in the header.
- [headerTextProvider](headertextprovider.md): Deprecated. The text to display in the header line.
- [body2TextProvider](body2textprovider.md): Deprecated. An optional second line of body text.

# body1TextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The top line of body text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * body1TextProvider;
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a value for the [body2TextProvider](body2textprovider.md) property, the text in this property wraps to the second line.

## See Also

### Setting the Complication Data

- [headerImageProvider](headerimageprovider.md): Deprecated. An optional image to display in the header.
- [headerTextProvider](headertextprovider.md): Deprecated. The text to display in the header line.
- [body2TextProvider](body2textprovider.md): Deprecated. An optional second line of body text.
