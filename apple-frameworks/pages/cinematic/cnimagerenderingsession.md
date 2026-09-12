> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnimagerenderingsession](https://developer.apple.com/documentation/cinematic/cnimagerenderingsession)

# CNImageRenderingSession (Swift)

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A session for rendering a shallow depth-of-field (SDoF) effect onto still images using Metal.

## Declaration

```swift
class CNImageRenderingSession
```

<a id="overview"></a>

## Overview

Use CNImageRenderingSession to apply a cinematic, lens-simulated bokeh effect to an image given a disparity map. For large images, prefer the tiled API to avoid excessive GPU memory usage.

A single session may be reused across multiple render calls. It is not thread-safe.

## Topics

### Initializers

- [init(configuration:)](cnimagerenderingsession/init%28configuration_%29.md)

### Instance Properties

- [configuration](cnimagerenderingsession/configuration.md)

### Instance Methods

- [encodeRender(to:sourceRGBA:sourceDisparity:destinationRGBA:fNumber:focusDisparity:)](cnimagerenderingsession/encoderender%28to_sourcergba_sourcedisparity_destinationrgba_fnumber_focusdisparity_%29.md): Encode a command to render a shallow depth of field (SDoF) image to a metal texture
- [encodeTileRender(to:sourceTileRGBA:sourceDisparity:destinationTileRGBA:fNumber:focusDisparity:sourceRGBASize:tileOffset:tileExtendOffset:)](cnimagerenderingsession/encodetilerender%28to_sourcetilergba_sourcedisparity_destinationtilergba_fnumber_focusdisparity_sourcergbasize_tileoffset_tileextendoffset_%29.md): Encode a command to render a shallow depth of field (SDoF) image to a metal texture

### Type Methods

- [minimumTileExtendRect(forTileRect:sourceRGBASize:)](cnimagerenderingsession/minimumtileextendrect%28fortilerect_sourcergbasize_%29.md): Returns the minimum source rect that must be sampled to render tileRect without edge artifacts.

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

# CNImageRenderingSession (Objective-C)

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A session for rendering a shallow depth-of-field (SDoF) effect onto still images using Metal.

## Declaration

```objectivec
@interface CNImageRenderingSession : NSObject
```

<a id="overview"></a>

## Overview

Use CNImageRenderingSession to apply a cinematic, lens-simulated bokeh effect to an image given a disparity map. For large images, prefer the tiled API to avoid excessive GPU memory usage.

A single session may be reused across multiple render calls. It is not thread-safe.

## Topics

### Instance Properties

- [configuration](cnimagerenderingsession/configuration.md)

### Instance Methods

- [encodeRenderToCommandBuffer:sourceRGBA:sourceDisparity:destinationRGBA:fNumber:focusDisparity:](cnimagerenderingsession/encoderender%28to_sourcergba_sourcedisparity_destinationrgba_fnumber_focusdisparity_%29.md): Encode a command to render a shallow depth of field (SDoF) image to a metal texture
- [encodeTileRenderToCommandBuffer:sourceTileRGBA:sourceDisparity:destinationTileRGBA:fNumber:focusDisparity:sourceRGBASize:tileOffset:tileExtendOffset:](cnimagerenderingsession/encodetilerender%28to_sourcetilergba_sourcedisparity_destinationtilergba_fnumber_focusdisparity_sourcergbasize_tileoffset_tileextendoffset_%29.md): Encode a command to render a shallow depth of field (SDoF) image to a metal texture
- [initWithConfiguration:](cnimagerenderingsession/init%28configuration_%29.md)

### Type Methods

- [minimumTileExtendRectForTileRect:sourceRGBASize:](cnimagerenderingsession/minimumtileextendrect%28fortilerect_sourcergbasize_%29.md): Returns the minimum source rect that must be sampled to render tileRect without edge artifacts.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
