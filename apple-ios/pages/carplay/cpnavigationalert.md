> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationalert](https://developer.apple.com/documentation/carplay/cpnavigationalert)

# CPNavigationAlert (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An alert that displays map- or navigation-related information to the user.

## Declaration

```swift
@MainActor class CPNavigationAlert
```

<a id="overview"></a>

## Overview

To display a navigation alert, create an instance of [CPNavigationAlert](cpnavigationalert.md) and pass it to the map template’s [present(navigationAlert:animated:)](cpmaptemplate/present%28navigationalert_animated_%29.md) method. When creating an alert, you must provide a title, action, and duration. The duration tells the system how long to show the alert before automatically dismissing it. You can also include a subtitle and secondary action when needed.

The system displays the primary and secondary actions as buttons on the alert. After the user taps the button, the system calls the action’s [handler](cpalertaction/handler.md) block, which is where your app performs the requested action. The system also dismisses the alert after the user taps the button. However, your app can dismiss the alert without any user interaction by calling [dismissNavigationAlert(animated:completion:)](cpmaptemplate/dismissnavigationalert%28animated_completion_%29.md).

## Topics

### Creating a Navigation Alert

- [init(titleVariants:subtitleVariants:image:primaryAction:secondaryAction:duration:)](cpnavigationalert/init%28titlevariants_subtitlevariants_image_primaryaction_secondaryaction_duration_%29.md): Creates a navigation alert.
- [init(titleVariants:subtitleVariants:imageSet:primaryAction:secondaryAction:duration:)](cpnavigationalert/init%28titlevariants_subtitlevariants_imageset_primaryaction_secondaryaction_duration_%29.md): Deprecated. Creates a navigation alert.

### Getting Titles

- [titleVariants](cpnavigationalert/titlevariants.md): An array of title strings.
- [subtitleVariants](cpnavigationalert/subtitlevariants.md): An array of subtitle strings.
- [updateTitleVariants(\_:subtitleVariants:)](cpnavigationalert/updatetitlevariants%28__subtitlevariants_%29.md): Updates title and subtitle variants.

### Getting the Alert Image

- [image](cpnavigationalert/image.md): An image displayed in the navigation alert.
- [imageSet](cpnavigationalert/imageset.md): An image set displayed in the navigation alert.

### Getting the Actions

- [primaryAction](cpnavigationalert/primaryaction.md): The primary action, and button, for the navigation alert.
- [secondaryAction](cpnavigationalert/secondaryaction.md): An optional secondary action, and button, for the navigation alert.

### Getting the Alert Duration

- [duration](cpnavigationalert/duration.md): The amount of time, in seconds, that the alert is visible.
- [CPNavigationAlertMinimumDuration](cpnavigationalertminimumduration.md): A constant that defines the minimum amount of time that an alert is visible.

### Enumerations

- [CPNavigationAlert.DismissalContext](cpnavigationalert/dismissalcontext.md): A set of reasons for dismissing a navigation alert.

### Initializers

- [init(coder:)](cpnavigationalert/init%28coder_%29.md)
- [init(titleVariants:subtitleVariants:avatarImage:alert:actions:duration:)](cpnavigationalert/init%28titlevariants_subtitlevariants_avatarimage_alert_actions_duration_%29.md): Initialize a @c CPNavigationAlert with a title, image, an array of actions, and duration.
- [init(titleVariants:subtitleVariants:avatarImage:alertImage:actions:duration:)](cpnavigationalert/init%28titlevariants_subtitlevariants_avatarimage_alertimage_actions_duration_%29.md)

### Instance Properties

- [actions](cpnavigationalert/actions.md): The array of actions associated with this navigation alert.
- [alertImage](cpnavigationalert/alertimage.md)
- [avatarImage](cpnavigationalert/avatarimage.md)
- [showsCloseButton](cpnavigationalert/showsclosebutton.md): A Boolean value indicating whether the close button is allowed to appear.

### Instance Methods

- [updateTitleVariants(\_:subtitleVariants:avatarImage:alert:actions:duration:)](cpnavigationalert/updatetitlevariants%28__subtitlevariants_avatarimage_alert_actions_duration_%29.md): Update the navigation alert with new title variants, subtitle variants, image, actions, and duration.

### Type Properties

- [maximumActionsCount](cpnavigationalert/maximumactionscount.md): The maximum number of actions that a @c CPNavigationAlert can display.
- [maximumAlertImageSize](cpnavigationalert/maximumalertimagesize.md): The maximum image size for the alert image that a @c CPNavigationAlert can display.
- [maximumAvatarImageSize](cpnavigationalert/maximumavatarimagesize.md): The maximum image size for the avatar image that a @c CPNavigationAlert can display.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Displaying a Navigation Alert

- [present(navigationAlert:animated:)](cpmaptemplate/present%28navigationalert_animated_%29.md): Displays a navigation alert on the map template.
- [dismissNavigationAlert(animated:completion:)](cpmaptemplate/dismissnavigationalert%28animated_completion_%29.md): Tells the map template to dismiss the visable navigation alert.
- [currentNavigationAlert](cpmaptemplate/currentnavigationalert.md): The visible navigation alert.

# CPNavigationAlert (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An alert that displays map- or navigation-related information to the user.

## Declaration

```objectivec
@interface CPNavigationAlert : NSObject
```

<a id="overview"></a>

## Overview

To display a navigation alert, create an instance of [CPNavigationAlert](cpnavigationalert.md) and pass it to the map template’s [presentNavigationAlert:animated:](cpmaptemplate/present%28navigationalert_animated_%29.md) method. When creating an alert, you must provide a title, action, and duration. The duration tells the system how long to show the alert before automatically dismissing it. You can also include a subtitle and secondary action when needed.

The system displays the primary and secondary actions as buttons on the alert. After the user taps the button, the system calls the action’s [handler](cpalertaction/handler.md) block, which is where your app performs the requested action. The system also dismisses the alert after the user taps the button. However, your app can dismiss the alert without any user interaction by calling [dismissNavigationAlertAnimated:completion:](cpmaptemplate/dismissnavigationalert%28animated_completion_%29.md).

## Topics

### Creating a Navigation Alert

- [initWithTitleVariants:subtitleVariants:image:primaryAction:secondaryAction:duration:](cpnavigationalert/init%28titlevariants_subtitlevariants_image_primaryaction_secondaryaction_duration_%29.md): Creates a navigation alert.
- [initWithTitleVariants:subtitleVariants:imageSet:primaryAction:secondaryAction:duration:](cpnavigationalert/init%28titlevariants_subtitlevariants_imageset_primaryaction_secondaryaction_duration_%29.md): Deprecated. Creates a navigation alert.

### Getting Titles

- [titleVariants](cpnavigationalert/titlevariants.md): An array of title strings.
- [subtitleVariants](cpnavigationalert/subtitlevariants.md): An array of subtitle strings.
- [updateTitleVariants:subtitleVariants:](cpnavigationalert/updatetitlevariants%28__subtitlevariants_%29.md): Updates title and subtitle variants.

### Getting the Alert Image

- [image](cpnavigationalert/image.md): An image displayed in the navigation alert.
- [imageSet](cpnavigationalert/imageset.md): An image set displayed in the navigation alert.

### Getting the Actions

- [primaryAction](cpnavigationalert/primaryaction.md): The primary action, and button, for the navigation alert.
- [secondaryAction](cpnavigationalert/secondaryaction.md): An optional secondary action, and button, for the navigation alert.

### Getting the Alert Duration

- [duration](cpnavigationalert/duration.md): The amount of time, in seconds, that the alert is visible.
- [CPNavigationAlertMinimumDuration](cpnavigationalertminimumduration.md): A constant that defines the minimum amount of time that an alert is visible.

### Enumerations

- [CPNavigationAlertDismissalContext](cpnavigationalert/dismissalcontext.md): A set of reasons for dismissing a navigation alert.

### Instance Properties

- [actions](cpnavigationalert/actions.md): The array of actions associated with this navigation alert.
- [alertImage](cpnavigationalert/alertimage.md)
- [avatarImage](cpnavigationalert/avatarimage.md)
- [showsCloseButton](cpnavigationalert/showsclosebutton.md): A Boolean value indicating whether the close button is allowed to appear.

### Instance Methods

- [initWithTitleVariants:subtitleVariants:avatarImage:alertImage:actions:duration:](cpnavigationalert/init%28titlevariants_subtitlevariants_avatarimage_alert_actions_duration_%29.md): Initialize a @c CPNavigationAlert with a title, image, an array of actions, and duration.
- [updateTitleVariants:subtitleVariants:avatarImage:alertImage:actions:duration:](cpnavigationalert/updatetitlevariants%28__subtitlevariants_avatarimage_alert_actions_duration_%29.md): Update the navigation alert with new title variants, subtitle variants, image, actions, and duration.

### Type Properties

- [maximumActionsCount](cpnavigationalert/maximumactionscount.md): The maximum number of actions that a @c CPNavigationAlert can display.
- [maximumAlertImageSize](cpnavigationalert/maximumalertimagesize.md): The maximum image size for the alert image that a @c CPNavigationAlert can display.
- [maximumAvatarImageSize](cpnavigationalert/maximumavatarimagesize.md): The maximum image size for the avatar image that a @c CPNavigationAlert can display.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Displaying a Navigation Alert

- [presentNavigationAlert:animated:](cpmaptemplate/present%28navigationalert_animated_%29.md): Displays a navigation alert on the map template.
- [dismissNavigationAlertAnimated:completion:](cpmaptemplate/dismissnavigationalert%28animated_completion_%29.md): Tells the map template to dismiss the visable navigation alert.
- [currentNavigationAlert](cpmaptemplate/currentnavigationalert.md): The visible navigation alert.
