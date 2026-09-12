> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsessioncopyserializableproperties(_:allocator:dictionaryout:)](https://developer.apple.com/documentation/videotoolbox/vtsessioncopyserializableproperties(_:allocator:dictionaryout:))

# VTSessionCopySerializableProperties(\_:allocator:dictionaryOut:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Retrieves the set of serializable property keys and their current values.

## Declaration

```swift
func VTSessionCopySerializableProperties(_ session: VTSession, allocator: CFAllocator?, dictionaryOut: UnsafeMutablePointer<CFDictionary?>) -> OSStatus
```

## Parameters

- `session`: The session object.
- `allocator`: An allocator suitable for use when copying property values.
- `dictionaryOut`: A pointer to the properties dictionary.

<a id="Discussion"></a>

## Discussion

The serializable properties are those which can be saved and applied to a different session. The caller must release the returned dictionary.

## See Also

### Getting Properties

- [VTSessionCopyProperty(\_:key:allocator:valueOut:)](vtsessioncopyproperty%28__key_allocator_valueout_%29.md): Retrieves a property on a Video Toolbox session.
- [VTSessionCopySupportedPropertyDictionary(\_:supportedPropertyDictionaryOut:)](vtsessioncopysupportedpropertydictionary%28__supportedpropertydictionaryout_%29.md): Retrieves a dictionary enumerating all the supported properties of a video toolbox session.
- [Supported Property Dictionary Constants](supported-dictionary-constants.md): Property dictionary key and constant values.

# VTSessionCopySerializableProperties (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Retrieves the set of serializable property keys and their current values.

## Declaration

```objectivec
extern OSStatus VTSessionCopySerializableProperties(VTSessionRef session, CFAllocatorRef allocator, CFDictionaryRef*dictionaryOut);
```

## Parameters

- `session`: The session object.
- `allocator`: An allocator suitable for use when copying property values.
- `dictionaryOut`: A pointer to the properties dictionary.

<a id="Discussion"></a>

## Discussion

The serializable properties are those which can be saved and applied to a different session. The caller must release the returned dictionary.

## See Also

### Getting Properties

- [VTSessionCopyProperty](vtsessioncopyproperty%28__key_allocator_valueout_%29.md): Retrieves a property on a Video Toolbox session.
- [VTSessionCopySupportedPropertyDictionary](vtsessioncopysupportedpropertydictionary%28__supportedpropertydictionaryout_%29.md): Retrieves a dictionary enumerating all the supported properties of a video toolbox session.
- [Supported Property Dictionary Constants](supported-dictionary-constants.md): Property dictionary key and constant values.
