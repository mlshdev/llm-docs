> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponent](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent)

# AVAudioUnitComponent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that provides details about an audio unit.

## Declaration

```swift
class AVAudioUnitComponent
```

<a id="overview"></a>

## Overview

Details can include information such as type, subtype, manufacturer, and location. An `AVAudioUnitComponent` can include user tags, which you can query later for display.

## Topics

### Getting the audio unit component’s audio unit

- [audioComponent](avaudiounitcomponent/audiocomponent.md): The underlying audio component.

### Getting audio unit component information

- [audioComponentDescription](avaudiounitcomponent/audiocomponentdescription.md): The audio component description.
- [availableArchitectures](avaudiounitcomponent/availablearchitectures.md): An array of architectures that the audio unit supports.
- [configurationDictionary](avaudiounitcomponent/configurationdictionary.md): The audio unit component’s configuration dictionary.
- [hasCustomView](avaudiounitcomponent/hascustomview.md): A Boolean value that indicates whether the audio unit component has a custom view.
- [hasMIDIInput](avaudiounitcomponent/hasmidiinput.md): A Boolean value that indicates whether the audio unit component has MIDI input.
- [hasMIDIOutput](avaudiounitcomponent/hasmidioutput.md): A Boolean value that indicates whether the audio unit component has MIDI output.
- [manufacturerName](avaudiounitcomponent/manufacturername.md): The name of the manufacturer of the audio unit component.
- [name](avaudiounitcomponent/name.md): The name of the audio unit component.
- [passesAUVal](avaudiounitcomponent/passesauval.md): A Boolean value that indicates whether the audio unit component passes the validation tests.
- [isSandboxSafe](avaudiounitcomponent/issandboxsafe.md): A Boolean value that indicates whether the audio unit component is safe for sandboxing.
- [supportsNumberInputChannels(\_:outputChannels:)](avaudiounitcomponent/supportsnumberinputchannels%28__outputchannels_%29.md): Gets a Boolean value that indicates whether the audio unit component supports the specified number of input and output channels.
- [typeName](avaudiounitcomponent/typename.md): The audio unit component type.
- [version](avaudiounitcomponent/version.md): The audio unit component version number.
- [versionString](avaudiounitcomponent/versionstring.md): A string that represents the audio unit component version number.
- [componentURL](avaudiounitcomponent/componenturl.md): Deprecated. The URL of the audio unit component.

### Getting audio unit component tags

- [iconURL](avaudiounitcomponent/iconurl.md): The URL of an icon that represents the audio unit component.
- [icon](avaudiounitcomponent/icon.md): An icon that represents the component.
- [localizedTypeName](avaudiounitcomponent/localizedtypename.md): The localized type name of the component.
- [allTagNames](avaudiounitcomponent/alltagnames.md): An array of tag names for the audio unit component.
- [userTagNames](avaudiounitcomponent/usertagnames.md): An array of tags the user creates.

### Audio unit manufacturer names

- [AVAudioUnitManufacturerNameApple](avaudiounitmanufacturernameapple.md): The audio unit manufacturer is Apple.

### Audio unit types

- [AVAudioUnitTypeOutput](avaudiounittypeoutput.md): An audio unit type that represents an output.
- [AVAudioUnitTypeMusicDevice](avaudiounittypemusicdevice.md): An audio unit type that represents a music device.
- [AVAudioUnitTypeMusicEffect](avaudiounittypemusiceffect.md): An audio unit type that represents a music effect.
- [AVAudioUnitTypeFormatConverter](avaudiounittypeformatconverter.md): An audio unit type that represents a format converter.
- [AVAudioUnitTypeEffect](avaudiounittypeeffect.md): An audio unit type that represents an effect.
- [AVAudioUnitTypeMixer](avaudiounittypemixer.md): An audio unit type that represents a mixer.
- [AVAudioUnitTypePanner](avaudiounittypepanner.md): An audio unit type that represents a panner.
- [AVAudioUnitTypeGenerator](avaudiounittypegenerator.md): An audio unit type that represents a generator.
- [AVAudioUnitTypeOfflineEffect](avaudiounittypeofflineeffect.md): An audio unit type that represents an offline effect.
- [AVAudioUnitTypeMIDIProcessor](avaudiounittypemidiprocessor.md): An audio unit type that represents a MIDI processor.

### Structures

- [AVAudioUnitComponent.TagsDidChangeMessage](avaudiounitcomponent/tagsdidchangemessage.md): Type-safe notification message for audio unit component tag changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Component management

- [AVAudioUnitComponentManager](avaudiounitcomponentmanager.md): An object that provides a way to search and query audio components that the system registers.

