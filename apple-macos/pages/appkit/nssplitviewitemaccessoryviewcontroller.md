> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitemaccessoryviewcontroller](https://developer.apple.com/documentation/appkit/nssplitviewitemaccessoryviewcontroller)

# NSSplitViewItemAccessoryViewController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 26.0+

## Declaration

```swift
class NSSplitViewItemAccessoryViewController
```

## Topics

### Configuring the scroll edge effect

- [preferredScrollEdgeEffectStyle](nssplitviewitemaccessoryviewcontroller/preferredscrolledgeeffectstyle.md): The split view item accessory’s preferred effect for content scrolling behind it.
- [NSScrollEdgeEffectStyle](nsscrolledgeeffectstyle.md): Styles for a scroll view’s edge effect.

### Instance Properties

- [automaticallyAppliesContentInsets](nssplitviewitemaccessoryviewcontroller/automaticallyappliescontentinsets.md): Whether or not standard content insets should be applied to the view. Defaults to YES.
- [isHidden](nssplitviewitemaccessoryviewcontroller/ishidden.md): When set, this property will collapse the accessory view to 0 height (animatable) but not remove it from the window. Set through the animator object to animate it.

### Instance Methods

- [viewDidAppear()](nssplitviewitemaccessoryviewcontroller/viewdidappear%28%29.md)
- [viewDidDisappear()](nssplitviewitemaccessoryviewcontroller/viewdiddisappear%28%29.md)
- [viewWillAppear()](nssplitviewitemaccessoryviewcontroller/viewwillappear%28%29.md)
- [viewWillDisappear()](nssplitviewitemaccessoryviewcontroller/viewwilldisappear%28%29.md)

## Relationships

### Inherits From

- [NSViewController](nsviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](nseditor.md)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSeguePerforming](nssegueperforming.md)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring accessory views

- [topAlignedAccessoryViewControllers](nssplitviewitem/topalignedaccessoryviewcontrollers.md): The following methods allow you to add accessory views to the top/bottom of this splitViewItem. See `NSSplitViewItemAccessoryViewController` for more details.
- [bottomAlignedAccessoryViewControllers](nssplitviewitem/bottomalignedaccessoryviewcontrollers.md)
- [addTopAlignedAccessoryViewController(\_:)](nssplitviewitem/addtopalignedaccessoryviewcontroller%28__%29.md)
- [insertTopAlignedAccessoryViewController(\_:at:)](nssplitviewitem/inserttopalignedaccessoryviewcontroller%28__at_%29.md)
- [removeTopAlignedAccessoryViewController(at:)](nssplitviewitem/removetopalignedaccessoryviewcontroller%28at_%29.md): NOTE: you can use this method, or `-removeFromParentViewController:`, whichever is easier.
- [addBottomAlignedAccessoryViewController(\_:)](nssplitviewitem/addbottomalignedaccessoryviewcontroller%28__%29.md)
- [insertBottomAlignedAccessoryViewController(\_:at:)](nssplitviewitem/insertbottomalignedaccessoryviewcontroller%28__at_%29.md)
- [removeBottomAlignedAccessoryViewController(at:)](nssplitviewitem/removebottomalignedaccessoryviewcontroller%28at_%29.md): NOTE: you can use this method, or `-removeFromParentViewController:`, whichever is easier.

# NSSplitViewItemAccessoryViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 26.0+

## Declaration

```objectivec
@interface NSSplitViewItemAccessoryViewController : NSViewController
```

## Topics

### Configuring the scroll edge effect

- [preferredScrollEdgeEffectStyle](nssplitviewitemaccessoryviewcontroller/preferredscrolledgeeffectstyle.md): The split view item accessory’s preferred effect for content scrolling behind it.
- [NSScrollEdgeEffectStyle](nsscrolledgeeffectstyle.md): Styles for a scroll view’s edge effect.

### Instance Properties

- [automaticallyAppliesContentInsets](nssplitviewitemaccessoryviewcontroller/automaticallyappliescontentinsets.md): Whether or not standard content insets should be applied to the view. Defaults to YES.
- [hidden](nssplitviewitemaccessoryviewcontroller/ishidden.md): When set, this property will collapse the accessory view to 0 height (animatable) but not remove it from the window. Set through the animator object to animate it.

### Instance Methods

- [viewDidAppear](nssplitviewitemaccessoryviewcontroller/viewdidappear%28%29.md)
- [viewDidDisappear](nssplitviewitemaccessoryviewcontroller/viewdiddisappear%28%29.md)
- [viewWillAppear](nssplitviewitemaccessoryviewcontroller/viewwillappear%28%29.md)
- [viewWillDisappear](nssplitviewitemaccessoryviewcontroller/viewwilldisappear%28%29.md)

## Relationships

### Inherits From

- [NSViewController](nsviewcontroller.md)

### Conforms To

- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)

## See Also

### Configuring accessory views

- [topAlignedAccessoryViewControllers](nssplitviewitem/topalignedaccessoryviewcontrollers.md): The following methods allow you to add accessory views to the top/bottom of this splitViewItem. See `NSSplitViewItemAccessoryViewController` for more details.
- [bottomAlignedAccessoryViewControllers](nssplitviewitem/bottomalignedaccessoryviewcontrollers.md)
- [addTopAlignedAccessoryViewController:](nssplitviewitem/addtopalignedaccessoryviewcontroller%28__%29.md)
- [insertTopAlignedAccessoryViewController:atIndex:](nssplitviewitem/inserttopalignedaccessoryviewcontroller%28__at_%29.md)
- [removeTopAlignedAccessoryViewControllerAtIndex:](nssplitviewitem/removetopalignedaccessoryviewcontroller%28at_%29.md): NOTE: you can use this method, or `-removeFromParentViewController:`, whichever is easier.
- [addBottomAlignedAccessoryViewController:](nssplitviewitem/addbottomalignedaccessoryviewcontroller%28__%29.md)
- [insertBottomAlignedAccessoryViewController:atIndex:](nssplitviewitem/insertbottomalignedaccessoryviewcontroller%28__at_%29.md)
- [removeBottomAlignedAccessoryViewControllerAtIndex:](nssplitviewitem/removebottomalignedaccessoryviewcontroller%28at_%29.md): NOTE: you can use this method, or `-removeFromParentViewController:`, whichever is easier.
