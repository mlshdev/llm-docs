> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/addconnection(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/addconnection(_:))

# addConnection(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Adds a connection to the capture session.

## Declaration

```swift
func addConnection(_ connection: AVCaptureConnection)
```

## Parameters

- `connection`: The capture connection to add to the session.

<a id="Discussion"></a>

## Discussion

You can only add a capture connection to a session using this method if [canAddConnection(\_:)](canaddconnection%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true).

When using [addInput(\_:)](addinput%28__%29.md) or [addOutput(\_:)](addoutput%28__%29.md), the session automatically forms connections between all compatible inputs and outputs. Manually adding connections is only necessary when adding an input or output with no connections.

## See Also

### Connecting inputs and outputs

- [connections](connections.md): The connections between inputs and outputs that a capture session contains.
- [canAddConnection(\_:)](canaddconnection%28__%29.md): Determines whether a you can add a connection to a capture session.
- [addInputWithNoConnections(\_:)](addinputwithnoconnections%28__%29.md): Adds a capture input to a session without forming any connections.
- [addOutputWithNoConnections(\_:)](addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [removeConnection(\_:)](removeconnection%28__%29.md): Removes a capture connection from the session.
- [AVCaptureAudioChannel](../avcaptureaudiochannel.md): An object that monitors average and peak power levels for an audio channel in a capture connection.

# addConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Adds a connection to the capture session.

## Declaration

```objectivec
- (void) addConnection:(AVCaptureConnection *) connection;
```

## Parameters

- `connection`: The capture connection to add to the session.

<a id="Discussion"></a>

## Discussion

You can only add a capture connection to a session using this method if [canAddConnection:](canaddconnection%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true).

When using [addInput:](addinput%28__%29.md) or [addOutput:](addoutput%28__%29.md), the session automatically forms connections between all compatible inputs and outputs. Manually adding connections is only necessary when adding an input or output with no connections.

## See Also

### Connecting inputs and outputs

- [connections](connections.md): The connections between inputs and outputs that a capture session contains.
- [canAddConnection:](canaddconnection%28__%29.md): Determines whether a you can add a connection to a capture session.
- [addInputWithNoConnections:](addinputwithnoconnections%28__%29.md): Adds a capture input to a session without forming any connections.
- [addOutputWithNoConnections:](addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [removeConnection:](removeconnection%28__%29.md): Removes a capture connection from the session.
- [AVCaptureAudioChannel](../avcaptureaudiochannel.md): An object that monitors average and peak power levels for an audio channel in a capture connection.
