> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswitch/style-swift.enum/automatic](https://developer.apple.com/documentation/uikit/uiswitch/style-swift.enum/automatic)

# UISwitch.Style.automatic (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A style indicating that the system chooses the appearance of the switch according to the current user interface idiom.

## Declaration

```swift
case automatic
```

## Mentioned In

- [Displaying a checkbox in your Mac app built with Mac Catalyst](../../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md)

<a id="Discussion"></a>

## Discussion

The system chooses the [UISwitch.Style.checkbox](checkbox.md) style when the user interface idiom is [UIUserInterfaceIdiom.mac](../../uiuserinterfaceidiom/mac.md); otherwise, it chooses the [UISwitch.Style.sliding](sliding.md) style.

## See Also

### Styles

- [UISwitch.Style.checkbox](checkbox.md): A style indicating that the switch appears as a Mac-style checkbox.
- [UISwitch.Style.sliding](sliding.md): A style indicating that the switch appears as an on/off slider.

# UISwitchStyleAutomatic (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A style indicating that the system chooses the appearance of the switch according to the current user interface idiom.

## Declaration

```objectivec
UISwitchStyleAutomatic
```

## Mentioned In

- [Displaying a checkbox in your Mac app built with Mac Catalyst](../../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md)

<a id="Discussion"></a>

## Discussion

The system chooses the [UISwitchStyleCheckbox](checkbox.md) style when the user interface idiom is [UIUserInterfaceIdiomMac](../../uiuserinterfaceidiom/mac.md); otherwise, it chooses the [UISwitchStyleSliding](sliding.md) style.

## See Also

### Styles

- [UISwitchStyleCheckbox](checkbox.md): A style indicating that the switch appears as a Mac-style checkbox.
- [UISwitchStyleSliding](sliding.md): A style indicating that the switch appears as an on/off slider.
