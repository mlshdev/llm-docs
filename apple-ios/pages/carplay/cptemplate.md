> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplate](https://developer.apple.com/documentation/carplay/cptemplate)

# CPTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An abstract base class for interface templates.

## Declaration

```swift
@MainActor class CPTemplate
```

<a id="overview"></a>

## Overview

`CPTemplate` is an abstract base class for defining CarPlay user interface templates. It provides the common functionality present in all templates.

You don’t use this class directly, or create your own subclasses. Instead, you must use one of the prebuilt templates, such as [CPListTemplate](cplisttemplate.md) or [CPGridTemplate](cpgridtemplate.md).

## Topics

### Accessing Template Information

- [userInfo](cptemplate/userinfo.md): Any custom data or object that you want to associate with the template.

### Accessing Tab Information

- [tabTitle](cptemplate/tabtitle.md): A short title that describes the content of the tab.
- [tabImage](cptemplate/tabimage.md): An image that represents the content of the tab.
- [tabSystemItem](cptemplate/tabsystemitem.md): A system object that provides a title and image for common tab content, such as contacts or favorites.
- [showsTabBadge](cptemplate/showstabbadge.md): An indicator you use to call attention to the tab.

### Initializers

- [init(coder:)](cptemplate/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPActionSheetTemplate](cpactionsheettemplate.md)
- [CPAlertTemplate](cpalerttemplate.md)
- [CPContactTemplate](cpcontacttemplate.md)
- [CPGridTemplate](cpgridtemplate.md)
- [CPInformationTemplate](cpinformationtemplate.md)
- [CPListTemplate](cplisttemplate.md)
- [CPMapTemplate](cpmaptemplate.md)
- [CPNowPlayingTemplate](cpnowplayingtemplate.md)
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md)
- [CPSearchTemplate](cpsearchtemplate.md)
- [CPTabBarTemplate](cptabbartemplate.md)
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### General Purpose Templates

- [CPListTemplate](cplisttemplate.md): A template that displays and manages a list of items.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPBarButtonProviding](cpbarbuttonproviding.md): The methods that templates use to provide buttons for the navigation bar.

# CPTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An abstract base class for interface templates.

## Declaration

```objectivec
@interface CPTemplate : NSObject
```

<a id="overview"></a>

## Overview

`CPTemplate` is an abstract base class for defining CarPlay user interface templates. It provides the common functionality present in all templates.

You don’t use this class directly, or create your own subclasses. Instead, you must use one of the prebuilt templates, such as [CPListTemplate](cplisttemplate.md) or [CPGridTemplate](cpgridtemplate.md).

## Topics

### Accessing Template Information

- [userInfo](cptemplate/userinfo.md): Any custom data or object that you want to associate with the template.

### Accessing Tab Information

- [tabTitle](cptemplate/tabtitle.md): A short title that describes the content of the tab.
- [tabImage](cptemplate/tabimage.md): An image that represents the content of the tab.
- [tabSystemItem](cptemplate/tabsystemitem.md): A system object that provides a title and image for common tab content, such as contacts or favorites.
- [showsTabBadge](cptemplate/showstabbadge.md): An indicator you use to call attention to the tab.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPActionSheetTemplate](cpactionsheettemplate.md)
- [CPAlertTemplate](cpalerttemplate.md)
- [CPContactTemplate](cpcontacttemplate.md)
- [CPGridTemplate](cpgridtemplate.md)
- [CPInformationTemplate](cpinformationtemplate.md)
- [CPListTemplate](cplisttemplate.md)
- [CPMapTemplate](cpmaptemplate.md)
- [CPNowPlayingTemplate](cpnowplayingtemplate.md)
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md)
- [CPSearchTemplate](cpsearchtemplate.md)
- [CPTabBarTemplate](cptabbartemplate.md)
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### General Purpose Templates

- [CPListTemplate](cplisttemplate.md): A template that displays and manages a list of items.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPBarButtonProviding](cpbarbuttonproviding.md): The methods that templates use to provide buttons for the navigation bar.
