> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/button](https://developer.apple.com/documentation/appkit/nsstatusitem/button)

# button (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The button displayed in the status bar.

## Declaration

```swift
var button: NSStatusBarButton? { get }
```

<a id="Discussion"></a>

## Discussion

The status item automatically creates this button by default. Use this property to customize the appearance and behavior of the button, such as its [image](../nsbutton/image.md), [target](../nscontrol/target.md), [action](../nscontrol/action.md), [toolTip](../nsview/tooltip.md), and so on.

## See Also

### Managing the status item’s behavior

- [behavior](behavior-swift.property.md): The set of allowed behaviors for the status item.
- [NSStatusItem.Behavior](behavior-swift.struct.md): A set of optional status item behaviors.
- [menu](menu.md): The pull-down menu displayed when the user clicks the status item.

# button (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The button displayed in the status bar.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSStatusBarButton * button;
```

<a id="Discussion"></a>

## Discussion

The status item automatically creates this button by default. Use this property to customize the appearance and behavior of the button, such as its [image](../nsbutton/image.md), [target](../nscontrol/target.md), [action](../nscontrol/action.md), [toolTip](../nsview/tooltip.md), and so on.

## See Also

### Managing the status item’s behavior

- [behavior](behavior-swift.property.md): The set of allowed behaviors for the status item.
- [NSStatusItemBehavior](behavior-swift.struct.md): A set of optional status item behaviors.
- [menu](menu.md): The pull-down menu displayed when the user clicks the status item.
