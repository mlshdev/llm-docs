> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbody/body2textprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbody/body2textprovider)

# body2TextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The secondary body text to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var body2TextProvider: CLKTextProvider? { get set }
```

<a id="Discussion"></a>

## Discussion

In watchOS 5 and earlier, the system always displays the text as white. In watchOS 6 and later, it can display multicolor text.

## See Also

### Setting the Complication Data

- [headerTextProvider](headertextprovider.md): Deprecated. The header text to display in the complication.
- [headerImageProvider](headerimageprovider.md): Deprecated. The header image to display.
- [body1TextProvider](body1textprovider.md): Deprecated. The main body text to display in the complication.

# body2TextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The secondary body text to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CLKTextProvider * body2TextProvider;
```

<a id="Discussion"></a>

## Discussion

In watchOS 5 and earlier, the system always displays the text as white. In watchOS 6 and later, it can display multicolor text.

## See Also

### Setting the Complication Data

- [headerTextProvider](headertextprovider.md): Deprecated. The header text to display in the complication.
- [headerImageProvider](headerimageprovider.md): Deprecated. The header image to display.
- [body1TextProvider](body1textprovider.md): Deprecated. The main body text to display in the complication.
