> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponent/configurationdictionary](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/configurationdictionary)

# configurationDictionary (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · visionOS 1.0+

The audio unit component’s configuration dictionary.

## Declaration

```swift
var configurationDictionary: [String : Any] { get }
```

## See Also

### Getting audio unit component information

- [audioComponentDescription](audiocomponentdescription.md): The audio component description.
- [availableArchitectures](availablearchitectures.md): An array of architectures that the audio unit supports.
- [hasCustomView](hascustomview.md): A Boolean value that indicates whether the audio unit component has a custom view.
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

# configurationDictionary (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · visionOS 1.0+

The audio unit component’s configuration dictionary.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,id> * configurationDictionary;
```

## See Also

### Getting audio unit component information

- [audioComponentDescription](audiocomponentdescription.md): The audio component description.
- [availableArchitectures](availablearchitectures.md): An array of architectures that the audio unit supports.
- [hasCustomView](hascustomview.md): A Boolean value that indicates whether the audio unit component has a custom view.
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
