> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginecore/beaudiosession-6b7ig/preferredoutput](https://developer.apple.com/documentation/browserenginecore/beaudiosession-6b7ig/preferredoutput)

# preferredOutput (Swift)

**Framework:** BrowserEngineCore  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The output port the person sets as their preference.

## Declaration

```swift
var preferredOutput: AVAudioSessionPortDescription? { get }
```

<a id="discussion"></a>

## Discussion

The value is `nil` if a person hasn’t set a preference.

## See Also

### Managing audio output

- [availableOutputs](availableoutputs.md): An array of output ports available for audio routing in the current session.
- [setPreferredOutput(\_:)](setpreferredoutput%28__%29.md): Sets the preferred audio output port for the session.

# preferredOutput (Objective-C)

**Framework:** BrowserEngineCore  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The output port the person sets as their preference.

## Declaration

```objectivec
@property (readonly, nullable) AVAudioSessionPortDescription * preferredOutput;
```

<a id="discussion"></a>

## Discussion

The value is `nil` if a person hasn’t set a preference.

## See Also

### Managing audio output

- [availableOutputs](availableoutputs.md): An array of output ports available for audio routing in the current session.
- [setPreferredOutput:error:](setpreferredoutput%28__%29.md): Sets the preferred audio output port for the session.
