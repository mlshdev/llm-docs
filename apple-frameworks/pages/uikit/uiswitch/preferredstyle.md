> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswitch/preferredstyle](https://developer.apple.com/documentation/uikit/uiswitch/preferredstyle)

# preferredStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The preferred display style for the switch.

## Declaration

```swift
var preferredStyle: UISwitch.Style { get set }
```

## Mentioned In

- [Choosing a user interface idiom for your Mac app](../choosing-a-user-interface-idiom-for-your-mac-app.md)
- [Displaying a checkbox in your Mac app built with Mac Catalyst](../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify the display style that you prefer. If the style changes, the switch may generate a layout pass to update the display.

The default style is [UISwitch.Style.automatic](style-swift.enum/automatic.md). For a list of styles, see [UISwitch.Style](style-swift.enum.md).

## See Also

### Setting the display style

- [Displaying a checkbox in your Mac app built with Mac Catalyst](../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md): Present a switch control as a Mac-style checkbox when your app runs in the Mac user interface idiom.
- [style](style-swift.property.md): The display style for the switch.
- [UISwitch.Style](style-swift.enum.md): Styles that determine the appearance of the switch.
- [title](title.md): The title displayed next to a checkbox-style switch.

# preferredStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The preferred display style for the switch.

## Declaration

```objectivec
@property (nonatomic) UISwitchStyle preferredStyle;
```

## Mentioned In

- [Choosing a user interface idiom for your Mac app](../choosing-a-user-interface-idiom-for-your-mac-app.md)
- [Displaying a checkbox in your Mac app built with Mac Catalyst](../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify the display style that you prefer. If the style changes, the switch may generate a layout pass to update the display.

The default style is [UISwitchStyleAutomatic](style-swift.enum/automatic.md). For a list of styles, see [UISwitchStyle](style-swift.enum.md).

## See Also

### Setting the display style

- [Displaying a checkbox in your Mac app built with Mac Catalyst](../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md): Present a switch control as a Mac-style checkbox when your app runs in the Mac user interface idiom.
- [style](style-swift.property.md): The display style for the switch.
- [UISwitchStyle](style-swift.enum.md): Styles that determine the appearance of the switch.
- [title](title.md): The title displayed next to a checkbox-style switch.
