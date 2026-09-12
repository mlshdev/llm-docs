> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbody/body1textprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbody/body1textprovider)

# body1TextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The main body text to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var body1TextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

In watchOS 5 and earlier, the system always displays the text as white. In watchOS 6 and later, it can display multicolor text.

## See Also

### Setting the Complication Data

- [headerTextProvider](headertextprovider.md): Deprecated. The header text to display in the complication.
- [headerImageProvider](headerimageprovider.md): Deprecated. The header image to display.
- [body2TextProvider](body2textprovider.md): Deprecated. The secondary body text to display in the complication.

# body1TextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The main body text to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * body1TextProvider;
```

<a id="Discussion"></a>

## Discussion

In watchOS 5 and earlier, the system always displays the text as white. In watchOS 6 and later, it can display multicolor text.

## See Also

### Setting the Complication Data

- [headerTextProvider](headertextprovider.md): Deprecated. The header text to display in the complication.
- [headerImageProvider](headerimageprovider.md): Deprecated. The header image to display.
- [body2TextProvider](body2textprovider.md): Deprecated. The secondary body text to display in the complication.
