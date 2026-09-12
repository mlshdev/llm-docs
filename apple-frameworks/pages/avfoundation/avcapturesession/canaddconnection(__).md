> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/canaddconnection(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/canaddconnection(_:))

# canAddConnection(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Determines whether a you can add a connection to a capture session.

## Declaration

```swift
func canAddConnection(_ connection: AVCaptureConnection) -> Bool
```

## Parameters

- `connection`: A connect object to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can add the connection; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Connecting inputs and outputs

- [connections](connections.md): The connections between inputs and outputs that a capture session contains.
- [addConnection(\_:)](addconnection%28__%29.md): Adds a connection to the capture session.
- [addInputWithNoConnections(\_:)](addinputwithnoconnections%28__%29.md): Adds a capture input to a session without forming any connections.
- [addOutputWithNoConnections(\_:)](addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [removeConnection(\_:)](removeconnection%28__%29.md): Removes a capture connection from the session.
- [AVCaptureAudioChannel](../avcaptureaudiochannel.md): An object that monitors average and peak power levels for an audio channel in a capture connection.

# canAddConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Determines whether a you can add a connection to a capture session.

## Declaration

```objectivec
- (BOOL) canAddConnection:(AVCaptureConnection *) connection;
```

## Parameters

- `connection`: A connect object to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can add the connection; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Connecting inputs and outputs

- [connections](connections.md): The connections between inputs and outputs that a capture session contains.
- [addConnection:](addconnection%28__%29.md): Adds a connection to the capture session.
- [addInputWithNoConnections:](addinputwithnoconnections%28__%29.md): Adds a capture input to a session without forming any connections.
- [addOutputWithNoConnections:](addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [removeConnection:](removeconnection%28__%29.md): Removes a capture connection from the session.
- [AVCaptureAudioChannel](../avcaptureaudiochannel.md): An object that monitors average and peak power levels for an audio channel in a capture connection.
