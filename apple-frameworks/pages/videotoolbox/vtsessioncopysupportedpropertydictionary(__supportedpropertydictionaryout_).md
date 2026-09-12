> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsessioncopysupportedpropertydictionary(_:supportedpropertydictionaryout:)](https://developer.apple.com/documentation/videotoolbox/vtsessioncopysupportedpropertydictionary(_:supportedpropertydictionaryout:))

# VTSessionCopySupportedPropertyDictionary(\_:supportedPropertyDictionaryOut:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Retrieves a dictionary enumerating all the supported properties of a video toolbox session.

## Declaration

```swift
func VTSessionCopySupportedPropertyDictionary(_ session: VTSession, supportedPropertyDictionaryOut: UnsafeMutablePointer<CFDictionary?>) -> OSStatus
```

## Parameters

- `session`: The session object.
- `supportedPropertyDictionaryOut`: A pointer to a [CFDictionary](../corefoundation/cfdictionary.md).

<a id="Discussion"></a>

## Discussion

The keys of the returned dictionary are the supported property keys.

The values are themselves dictionaries, each containing the following optional fields:

- The type of value ([kVTPropertyTypeKey](kvtpropertytypekey.md))
- The read/write status of the property ([kVTPropertyReadWriteStatusKey](kvtpropertyreadwritestatuskey.md))
- Whether the property is suitable for serialization ([kVTPropertyShouldBeSerializedKey](kvtpropertyshouldbeserializedkey.md))
- A range or list of the supported values, if appropriate
- Developer-level documentation for the property ([kVTPropertyDocumentationKey](kvtpropertydocumentationkey.md))

The caller must release the returned dictionary.

## See Also

### Getting Properties

- [VTSessionCopyProperty(\_:key:allocator:valueOut:)](vtsessioncopyproperty%28__key_allocator_valueout_%29.md): Retrieves a property on a Video Toolbox session.
- [VTSessionCopySerializableProperties(\_:allocator:dictionaryOut:)](vtsessioncopyserializableproperties%28__allocator_dictionaryout_%29.md): Retrieves the set of serializable property keys and their current values.
- [Supported Property Dictionary Constants](supported-dictionary-constants.md): Property dictionary key and constant values.

# VTSessionCopySupportedPropertyDictionary (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Retrieves a dictionary enumerating all the supported properties of a video toolbox session.

## Declaration

```objectivec
extern OSStatus VTSessionCopySupportedPropertyDictionary(VTSessionRef session, CFDictionaryRef*supportedPropertyDictionaryOut);
```

## Parameters

- `session`: The session object.
- `supportedPropertyDictionaryOut`: A pointer to a [CFDictionaryRef](../corefoundation/cfdictionary.md).

<a id="Discussion"></a>

## Discussion

The keys of the returned dictionary are the supported property keys.

The values are themselves dictionaries, each containing the following optional fields:

- The type of value ([kVTPropertyTypeKey](kvtpropertytypekey.md))
- The read/write status of the property ([kVTPropertyReadWriteStatusKey](kvtpropertyreadwritestatuskey.md))
- Whether the property is suitable for serialization ([kVTPropertyShouldBeSerializedKey](kvtpropertyshouldbeserializedkey.md))
- A range or list of the supported values, if appropriate
- Developer-level documentation for the property ([kVTPropertyDocumentationKey](kvtpropertydocumentationkey.md))

The caller must release the returned dictionary.

## See Also

### Getting Properties

- [VTSessionCopyProperty](vtsessioncopyproperty%28__key_allocator_valueout_%29.md): Retrieves a property on a Video Toolbox session.
- [VTSessionCopySerializableProperties](vtsessioncopyserializableproperties%28__allocator_dictionaryout_%29.md): Retrieves the set of serializable property keys and their current values.
- [Supported Property Dictionary Constants](supported-dictionary-constants.md): Property dictionary key and constant values.
