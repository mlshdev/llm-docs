> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacemap](https://developer.apple.com/documentation/watchkit/wkinterfacemap)

# WKInterfaceMap (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An interface element that displays a noninteractive map for the location you specify.

## Declaration

```swift
class WKInterfaceMap
```

<a id="overview"></a>

## Overview

You can configure Maps dynamically from your interface controller. Use the methods of [WKInterfaceMap](wkinterfacemap.md) to specify the visible region of the map and to add any annotations or points of interest. Tapping the map launches the Maps app on the user’s Apple Watch and displays the corresponding location.

Using a map object, you specify a geographic region to display and you can optionally add annotations to the surface of the map. Maps display annotations as images on top of the map content. You can use custom images or display the built-in pin images. Maps can display no more than five annotations at a time.

Don’t subclass or create instances of this class yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a map object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var myMap: WKInterfaceMap!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceMap* myMap;
```

During the initialization of your interface controller, WatchKit creates a new instance of this class and assigns it to your outlet. At that point, you can use the object in your outlet to make changes to the onscreen map.

The Apple Watch must have an active network connection to download map tiles.

<a id="Configure-the-Map-in-Interface-Builder"></a>

### Configure the Map in Interface Builder

In Xcode, you can configure information about your map from your storyboard file. The map interface object has an Enabled attribute that appears as a checkbox in the Attributes inspector. When you enable the map interface object in this checkbox, tapping the map launches the Maps app and displays the current selected location.

## Topics

### Specifying the Map Region

- [setVisibleMapRect(\_:)](wkinterfacemap/setvisiblemaprect%28__%29.md): Changes the map’s visible region to the specified map rectangle.
- [setRegion(\_:)](wkinterfacemap/setregion%28__%29.md): Changes the map’s visible region to the specified coordinate region.

### Managing Map Annotations

- [addAnnotation(\_:with:centerOffset:)](wkinterfacemap/addannotation%28__with_centeroffset_%29.md): Displays the specified image on top of the map.
- [addAnnotation(\_:withImageNamed:centerOffset:)](wkinterfacemap/addannotation%28__withimagenamed_centeroffset_%29.md): Displays an image from the WatchKit app’s bundle on top of the map.
- [addAnnotation(\_:with:)](wkinterfacemap/addannotation%28__with_%29.md): Adds a pin to the map at the specified location.
- [WKInterfaceMapPinColor](wkinterfacemappincolor.md): Constants for map pin colors.
- [removeAllAnnotations()](wkinterfacemap/removeallannotations%28%29.md): Removes all annotations from the map.

### Displaying the User’s Location

- [setShowsUserLocation(\_:)](wkinterfacemap/setshowsuserlocation%28__%29.md): Sets whether the map shows the user’s current location.
- [setShowsUserHeading(\_:)](wkinterfacemap/setshowsuserheading%28__%29.md): Sets whether the map shows the user heading.
- [setUserTrackingMode(\_:animated:)](wkinterfacemap/setusertrackingmode%28__animated_%29.md): Sets the map’s tracking mode.
- [WKInterfaceMap.UserTrackingMode](wkinterfacemap/usertrackingmode.md): Modes for tracking the user’s location on the map.

### Initializing for SwiftUI

- [init()](wkinterfacemap/init%28%29.md): Deprecated. Creates a map for use in SwiftUI.

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
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.

# WKInterfaceMap (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An interface element that displays a noninteractive map for the location you specify.

## Declaration

```objectivec
@interface WKInterfaceMap : WKInterfaceObject
```

<a id="overview"></a>

## Overview

You can configure Maps dynamically from your interface controller. Use the methods of [WKInterfaceMap](wkinterfacemap.md) to specify the visible region of the map and to add any annotations or points of interest. Tapping the map launches the Maps app on the user’s Apple Watch and displays the corresponding location.

Using a map object, you specify a geographic region to display and you can optionally add annotations to the surface of the map. Maps display annotations as images on top of the map content. You can use custom images or display the built-in pin images. Maps can display no more than five annotations at a time.

Don’t subclass or create instances of this class yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a map object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var myMap: WKInterfaceMap!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceMap* myMap;
```

During the initialization of your interface controller, WatchKit creates a new instance of this class and assigns it to your outlet. At that point, you can use the object in your outlet to make changes to the onscreen map.

The Apple Watch must have an active network connection to download map tiles.

<a id="Configure-the-Map-in-Interface-Builder"></a>

### Configure the Map in Interface Builder

In Xcode, you can configure information about your map from your storyboard file. The map interface object has an Enabled attribute that appears as a checkbox in the Attributes inspector. When you enable the map interface object in this checkbox, tapping the map launches the Maps app and displays the current selected location.

## Topics

### Specifying the Map Region

- [setVisibleMapRect:](wkinterfacemap/setvisiblemaprect%28__%29.md): Changes the map’s visible region to the specified map rectangle.
- [setRegion:](wkinterfacemap/setregion%28__%29.md): Changes the map’s visible region to the specified coordinate region.

### Managing Map Annotations

- [addAnnotation:withImage:centerOffset:](wkinterfacemap/addannotation%28__with_centeroffset_%29.md): Displays the specified image on top of the map.
- [addAnnotation:withImageNamed:centerOffset:](wkinterfacemap/addannotation%28__withimagenamed_centeroffset_%29.md): Displays an image from the WatchKit app’s bundle on top of the map.
- [addAnnotation:withPinColor:](wkinterfacemap/addannotation%28__with_%29.md): Adds a pin to the map at the specified location.
- [WKInterfaceMapPinColor](wkinterfacemappincolor.md): Constants for map pin colors.
- [removeAllAnnotations](wkinterfacemap/removeallannotations%28%29.md): Removes all annotations from the map.

### Displaying the User’s Location

- [setShowsUserLocation:](wkinterfacemap/setshowsuserlocation%28__%29.md): Sets whether the map shows the user’s current location.
- [setShowsUserHeading:](wkinterfacemap/setshowsuserheading%28__%29.md): Sets whether the map shows the user heading.
- [setUserTrackingMode:animated:](wkinterfacemap/setusertrackingmode%28__animated_%29.md): Sets the map’s tracking mode.
- [WKInterfaceMapUserTrackingMode](wkinterfacemap/usertrackingmode.md): Modes for tracking the user’s location on the map.

### Initializing for SwiftUI

- [init](wkinterfacemap/init%28%29.md): Deprecated. Creates a map for use in SwiftUI.

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
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceActivityRing](wkinterfaceactivityring.md): A view that displays data from a HealthKit activity summary object.
