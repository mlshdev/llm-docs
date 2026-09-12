> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiobjectgetproperties(_:_:_:)](https://developer.apple.com/documentation/coremidi/midiobjectgetproperties(_:_:_:))

# MIDIObjectGetProperties(\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Returns all properties of an object.

## Declaration

```swift
func MIDIObjectGetProperties(_ obj: MIDIObjectRef, _ outProperties: UnsafeMutablePointer<Unmanaged<CFPropertyList>?>, _ deep: Bool) -> OSStatus
```

## Parameters

- `obj`: The object to query.
- `outProperties`: On successful return, the object’s properties.
- `deep`: Specify `true` to include the object’s children; for example, a device’s entities, or an entity’s endpoints.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

The property list may be a dictionary or an array. Dictionaries map property names ([CFString](../corefoundation/cfstring.md)) to values, which may be [CFNumber](../corefoundation/cfnumber.md), [CFString](../corefoundation/cfstring.md), or [CFData](../corefoundation/cfdata.md). Arrays provide collections of other property list types.

Properties that an object inherits from its owning object aren’t included.

## See Also

### Property Accessors

- [MIDIObjectRemoveProperty(\_:\_:)](midiobjectremoveproperty%28____%29.md): Removes an object’s property.
- [MIDIObjectGetStringProperty(\_:\_:\_:)](midiobjectgetstringproperty%28______%29.md): Gets an object’s string-type property.
- [MIDIObjectSetStringProperty(\_:\_:\_:)](midiobjectsetstringproperty%28______%29.md): Sets an object’s string-type property.
- [MIDIObjectGetIntegerProperty(\_:\_:\_:)](midiobjectgetintegerproperty%28______%29.md): Gets an object’s integer-type property.
- [MIDIObjectSetIntegerProperty(\_:\_:\_:)](midiobjectsetintegerproperty%28______%29.md): Sets an object’s integer-type property.
- [MIDIObjectGetDataProperty(\_:\_:\_:)](midiobjectgetdataproperty%28______%29.md): Gets an object’s data-type property.
- [MIDIObjectSetDataProperty(\_:\_:\_:)](midiobjectsetdataproperty%28______%29.md): Sets an object’s data-type property.
- [MIDIObjectGetDictionaryProperty(\_:\_:\_:)](midiobjectgetdictionaryproperty%28______%29.md): Gets an object’s dictionary-type property.
- [MIDIObjectSetDictionaryProperty(\_:\_:\_:)](midiobjectsetdictionaryproperty%28______%29.md): Sets an object’s dictionary-type property.

# MIDIObjectGetProperties (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Returns all properties of an object.

## Declaration

```objectivec
extern OSStatus MIDIObjectGetProperties(MIDIObjectRef obj, CFPropertyListRef*outProperties, Boolean deep);
```

## Parameters

- `obj`: The object to query.
- `outProperties`: On successful return, the object’s properties.
- `deep`: Specify `true` to include the object’s children; for example, a device’s entities, or an entity’s endpoints.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

The property list may be a dictionary or an array. Dictionaries map property names ([CFStringRef](../corefoundation/cfstring.md)) to values, which may be [CFNumberRef](../corefoundation/cfnumber.md), [CFStringRef](../corefoundation/cfstring.md), or [CFDataRef](../corefoundation/cfdata.md). Arrays provide collections of other property list types.

Properties that an object inherits from its owning object aren’t included.

## See Also

### Property Accessors

- [MIDIObjectRemoveProperty](midiobjectremoveproperty%28____%29.md): Removes an object’s property.
- [MIDIObjectGetStringProperty](midiobjectgetstringproperty%28______%29.md): Gets an object’s string-type property.
- [MIDIObjectSetStringProperty](midiobjectsetstringproperty%28______%29.md): Sets an object’s string-type property.
- [MIDIObjectGetIntegerProperty](midiobjectgetintegerproperty%28______%29.md): Gets an object’s integer-type property.
- [MIDIObjectSetIntegerProperty](midiobjectsetintegerproperty%28______%29.md): Sets an object’s integer-type property.
- [MIDIObjectGetDataProperty](midiobjectgetdataproperty%28______%29.md): Gets an object’s data-type property.
- [MIDIObjectSetDataProperty](midiobjectsetdataproperty%28______%29.md): Sets an object’s data-type property.
- [MIDIObjectGetDictionaryProperty](midiobjectgetdictionaryproperty%28______%29.md): Gets an object’s dictionary-type property.
- [MIDIObjectSetDictionaryProperty](midiobjectsetdictionaryproperty%28______%29.md): Sets an object’s dictionary-type property.
