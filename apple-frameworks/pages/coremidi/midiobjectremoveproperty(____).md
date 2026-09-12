> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiobjectremoveproperty(_:_:)](https://developer.apple.com/documentation/coremidi/midiobjectremoveproperty(_:_:))

# MIDIObjectRemoveProperty(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Removes an object’s property.

## Declaration

```swift
func MIDIObjectRemoveProperty(_ obj: MIDIObjectRef, _ propertyID: CFString) -> OSStatus
```

## Parameters

- `obj`: The object to modify,
- `propertyID`: The property to remove.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Property Accessors

- [MIDIObjectGetProperties(\_:\_:\_:)](midiobjectgetproperties%28______%29.md): Returns all properties of an object.
- [MIDIObjectGetStringProperty(\_:\_:\_:)](midiobjectgetstringproperty%28______%29.md): Gets an object’s string-type property.
- [MIDIObjectSetStringProperty(\_:\_:\_:)](midiobjectsetstringproperty%28______%29.md): Sets an object’s string-type property.
- [MIDIObjectGetIntegerProperty(\_:\_:\_:)](midiobjectgetintegerproperty%28______%29.md): Gets an object’s integer-type property.
- [MIDIObjectSetIntegerProperty(\_:\_:\_:)](midiobjectsetintegerproperty%28______%29.md): Sets an object’s integer-type property.
- [MIDIObjectGetDataProperty(\_:\_:\_:)](midiobjectgetdataproperty%28______%29.md): Gets an object’s data-type property.
- [MIDIObjectSetDataProperty(\_:\_:\_:)](midiobjectsetdataproperty%28______%29.md): Sets an object’s data-type property.
- [MIDIObjectGetDictionaryProperty(\_:\_:\_:)](midiobjectgetdictionaryproperty%28______%29.md): Gets an object’s dictionary-type property.
- [MIDIObjectSetDictionaryProperty(\_:\_:\_:)](midiobjectsetdictionaryproperty%28______%29.md): Sets an object’s dictionary-type property.

# MIDIObjectRemoveProperty (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Removes an object’s property.

## Declaration

```objectivec
extern OSStatus MIDIObjectRemoveProperty(MIDIObjectRef obj, CFStringRef propertyID);
```

## Parameters

- `obj`: The object to modify,
- `propertyID`: The property to remove.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Property Accessors

- [MIDIObjectGetProperties](midiobjectgetproperties%28______%29.md): Returns all properties of an object.
- [MIDIObjectGetStringProperty](midiobjectgetstringproperty%28______%29.md): Gets an object’s string-type property.
- [MIDIObjectSetStringProperty](midiobjectsetstringproperty%28______%29.md): Sets an object’s string-type property.
- [MIDIObjectGetIntegerProperty](midiobjectgetintegerproperty%28______%29.md): Gets an object’s integer-type property.
- [MIDIObjectSetIntegerProperty](midiobjectsetintegerproperty%28______%29.md): Sets an object’s integer-type property.
- [MIDIObjectGetDataProperty](midiobjectgetdataproperty%28______%29.md): Gets an object’s data-type property.
- [MIDIObjectSetDataProperty](midiobjectsetdataproperty%28______%29.md): Sets an object’s data-type property.
- [MIDIObjectGetDictionaryProperty](midiobjectgetdictionaryproperty%28______%29.md): Gets an object’s dictionary-type property.
- [MIDIObjectSetDictionaryProperty](midiobjectsetdictionaryproperty%28______%29.md): Sets an object’s dictionary-type property.
