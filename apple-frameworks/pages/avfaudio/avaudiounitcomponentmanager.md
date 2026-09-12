> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponentmanager](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponentmanager)

# AVAudioUnitComponentManager (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that provides a way to search and query audio components that the system registers.

## Declaration

```swift
class AVAudioUnitComponentManager
```

<a id="overview"></a>

## Overview

The component manager has methods to find various information about the audio components without opening them. Currently, you can only search audio components that are audio units.

The class supports system tags and arbitrary user tags. You can tag each audio unit as part of its definition. Audio unit hosts, such as Logic or GarageBand, can present groupings of audio units according to the tags.

You can search for audio units in the following ways:

- Using a `NSPredicate` instance that contains search strings for tags or descriptions
- Using a block to match on a custom criteria
- Using an `AudioComponentDescription`

## Topics

### Getting the unit audio component manager

- [shared()](avaudiounitcomponentmanager/shared%28%29.md): Gets the shared component manager instance.

### Getting matching audio components

- [components(matching:)](avaudiounitcomponentmanager/components%28matching_%29-9qt94.md): Gets an array of audio component objects that match the description.
- [components(matching:)](avaudiounitcomponentmanager/components%28matching_%29-96l2c.md): Gets an array of audio component objects that match the search predicate.
- [components(passingTest:)](avaudiounitcomponentmanager/components%28passingtest_%29.md): Gets an array of audio components that pass the block method.

### Getting audio unit tags

- [standardLocalizedTagNames](avaudiounitcomponentmanager/standardlocalizedtagnames.md): An array of the localized standard system tags the audio units define.
- [tagNames](avaudiounitcomponentmanager/tagnames.md): An array of all tags the audio unit associates with the current user, and the system tags the audio units define.

### Observing registration changes

- [AVAudioUnitComponentManager.RegistrationsChangedMessage](avaudiounitcomponentmanager/registrationschangedmessage.md): Type-safe notification message for audio unit component registration changes.
- [registrationsChangedNotification](avaudiounitcomponentmanager/registrationschangednotification.md): A notification the component manager generates when it updates its list of components.

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

- [AVAudioUnitComponent](avaudiounitcomponent.md): An object that provides details about an audio unit.

# AVAudioUnitComponentManager (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that provides a way to search and query audio components that the system registers.

## Declaration

```objectivec
@interface AVAudioUnitComponentManager : NSObject
```

<a id="overview"></a>

## Overview

The component manager has methods to find various information about the audio components without opening them. Currently, you can only search audio components that are audio units.

The class supports system tags and arbitrary user tags. You can tag each audio unit as part of its definition. Audio unit hosts, such as Logic or GarageBand, can present groupings of audio units according to the tags.

You can search for audio units in the following ways:

- Using a `NSPredicate` instance that contains search strings for tags or descriptions
- Using a block to match on a custom criteria
- Using an `AudioComponentDescription`

## Topics

### Getting the unit audio component manager

- [sharedAudioUnitComponentManager](avaudiounitcomponentmanager/shared%28%29.md): Gets the shared component manager instance.

### Getting matching audio components

- [componentsMatchingDescription:](avaudiounitcomponentmanager/components%28matching_%29-9qt94.md): Gets an array of audio component objects that match the description.
- [componentsMatchingPredicate:](avaudiounitcomponentmanager/components%28matching_%29-96l2c.md): Gets an array of audio component objects that match the search predicate.
- [componentsPassingTest:](avaudiounitcomponentmanager/components%28passingtest_%29.md): Gets an array of audio components that pass the block method.

### Getting audio unit tags

- [standardLocalizedTagNames](avaudiounitcomponentmanager/standardlocalizedtagnames.md): An array of the localized standard system tags the audio units define.
- [tagNames](avaudiounitcomponentmanager/tagnames.md): An array of all tags the audio unit associates with the current user, and the system tags the audio units define.

### Observing registration changes

- [AVAudioUnitComponentManagerRegistrationsChangedNotification](avaudiounitcomponentmanager/registrationschangednotification.md): A notification the component manager generates when it updates its list of components.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Component management

- [AVAudioUnitComponent](avaudiounitcomponent.md): An object that provides details about an audio unit.
