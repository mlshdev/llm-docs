> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedate](https://developer.apple.com/documentation/watchkit/wkinterfacedate)

# WKInterfaceDate (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

A label that displays the current date or time.

## Declaration

```swift
class WKInterfaceDate
```

<a id="overview"></a>

## Overview

Use [WKInterfaceDate](wkinterfacedate.md) when you want to display date or time information without further interaction from your WatchKit extension. At runtime, use the date object to configure the appearance of the date and time information being displayed.

Do not subclass or create instances of this class yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a date object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var myDate: WKInterfaceDate!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceDate* myDate;
```

During the initialization of your interface controller, WatchKit creates any needed date objects and assigns them to their connected outlets. After those objects are set, you can use them to make changes to the onscreen date and time information.

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your date interface object in your storyboard file. The following table lists the attributes you can configure and their meaning.

| Attribute | Description |
| --- | --- |
| Format | A selector for choosing between standard and custom formats. For standard formats, you use the Date and Time attributes to configure the information you want to display. Changing the value of this attribute to Custom lets you configure the date exactly the way you want based on the format options described in [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i). |
| Date | The date information to display. The date options correspond to the values of the [DateFormatter.Style](https://developer.apple.com/documentation/foundation/dateformatter/style) type. |
| Time | The time information to display. The time options correspond to the values of the [DateFormatter.Style](https://developer.apple.com/documentation/foundation/dateformatter/style) type. |
| Preview | A preview of what the date and time will look like. |

A date object is a custom label whose text you cannot set directly. However, you can customize the appearance of the date object as you would customize a label using the Attributes inspector in Xcode. For information about the label attributes you can configure, see [WKInterfaceLabel](wkinterfacelabel.md).

## Topics

### Configuring the Date and Time Display

- [setTextColor(\_:)](wkinterfacedate/settextcolor%28__%29.md): Sets the color of the date and time text.
- [setTimeZone(\_:)](wkinterfacedate/settimezone%28__%29.md): Sets the time zone to use when displaying time information.
- [setCalendar(\_:)](wkinterfacedate/setcalendar%28__%29.md): Sets the calendar to use when formatting date information.

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
- [WKInterfaceTimer](wkinterfacetimer.md): A label that displays a countdown or count-up timer.
- [WKInterfaceButton](wkinterfacebutton.md): A button in the user interface of your watchOS app.
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md): A button that you can use to trigger a Sign in with Apple request.
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.

# WKInterfaceDate (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

A label that displays the current date or time.

## Declaration

```objectivec
@interface WKInterfaceDate : WKInterfaceObject
```

<a id="overview"></a>

## Overview

Use [WKInterfaceDate](wkinterfacedate.md) when you want to display date or time information without further interaction from your WatchKit extension. At runtime, use the date object to configure the appearance of the date and time information being displayed.

Do not subclass or create instances of this class yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a date object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var myDate: WKInterfaceDate!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceDate* myDate;
```

During the initialization of your interface controller, WatchKit creates any needed date objects and assigns them to their connected outlets. After those objects are set, you can use them to make changes to the onscreen date and time information.

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your date interface object in your storyboard file. The following table lists the attributes you can configure and their meaning.

| Attribute | Description |
| --- | --- |
| Format | A selector for choosing between standard and custom formats. For standard formats, you use the Date and Time attributes to configure the information you want to display. Changing the value of this attribute to Custom lets you configure the date exactly the way you want based on the format options described in [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i). |
| Date | The date information to display. The date options correspond to the values of the [NSDateFormatterStyle](https://developer.apple.com/documentation/foundation/dateformatter/style) type. |
| Time | The time information to display. The time options correspond to the values of the [NSDateFormatterStyle](https://developer.apple.com/documentation/foundation/dateformatter/style) type. |
| Preview | A preview of what the date and time will look like. |

A date object is a custom label whose text you cannot set directly. However, you can customize the appearance of the date object as you would customize a label using the Attributes inspector in Xcode. For information about the label attributes you can configure, see [WKInterfaceLabel](wkinterfacelabel.md).

## Topics

### Configuring the Date and Time Display

- [setTextColor:](wkinterfacedate/settextcolor%28__%29.md): Sets the color of the date and time text.
- [setTimeZone:](wkinterfacedate/settimezone%28__%29.md): Sets the time zone to use when displaying time information.
- [setCalendar:](wkinterfacedate/setcalendar%28__%29.md): Sets the calendar to use when formatting date information.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

## See Also

### Controls

- [WKInterfaceLabel](wkinterfacelabel.md): An interface element that displays static text.
- [WKInterfaceTimer](wkinterfacetimer.md): A label that displays a countdown or count-up timer.
- [WKInterfaceButton](wkinterfacebutton.md): A button in the user interface of your watchOS app.
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md): A button that you can use to trigger a Sign in with Apple request.
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.
