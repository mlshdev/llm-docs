> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponent/hascustomview](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/hascustomview)

# hasCustomView (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the audio unit component has a custom view.

## Declaration

```swift
var hasCustomView: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) if the component has a custom view; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting audio unit component information

- [audioComponentDescription](audiocomponentdescription.md): The audio component description.
- [availableArchitectures](availablearchitectures.md): An array of architectures that the audio unit supports.
- [configurationDictionary](configurationdictionary.md): The audio unit component’s configuration dictionary.
- [hasMIDIInput](hasmidiinput.md): A Boolean value that indicates whether the audio unit component has MIDI input.
- [hasMIDIOutput](hasmidioutput.md): A Boolean value that indicates whether the audio unit component has MIDI output.
- [manufacturerName](manufacturername.md): The name of the manufacturer of the audio unit component.
- [name](name.md): The name of the audio unit component.
- [passesAUVal](passesauval.md): A Boolean value that indicates whether the audio unit component passes the validation tests.
- [isSandboxSafe](issandboxsafe.md): A Boolean value that indicates whether the audio unit component is safe for sandboxing.
- [supportsNumberInputChannels(\_:outputChannels:)](supportsnumberinputchannels%28__outputchannels_%29.md): Gets a Boolean value that indicates whether the audio unit component supports the specified number of input and output channels.
- [typeName](typename.md): The audio unit component type.
- [version](version.md): The audio unit component version number.
- [versionString](versionstring.md): A string that represents the audio unit component version number.
- [componentURL](componenturl.md): Deprecated. The URL of the audio unit component.

# hasCustomView (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the audio unit component has a custom view.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasCustomView;
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) if the component has a custom view; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting audio unit component information

- [audioComponentDescription](audiocomponentdescription.md): The audio component description.
- [availableArchitectures](availablearchitectures.md): An array of architectures that the audio unit supports.
- [configurationDictionary](configurationdictionary.md): The audio unit component’s configuration dictionary.
- [hasMIDIInput](hasmidiinput.md): A Boolean value that indicates whether the audio unit component has MIDI input.
- [hasMIDIOutput](hasmidioutput.md): A Boolean value that indicates whether the audio unit component has MIDI output.
- [manufacturerName](manufacturername.md): The name of the manufacturer of the audio unit component.
- [name](name.md): The name of the audio unit component.
- [passesAUVal](passesauval.md): A Boolean value that indicates whether the audio unit component passes the validation tests.
- [sandboxSafe](issandboxsafe.md): A Boolean value that indicates whether the audio unit component is safe for sandboxing.
- [supportsNumberInputChannels:outputChannels:](supportsnumberinputchannels%28__outputchannels_%29.md): Gets a Boolean value that indicates whether the audio unit component supports the specified number of input and output channels.
- [typeName](typename.md): The audio unit component type.
- [version](version.md): The audio unit component version number.
- [versionString](versionstring.md): A string that represents the audio unit component version number.
- [componentURL](componenturl.md): Deprecated. The URL of the audio unit component.
