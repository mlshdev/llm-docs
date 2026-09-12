> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponent/availablearchitectures](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/availablearchitectures)

# availableArchitectures (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An array of architectures that the audio unit supports.

## Declaration

```swift
var availableArchitectures: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

This is an `NSArray` of `NSNumbers` where each entry corresponds to one of the constants in Mach-O Architecture in [Bundle](../../foundation/bundle.md).

## See Also

### Getting audio unit component information

- [audioComponentDescription](audiocomponentdescription.md): The audio component description.
- [configurationDictionary](configurationdictionary.md): The audio unit component’s configuration dictionary.
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

# availableArchitectures (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An array of architectures that the audio unit supports.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * availableArchitectures;
```

<a id="Discussion"></a>

## Discussion

This is an `NSArray` of `NSNumbers` where each entry corresponds to one of the constants in Mach-O Architecture in [NSBundle](../../foundation/bundle.md).

## See Also

### Getting audio unit component information

- [audioComponentDescription](audiocomponentdescription.md): The audio component description.
- [configurationDictionary](configurationdictionary.md): The audio unit component’s configuration dictionary.
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
