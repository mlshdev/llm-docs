> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject](https://developer.apple.com/documentation/watchkit/wkinterfaceobject)

# WKInterfaceObject (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An object that provides information that is common to all interface objects in your watchOS app.

## Declaration

```swift
class WKInterfaceObject
```

## Mentioned In

- [Connecting Your User Interface to Your Code](connecting-your-user-interface-to-your-code.md)

<a id="overview"></a>

## Overview

Your WatchKit extension uses interface objects to manipulate the visual elements displayed on Apple Watch. Specifically, you use the methods of this class to change the size, alignment, and visibility of those elements. You can also configure the accessibility information displayed through assistive technologies like VoiceOver.

Do not subclass or create instances of this class, or any of its subclasses, yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a button in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var button: WKInterfaceButton!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceButton* myButton;
```

At runtime, WatchKit creates the appropriate interface objects and assigns them to the outlets in your interface controller.

WatchKit provides one-way communication between the interface objects in your extension and the corresponding interface elements in your watchOS app. You can set the values of an interface object, but you cannot get the current values. If you want to know the current value of an attribute, you must save the value yourself.

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your group interface object in your storyboard file. The following table lists the attributes you can configure in your storyboard and their meaning.

| Attribute | Description |
| --- | --- |
| Alpha | The opacity of the object. A value of `1.0` represents fully opaque and a value of `0.0` represents fully transparent. |
| Hidden | A checkbox indicating whether the item is hidden initially. You can change the visibility of the item programmatically by calling the [setHidden(\_:)](wkinterfaceobject/sethidden%28__%29.md) method. |
| Installed | A checkbox indicating whether the item is installed for the current device. |
| Horizontal | The horizontal alignment of the item. Use this attribute to configure the horizontal position of the item relative to its immediate parent. |
| Vertical | The vertical alignment of the item. Use this attribute to configure the vertical position of the item relative to its immediate parent. |
| Width | The width of the object. Specify a fixed width or set the value of the object to be a percentage of its container’s width. |
| Height | The height of the object. Specify a fixed height or set the value of the object to be a percentage of its container’s height. |

## Topics

### Hiding and Showing an Object

- [setHidden(\_:)](wkinterfaceobject/sethidden%28__%29.md): Hides or shows the interface object in your user interface.
- [setAlpha(\_:)](wkinterfaceobject/setalpha%28__%29.md): Sets the opacity of the interface object.

### Getting the Property Name

- [interfaceProperty](wkinterfaceobject/interfaceproperty.md): The name of the outlet in your interface controller to which the object is bound.

### Changing an Object’s Size

- [setWidth(\_:)](wkinterfaceobject/setwidth%28__%29.md): Sets the absolute width (in points) of the object.
- [setHeight(\_:)](wkinterfaceobject/setheight%28__%29.md): Sets the absolute height (in points) of the object.
- [setRelativeWidth(\_:withAdjustment:)](wkinterfaceobject/setrelativewidth%28__withadjustment_%29.md): Sets the width of the object relative to its container.
- [setRelativeHeight(\_:withAdjustment:)](wkinterfaceobject/setrelativeheight%28__withadjustment_%29.md): Sets the height of the object relative to its container.
- [sizeToFitWidth()](wkinterfaceobject/sizetofitwidth%28%29.md): Sets the width of the object to fit its current content.
- [sizeToFitHeight()](wkinterfaceobject/sizetofitheight%28%29.md): Sets the height of the object so that it fills the available vertical space.

### Setting an Object’s Alignment

- [setHorizontalAlignment(\_:)](wkinterfaceobject/sethorizontalalignment%28__%29.md): Sets the horizontal alignment of an object relative to its container’s bounds.
- [setVerticalAlignment(\_:)](wkinterfaceobject/setverticalalignment%28__%29.md): Sets the vertical alignment of an object relative to its container’s bounds.

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier(\_:)](wkinterfaceobject/setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityLabel(\_:)](wkinterfaceobject/setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityHint(\_:)](wkinterfaceobject/setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setAccessibilityValue(\_:)](wkinterfaceobject/setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setIsAccessibilityElement(\_:)](wkinterfaceobject/setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityTraits(\_:)](wkinterfaceobject/setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
- [setAccessibilityImageRegions(\_:)](wkinterfaceobject/setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.

### Setting the Layout Direction

- [setSemanticContentAttribute(\_:)](wkinterfaceobject/setsemanticcontentattribute%28__%29.md): Sets the semantic description of the object’s contents, used to determine whether its content should be flipped when switching between left-to-right and right-to-left layouts.

### Constants

- [WKInterfaceObjectHorizontalAlignment](wkinterfaceobjecthorizontalalignment.md): Constants for horizontally aligning objects in their container.
- [WKInterfaceObjectVerticalAlignment](wkinterfaceobjectverticalalignment.md): Constants for vertically aligning objects in their container.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [WKInterfaceActivityRing](wkinterfaceactivityring.md)
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md)
- [WKInterfaceButton](wkinterfacebutton.md)
- [WKInterfaceDate](wkinterfacedate.md)
- [WKInterfaceGroup](wkinterfacegroup.md)
- [WKInterfaceHMCamera](wkinterfacehmcamera.md)
- [WKInterfaceImage](wkinterfaceimage.md)
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md)
- [WKInterfaceLabel](wkinterfacelabel.md)
- [WKInterfaceMap](wkinterfacemap.md)
- [WKInterfaceMovie](wkinterfacemovie.md)
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md)
- [WKInterfacePicker](wkinterfacepicker.md)
- [WKInterfaceSCNScene](wkinterfacescnscene.md)
- [WKInterfaceSKScene](wkinterfaceskscene.md)
- [WKInterfaceSeparator](wkinterfaceseparator.md)
- [WKInterfaceSlider](wkinterfaceslider.md)
- [WKInterfaceSwitch](wkinterfaceswitch.md)
- [WKInterfaceTable](wkinterfacetable.md)
- [WKInterfaceTextField](wkinterfacetextfield.md)
- [WKInterfaceTimer](wkinterfacetimer.md)
- [WKInterfaceVolumeControl](wkinterfacevolumecontrol.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceController](wkinterfacecontroller.md): A class that provides the infrastructure for managing the interface in a watchOS app.
- [WKAlertAction](wkalertaction.md): An object that encapsulates information about a button displayed in an alert or action sheet.
- [WKAccessibilityImageRegion](wkaccessibilityimageregion.md): An object that defines a portion of an image that you want to call out separately to an assistive app.
- [WKAccessibilityIsVoiceOverRunning()](wkaccessibilityisvoiceoverrunning%28%29.md): Returns a Boolean value indicating whether VoiceOver is running.
- [WKAccessibilityIsReduceMotionEnabled()](wkaccessibilityisreducemotionenabled%28%29.md): Returns a Boolean value indicating whether reduced motion is enabled.

# WKInterfaceObject (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An object that provides information that is common to all interface objects in your watchOS app.

## Declaration

```objectivec
@interface WKInterfaceObject : NSObject
```

## Mentioned In

- [Connecting Your User Interface to Your Code](connecting-your-user-interface-to-your-code.md)

<a id="overview"></a>

## Overview

Your WatchKit extension uses interface objects to manipulate the visual elements displayed on Apple Watch. Specifically, you use the methods of this class to change the size, alignment, and visibility of those elements. You can also configure the accessibility information displayed through assistive technologies like VoiceOver.

Do not subclass or create instances of this class, or any of its subclasses, yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a button in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var button: WKInterfaceButton!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceButton* myButton;
```

At runtime, WatchKit creates the appropriate interface objects and assigns them to the outlets in your interface controller.

WatchKit provides one-way communication between the interface objects in your extension and the corresponding interface elements in your watchOS app. You can set the values of an interface object, but you cannot get the current values. If you want to know the current value of an attribute, you must save the value yourself.

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your group interface object in your storyboard file. The following table lists the attributes you can configure in your storyboard and their meaning.

| Attribute | Description |
| --- | --- |
| Alpha | The opacity of the object. A value of `1.0` represents fully opaque and a value of `0.0` represents fully transparent. |
| Hidden | A checkbox indicating whether the item is hidden initially. You can change the visibility of the item programmatically by calling the [setHidden:](wkinterfaceobject/sethidden%28__%29.md) method. |
| Installed | A checkbox indicating whether the item is installed for the current device. |
| Horizontal | The horizontal alignment of the item. Use this attribute to configure the horizontal position of the item relative to its immediate parent. |
| Vertical | The vertical alignment of the item. Use this attribute to configure the vertical position of the item relative to its immediate parent. |
| Width | The width of the object. Specify a fixed width or set the value of the object to be a percentage of its container’s width. |
| Height | The height of the object. Specify a fixed height or set the value of the object to be a percentage of its container’s height. |

## Topics

### Hiding and Showing an Object

- [setHidden:](wkinterfaceobject/sethidden%28__%29.md): Hides or shows the interface object in your user interface.
- [setAlpha:](wkinterfaceobject/setalpha%28__%29.md): Sets the opacity of the interface object.

### Getting the Property Name

- [interfaceProperty](wkinterfaceobject/interfaceproperty.md): The name of the outlet in your interface controller to which the object is bound.

### Changing an Object’s Size

- [setWidth:](wkinterfaceobject/setwidth%28__%29.md): Sets the absolute width (in points) of the object.
- [setHeight:](wkinterfaceobject/setheight%28__%29.md): Sets the absolute height (in points) of the object.
- [setRelativeWidth:withAdjustment:](wkinterfaceobject/setrelativewidth%28__withadjustment_%29.md): Sets the width of the object relative to its container.
- [setRelativeHeight:withAdjustment:](wkinterfaceobject/setrelativeheight%28__withadjustment_%29.md): Sets the height of the object relative to its container.
- [sizeToFitWidth](wkinterfaceobject/sizetofitwidth%28%29.md): Sets the width of the object to fit its current content.
- [sizeToFitHeight](wkinterfaceobject/sizetofitheight%28%29.md): Sets the height of the object so that it fills the available vertical space.

### Setting an Object’s Alignment

- [setHorizontalAlignment:](wkinterfaceobject/sethorizontalalignment%28__%29.md): Sets the horizontal alignment of an object relative to its container’s bounds.
- [setVerticalAlignment:](wkinterfaceobject/setverticalalignment%28__%29.md): Sets the vertical alignment of an object relative to its container’s bounds.

### Configuring the Accessibility Attributes

- [setAccessibilityIdentifier:](wkinterfaceobject/setaccessibilityidentifier%28__%29.md): Sets the unique identifier string for the interface object.
- [setAccessibilityLabel:](wkinterfaceobject/setaccessibilitylabel%28__%29.md): Sets a succinct label on the object that identifies the accessibility element.
- [setAccessibilityHint:](wkinterfaceobject/setaccessibilityhint%28__%29.md): Sets the description of what happens when performing an action on the accessibility element.
- [setAccessibilityValue:](wkinterfaceobject/setaccessibilityvalue%28__%29.md): Sets the value of the accessibility element.
- [setIsAccessibilityElement:](wkinterfaceobject/setisaccessibilityelement%28__%29.md): Sets whether the object is an accessibility element that an assistive app can access.
- [setAccessibilityTraits:](wkinterfaceobject/setaccessibilitytraits%28__%29.md): Sets the combination of accessibility traits that best characterize the accessibility element.
- [setAccessibilityImageRegions:](wkinterfaceobject/setaccessibilityimageregions%28__%29.md): Marks portions of an image as separate accessible elements.

### Setting the Layout Direction

- [setSemanticContentAttribute:](wkinterfaceobject/setsemanticcontentattribute%28__%29.md): Sets the semantic description of the object’s contents, used to determine whether its content should be flipped when switching between left-to-right and right-to-left layouts.

### Constants

- [WKInterfaceObjectHorizontalAlignment](wkinterfaceobjecthorizontalalignment.md): Constants for horizontally aligning objects in their container.
- [WKInterfaceObjectVerticalAlignment](wkinterfaceobjectverticalalignment.md): Constants for vertically aligning objects in their container.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [WKInterfaceActivityRing](wkinterfaceactivityring.md)
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md)
- [WKInterfaceButton](wkinterfacebutton.md)
- [WKInterfaceDate](wkinterfacedate.md)
- [WKInterfaceGroup](wkinterfacegroup.md)
- [WKInterfaceHMCamera](wkinterfacehmcamera.md)
- [WKInterfaceImage](wkinterfaceimage.md)
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md)
- [WKInterfaceLabel](wkinterfacelabel.md)
- [WKInterfaceMap](wkinterfacemap.md)
- [WKInterfaceMovie](wkinterfacemovie.md)
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md)
- [WKInterfacePicker](wkinterfacepicker.md)
- [WKInterfaceSCNScene](wkinterfacescnscene.md)
- [WKInterfaceSKScene](wkinterfaceskscene.md)
- [WKInterfaceSeparator](wkinterfaceseparator.md)
- [WKInterfaceSlider](wkinterfaceslider.md)
- [WKInterfaceSwitch](wkinterfaceswitch.md)
- [WKInterfaceTable](wkinterfacetable.md)
- [WKInterfaceTextField](wkinterfacetextfield.md)
- [WKInterfaceTimer](wkinterfacetimer.md)
- [WKInterfaceVolumeControl](wkinterfacevolumecontrol.md)

## See Also

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceController](wkinterfacecontroller.md): A class that provides the infrastructure for managing the interface in a watchOS app.
- [WKAlertAction](wkalertaction.md): An object that encapsulates information about a button displayed in an alert or action sheet.
- [WKAccessibilityImageRegion](wkaccessibilityimageregion.md): An object that defines a portion of an image that you want to call out separately to an assistive app.
- [WKAccessibilityIsVoiceOverRunning](wkaccessibilityisvoiceoverrunning%28%29.md): Returns a Boolean value indicating whether VoiceOver is running.
- [WKAccessibilityIsReduceMotionEnabled](wkaccessibilityisreducemotionenabled%28%29.md): Returns a Boolean value indicating whether reduced motion is enabled.
