> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsessioncopyproperty(_:key:allocator:valueout:)](https://developer.apple.com/documentation/videotoolbox/vtsessioncopyproperty(_:key:allocator:valueout:))

# VTSessionCopyProperty(\_:key:allocator:valueOut:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Retrieves a property on a Video Toolbox session.

## Declaration

```swift
func VTSessionCopyProperty(_ session: VTSession, key propertyKey: CFString, allocator: CFAllocator?, valueOut propertyValueOut: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `session`: A Video Toolbox session object.
- `propertyKey`: The key for the property to retrieve.
- `allocator`: An allocator suitable for use when copying property values.
- `propertyValueOut`: Points to a variable to receive the property value, which must be a CF-registered type – the caller may call [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) on it to identify which specific type. The caller must release the this property value.

<a id="return-value"></a>

## Return Value

`noErr` if successful; [kVTPropertyNotSupportedErr](kvtpropertynotsupportederr.md) for unrecognized or unsupported properties.

<a id="Discussion"></a>

## Discussion

> **Note**

> For most types of properties, the returned values should be considered immutable. In particular, for CFPropertyList types, sharing of mutable property value objects between the client, session and codec should be avoided. However, some properties will be used for exchanging service objects that are inherently mutable (eg, CVPixelBufferPool).

## See Also

### Getting Properties

- [VTSessionCopySerializableProperties(\_:allocator:dictionaryOut:)](vtsessioncopyserializableproperties%28__allocator_dictionaryout_%29.md): Retrieves the set of serializable property keys and their current values.
- [VTSessionCopySupportedPropertyDictionary(\_:supportedPropertyDictionaryOut:)](vtsessioncopysupportedpropertydictionary%28__supportedpropertydictionaryout_%29.md): Retrieves a dictionary enumerating all the supported properties of a video toolbox session.
- [Supported Property Dictionary Constants](supported-dictionary-constants.md): Property dictionary key and constant values.

# VTSessionCopyProperty (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Retrieves a property on a Video Toolbox session.

## Declaration

```objectivec
extern OSStatus VTSessionCopyProperty(VTSessionRef session, CFStringRef propertyKey, CFAllocatorRef allocator, void *propertyValueOut);
```

## Parameters

- `session`: A Video Toolbox session object.
- `propertyKey`: The key for the property to retrieve.
- `allocator`: An allocator suitable for use when copying property values.
- `propertyValueOut`: Points to a variable to receive the property value, which must be a CF-registered type – the caller may call [CFGetTypeID](../corefoundation/cfgettypeid%28__%29.md) on it to identify which specific type. The caller must release the this property value.

<a id="return-value"></a>

## Return Value

`noErr` if successful; [kVTPropertyNotSupportedErr](kvtpropertynotsupportederr.md) for unrecognized or unsupported properties.

<a id="Discussion"></a>

## Discussion

> **Note**

> For most types of properties, the returned values should be considered immutable. In particular, for CFPropertyList types, sharing of mutable property value objects between the client, session and codec should be avoided. However, some properties will be used for exchanging service objects that are inherently mutable (eg, CVPixelBufferPool).

## See Also

### Getting Properties

- [VTSessionCopySerializableProperties](vtsessioncopyserializableproperties%28__allocator_dictionaryout_%29.md): Retrieves the set of serializable property keys and their current values.
- [VTSessionCopySupportedPropertyDictionary](vtsessioncopysupportedpropertydictionary%28__supportedpropertydictionaryout_%29.md): Retrieves a dictionary enumerating all the supported properties of a video toolbox session.
- [Supported Property Dictionary Constants](supported-dictionary-constants.md): Property dictionary key and constant values.
