> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturemanager](https://developer.apple.com/documentation/metal/mtlcapturemanager)

# MTLCaptureManager (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An instance you use to capture Metal command data in your app.

## Declaration

```swift
class MTLCaptureManager
```

<a id="overview"></a>

## Overview

A capture manager works with the frame capture feature to:

- Capture data about Metal commands programmatically. See [Capturing a Metal workload programmatically](https://developer.apple.com/documentation/xcode/capturing-a-metal-workload-programmatically).
- Only capture commands that apply to a specific [MTLDevice](mtldevice.md), command queue, or [MTLCaptureScope](mtlcapturescope.md) instance.
- Assign a default [MTLCaptureScope](mtlcapturescope.md) instance for captures you create in Xcode by clicking the Capture GPU workload button in the debug bar, which has an icon with the Metal logo.

The Metal debugger requires you to enable GPU Frame Capture in your project settings; see [Capturing a Metal workload in Xcode](https://developer.apple.com/documentation/xcode/capturing-a-metal-workload-in-xcode).

> **Important**

>  The capture manager records commands within the [MTLCommandBuffer](mtlcommandbuffer.md) instance that you create and commit while the capture session is active.

For more information about Metal frame capture, see [Metal debugger](https://developer.apple.com/documentation/xcode/metal-debugger).

## Topics

### Obtaining the shared capture manager

- [shared()](mtlcapturemanager/shared%28%29.md): Provides the shared capture manager for your Metal app.

### Querying support for a capture destination

- [supportsDestination(\_:)](mtlcapturemanager/supportsdestination%28__%29.md): Checks to see whether a particular capture destination is supported.

### Creating a capture scope

- [makeCaptureScope(device:)](mtlcapturemanager/makecapturescope%28device_%29.md): Creates a capture scope for commands submitted to a specific device object.
- [makeCaptureScope(commandQueue:)](mtlcapturemanager/makecapturescope%28commandqueue_%29-1rozd.md): Creates a capture scope for commands submitted to a specific command queue.
- [defaultCaptureScope](mtlcapturemanager/defaultcapturescope.md): The capture scope to use when a capture is initiated in Xcode.

### Starting capture

Capture Metal commands for presentation in the Metal debugger.

- [startCapture(with:)](mtlcapturemanager/startcapture%28with_%29.md): Starts capturing any of your app’s Metal commands, with the capture session defined by a descriptor object.
- [startCapture(device:)](mtlcapturemanager/startcapture%28device_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the device object.
- [startCapture(commandQueue:)](mtlcapturemanager/startcapture%28commandqueue_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the command queue.
- [startCapture(scope:)](mtlcapturemanager/startcapture%28scope_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are in the specified capture scope.

### Stopping capture

- [stopCapture()](mtlcapturemanager/stopcapture%28%29.md): Stops capturing Metal commands.

### Monitoring capture

- [isCapturing](mtlcapturemanager/iscapturing.md): A Boolean value that indicates whether Metal commands are being captured.

### Instance Methods

- [makeCaptureScope(commandQueue:)](mtlcapturemanager/makecapturescope%28commandqueue_%29-9wie3.md)

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

## See Also

### Frame capture

- [MTLCaptureDescriptor](mtlcapturedescriptor.md): A configuration for a Metal capture session.
- [MTLCaptureDestination](mtlcapturedestination.md): The kinds of destinations for captured command data.
- [MTLCaptureScope](mtlcapturescope.md): A type that can programmatically customize a GPU frame capture.

# MTLCaptureManager (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An instance you use to capture Metal command data in your app.

## Declaration

```objectivec
@interface MTLCaptureManager : NSObject
```

<a id="overview"></a>

## Overview

A capture manager works with the frame capture feature to:

- Capture data about Metal commands programmatically. See [Capturing a Metal workload programmatically](https://developer.apple.com/documentation/xcode/capturing-a-metal-workload-programmatically).
- Only capture commands that apply to a specific [MTLDevice](mtldevice.md), command queue, or [MTLCaptureScope](mtlcapturescope.md) instance.
- Assign a default [MTLCaptureScope](mtlcapturescope.md) instance for captures you create in Xcode by clicking the Capture GPU workload button in the debug bar, which has an icon with the Metal logo.

The Metal debugger requires you to enable GPU Frame Capture in your project settings; see [Capturing a Metal workload in Xcode](https://developer.apple.com/documentation/xcode/capturing-a-metal-workload-in-xcode).

> **Important**

>  The capture manager records commands within the [MTLCommandBuffer](mtlcommandbuffer.md) instance that you create and commit while the capture session is active.

For more information about Metal frame capture, see [Metal debugger](https://developer.apple.com/documentation/xcode/metal-debugger).

## Topics

### Obtaining the shared capture manager

- [sharedCaptureManager](mtlcapturemanager/shared%28%29.md): Provides the shared capture manager for your Metal app.

### Querying support for a capture destination

- [supportsDestination:](mtlcapturemanager/supportsdestination%28__%29.md): Checks to see whether a particular capture destination is supported.

### Creating a capture scope

- [newCaptureScopeWithDevice:](mtlcapturemanager/makecapturescope%28device_%29.md): Creates a capture scope for commands submitted to a specific device object.
- [newCaptureScopeWithCommandQueue:](mtlcapturemanager/makecapturescope%28commandqueue_%29-1rozd.md): Creates a capture scope for commands submitted to a specific command queue.
- [defaultCaptureScope](mtlcapturemanager/defaultcapturescope.md): The capture scope to use when a capture is initiated in Xcode.

### Starting capture

Capture Metal commands for presentation in the Metal debugger.

- [startCaptureWithDescriptor:error:](mtlcapturemanager/startcapture%28with_%29.md): Starts capturing any of your app’s Metal commands, with the capture session defined by a descriptor object.
- [startCaptureWithDevice:](mtlcapturemanager/startcapture%28device_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the device object.
- [startCaptureWithCommandQueue:](mtlcapturemanager/startcapture%28commandqueue_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the command queue.
- [startCaptureWithScope:](mtlcapturemanager/startcapture%28scope_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are in the specified capture scope.

### Stopping capture

- [stopCapture](mtlcapturemanager/stopcapture%28%29.md): Stops capturing Metal commands.

### Monitoring capture

- [isCapturing](mtlcapturemanager/iscapturing.md): A Boolean value that indicates whether Metal commands are being captured.

### Instance Methods

- [init](mtlcapturemanager/init.md)
- [newCaptureScopeWithMTL4CommandQueue:](mtlcapturemanager/makecapturescope%28commandqueue_%29-9wie3.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Frame capture

- [MTLCaptureDescriptor](mtlcapturedescriptor.md): A configuration for a Metal capture session.
- [MTLCaptureDestination](mtlcapturedestination.md): The kinds of destinations for captured command data.
- [MTLCaptureScope](mtlcapturescope.md): A type that can programmatically customize a GPU frame capture.
