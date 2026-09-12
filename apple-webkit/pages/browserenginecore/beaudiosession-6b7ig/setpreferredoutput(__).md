> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginecore/beaudiosession-6b7ig/setpreferredoutput(_:)](https://developer.apple.com/documentation/browserenginecore/beaudiosession-6b7ig/setpreferredoutput(_:))

# setPreferredOutput(\_:) (Swift)

**Framework:** BrowserEngineCore  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Sets the preferred audio output port for the session.

## Declaration

```swift
func setPreferredOutput(_ outPort: AVAudioSessionPortDescription?) throws
```

<a id="discussion"></a>

## Discussion

Pass `nil` to clear the current preference and return to the system’s default output routing.

## See Also

### Managing audio output

- [availableOutputs](availableoutputs.md): An array of output ports available for audio routing in the current session.
- [preferredOutput](preferredoutput.md): The output port the person sets as their preference.

# setPreferredOutput:error: (Objective-C)

**Framework:** BrowserEngineCore  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Sets the preferred audio output port for the session.

## Declaration

```objectivec
- (BOOL) setPreferredOutput:(AVAudioSessionPortDescription *) outPort error:(NSError **) outError;
```

<a id="discussion"></a>

## Discussion

Pass `nil` to clear the current preference and return to the system’s default output routing.

## See Also

### Managing audio output

- [availableOutputs](availableoutputs.md): An array of output ports available for audio routing in the current session.
- [preferredOutput](preferredoutput.md): The output port the person sets as their preference.
