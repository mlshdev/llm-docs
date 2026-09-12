> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthenticationembeddedui/laauthenticationview](https://developer.apple.com/documentation/localauthenticationembeddedui/laauthenticationview)

# LAAuthenticationView (Swift)

**Framework:** Local Authentication Embedded UI  
**Kind:** Class  
**Availability:** macOS 12.0+

A graphical representation of the state of biometric authentication.

## Declaration

```swift
class LAAuthenticationView
```

<a id="overview"></a>

## Overview

In the view that you use to manage authentication, add a local authentication view as a subview and provide it with an [LAContext](../localauthentication/lacontext.md) instance. For example, you can do this in the [loadView()](https://developer.apple.com/documentation/appkit/nsviewcontroller/loadview%28%29) method of your view controller:

```swift
func loadView() {
    laContext = LAContext()
    laView = LAAuthenticationView(context: laContext)

    view.addSubview(laView)
    laView.translatesAutoresizingMaskIntoConstraints = false

    // Add more subviews and layout constraints...
}
```

When the view appears, call the context’s [evaluatePolicy(\_:localizedReason:reply:)](../localauthentication/lacontext/evaluatepolicy%28__localizedreason_reply_%29.md) method to initiate the authentication:

```swift
override func viewDidAppear() {
    super.viewDidAppear()

    laContext.evaluatePolicy(
        .deviceOwnerAuthenticationWithBiometricsOrWatch,
        localizedReason: "access your data"
    ) { success, error in
        // Handle the result.
    }
}
```

The local authentication view displays an icon that depends on the type of authentication you request, and the types of authentication that the system supports. For example, for a device that supports Touch ID, if you request the [deviceOwnerAuthenticationWithBiometricsOrWatch](../localauthentication/lapolicy/deviceownerauthenticationwithbiometricsorwatch.md) policy, like in the example above, the view displays the familiar finger print icon:

![A screenshot of a circular icon with a pattern that resembles a finger print.](https://developer.apple.com/images/com.apple.Local-Authentication-Embedded-UI/laauthenticationview-1@2x.png)

In the case above, if the user has a connected Apple Watch, that authentication mechanism works as well. If you limit the authentication to the [deviceOwnerAuthenticationWithWatch](../localauthentication/lapolicy/deviceownerauthenticationwithwatch.md) policy, the icon shows an Apple Watch in profile:

![A screenshot of a circular icon containing the profile of an Apple Watch.](https://developer.apple.com/images/com.apple.Local-Authentication-Embedded-UI/laauthenticationview-2@2x.png)

You can include other content around this icon that suits your app. The system also displays a message on the Touch Bar or on the user’s Apple Watch, if appropriate. When the evaluation succeeds, the icon transitions into a checkmark:

![A screenshot of a circular icon with a blue checkmark inside.](https://developer.apple.com/images/com.apple.Local-Authentication-Embedded-UI/laauthenticationview-3@2x.png)

If you call the evaluation without first attaching it to a local authentication view, the system shows a standard authentication alert instead.

## Topics

### Creating a local authentication view

- [init(context:)](laauthenticationview/init%28context_%29.md): Creates a new authentication icon that reflects the current authentication state.
- [context](laauthenticationview/context.md): The local authentication context associated with the authentication view.

### Controlling the size of a local authentication view

- [init(context:controlSize:)](laauthenticationview/init%28context_controlsize_%29.md): Creates a new authentication icon that reflects the current authentication state, using a specified size.
- [controlSize](laauthenticationview/controlsize.md): The size of the local authentication view user interface element.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)

# LAAuthenticationView (Objective-C)

**Framework:** Local Authentication Embedded UI  
**Kind:** Class  
**Availability:** macOS 12.0+

A graphical representation of the state of biometric authentication.

## Declaration

```objectivec
@interface LAAuthenticationView : NSView
```

<a id="overview"></a>

## Overview

In the view that you use to manage authentication, add a local authentication view as a subview and provide it with an [LAContext](../localauthentication/lacontext.md) instance. For example, you can do this in the [loadView](https://developer.apple.com/documentation/appkit/nsviewcontroller/loadview%28%29) method of your view controller:

```swift
func loadView() {
    laContext = LAContext()
    laView = LAAuthenticationView(context: laContext)

    view.addSubview(laView)
    laView.translatesAutoresizingMaskIntoConstraints = false

    // Add more subviews and layout constraints...
}
```

When the view appears, call the context’s [evaluatePolicy:localizedReason:reply:](../localauthentication/lacontext/evaluatepolicy%28__localizedreason_reply_%29.md) method to initiate the authentication:

```swift
override func viewDidAppear() {
    super.viewDidAppear()

    laContext.evaluatePolicy(
        .deviceOwnerAuthenticationWithBiometricsOrWatch,
        localizedReason: "access your data"
    ) { success, error in
        // Handle the result.
    }
}
```

The local authentication view displays an icon that depends on the type of authentication you request, and the types of authentication that the system supports. For example, for a device that supports Touch ID, if you request the [LAPolicyDeviceOwnerAuthenticationWithBiometricsOrWatch](../localauthentication/lapolicy/deviceownerauthenticationwithbiometricsorwatch.md) policy, like in the example above, the view displays the familiar finger print icon:

![A screenshot of a circular icon with a pattern that resembles a finger print.](https://developer.apple.com/images/com.apple.Local-Authentication-Embedded-UI/laauthenticationview-1@2x.png)

In the case above, if the user has a connected Apple Watch, that authentication mechanism works as well. If you limit the authentication to the [LAPolicyDeviceOwnerAuthenticationWithWatch](../localauthentication/lapolicy/deviceownerauthenticationwithwatch.md) policy, the icon shows an Apple Watch in profile:

![A screenshot of a circular icon containing the profile of an Apple Watch.](https://developer.apple.com/images/com.apple.Local-Authentication-Embedded-UI/laauthenticationview-2@2x.png)

You can include other content around this icon that suits your app. The system also displays a message on the Touch Bar or on the user’s Apple Watch, if appropriate. When the evaluation succeeds, the icon transitions into a checkmark:

![A screenshot of a circular icon with a blue checkmark inside.](https://developer.apple.com/images/com.apple.Local-Authentication-Embedded-UI/laauthenticationview-3@2x.png)

If you call the evaluation without first attaching it to a local authentication view, the system shows a standard authentication alert instead.

## Topics

### Creating a local authentication view

- [initWithContext:](laauthenticationview/init%28context_%29.md): Creates a new authentication icon that reflects the current authentication state.
- [context](laauthenticationview/context.md): The local authentication context associated with the authentication view.

### Controlling the size of a local authentication view

- [initWithContext:controlSize:](laauthenticationview/init%28context_controlsize_%29.md): Creates a new authentication icon that reflects the current authentication state, using a specified size.
- [controlSize](laauthenticationview/controlsize.md): The size of the local authentication view user interface element.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
