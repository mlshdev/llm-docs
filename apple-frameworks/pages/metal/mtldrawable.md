> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldrawable](https://developer.apple.com/documentation/metal/mtldrawable)

# MTLDrawable (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A displayable resource that can be rendered or written to.

## Declaration

```swift
protocol MTLDrawable : NSObjectProtocol
```

## Mentioned In

- [Managing your Metal app window in iPadOS](managing-your-metal-app-window-in-ipados.md)
- [Adjusting for GPU memory bandwidth tradeoffs](adjusting-for-gpu-memory-bandwidth-tradeoffs.md)

<a id="overview"></a>

## Overview

Objects that implement this protocol are connected both to the Metal framework and an underlying display system (such as Core Animation) that’s capable of showing content onscreen. You use drawable objects when you want to render images using Metal and present them onscreen.

Don’t implement this protocol yourself; instead, see [CAMetalLayer](../quartzcore/cametallayer.md), for a class that can create and manage drawable objects for you.

## Topics

### Identifying the drawable

- [drawableID](mtldrawable/drawableid.md): A positive integer that identifies the drawable.

### Presenting the drawable

- [present()](mtldrawable/present%28%29.md): Presents the drawable onscreen as soon as possible.
- [present(afterMinimumDuration:)](mtldrawable/present%28afterminimumduration_%29.md): Presents the drawable onscreen as soon as possible after a previous drawable is visible for the specified duration.
- [present(at:)](mtldrawable/present%28at_%29.md): Presents the drawable onscreen at a specific host time.

### Getting presentation information

- [addPresentedHandler(\_:)](mtldrawable/addpresentedhandler%28__%29.md): Registers a block of code to be called immediately after the drawable is presented.
- [presentedTime](mtldrawable/presentedtime.md): The host time, in seconds, when the drawable was displayed onscreen.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Render pass outputs

- [MTLDrawablePresentedHandler](mtldrawablepresentedhandler.md): A block of code invoked after a drawable is presented.

# MTLDrawable (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A displayable resource that can be rendered or written to.

## Declaration

```objectivec
@protocol MTLDrawable <NSObject>
```

## Mentioned In

- [Managing your Metal app window in iPadOS](managing-your-metal-app-window-in-ipados.md)
- [Adjusting for GPU memory bandwidth tradeoffs](adjusting-for-gpu-memory-bandwidth-tradeoffs.md)

<a id="overview"></a>

## Overview

Objects that implement this protocol are connected both to the Metal framework and an underlying display system (such as Core Animation) that’s capable of showing content onscreen. You use drawable objects when you want to render images using Metal and present them onscreen.

Don’t implement this protocol yourself; instead, see [CAMetalLayer](../quartzcore/cametallayer.md), for a class that can create and manage drawable objects for you.

## Topics

### Identifying the drawable

- [drawableID](mtldrawable/drawableid.md): A positive integer that identifies the drawable.

### Presenting the drawable

- [present](mtldrawable/present%28%29.md): Presents the drawable onscreen as soon as possible.
- [presentAfterMinimumDuration:](mtldrawable/present%28afterminimumduration_%29.md): Presents the drawable onscreen as soon as possible after a previous drawable is visible for the specified duration.
- [presentAtTime:](mtldrawable/present%28at_%29.md): Presents the drawable onscreen at a specific host time.

### Getting presentation information

- [addPresentedHandler:](mtldrawable/addpresentedhandler%28__%29.md): Registers a block of code to be called immediately after the drawable is presented.
- [presentedTime](mtldrawable/presentedtime.md): The host time, in seconds, when the drawable was displayed onscreen.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Render pass outputs

- [MTLDrawablePresentedHandler](mtldrawablepresentedhandler.md): A block of code invoked after a drawable is presented.
