> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponent/typename](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/typename)

# typeName (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The audio unit component type.

## Declaration

```swift
var typeName: String { get }
```

<a id="Discussion"></a>

## Discussion

For information about possible values, see the “Audio Unit Types” topic under [AVAudioUnitComponent](../avaudiounitcomponent.md).

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
- [supportsNumberInputChannels(\_:outputChannels:)](supportsnumberinputchannels%28__outputchannels_%29.md): Gets a Boolean value that indicates whether the audio unit component supports the specified number of input and output channels.
- [version](version.md): The audio unit component version number.
- [versionString](versionstring.md): A string that represents the audio unit component version number.
- [componentURL](componenturl.md): Deprecated. The URL of the audio unit component.

# typeName (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The audio unit component type.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * typeName;
```

<a id="Discussion"></a>

## Discussion

For information about possible values, see the “Audio Unit Types” topic under [AVAudioUnitComponent](../avaudiounitcomponent.md).

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
- [supportsNumberInputChannels:outputChannels:](supportsnumberinputchannels%28__outputchannels_%29.md): Gets a Boolean value that indicates whether the audio unit component supports the specified number of input and output channels.
- [version](version.md): The audio unit component version number.
- [versionString](versionstring.md): A string that represents the audio unit component version number.
- [componentURL](componenturl.md): Deprecated. The URL of the audio unit component.
