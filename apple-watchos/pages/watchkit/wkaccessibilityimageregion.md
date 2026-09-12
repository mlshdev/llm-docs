> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaccessibilityimageregion](https://developer.apple.com/documentation/watchkit/wkaccessibilityimageregion)

# WKAccessibilityImageRegion (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An object that defines a portion of an image that you want to call out separately to an assistive app.

## Declaration

```swift
class WKAccessibilityImageRegion
```

<a id="overview"></a>

## Overview

The accessibility image region object defines the portion of the image that you want to call out separately and the label you want to apply to that region. Use an accessibility image region object in conjunction with any interface object that displays an image, either as part of its foreground or background content. Register your custom regions using the [setAccessibilityImageRegions(\_:)](wkinterfaceobject/setaccessibilityimageregions%28__%29.md) method of the corresponding interface object.

## Topics

### Getting the Region Attributes

- [frame](wkaccessibilityimageregion/frame.md): A portion of the parent image, in the image’s coordinate system.
- [label](wkaccessibilityimageregion/label.md): A succinct label that succinctly identifies the purpose of the image region.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

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
- [WKInterfaceObject](wkinterfaceobject.md): An object that provides information that is common to all interface objects in your watchOS app.
- [WKInterfaceController](wkinterfacecontroller.md): A class that provides the infrastructure for managing the interface in a watchOS app.
- [WKAlertAction](wkalertaction.md): An object that encapsulates information about a button displayed in an alert or action sheet.
- [WKAccessibilityIsVoiceOverRunning()](wkaccessibilityisvoiceoverrunning%28%29.md): Returns a Boolean value indicating whether VoiceOver is running.
- [WKAccessibilityIsReduceMotionEnabled()](wkaccessibilityisreducemotionenabled%28%29.md): Returns a Boolean value indicating whether reduced motion is enabled.

# WKAccessibilityImageRegion (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An object that defines a portion of an image that you want to call out separately to an assistive app.

## Declaration

```objectivec
@interface WKAccessibilityImageRegion : NSObject
```

<a id="overview"></a>

## Overview

The accessibility image region object defines the portion of the image that you want to call out separately and the label you want to apply to that region. Use an accessibility image region object in conjunction with any interface object that displays an image, either as part of its foreground or background content. Register your custom regions using the [setAccessibilityImageRegions:](wkinterfaceobject/setaccessibilityimageregions%28__%29.md) method of the corresponding interface object.

## Topics

### Getting the Region Attributes

- [frame](wkaccessibilityimageregion/frame.md): A portion of the parent image, in the image’s coordinate system.
- [label](wkaccessibilityimageregion/label.md): A succinct label that succinctly identifies the purpose of the image region.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceObject](wkinterfaceobject.md): An object that provides information that is common to all interface objects in your watchOS app.
- [WKInterfaceController](wkinterfacecontroller.md): A class that provides the infrastructure for managing the interface in a watchOS app.
- [WKAlertAction](wkalertaction.md): An object that encapsulates information about a button displayed in an alert or action sheet.
- [WKAccessibilityIsVoiceOverRunning](wkaccessibilityisvoiceoverrunning%28%29.md): Returns a Boolean value indicating whether VoiceOver is running.
- [WKAccessibilityIsReduceMotionEnabled](wkaccessibilityisreducemotionenabled%28%29.md): Returns a Boolean value indicating whether reduced motion is enabled.
