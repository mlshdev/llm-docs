> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacebutton](https://developer.apple.com/documentation/watchkit/wkinterfacebutton)

# WKInterfaceButton (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

A button in the user interface of your watchOS app.

## Declaration

```swift
class WKInterfaceButton
```

<a id="overview"></a>

## Overview

The content of a button’s tappable area is filled with text and an optional background color or image. When tapped by the user, the button calls its associated action method, which you define on the owning interface controller. Use that action method to initiate tasks and update your app’s interface.

Do not subclass or create instances of this class yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a button object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var myButton: WKInterfaceButton!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceButton* myButton;
```

During the initialization of your interface controller, WatchKit creates a new instance of this class and assigns it to your outlet. At that point, you can use the object in your outlet to make changes to the onscreen button.

To respond to taps in the button, declare a method of this form in the interface controller class that manages the button:

**Swift**

```swift
@IBAction func buttonAction()
```

**Objective-C**

```objc
- (IBAction)buttonAction
```

You can change the name of your action method to anything you like. In your Xcode storyboard, connect the button’s selector to the custom action method defined in your class.

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your button interface object in your storyboard file. The following table lists the attributes you can configure in your storyboard and their meaning.

| Attribute | Description |
| --- | --- |
| Content | The type of content contained in the button. A button can contain a single text label or a group. For buttons containing a group, you can add text, images, and other objects to the group. |
| Title | The title string assigned to the interface controller. You can also set this value programmatically using the [setTitle(\_:)](wkinterfacebutton/settitle%28__%29.md) or [setAttributedTitle(\_:)](wkinterfacebutton/setattributedtitle%28__%29.md) method. |
| Color (Button) | The color to apply to the button’s title. |
| Font | The font to apply to the button’s title. You can set font information programmatically using the [setAttributedTitle(\_:)](wkinterfacebutton/setattributedtitle%28__%29.md) method. |
| Enabled | A checkbox indicating whether the button is enabled and sends events when tapped. You can also configure this value programmatically using the [setEnabled(\_:)](wkinterfacebutton/setenabled%28__%29.md) method. |
| Background | The background image to display in the button. You can also set this value programmatically using the [setBackgroundImage(\_:)](wkinterfacebutton/setbackgroundimage%28__%29.md), [setBackgroundImageData(\_:)](wkinterfacebutton/setbackgroundimagedata%28__%29.md), or [setBackgroundImageNamed(\_:)](wkinterfacebutton/setbackgroundimagenamed%28__%29.md) method. |
| Color (Background) | The background color for the button. |

## Topics

### Setting the Button Title

- [setTitle(\_:)](wkinterfacebutton/settitle%28__%29.md): Sets the button title to the specified string.
- [setAttributedTitle(\_:)](wkinterfacebutton/setattributedtitle%28__%29.md): Sets the button title to the specified attributed string.

### Setting the Button Background

- [setBackgroundColor(\_:)](wkinterfacebutton/setbackgroundcolor%28__%29.md): Sets the background color of the button.
- [setBackgroundImage(\_:)](wkinterfacebutton/setbackgroundimage%28__%29.md): Sets the button’s background image to the specified image.
- [setBackgroundImageData(\_:)](wkinterfacebutton/setbackgroundimagedata%28__%29.md): Sets the button’s background image to the image in the specified data object.
- [setBackgroundImageNamed(\_:)](wkinterfacebutton/setbackgroundimagenamed%28__%29.md): Sets the button’s background image to the image in the named resource file.

### Enabling and Disabling the Button

- [setEnabled(\_:)](wkinterfacebutton/setenabled%28__%29.md): Enables or disables the button.

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
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md): A button that you can use to trigger a Sign in with Apple request.
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.

# WKInterfaceButton (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

A button in the user interface of your watchOS app.

## Declaration

```objectivec
@interface WKInterfaceButton : WKInterfaceObject
```

<a id="overview"></a>

## Overview

The content of a button’s tappable area is filled with text and an optional background color or image. When tapped by the user, the button calls its associated action method, which you define on the owning interface controller. Use that action method to initiate tasks and update your app’s interface.

Do not subclass or create instances of this class yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a button object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var myButton: WKInterfaceButton!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceButton* myButton;
```

During the initialization of your interface controller, WatchKit creates a new instance of this class and assigns it to your outlet. At that point, you can use the object in your outlet to make changes to the onscreen button.

To respond to taps in the button, declare a method of this form in the interface controller class that manages the button:

**Swift**

```swift
@IBAction func buttonAction()
```

**Objective-C**

```objc
- (IBAction)buttonAction
```

You can change the name of your action method to anything you like. In your Xcode storyboard, connect the button’s selector to the custom action method defined in your class.

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your button interface object in your storyboard file. The following table lists the attributes you can configure in your storyboard and their meaning.

| Attribute | Description |
| --- | --- |
| Content | The type of content contained in the button. A button can contain a single text label or a group. For buttons containing a group, you can add text, images, and other objects to the group. |
| Title | The title string assigned to the interface controller. You can also set this value programmatically using the [setTitle:](wkinterfacebutton/settitle%28__%29.md) or [setAttributedTitle:](wkinterfacebutton/setattributedtitle%28__%29.md) method. |
| Color (Button) | The color to apply to the button’s title. |
| Font | The font to apply to the button’s title. You can set font information programmatically using the [setAttributedTitle:](wkinterfacebutton/setattributedtitle%28__%29.md) method. |
| Enabled | A checkbox indicating whether the button is enabled and sends events when tapped. You can also configure this value programmatically using the [setEnabled:](wkinterfacebutton/setenabled%28__%29.md) method. |
| Background | The background image to display in the button. You can also set this value programmatically using the [setBackgroundImage:](wkinterfacebutton/setbackgroundimage%28__%29.md), [setBackgroundImageData:](wkinterfacebutton/setbackgroundimagedata%28__%29.md), or [setBackgroundImageNamed:](wkinterfacebutton/setbackgroundimagenamed%28__%29.md) method. |
| Color (Background) | The background color for the button. |

## Topics

### Setting the Button Title

- [setTitle:](wkinterfacebutton/settitle%28__%29.md): Sets the button title to the specified string.
- [setAttributedTitle:](wkinterfacebutton/setattributedtitle%28__%29.md): Sets the button title to the specified attributed string.

### Setting the Button Background

- [setBackgroundColor:](wkinterfacebutton/setbackgroundcolor%28__%29.md): Sets the background color of the button.
- [setBackgroundImage:](wkinterfacebutton/setbackgroundimage%28__%29.md): Sets the button’s background image to the specified image.
- [setBackgroundImageData:](wkinterfacebutton/setbackgroundimagedata%28__%29.md): Sets the button’s background image to the image in the specified data object.
- [setBackgroundImageNamed:](wkinterfacebutton/setbackgroundimagenamed%28__%29.md): Sets the button’s background image to the image in the named resource file.

### Enabling and Disabling the Button

- [setEnabled:](wkinterfacebutton/setenabled%28__%29.md): Enables or disables the button.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

## See Also

### Controls

- [WKInterfaceLabel](wkinterfacelabel.md): An interface element that displays static text.
- [WKInterfaceDate](wkinterfacedate.md): A label that displays the current date or time.
- [WKInterfaceTimer](wkinterfacetimer.md): A label that displays a countdown or count-up timer.
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md): A button that you can use to trigger a Sign in with Apple request.
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.
