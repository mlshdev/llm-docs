> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginecore/beaudiosession-7bb2q/availableoutputs](https://developer.apple.com/documentation/browserenginecore/beaudiosession-7bb2q/availableoutputs)

# availableOutputs

**Framework:** BrowserEngineCore  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An array of output ports available for audio routing in the current session.

## Declaration

```swift
@objc(availableOutputs) var availableOutputs: Array<AVAudioSessionPortDescription> { get }
```

## See Also

### Managing audio output

- [preferredOutput](preferredoutput.md): The output port the person sets as their preference.
- [setPreferredOutput(\_:)](setpreferredoutput%28__%29.md): Sets the preferred audio output port for the session.
