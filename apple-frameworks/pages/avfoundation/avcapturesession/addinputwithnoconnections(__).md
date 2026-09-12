> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/addinputwithnoconnections(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/addinputwithnoconnections(_:))

# addInputWithNoConnections(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Adds a capture input to a session without forming any connections.

## Declaration

```swift
func addInputWithNoConnections(_ input: AVCaptureInput)
```

## Parameters

- `input`: The capture input to add to the session.

<a id="Discussion"></a>

## Discussion

You can call this method while the session is running.

In most cases, use the [addInput(\_:)](addinput%28__%29.md) method to add new inputs to a session. Call this method if you require fine-grained control over which inputs connect to which outputs.

## See Also

### Connecting inputs and outputs

- [connections](connections.md): The connections between inputs and outputs that a capture session contains.
- [addConnection(\_:)](addconnection%28__%29.md): Adds a connection to the capture session.
- [canAddConnection(\_:)](canaddconnection%28__%29.md): Determines whether a you can add a connection to a capture session.
- [addOutputWithNoConnections(\_:)](addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [removeConnection(\_:)](removeconnection%28__%29.md): Removes a capture connection from the session.
- [AVCaptureAudioChannel](../avcaptureaudiochannel.md): An object that monitors average and peak power levels for an audio channel in a capture connection.

# addInputWithNoConnections: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Adds a capture input to a session without forming any connections.

## Declaration

```objectivec
- (void) addInputWithNoConnections:(AVCaptureInput *) input;
```

## Parameters

- `input`: The capture input to add to the session.

<a id="Discussion"></a>

## Discussion

You can call this method while the session is running.

In most cases, use the [addInput:](addinput%28__%29.md) method to add new inputs to a session. Call this method if you require fine-grained control over which inputs connect to which outputs.

## See Also

### Connecting inputs and outputs

- [connections](connections.md): The connections between inputs and outputs that a capture session contains.
- [addConnection:](addconnection%28__%29.md): Adds a connection to the capture session.
- [canAddConnection:](canaddconnection%28__%29.md): Determines whether a you can add a connection to a capture session.
- [addOutputWithNoConnections:](addoutputwithnoconnections%28__%29.md): Adds a capture output to the session without forming any connections.
- [removeConnection:](removeconnection%28__%29.md): Removes a capture connection from the session.
- [AVCaptureAudioChannel](../avcaptureaudiochannel.md): An object that monitors average and peak power levels for an audio channel in a capture connection.
