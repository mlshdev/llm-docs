> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/removeconnection(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/removeconnection(_:))

# removeConnection(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Removes a capture connection from the session.

## Declaration

```swift
func removeConnection(_ connection: AVCaptureConnection)
```

## Parameters

- `connection`: The capture connection to remove from the session.

<a id="Discussion"></a>

## Discussion

You can call this method while the session is running.

## See Also

### Connecting inputs and outputs

- [connections](connections.md): The connections between inputs and outputs that a capture session contains.
- [addConnection(\_:)](addconnection%28__%29.md): Adds a connection to the capture session.
- [canAddConnection(\_:)](canaddconnection%28__%29.md): Determines whether a you can add a connection to a capture session.
- [addInputWithNoConnections(\_:)](addinputwithnoconnections%28__%29.md): Adds a capture input to a session without forming any connections.
- [addOutputWithNoConnections(\_:)](addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [AVCaptureAudioChannel](../avcaptureaudiochannel.md): An object that monitors average and peak power levels for an audio channel in a capture connection.

# removeConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Removes a capture connection from the session.

## Declaration

```objectivec
- (void) removeConnection:(AVCaptureConnection *) connection;
```

## Parameters

- `connection`: The capture connection to remove from the session.

<a id="Discussion"></a>

## Discussion

You can call this method while the session is running.

## See Also

### Connecting inputs and outputs

- [connections](connections.md): The connections between inputs and outputs that a capture session contains.
- [addConnection:](addconnection%28__%29.md): Adds a connection to the capture session.
- [canAddConnection:](canaddconnection%28__%29.md): Determines whether a you can add a connection to a capture session.
- [addInputWithNoConnections:](addinputwithnoconnections%28__%29.md): Adds a capture input to a session without forming any connections.
- [addOutputWithNoConnections:](addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [AVCaptureAudioChannel](../avcaptureaudiochannel.md): An object that monitors average and peak power levels for an audio channel in a capture connection.
