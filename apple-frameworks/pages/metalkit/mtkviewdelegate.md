> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkviewdelegate](https://developer.apple.com/documentation/metalkit/mtkviewdelegate)

# MTKViewDelegate (Swift)

**Framework:** MetalKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Methods for responding to a MetalKit view’s drawing and resizing events.

## Declaration

```swift
protocol MTKViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You can set an object that implements the [MTKViewDelegate](mtkviewdelegate.md) protocol as a [MTKView](mtkview.md) object’s delegate. Use a delegate to provide a drawing method to a [MTKView](mtkview.md) object and respond to rendering events without subclassing the [MTKView](mtkview.md) class.

## Topics

### Changing the View’s Layout

- [mtkView(\_:drawableSizeWillChange:)](mtkviewdelegate/mtkview%28__drawablesizewillchange_%29.md): Updates the view’s contents upon receiving a change in layout, resolution, or size.

### Drawing the View’s Contents

- [draw(in:)](mtkviewdelegate/draw%28in_%29.md): Draws the view’s contents.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### View Management

- [MTKView](mtkview.md): A specialized view that creates, configures, and displays Metal objects.

# MTKViewDelegate (Objective-C)

**Framework:** MetalKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Methods for responding to a MetalKit view’s drawing and resizing events.

## Declaration

```objectivec
@protocol MTKViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

You can set an object that implements the [MTKViewDelegate](mtkviewdelegate.md) protocol as a [MTKView](mtkview.md) object’s delegate. Use a delegate to provide a drawing method to a [MTKView](mtkview.md) object and respond to rendering events without subclassing the [MTKView](mtkview.md) class.

## Topics

### Changing the View’s Layout

- [mtkView:drawableSizeWillChange:](mtkviewdelegate/mtkview%28__drawablesizewillchange_%29.md): Updates the view’s contents upon receiving a change in layout, resolution, or size.

### Drawing the View’s Contents

- [drawInMTKView:](mtkviewdelegate/draw%28in_%29.md): Draws the view’s contents.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### View Management

- [MTKView](mtkview.md): A specialized view that creates, configures, and displays Metal objects.
