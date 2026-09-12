> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine](https://developer.apple.com/documentation/avfaudio/avaudioengine)

# AVAudioEngine (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that manages a graph of audio nodes, controls playback, and configures real-time rendering constraints.

## Declaration

```swift
class AVAudioEngine
```

## Mentioned In

- [Routing audio to specific devices in multidevice sessions](routing-audio-to-specific-devices-in-multidevice-sessions.md)

<a id="overview"></a>

## Overview

An audio engine object contains a group of [AVAudioNode](avaudionode.md) instances that you attach to form an audio processing chain.

![A flow diagram that shows an app using an audio engine in a real time context. The audio flows from the source file in the app to a player node, a mixer node, and an output node before reaching the device’s speaker or connected headphones.](https://developer.apple.com/images/com.apple.avfaudio/media-3901205@2x.png)

You can connect, disconnect, and remove audio nodes during runtime with minor limitations. Removing an audio node that has differing channel counts, or that’s a mixer, can break the graph. Reconnect audio nodes only when they’re upstream of a mixer.

By default, Audio Engine renders to a connected audio device in real time. You can configure the engine to operate in manual rendering mode when you need to render at, or faster than, real time. In that mode, the engine disconnects from audio devices and your app drives the rendering.

<a id="Create-an-Engine-for-Audio-File-Playback"></a>

### Create an Engine for Audio File Playback

To play an audio file, you create an [AVAudioFile](avaudiofile.md) with a file that’s open for reading. Create an audio engine object and an [AVAudioPlayerNode](avaudioplayernode.md) instance, and then attach the player node to the engine. Next, connect the player node to the audio engine’s output node. The engine performs audio output through an output node, which is a singleton that the engine creates the first time you access it.

```swift
let audioFile = /* An AVAudioFile instance that points to file that's open for reading. */
let audioEngine = AVAudioEngine()
let playerNode = AVAudioPlayerNode()

// Attach the player node to the audio engine.
audioEngine.attach(playerNode)

// Connect the player node to the output node.
audioEngine.connect(playerNode, 
                    to: audioEngine.outputNode, 
                    format: audioFile.processingFormat)
```

Then schedule the audio file for full playback. The callback notifies your app when playback completes.

```swift
playerNode.scheduleFile(audioFile, 
                        at: nil, 
                        completionCallbackType: .dataPlayedBack) { _ in
    /* Handle any work that's necessary after playback. */
}
```

Before you play the audio, start the engine.

```swift
do {
    try audioEngine.start()
    playerNode.play()
} catch {
    /* Handle the error. */
}
```

When you’re done, stop the player and the engine.

```swift
playerNode.stop()
audioEngine.stop()
```

## Topics

### Creating an Audio Engine

- [init()](avaudioengine/init%28%29.md): Creates an audio engine instance for rendering in real time.

### Attaching and Detaching Audio Nodes

- [attach(\_:)](avaudioengine/attach%28__%29.md): Attaches an audio node to the audio engine.
- [detach(\_:)](avaudioengine/detach%28__%29.md): Detaches an audio node from the audio engine.
- [attachedNodes](avaudioengine/attachednodes.md): A read-only set that contains the nodes you attach to the audio engine.

### Getting the Input, Output, and Main Mixer Nodes

- [inputNode](avaudioengine/inputnode.md): The audio engine’s singleton input audio node.
- [outputNode](avaudioengine/outputnode.md): The audio engine’s singleton output audio node.
- [mainMixerNode](avaudioengine/mainmixernode.md): The audio engine’s optional singleton main mixer node.

### Connecting and Disconnecting Audio Nodes

- [connectNode(\_:to:format:)](avaudioengine/connectnode%28__to_format_%29.md)
- [connectNode(\_:to:fromBus:toBus:format:)](avaudioengine/connectnode%28__to_frombus_tobus_format_%29.md)
- [connectNode(\_:to:fromBus:format:)](avaudioengine/connectnode%28__to_frombus_format_%29.md)
- [connect(\_:to:format:)](avaudioengine/connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [connect(\_:to:fromBus:toBus:format:)](avaudioengine/connect%28__to_frombus_tobus_format_%29.md): Deprecated. Establishes a connection between two nodes, specifying the input and output busses.
- [disconnectNodeInput(\_:)](avaudioengine/disconnectnodeinput%28__%29.md): Removes all input connections of the node.
- [disconnectNodeInput(\_:bus:)](avaudioengine/disconnectnodeinput%28__bus_%29.md): Removes the input connection of a node on the specified bus.
- [disconnectNodeOutput(\_:)](avaudioengine/disconnectnodeoutput%28__%29.md): Removes all output connections of a node.
- [disconnectNodeOutput(\_:bus:)](avaudioengine/disconnectnodeoutput%28__bus_%29.md): Removes the output connection of a node on the specified bus.

### Managing MIDI Nodes

- [connectMIDI(\_:to:format:eventListProvider:)](avaudioengine/connectmidi%28__to_format_eventlistprovider_%29-8tmk8.md)
- [connectMIDI(\_:to:format:eventListProvider:)](avaudioengine/connectmidi%28__to_format_eventlistprovider_%29-35k1c.md)
- [connectMIDI(\_:to:format:eventListBlock:)](avaudioengine/connectmidi%28__to_format_eventlistblock_%29-73cd1.md): Deprecated. Establishes a MIDI connection between two nodes.
- [connectMIDI(\_:to:format:eventListBlock:)](avaudioengine/connectmidi%28__to_format_eventlistblock_%29-7qtd5.md): Deprecated. Establishes a MIDI connection between a source node and multiple destination nodes.
- [disconnectMIDI(\_:from:)](avaudioengine/disconnectmidi%28__from_%29-1kssy.md): Removes a MIDI connection between two nodes.
- [disconnectMIDI(\_:from:)](avaudioengine/disconnectmidi%28__from_%29-7oaab.md): Removes a MIDI connection between one source node and multiple destination nodes.
- [disconnectMIDIInput(\_:)](avaudioengine/disconnectmidiinput%28__%29.md): Disconnects all input MIDI connections from a node.
- [disconnectMIDIOutput(\_:)](avaudioengine/disconnectmidioutput%28__%29.md): Disconnects all output MIDI connections from a node.
- [connectMIDI(\_:to:format:block:)](avaudioengine/connectmidi%28__to_format_block_%29-3bc13.md): Deprecated. Establishes a MIDI-only connection between two nodes.
- [connectMIDI(\_:to:format:block:)](avaudioengine/connectmidi%28__to_format_block_%29-666bc.md): Deprecated. Establishes a MIDI-only connection between a source node and multiple destination nodes.

### Playing Audio

- [prepare()](avaudioengine/prepare%28%29.md): Prepares the audio engine for starting.
- [start()](avaudioengine/start%28%29.md): Starts the audio engine.
- [isRunning](avaudioengine/isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [pause()](avaudioengine/pause%28%29.md): Pauses the audio engine.
- [stop()](avaudioengine/stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
- [reset()](avaudioengine/reset%28%29.md): Resets all audio nodes in the audio engine.
- [withMusicSequence(\_:)](avaudioengine/withmusicsequence%28__%29.md): Provides scoped access to the AVAudioEngine’s MusicSequence

### Manually Rendering an Audio Engine

- [enableManualRenderingMode(\_:format:maximumFrameCount:)](avaudioengine/enablemanualrenderingmode%28__format_maximumframecount_%29.md): Sets the engine to operate in manual rendering mode with the render format and maximum frame count you specify.
- [disableManualRenderingMode()](avaudioengine/disablemanualrenderingmode%28%29.md): Sets the engine to render to or from an audio device.
- [renderOffline(\_:to:)](avaudioengine/renderoffline%28__to_%29.md): Makes a render call to the engine operating in the offline manual rendering mode.

### Getting Manual Rendering Properties

- [AVAudioEngineManualRenderingBlock](avaudioenginemanualrenderingblock.md): The type that represents a block that renders the engine when operating in manual rendering mode.
- [manualRenderingBlock](avaudioengine/manualrenderingblock.md): The block that renders the engine when operating in manual rendering mode.
- [manualRenderingFormat](avaudioengine/manualrenderingformat.md): The render format of the engine in manual rendering mode.
- [manualRenderingMaximumFrameCount](avaudioengine/manualrenderingmaximumframecount.md): The maximum number of PCM sample frames the engine produces in any single render call in manual rendering mode.
- [manualRenderingMode](avaudioengine/manualrenderingmode.md): The manual rendering mode configured on the engine.
- [manualRenderingSampleTime](avaudioengine/manualrenderingsampletime.md): An indication of where the engine is on its render timeline in manual rendering mode.
- [isAutoShutdownEnabled](avaudioengine/isautoshutdownenabled.md): A Boolean value that indicates whether autoshutdown is in an enabled state.
- [isInManualRenderingMode](avaudioengine/isinmanualrenderingmode.md): A Boolean value that indicates whether the engine is operating in manual rendering mode.

### Using Connection Points

- [AVAudioConnectionPoint](avaudioconnectionpoint.md): A representation of either a source or destination connection point in the audio engine.
- [connect(\_:to:fromBus:format:)](avaudioengine/connect%28__to_frombus_format_%29.md): Deprecated. Establishes a connection between a source node and multiple destination nodes.
- [inputConnectionPoint(for:inputBus:)](avaudioengine/inputconnectionpoint%28for_inputbus_%29.md): Returns connection information about a node’s input bus.
- [outputConnectionPoints(for:outputBus:)](avaudioengine/outputconnectionpoints%28for_outputbus_%29.md): Returns connection information about a node’s output bus.

### Constants

- [AVAudioEngineManualRenderingError](avaudioenginemanualrenderingerror.md): Constants that describe error codes that the framework returns from manual rendering mode methods.
- [AVAudioEngineManualRenderingMode](avaudioenginemanualrenderingmode.md): The two modes for manual rendering.
- [AVAudioEngineManualRenderingStatus](avaudioenginemanualrenderingstatus.md): Status codes that return from the render call to the engine operating in manual rendering mode.

### Instance Properties

- [musicSequence](avaudioengine/musicsequence-1z47z.md): Deprecated.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVAudioEngine (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that manages a graph of audio nodes, controls playback, and configures real-time rendering constraints.

## Declaration

```objectivec
@interface AVAudioEngine : NSObject
```

## Mentioned In

- [Routing audio to specific devices in multidevice sessions](routing-audio-to-specific-devices-in-multidevice-sessions.md)

<a id="overview"></a>

## Overview

An audio engine object contains a group of [AVAudioNode](avaudionode.md) instances that you attach to form an audio processing chain.

![A flow diagram that shows an app using an audio engine in a real time context. The audio flows from the source file in the app to a player node, a mixer node, and an output node before reaching the device’s speaker or connected headphones.](https://developer.apple.com/images/com.apple.avfaudio/media-3901205@2x.png)

You can connect, disconnect, and remove audio nodes during runtime with minor limitations. Removing an audio node that has differing channel counts, or that’s a mixer, can break the graph. Reconnect audio nodes only when they’re upstream of a mixer.

By default, Audio Engine renders to a connected audio device in real time. You can configure the engine to operate in manual rendering mode when you need to render at, or faster than, real time. In that mode, the engine disconnects from audio devices and your app drives the rendering.

<a id="Create-an-Engine-for-Audio-File-Playback"></a>

### Create an Engine for Audio File Playback

To play an audio file, you create an [AVAudioFile](avaudiofile.md) with a file that’s open for reading. Create an audio engine object and an [AVAudioPlayerNode](avaudioplayernode.md) instance, and then attach the player node to the engine. Next, connect the player node to the audio engine’s output node. The engine performs audio output through an output node, which is a singleton that the engine creates the first time you access it.

```swift
let audioFile = /* An AVAudioFile instance that points to file that's open for reading. */
let audioEngine = AVAudioEngine()
let playerNode = AVAudioPlayerNode()

// Attach the player node to the audio engine.
audioEngine.attach(playerNode)

// Connect the player node to the output node.
audioEngine.connect(playerNode, 
                    to: audioEngine.outputNode, 
                    format: audioFile.processingFormat)
```

Then schedule the audio file for full playback. The callback notifies your app when playback completes.

```swift
playerNode.scheduleFile(audioFile, 
                        at: nil, 
                        completionCallbackType: .dataPlayedBack) { _ in
    /* Handle any work that's necessary after playback. */
}
```

Before you play the audio, start the engine.

```swift
do {
    try audioEngine.start()
    playerNode.play()
} catch {
    /* Handle the error. */
}
```

When you’re done, stop the player and the engine.

```swift
playerNode.stop()
audioEngine.stop()
```

## Topics

### Creating an Audio Engine

- [init](avaudioengine/init%28%29.md): Creates an audio engine instance for rendering in real time.

### Attaching and Detaching Audio Nodes

- [attachNode:](avaudioengine/attach%28__%29.md): Attaches an audio node to the audio engine.
- [detachNode:](avaudioengine/detach%28__%29.md): Detaches an audio node from the audio engine.
- [attachedNodes](avaudioengine/attachednodes.md): A read-only set that contains the nodes you attach to the audio engine.

### Getting the Input, Output, and Main Mixer Nodes

- [inputNode](avaudioengine/inputnode.md): The audio engine’s singleton input audio node.
- [outputNode](avaudioengine/outputnode.md): The audio engine’s singleton output audio node.
- [mainMixerNode](avaudioengine/mainmixernode.md): The audio engine’s optional singleton main mixer node.

### Connecting and Disconnecting Audio Nodes

- [connect:to:format:error:](avaudioengine/connectnode%28__to_format_%29.md)
- [connect:to:fromBus:toBus:format:error:](avaudioengine/connectnode%28__to_frombus_tobus_format_%29.md)
- [connect:toConnectionPoints:fromBus:format:error:](avaudioengine/connectnode%28__to_frombus_format_%29.md)
- [connect:to:format:](avaudioengine/connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [connect:to:fromBus:toBus:format:](avaudioengine/connect%28__to_frombus_tobus_format_%29.md): Deprecated. Establishes a connection between two nodes, specifying the input and output busses.
- [disconnectNodeInput:](avaudioengine/disconnectnodeinput%28__%29.md): Removes all input connections of the node.
- [disconnectNodeInput:bus:](avaudioengine/disconnectnodeinput%28__bus_%29.md): Removes the input connection of a node on the specified bus.
- [disconnectNodeOutput:](avaudioengine/disconnectnodeoutput%28__%29.md): Removes all output connections of a node.
- [disconnectNodeOutput:bus:](avaudioengine/disconnectnodeoutput%28__bus_%29.md): Removes the output connection of a node on the specified bus.

### Managing MIDI Nodes

- [connectMIDI:to:format:eventListProvider:](avaudioengine/connectmidi%28__to_format_eventlistprovider_%29-8tmk8.md)
- [connectMIDI:toNodes:format:eventListProvider:](avaudioengine/connectmidi%28__to_format_eventlistprovider_%29-35k1c.md)
- [connectMIDI:to:format:eventListBlock:](avaudioengine/connectmidi%28__to_format_eventlistblock_%29-73cd1.md): Deprecated. Establishes a MIDI connection between two nodes.
- [connectMIDI:toNodes:format:eventListBlock:](avaudioengine/connectmidi%28__to_format_eventlistblock_%29-7qtd5.md): Deprecated. Establishes a MIDI connection between a source node and multiple destination nodes.
- [disconnectMIDI:from:](avaudioengine/disconnectmidi%28__from_%29-1kssy.md): Removes a MIDI connection between two nodes.
- [disconnectMIDI:fromNodes:](avaudioengine/disconnectmidi%28__from_%29-7oaab.md): Removes a MIDI connection between one source node and multiple destination nodes.
- [disconnectMIDIInput:](avaudioengine/disconnectmidiinput%28__%29.md): Disconnects all input MIDI connections from a node.
- [disconnectMIDIOutput:](avaudioengine/disconnectmidioutput%28__%29.md): Disconnects all output MIDI connections from a node.
- [connectMIDI:to:format:block:](avaudioengine/connectmidi%28__to_format_block_%29-3bc13.md): Deprecated. Establishes a MIDI-only connection between two nodes.
- [connectMIDI:toNodes:format:block:](avaudioengine/connectmidi%28__to_format_block_%29-666bc.md): Deprecated. Establishes a MIDI-only connection between a source node and multiple destination nodes.

### Playing Audio

- [prepare](avaudioengine/prepare%28%29.md): Prepares the audio engine for starting.
- [startAndReturnError:](avaudioengine/start%28%29.md): Starts the audio engine.
- [running](avaudioengine/isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [pause](avaudioengine/pause%28%29.md): Pauses the audio engine.
- [stop](avaudioengine/stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
- [reset](avaudioengine/reset%28%29.md): Resets all audio nodes in the audio engine.

### Manually Rendering an Audio Engine

- [enableManualRenderingMode:format:maximumFrameCount:error:](avaudioengine/enablemanualrenderingmode%28__format_maximumframecount_%29.md): Sets the engine to operate in manual rendering mode with the render format and maximum frame count you specify.
- [disableManualRenderingMode](avaudioengine/disablemanualrenderingmode%28%29.md): Sets the engine to render to or from an audio device.
- [renderOffline:toBuffer:error:](avaudioengine/renderoffline%28__to_%29.md): Makes a render call to the engine operating in the offline manual rendering mode.

### Getting Manual Rendering Properties

- [AVAudioEngineManualRenderingBlock](avaudioenginemanualrenderingblock.md): The type that represents a block that renders the engine when operating in manual rendering mode.
- [manualRenderingBlock](avaudioengine/manualrenderingblock.md): The block that renders the engine when operating in manual rendering mode.
- [manualRenderingFormat](avaudioengine/manualrenderingformat.md): The render format of the engine in manual rendering mode.
- [manualRenderingMaximumFrameCount](avaudioengine/manualrenderingmaximumframecount.md): The maximum number of PCM sample frames the engine produces in any single render call in manual rendering mode.
- [manualRenderingMode](avaudioengine/manualrenderingmode.md): The manual rendering mode configured on the engine.
- [manualRenderingSampleTime](avaudioengine/manualrenderingsampletime.md): An indication of where the engine is on its render timeline in manual rendering mode.
- [autoShutdownEnabled](avaudioengine/isautoshutdownenabled.md): A Boolean value that indicates whether autoshutdown is in an enabled state.
- [isInManualRenderingMode](avaudioengine/isinmanualrenderingmode.md): A Boolean value that indicates whether the engine is operating in manual rendering mode.

### Using Connection Points

- [AVAudioConnectionPoint](avaudioconnectionpoint.md): A representation of either a source or destination connection point in the audio engine.
- [connect:toConnectionPoints:fromBus:format:](avaudioengine/connect%28__to_frombus_format_%29.md): Deprecated. Establishes a connection between a source node and multiple destination nodes.
- [inputConnectionPointForNode:inputBus:](avaudioengine/inputconnectionpoint%28for_inputbus_%29.md): Returns connection information about a node’s input bus.
- [outputConnectionPointsForNode:outputBus:](avaudioengine/outputconnectionpoints%28for_outputbus_%29.md): Returns connection information about a node’s output bus.

### Notifications

- [AVAudioEngineConfigurationChangeNotification](avaudioengineconfigurationchangenotification.md): A notification the framework posts when the audio engine configuration changes.

### Constants

- [AVAudioEngineManualRenderingError](avaudioenginemanualrenderingerror.md): Constants that describe error codes that the framework returns from manual rendering mode methods.
- [AVAudioEngineManualRenderingMode](avaudioenginemanualrenderingmode.md): The two modes for manual rendering.
- [AVAudioEngineManualRenderingStatus](avaudioenginemanualrenderingstatus.md): Status codes that return from the render call to the engine operating in manual rendering mode.

### Instance Properties

- [musicSequence](avaudioengine/musicsequence-3u74x.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
