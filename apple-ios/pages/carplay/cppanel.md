> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanel

# CPPanel (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type that provides the common behaviors for panels you display on top of your app’s content.

## Declaration

```swift
class CPPanel
```

<a id="overview"></a>

## Overview

The `CPPanel` type defines the default behaviors for panels you display in your app. You don’t create or present this type directly. Instead, instantiate one of the defined subclasses and present that type from your app’s interface. For example, create a [CPMapPanel](cpmappanel.md) and configure it with navigation-related data, and present it from a [CPMapTemplate](cpmaptemplate.md) to overlay that information on top of your custom map.

## Topics

### Initializers

- [init(coder:)](cppanel/init%28coder_%29.md)

### Instance Properties

- [showsCloseButton](cppanel/showsclosebutton.md): A Boolean value that indicates whether the panel displays a close button.

### Type Properties

- [maximumPanelItemsCount](cppanel/maximumpanelitemscount.md): The maximum number of items the panel is able to display.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMapPanel](cpmappanel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

# CPPanel (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type that provides the common behaviors for panels you display on top of your app’s content.

## Declaration

```objectivec
@interface CPPanel : NSObject
```

<a id="overview"></a>

## Overview

The `CPPanel` type defines the default behaviors for panels you display in your app. You don’t create or present this type directly. Instead, instantiate one of the defined subclasses and present that type from your app’s interface. For example, create a [CPMapPanel](cpmappanel.md) and configure it with navigation-related data, and present it from a [CPMapTemplate](cpmaptemplate.md) to overlay that information on top of your custom map.

## Topics

### Instance Properties

- [showsCloseButton](cppanel/showsclosebutton.md): A Boolean value that indicates whether the panel displays a close button.

### Type Properties

- [maximumPanelItemsCount](cppanel/maximumpanelitemscount.md): The maximum number of items the panel is able to display.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMapPanel](cpmappanel.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
