> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornerstacktext/outertextprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornerstacktext/outertextprovider)

# outerTextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The outer text to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var outerTextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

The complication ignores the text provider’s tint color. It always displays the outer text as white.

## See Also

### Setting the Complication Data

- [innerTextProvider](innertextprovider.md): Deprecated. The inner text to display in the complication.

# outerTextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The outer text to display in the complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * outerTextProvider;
```

<a id="Discussion"></a>

## Discussion

The complication ignores the text provider’s tint color. It always displays the outer text as white.

## See Also

### Setting the Complication Data

- [innerTextProvider](innertextprovider.md): Deprecated. The inner text to display in the complication.
