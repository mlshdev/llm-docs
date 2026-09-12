> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscustomimagerep](https://developer.apple.com/documentation/appkit/nscustomimagerep)

# NSCustomImageRep (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that uses a delegate object to render an image from a custom format.

## Declaration

```swift
class NSCustomImageRep
```

<a id="overview"></a>

## Overview

When called upon to produce an image, an [NSCustomImageRep](nscustomimagerep.md) sends a message to its delegate to do the actual drawing. You can use this class to support custom image formats without going to the trouble of subclassing [NSImageRep](nsimagerep.md) directly.

## Topics

### Creating Representations of Images in Custom Formats

- [init(draw:delegate:)](nscustomimagerep/init%28draw_delegate_%29.md): Returns a representation of an image initialized with the specified delegate information.
- [init(size:flipped:drawingHandler:)](nscustomimagerep/init%28size_flipped_drawinghandler_%29.md): Initializes a representation of an image of the specified size and flipped status, using a block to draw its content.

### Getting Drawing Handlers

- [drawingHandler](nscustomimagerep/drawinghandler.md): The destination rectangle of the drawing handler block.

### Getting Information About Images

- [delegate](nscustomimagerep/delegate.md): The delegate object that renders the image for the image representation.
- [drawSelector](nscustomimagerep/drawselector.md): The selector for the delegate’s drawing method.

### Initializers

- [init(drawSelector:delegate:)](nscustomimagerep/init%28drawselector_delegate_%29.md)

## Relationships

### Inherits From

- [NSImageRep](nsimagerep.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSCustomImageRep (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that uses a delegate object to render an image from a custom format.

## Declaration

```objectivec
@interface NSCustomImageRep : NSImageRep
```

<a id="overview"></a>

## Overview

When called upon to produce an image, an [NSCustomImageRep](nscustomimagerep.md) sends a message to its delegate to do the actual drawing. You can use this class to support custom image formats without going to the trouble of subclassing [NSImageRep](nsimagerep.md) directly.

## Topics

### Creating Representations of Images in Custom Formats

- [initWithDrawSelector:delegate:](nscustomimagerep/init%28draw_delegate_%29.md): Returns a representation of an image initialized with the specified delegate information.
- [initWithSize:flipped:drawingHandler:](nscustomimagerep/init%28size_flipped_drawinghandler_%29.md): Initializes a representation of an image of the specified size and flipped status, using a block to draw its content.

### Getting Drawing Handlers

- [drawingHandler](nscustomimagerep/drawinghandler.md): The destination rectangle of the drawing handler block.

### Getting Information About Images

- [delegate](nscustomimagerep/delegate.md): The delegate object that renders the image for the image representation.
- [drawSelector](nscustomimagerep/drawselector.md): The selector for the delegate’s drawing method.

## Relationships

### Inherits From

- [NSImageRep](nsimagerep.md)
