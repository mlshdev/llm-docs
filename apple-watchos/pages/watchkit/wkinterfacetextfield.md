> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetextfield](https://developer.apple.com/documentation/watchkit/wkinterfacetextfield)

# WKInterfaceTextField (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 6.0+

An interface element that displays an editable text area.

## Declaration

```swift
class WKInterfaceTextField
```

<a id="overview"></a>

## Overview

Text fields gather text-based input from the user. The text field defines an area of editable text within your user interface, letting you create forms with multiple input fields.

![A screenshot of a sample sign in screen.](https://developer.apple.com/images/com.apple.watchkit/media-3222854@2x.png)

When the user taps the text field, WatchKit displays the text input controller. Users can enter text by selecting one of the suggestions, or using dictation or Scribble. Users can also launch the Apple Continuity Keyboard, entering text from a nearby iOS device logged into the same iCloud account.

Use text fields to gather short, specific pieces of information such as the user’s name, address, password, or credit card number. Identify the type of data using the text field’s content type, which allows the system to optimize the behavior of the text input controller and the Apple Continuity Keyboard. For more information, see `Authenticating Users on Apple Watch`.

You can also describe the expected content to the user in the text field’s placeholder. Effective placeholders let you build a form that is both compact and easy to use.

For general text input, consider using [presentTextInputController(withSuggestions:allowedInputMode:completion:)](wkinterfacecontroller/presenttextinputcontroller%28withsuggestions_allowedinputmode_completion_%29.md) or [presentTextInputControllerWithSuggestions(forLanguage:allowedInputMode:completion:)](wkinterfacecontroller/presenttextinputcontrollerwithsuggestions%28forlanguage_allowedinputmode_completion_%29.md) instead. Call these methods to display the text input controller with the suggestions that you provide. Keep in mind that the system doesn’t provide the text input controller with a content type, so the system cannot optimize its behavior.

<a id="Configure-the-Text-Field"></a>

### Configure the Text Field

As with other WatchKit interface objects, you should not subclass or create instances of this class. Instead, add a text field to your WatchKit App’s storyboard. The system then creates the text field when it loads the storyboard.

Xcode also lets you configure the text field directly in the storyboard. The following table lists the attributes and their meaning.

| Attribute | Description |
| --- | --- |
| Text | The initial text displayed by the text field. Specify a plain string or an attributed string. You can set this value programmatically using the [setText(\_:)](wkinterfacetextfield/settext%28__%29.md) or [setAttributedText(\_:)](wkinterfacetextfield/setattributedtext%28__%29.md) methods. |
| Placeholder | The placeholder text displayed by the text field. When the text field’s value is empty, the text field displays the placeholder, formatting it to make it clear that it’s not an actual text entry. Typing any text into the text field hides this string. You can set this value programmatically using the [setPlaceholder(\_:)](wkinterfacetextfield/setplaceholder%28__%29.md) or [setAttributedPlaceholder(\_:)](wkinterfacetextfield/setattributedplaceholder%28__%29.md) methods. |
| Text Color | The color of the text. The system applies this color to the entire string. You can set this value programmatically using the [setTextColor(\_:)](wkinterfacetextfield/settextcolor%28__%29.md) method. |
| Content Type | The text field’s expected content, such as a username, password, or address. You can set this value programmatically using the [setTextContentType(\_:)](wkinterfacetextfield/settextcontenttype%28__%29.md) method. |
| Secure Text Entry | A checkbox indicating whether the text field hides the text that the user entered, keeping passwords and other secure data private. You can set this value programmatically using the [setSecureTextEntry(\_:)](wkinterfacetextfield/setsecuretextentry%28__%29.md) method. |
| Enabled | A checkbox indicating whether the text field  is enabled and responds when tapped. You can configure this value programmatically using the [setEnabled(\_:)](wkinterfacetextfield/setenabled%28__%29.md) method. |

To dynamically modify a text field at runtime, define an outlet in your interface controller and connect it to the corresponding text field in your storyboard. For example, define a property with the following syntax in your interface controller class:

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceTextField* myTextField;
```

**Swift**

```swift
@IBOutlet weak var myTextField: WKInterfaceTextField!
```

During your interface controller’s initialization, WatchKit creates a new instance of the [WKInterfaceTextField](wkinterfacetextfield.md) class and assigns it to your outlet. At that point, you can use the object in your outlet to manage the text field.

<a id="Receive-Text-Input"></a>

### Receive Text Input

To receive the text entered by the user, connect the text field in the storyboard to an action method defined in your interface controller.

**Swift**

```swift
@IBAction func textFieldAction(_ value: NSString?)
```

**Objective-C**

```objc
- (IBAction)textFieldAction:(NSString*) value
```

WatchKit calls the action method after the user dismisses the text input controller. The `value` parameter contains the string entered by the user. If the user cancels the text input controller, the value is `nil`.

## Topics

### Specifying the Content Type

- [setTextContentType(\_:)](wkinterfacetextfield/settextcontenttype%28__%29.md): Sets the text field’s semantic meaning.
- [WKTextContentType](wktextcontenttype.md): Constants that specify a text field’s semantic meaning.

### Setting the Text

- [setText(\_:)](wkinterfacetextfield/settext%28__%29.md): Sets the text displayed by the text field.
- [setAttributedText(\_:)](wkinterfacetextfield/setattributedtext%28__%29.md): Sets the styled text displayed by the text field.
- [setTextColor(\_:)](wkinterfacetextfield/settextcolor%28__%29.md): Sets the text’s color.

### Setting a Placeholder

- [setPlaceholder(\_:)](wkinterfacetextfield/setplaceholder%28__%29.md): Sets the text field’s placeholder.
- [setAttributedPlaceholder(\_:)](wkinterfacetextfield/setattributedplaceholder%28__%29.md): Sets the text field’s placeholder using styled text.

### Configuring the Control

- [setEnabled(\_:)](wkinterfacetextfield/setenabled%28__%29.md): Enables or disables the text field.
- [setSecureTextEntry(\_:)](wkinterfacetextfield/setsecuretextentry%28__%29.md): Determines whether the text field hides the text entered by the user.

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

### Related Documentation

- [presentTextInputController(withSuggestions:allowedInputMode:completion:)](wkinterfacecontroller/presenttextinputcontroller%28withsuggestions_allowedinputmode_completion_%29.md): Displays a modal interface for gathering text input from the user.
- [presentTextInputControllerWithSuggestions(forLanguage:allowedInputMode:completion:)](wkinterfacecontroller/presenttextinputcontrollerwithsuggestions%28forlanguage_allowedinputmode_completion_%29.md): Displays a modal interface for gathering language-specific text input from the user.

### Controls

- [WKInterfaceLabel](wkinterfacelabel.md): An interface element that displays static text.
- [WKInterfaceDate](wkinterfacedate.md): A label that displays the current date or time.
- [WKInterfaceTimer](wkinterfacetimer.md): A label that displays a countdown or count-up timer.
- [WKInterfaceButton](wkinterfacebutton.md): A button in the user interface of your watchOS app.
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md): A button that you can use to trigger a Sign in with Apple request.
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.

# WKInterfaceTextField (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 6.0+

An interface element that displays an editable text area.

## Declaration

```objectivec
@interface WKInterfaceTextField : WKInterfaceObject
```

<a id="overview"></a>

## Overview

Text fields gather text-based input from the user. The text field defines an area of editable text within your user interface, letting you create forms with multiple input fields.

![A screenshot of a sample sign in screen.](https://developer.apple.com/images/com.apple.watchkit/media-3222854@2x.png)

When the user taps the text field, WatchKit displays the text input controller. Users can enter text by selecting one of the suggestions, or using dictation or Scribble. Users can also launch the Apple Continuity Keyboard, entering text from a nearby iOS device logged into the same iCloud account.

Use text fields to gather short, specific pieces of information such as the user’s name, address, password, or credit card number. Identify the type of data using the text field’s content type, which allows the system to optimize the behavior of the text input controller and the Apple Continuity Keyboard. For more information, see `Authenticating Users on Apple Watch`.

You can also describe the expected content to the user in the text field’s placeholder. Effective placeholders let you build a form that is both compact and easy to use.

For general text input, consider using [presentTextInputControllerWithSuggestions:allowedInputMode:completion:](wkinterfacecontroller/presenttextinputcontroller%28withsuggestions_allowedinputmode_completion_%29.md) or [presentTextInputControllerWithSuggestionsForLanguage:allowedInputMode:completion:](wkinterfacecontroller/presenttextinputcontrollerwithsuggestions%28forlanguage_allowedinputmode_completion_%29.md) instead. Call these methods to display the text input controller with the suggestions that you provide. Keep in mind that the system doesn’t provide the text input controller with a content type, so the system cannot optimize its behavior.

<a id="Configure-the-Text-Field"></a>

### Configure the Text Field

As with other WatchKit interface objects, you should not subclass or create instances of this class. Instead, add a text field to your WatchKit App’s storyboard. The system then creates the text field when it loads the storyboard.

Xcode also lets you configure the text field directly in the storyboard. The following table lists the attributes and their meaning.

| Attribute | Description |
| --- | --- |
| Text | The initial text displayed by the text field. Specify a plain string or an attributed string. You can set this value programmatically using the [setText:](wkinterfacetextfield/settext%28__%29.md) or [setAttributedText:](wkinterfacetextfield/setattributedtext%28__%29.md) methods. |
| Placeholder | The placeholder text displayed by the text field. When the text field’s value is empty, the text field displays the placeholder, formatting it to make it clear that it’s not an actual text entry. Typing any text into the text field hides this string. You can set this value programmatically using the [setPlaceholder:](wkinterfacetextfield/setplaceholder%28__%29.md) or [setAttributedPlaceholder:](wkinterfacetextfield/setattributedplaceholder%28__%29.md) methods. |
| Text Color | The color of the text. The system applies this color to the entire string. You can set this value programmatically using the [setTextColor:](wkinterfacetextfield/settextcolor%28__%29.md) method. |
| Content Type | The text field’s expected content, such as a username, password, or address. You can set this value programmatically using the [setTextContentType:](wkinterfacetextfield/settextcontenttype%28__%29.md) method. |
| Secure Text Entry | A checkbox indicating whether the text field hides the text that the user entered, keeping passwords and other secure data private. You can set this value programmatically using the [setSecureTextEntry:](wkinterfacetextfield/setsecuretextentry%28__%29.md) method. |
| Enabled | A checkbox indicating whether the text field  is enabled and responds when tapped. You can configure this value programmatically using the [setEnabled:](wkinterfacetextfield/setenabled%28__%29.md) method. |

To dynamically modify a text field at runtime, define an outlet in your interface controller and connect it to the corresponding text field in your storyboard. For example, define a property with the following syntax in your interface controller class:

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceTextField* myTextField;
```

**Swift**

```swift
@IBOutlet weak var myTextField: WKInterfaceTextField!
```

During your interface controller’s initialization, WatchKit creates a new instance of the [WKInterfaceTextField](wkinterfacetextfield.md) class and assigns it to your outlet. At that point, you can use the object in your outlet to manage the text field.

<a id="Receive-Text-Input"></a>

### Receive Text Input

To receive the text entered by the user, connect the text field in the storyboard to an action method defined in your interface controller.

**Swift**

```swift
@IBAction func textFieldAction(_ value: NSString?)
```

**Objective-C**

```objc
- (IBAction)textFieldAction:(NSString*) value
```

WatchKit calls the action method after the user dismisses the text input controller. The `value` parameter contains the string entered by the user. If the user cancels the text input controller, the value is `nil`.

## Topics

### Specifying the Content Type

- [setTextContentType:](wkinterfacetextfield/settextcontenttype%28__%29.md): Sets the text field’s semantic meaning.
- [WKTextContentType](wktextcontenttype.md): Constants that specify a text field’s semantic meaning.

### Setting the Text

- [setText:](wkinterfacetextfield/settext%28__%29.md): Sets the text displayed by the text field.
- [setAttributedText:](wkinterfacetextfield/setattributedtext%28__%29.md): Sets the styled text displayed by the text field.
- [setTextColor:](wkinterfacetextfield/settextcolor%28__%29.md): Sets the text’s color.

### Setting a Placeholder

- [setPlaceholder:](wkinterfacetextfield/setplaceholder%28__%29.md): Sets the text field’s placeholder.
- [setAttributedPlaceholder:](wkinterfacetextfield/setattributedplaceholder%28__%29.md): Sets the text field’s placeholder using styled text.

### Configuring the Control

- [setEnabled:](wkinterfacetextfield/setenabled%28__%29.md): Enables or disables the text field.
- [setSecureTextEntry:](wkinterfacetextfield/setsecuretextentry%28__%29.md): Determines whether the text field hides the text entered by the user.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

## See Also

### Related Documentation

- [presentTextInputControllerWithSuggestions:allowedInputMode:completion:](wkinterfacecontroller/presenttextinputcontroller%28withsuggestions_allowedinputmode_completion_%29.md): Displays a modal interface for gathering text input from the user.
- [presentTextInputControllerWithSuggestionsForLanguage:allowedInputMode:completion:](wkinterfacecontroller/presenttextinputcontrollerwithsuggestions%28forlanguage_allowedinputmode_completion_%29.md): Displays a modal interface for gathering language-specific text input from the user.

### Controls

- [WKInterfaceLabel](wkinterfacelabel.md): An interface element that displays static text.
- [WKInterfaceDate](wkinterfacedate.md): A label that displays the current date or time.
- [WKInterfaceTimer](wkinterfacetimer.md): A label that displays a countdown or count-up timer.
- [WKInterfaceButton](wkinterfacebutton.md): A button in the user interface of your watchOS app.
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md): A button that you can use to trigger a Sign in with Apple request.
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.
