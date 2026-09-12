> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponent/supportsnumberinputchannels(_:outputchannels:)](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/supportsnumberinputchannels(_:outputchannels:))

# supportsNumberInputChannels(\_:outputChannels:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Gets a Boolean value that indicates whether the audio unit component supports the specified number of input and output channels.

## Declaration

```swift
func supportsNumberInputChannels(_ numInputChannels: Int, outputChannels numOutputChannels: Int) -> Bool
```

## Parameters

- `numInputChannels`: The number of input channels.
- `numOutputChannels`: The number of output channels.

<a id="return-value"></a>

## Return Value

A value of [true](https://developer.apple.com/documentation/swift/true) if the audio unit component supports the specified number of input and output channels; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting audio unit component information

- [audioComponentDescription](audiocomponentdescription.md): The audio component description.
- [availableArchitectures](availablearchitectures.md): An array of architectures that the audio unit supports.
- [configurationDictionary](configurationdictionary.md): The audio unit component’s configuration dictionary.
- [hasCustomView](hascustomview.md): A Boolean value that indicates whether the audio unit component has a custom view.
- [hasMIDIInput](hasmidiinput.md): A Boolean value that indicates whether the audio unit component has MIDI input.
- [hasMIDIOutput](hasmidioutput.md): A Boolean value that indicates whether the audio unit component has MIDI output.
- [manufacturerName](manufacturername.md): The name of the manufacturer of the audio unit component.
- [name](name.md): The name of the audio unit component.
- [passesAUVal](passesauval.md): A Boolean value that indicates whether the audio unit component passes the validation tests.
- [isSandboxSafe](issandboxsafe.md): A Boolean value that indicates whether the audio unit component is safe for sandboxing.
- [typeName](typename.md): The audio unit component type.
- [version](version.md): The audio unit component version number.
- [versionString](versionstring.md): A string that represents the audio unit component version number.
- [componentURL](componenturl.md): Deprecated. The URL of the audio unit component.

# supportsNumberInputChannels:outputChannels: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Gets a Boolean value that indicates whether the audio unit component supports the specified number of input and output channels.

## Declaration

```objectivec
- (BOOL) supportsNumberInputChannels:(NSInteger) numInputChannels outputChannels:(NSInteger) numOutputChannels;
```

## Parameters

- `numInputChannels`: The number of input channels.
- `numOutputChannels`: The number of output channels.

<a id="return-value"></a>

## Return Value

A value of [true](https://developer.apple.com/documentation/swift/true) if the audio unit component supports the specified number of input and output channels; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting audio unit component information

- [audioComponentDescription](audiocomponentdescription.md): The audio component description.
- [availableArchitectures](availablearchitectures.md): An array of architectures that the audio unit supports.
- [configurationDictionary](configurationdictionary.md): The audio unit component’s configuration dictionary.
- [hasCustomView](hascustomview.md): A Boolean value that indicates whether the audio unit component has a custom view.
- [hasMIDIInput](hasmidiinput.md): A Boolean value that indicates whether the audio unit component has MIDI input.
- [hasMIDIOutput](hasmidioutput.md): A Boolean value that indicates whether the audio unit component has MIDI output.
- [manufacturerName](manufacturername.md): The name of the manufacturer of the audio unit component.
- [name](name.md): The name of the audio unit component.
- [passesAUVal](passesauval.md): A Boolean value that indicates whether the audio unit component passes the validation tests.
- [sandboxSafe](issandboxsafe.md): A Boolean value that indicates whether the audio unit component is safe for sandboxing.
- [typeName](typename.md): The audio unit component type.
- [version](version.md): The audio unit component version number.
- [versionString](versionstring.md): A string that represents the audio unit component version number.
- [componentURL](componenturl.md): Deprecated. The URL of the audio unit component.
