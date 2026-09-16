> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/browserenginecore/beaudiosession-7bb2q/init(audiosession:)

# init(audioSession:)

**Framework:** BrowserEngineCore  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Initializes a browser engine audio session.

## Declaration

```swift
@objc(initWithAudioSession:) init(audioSession: AVAudioSession)
```

<a id="discussion"></a>

## Discussion

[BEAudioSession](../beaudiosession-7bb2q.md) wraps the specified [AVFoundation](https://developer.apple.com/documentation/avfoundation) audio session.
