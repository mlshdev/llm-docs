> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceslider](https://developer.apple.com/documentation/watchkit/wkinterfaceslider)

# WKInterfaceSlider (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An interface element that lets users select a single floating-point value from a range of values.

## Declaration

```swift
class WKInterfaceSlider
```

<a id="overview"></a>

## Overview

You configure the appearance of sliders in your storyboard file, including the images to display for the minimum and maximum value. At runtime, you use a slider object to enable the slider or set its value.

Do not subclass or create instances of this class yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a slider object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var mySlider: WKInterfaceSlider!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceSlider* mySlider;
```

During the initialization of your interface controller, WatchKit creates a new instance of this class and assigns it to your outlet. At that point, you can use the object in your outlet to make changes to the onscreen slider.

When the user changes the value of a slider, WatchKit delivers the new value to the slider’s action method. The format of a slider’s action method is as follows:

**Swift**

```swift
@IBAction func sliderAction(value: Float)
```

**Objective-C**

```objc
- (IBAction)sliderAction:(float)value
```

Declare a method of this form in the interface controller class used to receive the slider’s new value. You can change the method name to anything you like. When configuring the slider in Xcode, connect its selector to your custom action method.

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your slider in your storyboard file. The following table lists the attributes you can configure in your storyboard and their meaning.

| Attribute | Description |
| --- | --- |
| Value | The initial numerical value of the slider. This value must be between the specified minimum and maximum values. Clicking the slider buttons decreases or increases the current value until it reaches the minimum or maximum value. |
| Minimum | The smallest numerical value allowed by the slider. |
| Maximum | The largest numerical value allowed by the slider. |
| Steps | The number of steps between the minimum and maximum values. The slider uses the number of steps to determine how much to increment or decrement the value when the user interacts with the slider controls. |
| Continuous | The display style for the slider. When enabled, the slider value displays its value using a solid bar. When disabled, the slider displays its value using discrete steps. |
| Color | The color of the slider bar. You can also set the color programmatically using the [setColor(\_:)](wkinterfaceslider/setcolor%28__%29.md) method. |
| Min Image | The name of the image to display next to the minimum value of the slider. This image must be bundled in the WatchKit app. |
| Max Image | The name of the image to display next to the maximum value of the slider. This image must be bundled with your WatchKit app. |
| Enabled | A checkbox indicating whether the slider is enabled and whether it sends events when its value changes. |

## Topics

### Setting the Slider Value

- [setValue(\_:)](wkinterfaceslider/setvalue%28__%29.md): Changes the value of the slider.
- [setColor(\_:)](wkinterfaceslider/setcolor%28__%29.md): Sets the color of the slider bar.
- [setNumberOfSteps(\_:)](wkinterfaceslider/setnumberofsteps%28__%29.md): Sets the number of steps for the slider.

### Enabling the Slider

- [setEnabled(\_:)](wkinterfaceslider/setenabled%28__%29.md): Enables or disables the slider.

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
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.

# WKInterfaceSlider (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An interface element that lets users select a single floating-point value from a range of values.

## Declaration

```objectivec
@interface WKInterfaceSlider : WKInterfaceObject
```

<a id="overview"></a>

## Overview

You configure the appearance of sliders in your storyboard file, including the images to display for the minimum and maximum value. At runtime, you use a slider object to enable the slider or set its value.

Do not subclass or create instances of this class yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a slider object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var mySlider: WKInterfaceSlider!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceSlider* mySlider;
```

During the initialization of your interface controller, WatchKit creates a new instance of this class and assigns it to your outlet. At that point, you can use the object in your outlet to make changes to the onscreen slider.

When the user changes the value of a slider, WatchKit delivers the new value to the slider’s action method. The format of a slider’s action method is as follows:

**Swift**

```swift
@IBAction func sliderAction(value: Float)
```

**Objective-C**

```objc
- (IBAction)sliderAction:(float)value
```

Declare a method of this form in the interface controller class used to receive the slider’s new value. You can change the method name to anything you like. When configuring the slider in Xcode, connect its selector to your custom action method.

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your slider in your storyboard file. The following table lists the attributes you can configure in your storyboard and their meaning.

| Attribute | Description |
| --- | --- |
| Value | The initial numerical value of the slider. This value must be between the specified minimum and maximum values. Clicking the slider buttons decreases or increases the current value until it reaches the minimum or maximum value. |
| Minimum | The smallest numerical value allowed by the slider. |
| Maximum | The largest numerical value allowed by the slider. |
| Steps | The number of steps between the minimum and maximum values. The slider uses the number of steps to determine how much to increment or decrement the value when the user interacts with the slider controls. |
| Continuous | The display style for the slider. When enabled, the slider value displays its value using a solid bar. When disabled, the slider displays its value using discrete steps. |
| Color | The color of the slider bar. You can also set the color programmatically using the [setColor:](wkinterfaceslider/setcolor%28__%29.md) method. |
| Min Image | The name of the image to display next to the minimum value of the slider. This image must be bundled in the WatchKit app. |
| Max Image | The name of the image to display next to the maximum value of the slider. This image must be bundled with your WatchKit app. |
| Enabled | A checkbox indicating whether the slider is enabled and whether it sends events when its value changes. |

## Topics

### Setting the Slider Value

- [setValue:](wkinterfaceslider/setvalue%28__%29.md): Changes the value of the slider.
- [setColor:](wkinterfaceslider/setcolor%28__%29.md): Sets the color of the slider bar.
- [setNumberOfSteps:](wkinterfaceslider/setnumberofsteps%28__%29.md): Sets the number of steps for the slider.

### Enabling the Slider

- [setEnabled:](wkinterfaceslider/setenabled%28__%29.md): Enables or disables the slider.

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
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.
