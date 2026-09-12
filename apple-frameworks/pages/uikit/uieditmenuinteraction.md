> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteraction](https://developer.apple.com/documentation/uikit/uieditmenuinteraction)

# UIEditMenuInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An interaction that provides edit operations using a menu.

## Declaration

```swift
@MainActor class UIEditMenuInteraction
```

## Mentioned In

- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)

<a id="overview"></a>

## Overview

Edit menu interactions provide edit actions — such as cut, copy, and paste — for the content a view displays. The presentation style the interaction uses to display the actions conforms to the input method of the interaction. For touch interactions, the actions display in an editing menu. When responding to a secondary click on devices with pointer-based input, the actions display in a context menu.

Standard UIKit classes, such as [UITextView](uitextview.md) and [UITextField](uitextfield.md), are preconfigured to use edit menu interactions.

To add an edit menu interaction to a generic view:

1. Create an edit menu interaction object, and pass an optional delegate into the default initializer.
2. Call the [addInteraction(\_:)](uiview/addinteraction%28__%29.md) method on your view to add the interaction.
3. Create a gesture recognizer to trigger the interaction and add it to the view.

The following example creates an edit menu interaction triggered by a long press.

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    // Add the edit menu interaction.
    editMenuInteraction = UIEditMenuInteraction(delegate: self)
    interactionView.addInteraction(editMenuInteraction!)

    // Create the gesture recognizer.
    let longPress = UILongPressGestureRecognizer(target: self, action: #selector(didLongPress(_:)))
    longPress.allowedTouchTypes = [UITouch.TouchType.direct.rawValue as NSNumber]
    interactionView.addGestureRecognizer(longPress)
}

@objc func didLongPress(_ recognizer: UIGestureRecognizer) {
    let location = recognizer.location(in: self.view)
    let configuration = UIEditMenuConfiguration(identifier: nil, sourcePoint: location)

    if let interaction = editMenuInteraction {
        // Present the edit menu interaction.
        interaction.presentEditMenu(with: configuration)
    }
}
```

By default, an edit menu interaction generates a menu that includes commands for the standard edit actions your view implements. For more information on these actions, see [UIResponderStandardEditActions](uiresponderstandardeditactions.md). You can use the interaction’s delegate to add additional items to the menu and set the target rectangle to display around using methods in the [UIEditMenuInteractionDelegate](uieditmenuinteractiondelegate.md) protocol. For text views, you can specify the items the menu displays for specific text ranges using methods from the [UITextViewDelegate](uitextviewdelegate.md), [UITextFieldDelegate](uitextfielddelegate.md), or [UITextInput](uitextinput.md) protocols.

> **Related Sessions from WWDC22**

>  Session 10071: [Adopt desktop-class editing interactions](https://developer.apple.com/wwdc22/10071)

## Topics

### Creating an edit menu interaction

- [init(delegate:)](uieditmenuinteraction/init%28delegate_%29.md): Initializes an edit menu interaction object with the delegate object you specify.

### Managing edit menu interactions

- [delegate](uieditmenuinteraction/delegate.md): An object that customizes presentation of the menu and actions to display for an edit menu interaction.
- [presentEditMenu(with:)](uieditmenuinteraction/presenteditmenu%28with_%29.md): Presents an edit menu using the object you provide for configuration.
- [reloadVisibleMenu()](uieditmenuinteraction/reloadvisiblemenu%28%29.md): Updates the actions an edit menu displays.
- [updateVisibleMenuPosition(animated:)](uieditmenuinteraction/updatevisiblemenuposition%28animated_%29.md): Updates the position of the currently visible menu with an option to animate the action.
- [dismissMenu()](uieditmenuinteraction/dismissmenu%28%29.md): Dismiss the edit menu if present.
- [location(in:)](uieditmenuinteraction/location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](uiinteraction.md)

## See Also

### Related Documentation

- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md): Optimize your iPad app’s user experience by adopting desktop-class enhancements for multitasking with Stage Manager, document interactions, text editing, search, and more.

### Edit menus

- [UIEditMenuInteractionDelegate](uieditmenuinteractiondelegate.md): The methods for customizing the menu the interaction displays.
- [UIEditMenuConfiguration](uieditmenuconfiguration.md): An object containing the configuration details for the menu your app presents in response to an edit menu interaction.
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md): A set of standard methods that apps can adopt to support editing.

# UIEditMenuInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An interaction that provides edit operations using a menu.

## Declaration

```objectivec
@interface UIEditMenuInteraction : NSObject
```

## Mentioned In

- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)

<a id="overview"></a>

## Overview

Edit menu interactions provide edit actions — such as cut, copy, and paste — for the content a view displays. The presentation style the interaction uses to display the actions conforms to the input method of the interaction. For touch interactions, the actions display in an editing menu. When responding to a secondary click on devices with pointer-based input, the actions display in a context menu.

Standard UIKit classes, such as [UITextView](uitextview.md) and [UITextField](uitextfield.md), are preconfigured to use edit menu interactions.

To add an edit menu interaction to a generic view:

1. Create an edit menu interaction object, and pass an optional delegate into the default initializer.
2. Call the [addInteraction:](uiview/addinteraction%28__%29.md) method on your view to add the interaction.
3. Create a gesture recognizer to trigger the interaction and add it to the view.

The following example creates an edit menu interaction triggered by a long press.

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    // Add the edit menu interaction.
    editMenuInteraction = UIEditMenuInteraction(delegate: self)
    interactionView.addInteraction(editMenuInteraction!)

    // Create the gesture recognizer.
    let longPress = UILongPressGestureRecognizer(target: self, action: #selector(didLongPress(_:)))
    longPress.allowedTouchTypes = [UITouch.TouchType.direct.rawValue as NSNumber]
    interactionView.addGestureRecognizer(longPress)
}

@objc func didLongPress(_ recognizer: UIGestureRecognizer) {
    let location = recognizer.location(in: self.view)
    let configuration = UIEditMenuConfiguration(identifier: nil, sourcePoint: location)

    if let interaction = editMenuInteraction {
        // Present the edit menu interaction.
        interaction.presentEditMenu(with: configuration)
    }
}
```

