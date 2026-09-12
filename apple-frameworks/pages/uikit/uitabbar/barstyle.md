> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/barstyle](https://developer.apple.com/documentation/uikit/uitabbar/barstyle)

# barStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The tab bar style that specifies its appearance.

## Declaration

```swift
var barStyle: UIBarStyle { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines whether the tab bar uses a dark or light visual style when no background image or tint color is specified. Together with the [isTranslucent](istranslucent.md) property, this property defines the default visual style of the tab bar. Set this property to the value that best matches the style of your interface. For a list of possible values, see [UIBarStyle](../uibarstyle.md). The default value of this property is [UIBarStyle.default](../uibarstyle/default.md).

## See Also

### Setting the bar’s style

- [UIBarStyle](../uibarstyle.md): Defines the stylistic appearance of different types of views.

# barStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The tab bar style that specifies its appearance.

## Declaration

```objectivec
@property (nonatomic) UIBarStyle barStyle;
```

<a id="Discussion"></a>

## Discussion

This property determines whether the tab bar uses a dark or light visual style when no background image or tint color is specified. Together with the [translucent](istranslucent.md) property, this property defines the default visual style of the tab bar. Set this property to the value that best matches the style of your interface. For a list of possible values, see [UIBarStyle](../uibarstyle.md). The default value of this property is [UIBarStyleDefault](../uibarstyle/default.md).

## See Also

### Setting the bar’s style

- [UIBarStyle](../uibarstyle.md): Defines the stylistic appearance of different types of views.
