> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertyreceivechannels](https://developer.apple.com/documentation/coremidi/kmidipropertyreceivechannels)

# kMIDIPropertyReceiveChannels (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

The bitmap of channels on which the object receives messages.

## Declaration

```swift
let kMIDIPropertyReceiveChannels: CFString
```

<a id="Discussion"></a>

## Discussion

You can use this property in the following scenarios:

- Drivers can set this property on their entities and endpoints.
- Studio setup editors can allow the user to set this property on external endpoints.
- Virtual destinations can set this property on their endpoints.

## See Also

### Channels

- [kMIDIPropertyTransmitChannels](kmidipropertytransmitchannels.md): The bitmap of channels on which the object transmits messages.
- [kMIDIPropertyMaxReceiveChannels](kmidipropertymaxreceivechannels.md): The maximum number of MIDI channels on which a device may simultaneously receive channel messages.
- [kMIDIPropertyMaxTransmitChannels](kmidipropertymaxtransmitchannels.md): The maximum number of MIDI channels on which a device may simultaneously transmit channel messages.

# kMIDIPropertyReceiveChannels (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

The bitmap of channels on which the object receives messages.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyReceiveChannels;
```

<a id="Discussion"></a>

## Discussion

You can use this property in the following scenarios:

- Drivers can set this property on their entities and endpoints.
- Studio setup editors can allow the user to set this property on external endpoints.
- Virtual destinations can set this property on their endpoints.

## See Also

### Channels

- [kMIDIPropertyTransmitChannels](kmidipropertytransmitchannels.md): The bitmap of channels on which the object transmits messages.
- [kMIDIPropertyMaxReceiveChannels](kmidipropertymaxreceivechannels.md): The maximum number of MIDI channels on which a device may simultaneously receive channel messages.
- [kMIDIPropertyMaxTransmitChannels](kmidipropertymaxtransmitchannels.md): The maximum number of MIDI channels on which a device may simultaneously transmit channel messages.
