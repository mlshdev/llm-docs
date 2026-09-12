> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswitch/style-swift.property](https://developer.apple.com/documentation/uikit/uiswitch/style-swift.property)

# style (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The display style for the switch.

## Declaration

```swift
var style: UISwitch.Style { get }
```

<a id="Discussion"></a>

## Discussion

This property returns the resolved style based on the user interface idiom, and never returns [UISwitch.Style.automatic](style-swift.enum/automatic.md).

## See Also

### Setting the display style

- [Displaying a checkbox in your Mac app built with Mac Catalyst](../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md): Present a switch control as a Mac-style checkbox when your app runs in the Mac user interface idiom.
- [preferredStyle](preferredstyle.md): The preferred display style for the switch.
- [UISwitch.Style](style-swift.enum.md): Styles that determine the appearance of the switch.
- [title](title.md): The title displayed next to a checkbox-style switch.

# style (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The display style for the switch.

## Declaration

```objectivec
@property (nonatomic, readonly) UISwitchStyle style;
```

<a id="Discussion"></a>

## Discussion

This property returns the resolved style based on the user interface idiom, and never returns [UISwitchStyleAutomatic](style-swift.enum/automatic.md).

## See Also

### Setting the display style

- [Displaying a checkbox in your Mac app built with Mac Catalyst](../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md): Present a switch control as a Mac-style checkbox when your app runs in the Mac user interface idiom.
- [preferredStyle](preferredstyle.md): The preferred display style for the switch.
- [UISwitchStyle](style-swift.enum.md): Styles that determine the appearance of the switch.
- [title](title.md): The title displayed next to a checkbox-style switch.
