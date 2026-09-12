> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiobjectsetstringproperty(_:_:_:)](https://developer.apple.com/documentation/coremidi/midiobjectsetstringproperty(_:_:_:))

# MIDIObjectSetStringProperty(\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Sets an object’s string-type property.

## Declaration

```swift
func MIDIObjectSetStringProperty(_ obj: MIDIObjectRef, _ propertyID: CFString, _ str: CFString) -> OSStatus
```

## Parameters

- `obj`: The object to update.
- `propertyID`: The name of the property to set.
- `str`: The new property value.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

See [MIDIObjectRef](midiobjectref.md) for information about properties.

## See Also

### Property Accessors

- [MIDIObjectGetProperties(\_:\_:\_:)](midiobjectgetproperties%28______%29.md): Returns all properties of an object.
- [MIDIObjectRemoveProperty(\_:\_:)](midiobjectremoveproperty%28____%29.md): Removes an object’s property.
- [MIDIObjectGetStringProperty(\_:\_:\_:)](midiobjectgetstringproperty%28______%29.md): Gets an object’s string-type property.
- [MIDIObjectGetIntegerProperty(\_:\_:\_:)](midiobjectgetintegerproperty%28______%29.md): Gets an object’s integer-type property.
- [MIDIObjectSetIntegerProperty(\_:\_:\_:)](midiobjectsetintegerproperty%28______%29.md): Sets an object’s integer-type property.
- [MIDIObjectGetDataProperty(\_:\_:\_:)](midiobjectgetdataproperty%28______%29.md): Gets an object’s data-type property.
- [MIDIObjectSetDataProperty(\_:\_:\_:)](midiobjectsetdataproperty%28______%29.md): Sets an object’s data-type property.
- [MIDIObjectGetDictionaryProperty(\_:\_:\_:)](midiobjectgetdictionaryproperty%28______%29.md): Gets an object’s dictionary-type property.
- [MIDIObjectSetDictionaryProperty(\_:\_:\_:)](midiobjectsetdictionaryproperty%28______%29.md): Sets an object’s dictionary-type property.

# MIDIObjectSetStringProperty (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Sets an object’s string-type property.

## Declaration

```objectivec
extern OSStatus MIDIObjectSetStringProperty(MIDIObjectRef obj, CFStringRef propertyID, CFStringRef str);
```

## Parameters

- `obj`: The object to update.
- `propertyID`: The name of the property to set.
- `str`: The new property value.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

See [MIDIObjectRef](midiobjectref.md) for information about properties.

## See Also

### Property Accessors

- [MIDIObjectGetProperties](midiobjectgetproperties%28______%29.md): Returns all properties of an object.
- [MIDIObjectRemoveProperty](midiobjectremoveproperty%28____%29.md): Removes an object’s property.
- [MIDIObjectGetStringProperty](midiobjectgetstringproperty%28______%29.md): Gets an object’s string-type property.
- [MIDIObjectGetIntegerProperty](midiobjectgetintegerproperty%28______%29.md): Gets an object’s integer-type property.
- [MIDIObjectSetIntegerProperty](midiobjectsetintegerproperty%28______%29.md): Sets an object’s integer-type property.
- [MIDIObjectGetDataProperty](midiobjectgetdataproperty%28______%29.md): Gets an object’s data-type property.
- [MIDIObjectSetDataProperty](midiobjectsetdataproperty%28______%29.md): Sets an object’s data-type property.
- [MIDIObjectGetDictionaryProperty](midiobjectgetdictionaryproperty%28______%29.md): Gets an object’s dictionary-type property.
- [MIDIObjectSetDictionaryProperty](midiobjectsetdictionaryproperty%28______%29.md): Sets an object’s dictionary-type property.
