> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturescope](https://developer.apple.com/documentation/metal/mtlcapturescope)

# MTLCaptureScope (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A type that can programmatically customize a GPU frame capture.

## Declaration

```swift
protocol MTLCaptureScope : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Each capture scope instance configures what a frame capture records and methods that programmatically start and stop recording data.

Filter the commands a frame capture records by selecting specific sources with a capture scope. By contrast, the default capture scope records all the data for a single frame when you click the Capture GPU workload button in the debug bar in Xcode. You can choose which data Metal records during a frame capture by creating your own capture scope.

You can program exactly which Metal commands to record in a frame capture by calling the [begin()](mtlcapturescope/begin%28%29.md) and [end()](mtlcapturescope/end%28%29.md) methods around the Metal calls you want the capture to include. In the case of a rendering loop, your calls to [begin()](mtlcapturescope/begin%28%29.md) and [end()](mtlcapturescope/end%28%29.md) can capture a small part of a frame, or capture data from multiple frames.

For more information about frame captures and capture scopes, see [Metal debugger](https://developer.apple.com/documentation/xcode/metal-debugger) and [Metal developer workflows](https://developer.apple.com/documentation/xcode/metal-developer-workflows), respectively.

## Topics

### Defining capture scope boundaries

- [begin()](mtlcapturescope/begin%28%29.md): Tells Metal to begin recording command information.
- [end()](mtlcapturescope/end%28%29.md): Tells Metal to stop recording command information.

### Identifying the capture scope

- [label](mtlcapturescope/label.md): A string that helps you identify the capture scope.
- [device](mtlcapturescope/device.md): The device object from which you created the capture scope.
- [commandQueue](mtlcapturescope/commandqueue.md): The command queue that this capture scope uses to limit which commands are recorded.

### Instance Properties

- [mtl4CommandQueue](mtlcapturescope/mtl4commandqueue.md): If set, this scope will only capture Metal commands from the associated Metal 4 command queue. Defaults to nil (all command queues from the associated device are captured).

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Frame capture

- [MTLCaptureDescriptor](mtlcapturedescriptor.md): A configuration for a Metal capture session.
- [MTLCaptureManager](mtlcapturemanager.md): An instance you use to capture Metal command data in your app.
- [MTLCaptureDestination](mtlcapturedestination.md): The kinds of destinations for captured command data.

# MTLCaptureScope (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A type that can programmatically customize a GPU frame capture.

## Declaration

```objectivec
@protocol MTLCaptureScope <NSObject>
```

<a id="overview"></a>

## Overview

Each capture scope instance configures what a frame capture records and methods that programmatically start and stop recording data.

Filter the commands a frame capture records by selecting specific sources with a capture scope. By contrast, the default capture scope records all the data for a single frame when you click the Capture GPU workload button in the debug bar in Xcode. You can choose which data Metal records during a frame capture by creating your own capture scope.

You can program exactly which Metal commands to record in a frame capture by calling the [beginScope](mtlcapturescope/begin%28%29.md) and [endScope](mtlcapturescope/end%28%29.md) methods around the Metal calls you want the capture to include. In the case of a rendering loop, your calls to [beginScope](mtlcapturescope/begin%28%29.md) and [endScope](mtlcapturescope/end%28%29.md) can capture a small part of a frame, or capture data from multiple frames.

For more information about frame captures and capture scopes, see [Metal debugger](https://developer.apple.com/documentation/xcode/metal-debugger) and [Metal developer workflows](https://developer.apple.com/documentation/xcode/metal-developer-workflows), respectively.

## Topics

### Defining capture scope boundaries

- [beginScope](mtlcapturescope/begin%28%29.md): Tells Metal to begin recording command information.
- [endScope](mtlcapturescope/end%28%29.md): Tells Metal to stop recording command information.

### Identifying the capture scope

- [label](mtlcapturescope/label.md): A string that helps you identify the capture scope.
- [device](mtlcapturescope/device.md): The device object from which you created the capture scope.
- [commandQueue](mtlcapturescope/commandqueue.md): The command queue that this capture scope uses to limit which commands are recorded.

### Instance Properties

- [mtl4CommandQueue](mtlcapturescope/mtl4commandqueue.md): If set, this scope will only capture Metal commands from the associated Metal 4 command queue. Defaults to nil (all command queues from the associated device are captured).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Frame capture

- [MTLCaptureDescriptor](mtlcapturedescriptor.md): A configuration for a Metal capture session.
- [MTLCaptureManager](mtlcapturemanager.md): An instance you use to capture Metal command data in your app.
- [MTLCaptureDestination](mtlcapturedestination.md): The kinds of destinations for captured command data.
