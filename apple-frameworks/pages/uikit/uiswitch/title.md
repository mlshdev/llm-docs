> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswitch/title](https://developer.apple.com/documentation/uikit/uiswitch/title)

# title (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The title displayed next to a checkbox-style switch.

## Declaration

```swift
var title: String? { get set }
```

## Mentioned In

- [Choosing a user interface idiom for your Mac app](../choosing-a-user-interface-idiom-for-your-mac-app.md)
- [Displaying a checkbox in your Mac app built with Mac Catalyst](../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md)

<a id="Discussion"></a>

## Discussion

Set [title](title.md) only when the user interface idiom is [UIUserInterfaceIdiom.mac](../uiuserinterfaceidiom/mac.md); otherwise, a runtime exception occurs.

```swift
let showFavoritesAtTop = UISwitch()
showFavoritesAtTop.preferredStyle = .checkbox
if traitCollection.userInterfaceIdiom == .mac {
    showFavoritesAtTop.title = "Always show favorite recipes at the top"
}
```

The switch ignores [title](title.md) when the value of [style](style-swift.property.md) isn’t [UISwitch.Style.checkbox](style-swift.enum/checkbox.md).

## See Also

### Setting the display style

- [Displaying a checkbox in your Mac app built with Mac Catalyst](../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md): Present a switch control as a Mac-style checkbox when your app runs in the Mac user interface idiom.
- [preferredStyle](preferredstyle.md): The preferred display style for the switch.
- [style](style-swift.property.md): The display style for the switch.
- [UISwitch.Style](style-swift.enum.md): Styles that determine the appearance of the switch.

# title (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The title displayed next to a checkbox-style switch.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * title;
```

## Mentioned In

- [Choosing a user interface idiom for your Mac app](../choosing-a-user-interface-idiom-for-your-mac-app.md)
- [Displaying a checkbox in your Mac app built with Mac Catalyst](../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md)

<a id="Discussion"></a>

## Discussion

Set [title](title.md) only when the user interface idiom is [UIUserInterfaceIdiomMac](../uiuserinterfaceidiom/mac.md); otherwise, a runtime exception occurs.

```swift
let showFavoritesAtTop = UISwitch()
showFavoritesAtTop.preferredStyle = .checkbox
if traitCollection.userInterfaceIdiom == .mac {
    showFavoritesAtTop.title = "Always show favorite recipes at the top"
}
```

The switch ignores [title](title.md) when the value of [style](style-swift.property.md) isn’t [UISwitchStyleCheckbox](style-swift.enum/checkbox.md).

## See Also

### Setting the display style

- [Displaying a checkbox in your Mac app built with Mac Catalyst](../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md): Present a switch control as a Mac-style checkbox when your app runs in the Mac user interface idiom.
- [preferredStyle](preferredstyle.md): The preferred display style for the switch.
- [style](style-swift.property.md): The display style for the switch.
- [UISwitchStyle](style-swift.enum.md): Styles that determine the appearance of the switch.
