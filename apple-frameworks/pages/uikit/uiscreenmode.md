> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreenmode](https://developer.apple.com/documentation/uikit/uiscreenmode)

# UIScreenMode (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS

A possible set of attributes that can apply to a screen object.

## Declaration

```swift
class UIScreenMode
```

## Mentioned In

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md)

<a id="overview"></a>

## Overview

A screen mode object encapsulates information about the size of the screen’s underlying display buffer and the aspect ratio it uses for individual pixels. Most developers should never need to use the information provided by this class and should simply use the bounds provided by the [UIScreen](uiscreen.md) object for their drawing space. The bounds of screen and window objects automatically take the pixel aspect ratio and underlying drawing hardware into consideration. However, developers that work with pixel-level information more directly may use the information in the current screen mode object to tailor their code for the target screen.

You don’t create instances of this class directly. Instead, you get the screen modes supported by a given screen from the corresponding [UIScreen](uiscreen.md) object.

## Topics

### Accessing the screen mode attributes

- [size](uiscreenmode/size.md): The screen size, measured in pixels.
- [pixelAspectRatio](uiscreenmode/pixelaspectratio.md): The aspect ratio of a single pixel.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Screens

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md): Fill connected displays with additional content from your app.
- [UIScreen](uiscreen.md): An object that defines the properties associated with a hardware-based display.

# UIScreenMode (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS

A possible set of attributes that can apply to a screen object.

## Declaration

```objectivec
@interface UIScreenMode : NSObject
```

## Mentioned In

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md)

<a id="overview"></a>

## Overview

A screen mode object encapsulates information about the size of the screen’s underlying display buffer and the aspect ratio it uses for individual pixels. Most developers should never need to use the information provided by this class and should simply use the bounds provided by the [UIScreen](uiscreen.md) object for their drawing space. The bounds of screen and window objects automatically take the pixel aspect ratio and underlying drawing hardware into consideration. However, developers that work with pixel-level information more directly may use the information in the current screen mode object to tailor their code for the target screen.

You don’t create instances of this class directly. Instead, you get the screen modes supported by a given screen from the corresponding [UIScreen](uiscreen.md) object.

## Topics

### Accessing the screen mode attributes

- [size](uiscreenmode/size.md): The screen size, measured in pixels.
- [pixelAspectRatio](uiscreenmode/pixelaspectratio.md): The aspect ratio of a single pixel.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Screens

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md): Fill connected displays with additional content from your app.
- [UIScreen](uiscreen.md): An object that defines the properties associated with a hardware-based display.
