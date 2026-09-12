> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceauthorizationappleidbutton](https://developer.apple.com/documentation/watchkit/wkinterfaceauthorizationappleidbutton)

# WKInterfaceAuthorizationAppleIDButton (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 6.0+

A button that you can use to trigger a Sign in with Apple request.

## Declaration

```swift
class WKInterfaceAuthorizationAppleIDButton
```

<a id="overview"></a>

## Overview

Use the authorization button to initiate Sign in with Apple on Apple Watch. You can’t use this button to do anything other than initiating sign-in requests.

> **Note**

>  The authorization button doesn’t perform the sign-in request; it provides a button with the correct branding. You must connect this button to an action method to perform the actual request. For more information, see [Authentication Services](https://developer.apple.com/documentation/authenticationservices).

Don’t subclass or create instances of this class yourself. Instead, drag the button from the Object library and add it to your storyboard. Then define an outlet in your interface controller class and connect it to the button object.

**Swift**

```swift
@IBOutlet weak var authorizationButton: WKInterfaceAuthorizationAppleIDButton!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceAuthorizationAppleIDButton* authorizationButton;
```

While initializing the interface controller, WatchKit creates a new instance of this class and assigns it to your outlet. At that point, you can use the object in your outlet to make changes to the button (for example, hiding or disabling the button). This class inherits the methods and properties from its superclass, the [WKInterfaceObject](wkinterfaceobject.md) class.

To respond to authorization button taps, connect the interface object in the storyboard to an action method in the interface controller:

**Swift**

```swift
@IBAction func beginAppleIDSignIn()
```

**Objective-C**

```objc
- (IBAction)beginAppleIDSignIn
```

In the action method, create a sign-in request using the authorization provider, and then use an instance of [ASAuthorizationController](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller) to execute the request.

## Topics

### Initializing for SwiftUI

- [init(style:target:action:)](wkinterfaceauthorizationappleidbutton/init%28style_target_action_%29.md): Creates an authorization button for use in SwiftUI.
- [WKInterfaceAuthorizationAppleIDButton.Style](wkinterfaceauthorizationappleidbutton/style.md): Values that define an authorization button’s style.
- [init(target:action:)](wkinterfaceauthorizationappleidbutton/init%28target_action_%29.md): Deprecated. Creates an authorization button for use in SwiftUI.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Controls

- [WKInterfaceLabel](wkinterfacelabel.md): An interface element that displays static text.
- [WKInterfaceDate](wkinterfacedate.md): A label that displays the current date or time.
- [WKInterfaceTimer](wkinterfacetimer.md): A label that displays a countdown or count-up timer.
- [WKInterfaceButton](wkinterfacebutton.md): A button in the user interface of your watchOS app.
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.

# WKInterfaceAuthorizationAppleIDButton (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 6.0+

A button that you can use to trigger a Sign in with Apple request.

## Declaration

```objectivec
@interface WKInterfaceAuthorizationAppleIDButton : WKInterfaceObject
```

<a id="overview"></a>

## Overview

Use the authorization button to initiate Sign in with Apple on Apple Watch. You can’t use this button to do anything other than initiating sign-in requests.

> **Note**

>  The authorization button doesn’t perform the sign-in request; it provides a button with the correct branding. You must connect this button to an action method to perform the actual request. For more information, see [Authentication Services](https://developer.apple.com/documentation/authenticationservices).

Don’t subclass or create instances of this class yourself. Instead, drag the button from the Object library and add it to your storyboard. Then define an outlet in your interface controller class and connect it to the button object.

**Swift**

```swift
@IBOutlet weak var authorizationButton: WKInterfaceAuthorizationAppleIDButton!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceAuthorizationAppleIDButton* authorizationButton;
```

While initializing the interface controller, WatchKit creates a new instance of this class and assigns it to your outlet. At that point, you can use the object in your outlet to make changes to the button (for example, hiding or disabling the button). This class inherits the methods and properties from its superclass, the [WKInterfaceObject](wkinterfaceobject.md) class.

To respond to authorization button taps, connect the interface object in the storyboard to an action method in the interface controller:

**Swift**

```swift
@IBAction func beginAppleIDSignIn()
```

**Objective-C**

```objc
- (IBAction)beginAppleIDSignIn
```

In the action method, create a sign-in request using the authorization provider, and then use an instance of [ASAuthorizationController](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller) to execute the request.

## Topics

### Initializing for SwiftUI

- [initWithStyle:target:action:](wkinterfaceauthorizationappleidbutton/init%28style_target_action_%29.md): Creates an authorization button for use in SwiftUI.
- [WKInterfaceAuthorizationAppleIDButtonStyle](wkinterfaceauthorizationappleidbutton/style.md): Values that define an authorization button’s style.
- [initWithTarget:action:](wkinterfaceauthorizationappleidbutton/init%28target_action_%29.md): Deprecated. Creates an authorization button for use in SwiftUI.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

## See Also

### Controls

- [WKInterfaceLabel](wkinterfacelabel.md): An interface element that displays static text.
- [WKInterfaceDate](wkinterfacedate.md): A label that displays the current date or time.
- [WKInterfaceTimer](wkinterfacetimer.md): A label that displays a countdown or count-up timer.
- [WKInterfaceButton](wkinterfacebutton.md): A button in the user interface of your watchOS app.
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.
