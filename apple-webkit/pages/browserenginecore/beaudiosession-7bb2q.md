> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginecore/beaudiosession-7bb2q](https://developer.apple.com/documentation/browserenginecore/beaudiosession-7bb2q)

# BEAudioSession

**Framework:** BrowserEngineCore  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An object that wraps an AV audio session to scope the browser app’s audio session control.

## Declaration

```swift
@objc(BEAudioSession) class BEAudioSession
```

<a id="overview"></a>

## Overview

This class provides a scoped interface that limits a browser-app extension’s access to the audio session. For example, an extension process can query available outputs and communicate a preferred output to the system, while the browser app’s main process retains full control over audio session configuration.

## Topics

### Initializing an audio session

- [init(audioSession:)](beaudiosession-7bb2q/init%28audiosession_%29.md): Initializes a browser engine audio session.

### Managing audio output

- [availableOutputs](beaudiosession-7bb2q/availableoutputs.md): An array of output ports available for audio routing in the current session.
- [preferredOutput](beaudiosession-7bb2q/preferredoutput.md): The output port the person sets as their preference.
- [setPreferredOutput(\_:)](beaudiosession-7bb2q/setpreferredoutput%28__%29.md): Sets the preferred audio output port for the session.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Audio preferences

- [BEAudioSession](beaudiosession-6b7ig.md): An object that wraps an AV audio session to scope the browser app’s audio session control.
