> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midi-object-properties](https://developer.apple.com/documentation/coremidi/midi-object-properties)

# MIDI Object Properties (Swift)

**Framework:** Core MIDI  
**Kind:** API Collection

Configure the properties of MIDI objects.

## Topics

### Identification

- [kMIDIPropertyName](kmidipropertyname.md): A name for a device, entity, or endpoint.
- [kMIDIPropertyModel](kmidipropertymodel.md): The model name of a device or endpoint.
- [kMIDIPropertyManufacturer](kmidipropertymanufacturer.md): The manufacturer name of a device or endpoint.
- [kMIDIPropertyUniqueID](kmidipropertyuniqueid.md): The unique identifier of a device, entity, or, endpoint.
- [kMIDIPropertyDeviceID](kmidipropertydeviceid.md): The user-visible System Exclusive (SysEx) identifier of a device or entity.

### Capabilities

- [kMIDIPropertySupportsMMC](kmidipropertysupportsmmc.md): A Boolean value that indicates whether the device or entity implements the MIDI Machine Control portion of the MIDI specification.
- [kMIDIPropertySupportsGeneralMIDI](kmidipropertysupportsgeneralmidi.md): A Boolean value that indicates whether the device or entity implements the General MIDI specification.
- [kMIDIPropertySupportsShowControl](kmidipropertysupportsshowcontrol.md): A Boolean value that indicates whether the device implements the MIDI Show Control specification.

### Configuration

- [kMIDIPropertyNameConfigurationDictionary](kmidipropertynameconfigurationdictionary.md): The device’s current patch, note, and control name values in MIDINameDocument XML format.
- [kMIDIPropertyMaxSysExSpeed](kmidipropertymaxsysexspeed.md): The maximum rate, in bytes per second, at which the system may reliably send System Exclusive (SysEx) messages to this object.
- [kMIDIPropertyDriverDeviceEditorApp](kmidipropertydriverdeviceeditorapp.md): The full path to an app on the system that configures driver-owned devices.
- [kMIDIPropertyNameConfiguration](kmidipropertynameconfiguration.md): Deprecated. An XML representation of the device’s current patch, note, and control name values.

### Presentation

- [kMIDIPropertyImage](kmidipropertyimage.md): The full path to a device icon on the system.
- [kMIDIPropertyDisplayName](kmidipropertydisplayname.md): The user-visible name for an endpoint that combines the device and endpoint names.

### Audio

- [kMIDIPropertyPanDisruptsStereo](kmidipropertypandisruptsstereo.md): A Boolean value that indicates whether the MIDI pan messages sent to the device or entity cause undesirable effects when playing stereo sounds.

### Protocols

- [kMIDIPropertyProtocolID](kmidipropertyprotocolid.md): The native protocol in which the endpoint communicates.

### Timing

- [kMIDIPropertyTransmitsMTC](kmidipropertytransmitsmtc.md): A Boolean value that indicates whether the device or entity transmits MIDI Time Code messages.
- [kMIDIPropertyReceivesMTC](kmidipropertyreceivesmtc.md): A Boolean value that indicates whether the device or entity responds to MIDI Time Code messages.
- [kMIDIPropertyTransmitsClock](kmidipropertytransmitsclock.md): A Boolean value that indicates whether the device or entity transmits MIDI beat clock messages.
- [kMIDIPropertyReceivesClock](kmidipropertyreceivesclock.md): A Boolean value that indicates whether the device or entity responds to MIDI beat clock messages.
- [kMIDIPropertyAdvanceScheduleTimeMuSec](kmidipropertyadvancescheduletimemusec.md): The recommended number of microseconds in advance that clients should schedule output.

### Roles

- [kMIDIPropertyIsMixer](kmidipropertyismixer.md): A Boolean value that indicates whether the device or entity mixes external audio signals.
- [kMIDIPropertyIsSampler](kmidipropertyissampler.md): A Boolean value that indicates whether the device or entity plays audio samples in response to MIDI note messages.
- [kMIDIPropertyIsEffectUnit](kmidipropertyiseffectunit.md): A Boolean value that indicates whether the device or entity primarily acts as a MIDI-controlled audio effect.
- [kMIDIPropertyIsDrumMachine](kmidipropertyisdrummachine.md): A Boolean value that indicates whether the device or entity’s samples aren’t transposable, as with a drum kit.

### Status

- [kMIDIPropertyOffline](kmidipropertyoffline.md): A Boolean value that indicates whether the object is offline.
- [kMIDIPropertyPrivate](kmidipropertyprivate.md): A Boolean value that indicates whether the system hides an endpoint from other clients.

### Drivers

- [kMIDIPropertyDriverOwner](kmidipropertydriverowner.md): The name of the driver that owns a device, entity, or endpoint.
- [kMIDIPropertyDriverVersion](kmidipropertydriverversion.md): The version of the driver that owns a device, entity, or endpoint.

### Connections

- [kMIDIPropertyCanRoute](kmidipropertycanroute.md): A Boolean value that indicates whether the device or entity can route messages to or from external MIDI devices.
- [kMIDIPropertyIsBroadcast](kmidipropertyisbroadcast.md): A Boolean value that indicates whether the endpoint broadcasts messages to all of the other endpoints in the device.
- [kMIDIPropertyConnectionUniqueID](kmidipropertyconnectionuniqueid.md): The unique identifier of an external device attached to this connection.
- [kMIDIPropertyIsEmbeddedEntity](kmidipropertyisembeddedentity.md): A Boolean value that indicates whether this entity or endpoint has external MIDI connections.
- [kMIDIPropertySingleRealtimeEntity](kmidipropertysinglerealtimeentity.md): The 0-based index of the entity on which incoming real-time messages from the device appear to have originated.

### Channels

- [kMIDIPropertyReceiveChannels](kmidipropertyreceivechannels.md): The bitmap of channels on which the object receives messages.
- [kMIDIPropertyTransmitChannels](kmidipropertytransmitchannels.md): The bitmap of channels on which the object transmits messages.
- [kMIDIPropertyMaxReceiveChannels](kmidipropertymaxreceivechannels.md): The maximum number of MIDI channels on which a device may simultaneously receive channel messages.
- [kMIDIPropertyMaxTransmitChannels](kmidipropertymaxtransmitchannels.md): The maximum number of MIDI channels on which a device may simultaneously transmit channel messages.

### Banks

- [kMIDIPropertyReceivesBankSelectLSB](kmidipropertyreceivesbankselectlsb.md): A Boolean value that indicates whether the device or entity responds to MIDI bank select LSB messages.
- [kMIDIPropertyReceivesBankSelectMSB](kmidipropertyreceivesbankselectmsb.md): A Boolean value that indicates whether the device or entity responds to MIDI bank select MSB messages.
- [kMIDIPropertyTransmitsBankSelectLSB](kmidipropertytransmitsbankselectlsb.md): A Boolean value that indicates whether the device or entity transmits MIDI bank select LSB messages.
- [kMIDIPropertyTransmitsBankSelectMSB](kmidipropertytransmitsbankselectmsb.md): A Boolean value that indicates whether the device or entity transmits MIDI bank select MSB messages.

### Notes

- [kMIDIPropertyReceivesNotes](kmidipropertyreceivesnotes.md): A Boolean value that indicates whether the device or entity responds to MIDI Note On messages.
- [kMIDIPropertyTransmitsNotes](kmidipropertytransmitsnotes.md): A Boolean value that indicates whether the device or entity transmits MIDI note messages.

### Program Changes

- [kMIDIPropertyReceivesProgramChanges](kmidipropertyreceivesprogramchanges.md): A Boolean value that indicates whether the device or entity responds to MIDI Program Change messages.
- [kMIDIPropertyTransmitsProgramChanges](kmidipropertytransmitsprogramchanges.md): A Boolean value that indicates whether the device or entity transmits MIDI Program Change messages.

### Property Accessors

- [MIDIObjectGetProperties(\_:\_:\_:)](midiobjectgetproperties%28______%29.md): Returns all properties of an object.
- [MIDIObjectRemoveProperty(\_:\_:)](midiobjectremoveproperty%28____%29.md): Removes an object’s property.
- [MIDIObjectGetStringProperty(\_:\_:\_:)](midiobjectgetstringproperty%28______%29.md): Gets an object’s string-type property.
- [MIDIObjectSetStringProperty(\_:\_:\_:)](midiobjectsetstringproperty%28______%29.md): Sets an object’s string-type property.
- [MIDIObjectGetIntegerProperty(\_:\_:\_:)](midiobjectgetintegerproperty%28______%29.md): Gets an object’s integer-type property.
- [MIDIObjectSetIntegerProperty(\_:\_:\_:)](midiobjectsetintegerproperty%28______%29.md): Sets an object’s integer-type property.
- [MIDIObjectGetDataProperty(\_:\_:\_:)](midiobjectgetdataproperty%28______%29.md): Gets an object’s data-type property.
- [MIDIObjectSetDataProperty(\_:\_:\_:)](midiobjectsetdataproperty%28______%29.md): Sets an object’s data-type property.
- [MIDIObjectGetDictionaryProperty(\_:\_:\_:)](midiobjectgetdictionaryproperty%28______%29.md): Gets an object’s dictionary-type property.
- [MIDIObjectSetDictionaryProperty(\_:\_:\_:)](midiobjectsetdictionaryproperty%28______%29.md): Sets an object’s dictionary-type property.

### Notifications

- [MIDIObjectAddRemoveNotification](midiobjectaddremovenotification.md): A message that describes the addition or removal of an object.
- [MIDIObjectPropertyChangeNotification](midiobjectpropertychangenotification.md): A message that describes the change to an object property.

## See Also

### MIDI object configuration

- [MIDIObjectFindByUniqueID(\_:\_:\_:)](midiobjectfindbyuniqueid%28______%29.md): Locates a device, entity, or endpoint by its unique identifier.
- [MIDIObjectRef](midiobjectref.md): The common base class for many of the framework’s objects.

# MIDI Object Properties (Objective-C)

**Framework:** Core MIDI  
**Kind:** API Collection

Configure the properties of MIDI objects.

## Topics

### Identification

- [kMIDIPropertyName](kmidipropertyname.md): A name for a device, entity, or endpoint.
- [kMIDIPropertyModel](kmidipropertymodel.md): The model name of a device or endpoint.
- [kMIDIPropertyManufacturer](kmidipropertymanufacturer.md): The manufacturer name of a device or endpoint.
- [kMIDIPropertyUniqueID](kmidipropertyuniqueid.md): The unique identifier of a device, entity, or, endpoint.
- [kMIDIPropertyDeviceID](kmidipropertydeviceid.md): The user-visible System Exclusive (SysEx) identifier of a device or entity.

### Capabilities

- [kMIDIPropertySupportsMMC](kmidipropertysupportsmmc.md): A Boolean value that indicates whether the device or entity implements the MIDI Machine Control portion of the MIDI specification.
- [kMIDIPropertySupportsGeneralMIDI](kmidipropertysupportsgeneralmidi.md): A Boolean value that indicates whether the device or entity implements the General MIDI specification.
- [kMIDIPropertySupportsShowControl](kmidipropertysupportsshowcontrol.md): A Boolean value that indicates whether the device implements the MIDI Show Control specification.

### Configuration

- [kMIDIPropertyNameConfigurationDictionary](kmidipropertynameconfigurationdictionary.md): The device’s current patch, note, and control name values in MIDINameDocument XML format.
- [kMIDIPropertyMaxSysExSpeed](kmidipropertymaxsysexspeed.md): The maximum rate, in bytes per second, at which the system may reliably send System Exclusive (SysEx) messages to this object.
- [kMIDIPropertyDriverDeviceEditorApp](kmidipropertydriverdeviceeditorapp.md): The full path to an app on the system that configures driver-owned devices.
- [kMIDIPropertyNameConfiguration](kmidipropertynameconfiguration.md): Deprecated. An XML representation of the device’s current patch, note, and control name values.

### Presentation

- [kMIDIPropertyImage](kmidipropertyimage.md): The full path to a device icon on the system.
- [kMIDIPropertyDisplayName](kmidipropertydisplayname.md): The user-visible name for an endpoint that combines the device and endpoint names.

### Audio

- [kMIDIPropertyPanDisruptsStereo](kmidipropertypandisruptsstereo.md): A Boolean value that indicates whether the MIDI pan messages sent to the device or entity cause undesirable effects when playing stereo sounds.

### Protocols

- [kMIDIPropertyProtocolID](kmidipropertyprotocolid.md): The native protocol in which the endpoint communicates.

### Timing

- [kMIDIPropertyTransmitsMTC](kmidipropertytransmitsmtc.md): A Boolean value that indicates whether the device or entity transmits MIDI Time Code messages.
- [kMIDIPropertyReceivesMTC](kmidipropertyreceivesmtc.md): A Boolean value that indicates whether the device or entity responds to MIDI Time Code messages.
- [kMIDIPropertyTransmitsClock](kmidipropertytransmitsclock.md): A Boolean value that indicates whether the device or entity transmits MIDI beat clock messages.
- [kMIDIPropertyReceivesClock](kmidipropertyreceivesclock.md): A Boolean value that indicates whether the device or entity responds to MIDI beat clock messages.
- [kMIDIPropertyAdvanceScheduleTimeMuSec](kmidipropertyadvancescheduletimemusec.md): The recommended number of microseconds in advance that clients should schedule output.

### Roles

- [kMIDIPropertyIsMixer](kmidipropertyismixer.md): A Boolean value that indicates whether the device or entity mixes external audio signals.
- [kMIDIPropertyIsSampler](kmidipropertyissampler.md): A Boolean value that indicates whether the device or entity plays audio samples in response to MIDI note messages.
- [kMIDIPropertyIsEffectUnit](kmidipropertyiseffectunit.md): A Boolean value that indicates whether the device or entity primarily acts as a MIDI-controlled audio effect.
- [kMIDIPropertyIsDrumMachine](kmidipropertyisdrummachine.md): A Boolean value that indicates whether the device or entity’s samples aren’t transposable, as with a drum kit.

### Status

- [kMIDIPropertyOffline](kmidipropertyoffline.md): A Boolean value that indicates whether the object is offline.
- [kMIDIPropertyPrivate](kmidipropertyprivate.md): A Boolean value that indicates whether the system hides an endpoint from other clients.

### Drivers

- [kMIDIPropertyDriverOwner](kmidipropertydriverowner.md): The name of the driver that owns a device, entity, or endpoint.
- [kMIDIPropertyDriverVersion](kmidipropertydriverversion.md): The version of the driver that owns a device, entity, or endpoint.

### Connections

- [kMIDIPropertyCanRoute](kmidipropertycanroute.md): A Boolean value that indicates whether the device or entity can route messages to or from external MIDI devices.
- [kMIDIPropertyIsBroadcast](kmidipropertyisbroadcast.md): A Boolean value that indicates whether the endpoint broadcasts messages to all of the other endpoints in the device.
- [kMIDIPropertyConnectionUniqueID](kmidipropertyconnectionuniqueid.md): The unique identifier of an external device attached to this connection.
- [kMIDIPropertyIsEmbeddedEntity](kmidipropertyisembeddedentity.md): A Boolean value that indicates whether this entity or endpoint has external MIDI connections.
- [kMIDIPropertySingleRealtimeEntity](kmidipropertysinglerealtimeentity.md): The 0-based index of the entity on which incoming real-time messages from the device appear to have originated.

### Channels

- [kMIDIPropertyReceiveChannels](kmidipropertyreceivechannels.md): The bitmap of channels on which the object receives messages.
- [kMIDIPropertyTransmitChannels](kmidipropertytransmitchannels.md): The bitmap of channels on which the object transmits messages.
- [kMIDIPropertyMaxReceiveChannels](kmidipropertymaxreceivechannels.md): The maximum number of MIDI channels on which a device may simultaneously receive channel messages.
- [kMIDIPropertyMaxTransmitChannels](kmidipropertymaxtransmitchannels.md): The maximum number of MIDI channels on which a device may simultaneously transmit channel messages.

### Banks

- [kMIDIPropertyReceivesBankSelectLSB](kmidipropertyreceivesbankselectlsb.md): A Boolean value that indicates whether the device or entity responds to MIDI bank select LSB messages.
- [kMIDIPropertyReceivesBankSelectMSB](kmidipropertyreceivesbankselectmsb.md): A Boolean value that indicates whether the device or entity responds to MIDI bank select MSB messages.
- [kMIDIPropertyTransmitsBankSelectLSB](kmidipropertytransmitsbankselectlsb.md): A Boolean value that indicates whether the device or entity transmits MIDI bank select LSB messages.
- [kMIDIPropertyTransmitsBankSelectMSB](kmidipropertytransmitsbankselectmsb.md): A Boolean value that indicates whether the device or entity transmits MIDI bank select MSB messages.

### Notes

- [kMIDIPropertyReceivesNotes](kmidipropertyreceivesnotes.md): A Boolean value that indicates whether the device or entity responds to MIDI Note On messages.
- [kMIDIPropertyTransmitsNotes](kmidipropertytransmitsnotes.md): A Boolean value that indicates whether the device or entity transmits MIDI note messages.

### Program Changes

- [kMIDIPropertyReceivesProgramChanges](kmidipropertyreceivesprogramchanges.md): A Boolean value that indicates whether the device or entity responds to MIDI Program Change messages.
- [kMIDIPropertyTransmitsProgramChanges](kmidipropertytransmitsprogramchanges.md): A Boolean value that indicates whether the device or entity transmits MIDI Program Change messages.

### Property Accessors

- [MIDIObjectGetProperties](midiobjectgetproperties%28______%29.md): Returns all properties of an object.
- [MIDIObjectRemoveProperty](midiobjectremoveproperty%28____%29.md): Removes an object’s property.
- [MIDIObjectGetStringProperty](midiobjectgetstringproperty%28______%29.md): Gets an object’s string-type property.
- [MIDIObjectSetStringProperty](midiobjectsetstringproperty%28______%29.md): Sets an object’s string-type property.
- [MIDIObjectGetIntegerProperty](midiobjectgetintegerproperty%28______%29.md): Gets an object’s integer-type property.
- [MIDIObjectSetIntegerProperty](midiobjectsetintegerproperty%28______%29.md): Sets an object’s integer-type property.
- [MIDIObjectGetDataProperty](midiobjectgetdataproperty%28______%29.md): Gets an object’s data-type property.
- [MIDIObjectSetDataProperty](midiobjectsetdataproperty%28______%29.md): Sets an object’s data-type property.
- [MIDIObjectGetDictionaryProperty](midiobjectgetdictionaryproperty%28______%29.md): Gets an object’s dictionary-type property.
- [MIDIObjectSetDictionaryProperty](midiobjectsetdictionaryproperty%28______%29.md): Sets an object’s dictionary-type property.

### Notifications

- [MIDIObjectAddRemoveNotification](midiobjectaddremovenotification.md): A message that describes the addition or removal of an object.
- [MIDIObjectPropertyChangeNotification](midiobjectpropertychangenotification.md): A message that describes the change to an object property.

## See Also

### MIDI object configuration

- [MIDIObjectFindByUniqueID](midiobjectfindbyuniqueid%28______%29.md): Locates a device, entity, or endpoint by its unique identifier.
- [MIDIObjectRef](midiobjectref.md): The common base class for many of the framework’s objects.