By default, an edit menu interaction generates a menu that includes commands for the standard edit actions your view implements. For more information on these actions, see [UIResponderStandardEditActions](uiresponderstandardeditactions.md). You can use the interaction’s delegate to add additional items to the menu and set the target rectangle to display around using methods in the [UIEditMenuInteractionDelegate](uieditmenuinteractiondelegate.md) protocol. For text views, you can specify the items the menu displays for specific text ranges using methods from the [UITextViewDelegate](uitextviewdelegate.md), [UITextFieldDelegate](uitextfielddelegate.md), or [UITextInput](uitextinput.md) protocols.

> **Related Sessions from WWDC22**

>  Session 10071: [Adopt desktop-class editing interactions](https://developer.apple.com/wwdc22/10071)

## Topics

### Creating an edit menu interaction

- [initWithDelegate:](uieditmenuinteraction/init%28delegate_%29.md): Initializes an edit menu interaction object with the delegate object you specify.

### Managing edit menu interactions

- [delegate](uieditmenuinteraction/delegate.md): An object that customizes presentation of the menu and actions to display for an edit menu interaction.
- [presentEditMenuWithConfiguration:](uieditmenuinteraction/presenteditmenu%28with_%29.md): Presents an edit menu using the object you provide for configuration.
- [reloadVisibleMenu](uieditmenuinteraction/reloadvisiblemenu%28%29.md): Updates the actions an edit menu displays.
- [updateVisibleMenuPositionAnimated:](uieditmenuinteraction/updatevisiblemenuposition%28animated_%29.md): Updates the position of the currently visible menu with an option to animate the action.
- [dismissMenu](uieditmenuinteraction/dismissmenu%28%29.md): Dismiss the edit menu if present.
- [locationInView:](uieditmenuinteraction/location%28in_%29.md): Returns the location of the user interaction in the specified view’s coordinate system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Related Documentation

- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md): Optimize your iPad app’s user experience by adopting desktop-class enhancements for multitasking with Stage Manager, document interactions, text editing, search, and more.

### Edit menus

- [UIEditMenuInteractionDelegate](uieditmenuinteractiondelegate.md): The methods for customizing the menu the interaction displays.
- [UIEditMenuConfiguration](uieditmenuconfiguration.md): An object containing the configuration details for the menu your app presents in response to an edit menu interaction.
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md): A set of standard methods that apps can adopt to support editing.