# AVAudioUnitComponent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that provides details about an audio unit.

## Declaration

```objectivec
@interface AVAudioUnitComponent : NSObject
```

<a id="overview"></a>

## Overview

Details can include information such as type, subtype, manufacturer, and location. An `AVAudioUnitComponent` can include user tags, which you can query later for display.

## Topics

### Getting the audio unit component’s audio unit

- [audioComponent](avaudiounitcomponent/audiocomponent.md): The underlying audio component.

### Getting audio unit component information

- [audioComponentDescription](avaudiounitcomponent/audiocomponentdescription.md): The audio component description.
- [availableArchitectures](avaudiounitcomponent/availablearchitectures.md): An array of architectures that the audio unit supports.
- [configurationDictionary](avaudiounitcomponent/configurationdictionary.md): The audio unit component’s configuration dictionary.
- [hasCustomView](avaudiounitcomponent/hascustomview.md): A Boolean value that indicates whether the audio unit component has a custom view.
- [hasMIDIInput](avaudiounitcomponent/hasmidiinput.md): A Boolean value that indicates whether the audio unit component has MIDI input.
- [hasMIDIOutput](avaudiounitcomponent/hasmidioutput.md): A Boolean value that indicates whether the audio unit component has MIDI output.
- [manufacturerName](avaudiounitcomponent/manufacturername.md): The name of the manufacturer of the audio unit component.
- [name](avaudiounitcomponent/name.md): The name of the audio unit component.
- [passesAUVal](avaudiounitcomponent/passesauval.md): A Boolean value that indicates whether the audio unit component passes the validation tests.
- [sandboxSafe](avaudiounitcomponent/issandboxsafe.md): A Boolean value that indicates whether the audio unit component is safe for sandboxing.
- [supportsNumberInputChannels:outputChannels:](avaudiounitcomponent/supportsnumberinputchannels%28__outputchannels_%29.md): Gets a Boolean value that indicates whether the audio unit component supports the specified number of input and output channels.
- [typeName](avaudiounitcomponent/typename.md): The audio unit component type.
- [version](avaudiounitcomponent/version.md): The audio unit component version number.
- [versionString](avaudiounitcomponent/versionstring.md): A string that represents the audio unit component version number.
- [componentURL](avaudiounitcomponent/componenturl.md): Deprecated. The URL of the audio unit component.

### Getting audio unit component tags

- [iconURL](avaudiounitcomponent/iconurl.md): The URL of an icon that represents the audio unit component.
- [icon](avaudiounitcomponent/icon.md): An icon that represents the component.
- [localizedTypeName](avaudiounitcomponent/localizedtypename.md): The localized type name of the component.
- [allTagNames](avaudiounitcomponent/alltagnames.md): An array of tag names for the audio unit component.
- [userTagNames](avaudiounitcomponent/usertagnames.md): An array of tags the user creates.

### Notifications

- [AVAudioUnitComponentTagsDidChangeNotification](avaudiounitcomponenttagsdidchangenotification.md): A notification that indicates when component tags change.

### Audio unit manufacturer names

- [AVAudioUnitManufacturerNameApple](avaudiounitmanufacturernameapple.md): The audio unit manufacturer is Apple.

### Audio unit types

- [AVAudioUnitTypeOutput](avaudiounittypeoutput.md): An audio unit type that represents an output.
- [AVAudioUnitTypeMusicDevice](avaudiounittypemusicdevice.md): An audio unit type that represents a music device.
- [AVAudioUnitTypeMusicEffect](avaudiounittypemusiceffect.md): An audio unit type that represents a music effect.
- [AVAudioUnitTypeFormatConverter](avaudiounittypeformatconverter.md): An audio unit type that represents a format converter.
- [AVAudioUnitTypeEffect](avaudiounittypeeffect.md): An audio unit type that represents an effect.
- [AVAudioUnitTypeMixer](avaudiounittypemixer.md): An audio unit type that represents a mixer.
- [AVAudioUnitTypePanner](avaudiounittypepanner.md): An audio unit type that represents a panner.
- [AVAudioUnitTypeGenerator](avaudiounittypegenerator.md): An audio unit type that represents a generator.
- [AVAudioUnitTypeOfflineEffect](avaudiounittypeofflineeffect.md): An audio unit type that represents an offline effect.
- [AVAudioUnitTypeMIDIProcessor](avaudiounittypemidiprocessor.md): An audio unit type that represents a MIDI processor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Component management

- [AVAudioUnitComponentManager](avaudiounitcomponentmanager.md): An object that provides a way to search and query audio components that the system registers.
