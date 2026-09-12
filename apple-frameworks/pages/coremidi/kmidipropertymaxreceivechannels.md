> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertymaxreceivechannels](https://developer.apple.com/documentation/coremidi/kmidipropertymaxreceivechannels)

# kMIDIPropertyMaxReceiveChannels (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

The maximum number of MIDI channels on which a device may simultaneously receive channel messages.

## Declaration

```swift
let kMIDIPropertyMaxReceiveChannels: CFString
```

<a id="Discussion"></a>

## Discussion

The property value ranges from 0 to 16. Values for this property indicate:

- 0 for devices that only respond to system messages
- 1 for nonmultitimbral devices
- 2 to 15 for multitimbral devices with fewer than 16 voices
- 16 for fully multitimbral devices

## See Also

### Channels

- [kMIDIPropertyReceiveChannels](kmidipropertyreceivechannels.md): The bitmap of channels on which the object receives messages.
- [kMIDIPropertyTransmitChannels](kmidipropertytransmitchannels.md): The bitmap of channels on which the object transmits messages.
- [kMIDIPropertyMaxTransmitChannels](kmidipropertymaxtransmitchannels.md): The maximum number of MIDI channels on which a device may simultaneously transmit channel messages.

# kMIDIPropertyMaxReceiveChannels (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

The maximum number of MIDI channels on which a device may simultaneously receive channel messages.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyMaxReceiveChannels;
```

<a id="Discussion"></a>

## Discussion

The property value ranges from 0 to 16. Values for this property indicate:

- 0 for devices that only respond to system messages
- 1 for nonmultitimbral devices
- 2 to 15 for multitimbral devices with fewer than 16 voices
- 16 for fully multitimbral devices

## See Also

### Channels

- [kMIDIPropertyReceiveChannels](kmidipropertyreceivechannels.md): The bitmap of channels on which the object receives messages.
- [kMIDIPropertyTransmitChannels](kmidipropertytransmitchannels.md): The bitmap of channels on which the object transmits messages.
- [kMIDIPropertyMaxTransmitChannels](kmidipropertymaxtransmitchannels.md): The maximum number of MIDI channels on which a device may simultaneously transmit channel messages.
