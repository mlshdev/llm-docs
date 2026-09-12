> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertymaxtransmitchannels](https://developer.apple.com/documentation/coremidi/kmidipropertymaxtransmitchannels)

# kMIDIPropertyMaxTransmitChannels (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

The maximum number of MIDI channels on which a device may simultaneously transmit channel messages.

## Declaration

```swift
let kMIDIPropertyMaxTransmitChannels: CFString
```

<a id="Discussion"></a>

## Discussion

Common values are 0, 1, and 16.

## See Also

### Channels

- [kMIDIPropertyReceiveChannels](kmidipropertyreceivechannels.md): The bitmap of channels on which the object receives messages.
- [kMIDIPropertyTransmitChannels](kmidipropertytransmitchannels.md): The bitmap of channels on which the object transmits messages.
- [kMIDIPropertyMaxReceiveChannels](kmidipropertymaxreceivechannels.md): The maximum number of MIDI channels on which a device may simultaneously receive channel messages.

# kMIDIPropertyMaxTransmitChannels (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

The maximum number of MIDI channels on which a device may simultaneously transmit channel messages.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyMaxTransmitChannels;
```

<a id="Discussion"></a>

## Discussion

Common values are 0, 1, and 16.

## See Also

### Channels

- [kMIDIPropertyReceiveChannels](kmidipropertyreceivechannels.md): The bitmap of channels on which the object receives messages.
- [kMIDIPropertyTransmitChannels](kmidipropertytransmitchannels.md): The bitmap of channels on which the object transmits messages.
- [kMIDIPropertyMaxReceiveChannels](kmidipropertymaxreceivechannels.md): The maximum number of MIDI channels on which a device may simultaneously receive channel messages.
