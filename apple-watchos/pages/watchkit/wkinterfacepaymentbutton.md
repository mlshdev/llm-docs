> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacepaymentbutton](https://developer.apple.com/documentation/watchkit/wkinterfacepaymentbutton)

# WKInterfacePaymentButton (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 3.0+

A button that you can use to trigger payments through Apple Pay.

## Declaration

```swift
class WKInterfacePaymentButton
```

<a id="overview"></a>

## Overview

Use a payment button to initiate an Apple Pay transaction on Apple Watch.

![A screenshot of the Apple Pay Button.](https://developer.apple.com/images/com.apple.watchkit/media-2930172@2x.png)

> **Note**

>  The payment button (see [Figure 1](wkinterfacepaymentbutton.md#2930172)) does not create or process payments. It simply provides a button with the Apple Pay mark. You must connect this button to an action method that creates an Apple Pay payment request. For more information on using the Apple Pay mark, see [Apple Pay Identity Guidelines](https://developer.apple.com/apple-pay/Apple-Pay-Identity-Guidelines.pdf).

Do not subclass or create instances of this class yourself. Instead, drag a Payment Button object from your Object Library and add it to your storyboard. Then define an outlet in your interface controller class and connect it to the payment button object.

**Swift**

```swift
@IBOutlet weak var paymentButton: WKInterfacePaymentButton!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfacePaymentButton* paymentButton;
```

During the initialization of your interface controller, WatchKit creates a new instance of this class and assigns it to your outlet. At that point, you can use the object in your outlet to make changes to the payment button. This class does not provide any new public methods or properties. However, it does inherit the methods and properties of its superclass, the [WKInterfaceObject](wkinterfaceobject.md) class.

To respond to taps in the payment button, declare a method of this form in the interface controller class that manages the button:

**Swift**

```swift
@IBAction func beginApplePayTransaction()
```

**Objective-C**

```objc
- (IBAction)beginApplePayTransaction
```

You can change the name of your action method to anything you like. In your Xcode storyboard, connect the button’s selector to the custom action method defined in your class. In the action method, create the payment request and present the payment sheet by calling a [PKPaymentAuthorizationController](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller) object’s [present(completion:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller/present%28completion:%29) method.

Payment buttons can be used only to initiate Apple Pay transactions.

## Topics

### Initializing for SwiftUI

- [init(target:action:)](wkinterfacepaymentbutton/init%28target_action_%29.md): Creates a payment button for use in SwiftUI.

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
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md): A button that you can use to trigger a Sign in with Apple request.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.

# WKInterfacePaymentButton (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 3.0+

A button that you can use to trigger payments through Apple Pay.

## Declaration

```objectivec
@interface WKInterfacePaymentButton : WKInterfaceObject
```

<a id="overview"></a>

## Overview

Use a payment button to initiate an Apple Pay transaction on Apple Watch.

![A screenshot of the Apple Pay Button.](https://developer.apple.com/images/com.apple.watchkit/media-2930172@2x.png)

> **Note**

>  The payment button (see [Figure 1](wkinterfacepaymentbutton.md#2930172)) does not create or process payments. It simply provides a button with the Apple Pay mark. You must connect this button to an action method that creates an Apple Pay payment request. For more information on using the Apple Pay mark, see [Apple Pay Identity Guidelines](https://developer.apple.com/apple-pay/Apple-Pay-Identity-Guidelines.pdf).

Do not subclass or create instances of this class yourself. Instead, drag a Payment Button object from your Object Library and add it to your storyboard. Then define an outlet in your interface controller class and connect it to the payment button object.

**Swift**

```swift
@IBOutlet weak var paymentButton: WKInterfacePaymentButton!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfacePaymentButton* paymentButton;
```

During the initialization of your interface controller, WatchKit creates a new instance of this class and assigns it to your outlet. At that point, you can use the object in your outlet to make changes to the payment button. This class does not provide any new public methods or properties. However, it does inherit the methods and properties of its superclass, the [WKInterfaceObject](wkinterfaceobject.md) class.

To respond to taps in the payment button, declare a method of this form in the interface controller class that manages the button:

**Swift**

```swift
@IBAction func beginApplePayTransaction()
```

**Objective-C**

```objc
- (IBAction)beginApplePayTransaction
```

You can change the name of your action method to anything you like. In your Xcode storyboard, connect the button’s selector to the custom action method defined in your class. In the action method, create the payment request and present the payment sheet by calling a [PKPaymentAuthorizationController](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller) object’s [presentWithCompletion:](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller/present%28completion:%29) method.

Payment buttons can be used only to initiate Apple Pay transactions.

## Topics

### Initializing for SwiftUI

- [initWithTarget:action:](wkinterfacepaymentbutton/init%28target_action_%29.md): Creates a payment button for use in SwiftUI.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

## See Also

### Controls

- [WKInterfaceLabel](wkinterfacelabel.md): An interface element that displays static text.
- [WKInterfaceDate](wkinterfacedate.md): A label that displays the current date or time.
- [WKInterfaceTimer](wkinterfacetimer.md): A label that displays a countdown or count-up timer.
- [WKInterfaceButton](wkinterfacebutton.md): A button in the user interface of your watchOS app.
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md): A button that you can use to trigger a Sign in with Apple request.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.
