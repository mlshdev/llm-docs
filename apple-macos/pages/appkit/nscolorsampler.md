> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorsampler](https://developer.apple.com/documentation/appkit/nscolorsampler)

# NSColorSampler (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

An object that displays the system’s color-sampling interface and returns the selected color to your app.

## Declaration

```swift
class NSColorSampler
```

<a id="overview"></a>

## Overview

Create an [NSColorSampler](nscolorsampler.md) object when you want the user to select a color based on existing onscreen colors. When you call the [show(selectionHandler:)](nscolorsampler/show%28selectionhandler_%29.md) method, AppKit shows the system’s color sampler interface and reports the selected color back to the provided block.

## Topics

### Capturing a Color Sample

- [show(selectionHandler:)](nscolorsampler/show%28selectionhandler_%29.md): Displays the system color-sampling interface asynchronously and reports the selected color back to your app.

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

# NSColorSampler (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

An object that displays the system’s color-sampling interface and returns the selected color to your app.

## Declaration

```objectivec
@interface NSColorSampler : NSObject
```

<a id="overview"></a>

## Overview

Create an [NSColorSampler](nscolorsampler.md) object when you want the user to select a color based on existing onscreen colors. When you call the [showSamplerWithSelectionHandler:](nscolorsampler/show%28selectionhandler_%29.md) method, AppKit shows the system’s color sampler interface and reports the selected color back to the provided block.

## Topics

### Capturing a Color Sample

- [showSamplerWithSelectionHandler:](nscolorsampler/show%28selectionhandler_%29.md): Displays the system color-sampling interface asynchronously and reports the selected color back to your app.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
