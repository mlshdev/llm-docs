> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/connections](https://developer.apple.com/documentation/avfoundation/avcapturesession/connections)

# connections (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+

The connections between inputs and outputs that a capture session contains.

## Declaration

```swift
var connections: [AVCaptureConnection] { get }
```

<a id="Discussion"></a>

## Discussion

A capture session automatically forms connections between inputs and outputs when you call the [addInput(\_:)](addinput%28__%29.md) or [addOutput(\_:)](addoutput%28__%29.md) methods. You can explicitly add connections to a session by calling the [addConnection(\_:)](addconnection%28__%29.md) method.

## See Also

### Connecting inputs and outputs

- [addConnection(\_:)](addconnection%28__%29.md): Adds a connection to the capture session.
- [canAddConnection(\_:)](canaddconnection%28__%29.md): Determines whether a you can add a connection to a capture session.
- [addInputWithNoConnections(\_:)](addinputwithnoconnections%28__%29.md): Adds a capture input to a session without forming any connections.
- [addOutputWithNoConnections(\_:)](addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [removeConnection(\_:)](removeconnection%28__%29.md): Removes a capture connection from the session.
- [AVCaptureAudioChannel](../avcaptureaudiochannel.md): An object that monitors average and peak power levels for an audio channel in a capture connection.

# connections (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+

The connections between inputs and outputs that a capture session contains.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCaptureConnection *> * connections;
```

<a id="Discussion"></a>

## Discussion

A capture session automatically forms connections between inputs and outputs when you call the [addInput:](addinput%28__%29.md) or [addOutput:](addoutput%28__%29.md) methods. You can explicitly add connections to a session by calling the [addConnection:](addconnection%28__%29.md) method.

## See Also

### Connecting inputs and outputs

- [addConnection:](addconnection%28__%29.md): Adds a connection to the capture session.
- [canAddConnection:](canaddconnection%28__%29.md): Determines whether a you can add a connection to a capture session.
- [addInputWithNoConnections:](addinputwithnoconnections%28__%29.md): Adds a capture input to a session without forming any connections.
- [addOutputWithNoConnections:](addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [removeConnection:](removeconnection%28__%29.md): Removes a capture connection from the session.
- [AVCaptureAudioChannel](../avcaptureaudiochannel.md): An object that monitors average and peak power levels for an audio channel in a capture connection.
