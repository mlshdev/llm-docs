> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargestandardbody/body2textprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargestandardbody/body2textprovider)

# body2TextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

An optional second line of body text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var body2TextProvider: CLKTextProvider? { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a value for this property, the text in the [body1TextProvider](body1textprovider.md) property wraps and is displayed on the second line.

## See Also

### Setting the Complication Data

- [headerImageProvider](headerimageprovider.md): Deprecated. An optional image to display in the header.
- [headerTextProvider](headertextprovider.md): Deprecated. The text to display in the header line.
- [body1TextProvider](body1textprovider.md): Deprecated. The top line of body text.

# body2TextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

An optional second line of body text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CLKTextProvider * body2TextProvider;
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a value for this property, the text in the [body1TextProvider](body1textprovider.md) property wraps and is displayed on the second line.

## See Also

### Setting the Complication Data

- [headerImageProvider](headerimageprovider.md): Deprecated. An optional image to display in the header.
- [headerTextProvider](headertextprovider.md): Deprecated. The text to display in the header line.
- [body1TextProvider](body1textprovider.md): Deprecated. The top line of body text.
