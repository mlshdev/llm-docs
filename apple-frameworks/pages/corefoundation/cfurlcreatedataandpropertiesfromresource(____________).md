> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatedataandpropertiesfromresource(_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatedataandpropertiesfromresource(_:_:_:_:_:_:))

# CFURLCreateDataAndPropertiesFromResource(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Loads the data and properties referred to by a given URL.

> For resource data, use the CFReadStream API. For file resource properties, use CFURLCopyResourcePropertiesForKeys.

## Declaration

```swift
func CFURLCreateDataAndPropertiesFromResource(_ alloc: CFAllocator!, _ url: CFURL!, _ resourceData: UnsafeMutablePointer<Unmanaged<CFData>?>!, _ properties: UnsafeMutablePointer<Unmanaged<CFDictionary>?>!, _ desiredProperties: CFArray!, _ errorCode: UnsafeMutablePointer<Int32>!) -> Bool
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new `CFData` and `CFDictionary` objects returned in `resourceData` and `properties`. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `url`: The URL referring to the data and/or properties you wish to load.
- `resourceData`: On return, contains a `CFData` object containing the data referred to by `url`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `properties`: On return, a pointer to a `CFDictionary` object containing the resource properties referred to by `url`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `desiredProperties`: A list of the properties you wish to obtain and return in `properties`. See [File URL Properties](file-url-properties.md) and [HTTP URL Properties](http-url-properties.md) for the list of available properties.
- `errorCode`: `0` if successful, otherwise an error code indicating the nature of the problem. See [CFURLError](cfurlerror.md) for a list of possible error codes.

<a id="return-value"></a>

## Return Value

`true` if successful, `false` otherwise.

<a id="Discussion"></a>

## Discussion

If you are interested in loading only the resource data or the resource’s properties, pass `NULL` for the one you don’t want. If `properties` is non-`NULL` and `desiredProperties` is `NULL` then all properties are fetched. Note that as much work as possible is done even if `false` is returned. For instance, if one property is not available, the others are fetched anyway. This function is intended for convenience, not performance.

## See Also

### Core Foundation URL Access Utilities Miscellaneous Functions

- [CFURLCreatePropertyFromResource(\_:\_:\_:\_:)](cfurlcreatepropertyfromresource%28________%29.md): Deprecated. Returns a given property specified by a given URL and property string.
- [CFURLDestroyResource(\_:\_:)](cfurldestroyresource%28____%29.md): Deprecated. Destroys a resource indicated by a given URL.
- [CFURLWriteDataAndPropertiesToResource(\_:\_:\_:\_:)](cfurlwritedataandpropertiestoresource%28________%29.md): Deprecated. Writes the given data and properties to a given URL.

# CFURLCreateDataAndPropertiesFromResource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Loads the data and properties referred to by a given URL.

> For resource data, use the CFReadStream API. For file resource properties, use CFURLCopyResourcePropertiesForKeys.

## Declaration

```objectivec
extern Boolean CFURLCreateDataAndPropertiesFromResource(CFAllocatorRef alloc, CFURLRef url, CFDataRef*resourceData, CFDictionaryRef*properties, CFArrayRef desiredProperties, SInt32 *errorCode);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new `CFData` and `CFDictionary` objects returned in `resourceData` and `properties`. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `url`: The URL referring to the data and/or properties you wish to load.
- `resourceData`: On return, contains a `CFData` object containing the data referred to by `url`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `properties`: On return, a pointer to a `CFDictionary` object containing the resource properties referred to by `url`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `desiredProperties`: A list of the properties you wish to obtain and return in `properties`. See [File URL Properties](file-url-properties.md) and [HTTP URL Properties](http-url-properties.md) for the list of available properties.
- `errorCode`: `0` if successful, otherwise an error code indicating the nature of the problem. See [CFURLError](cfurlerror.md) for a list of possible error codes.

<a id="return-value"></a>

## Return Value

`true` if successful, `false` otherwise.

<a id="Discussion"></a>

## Discussion

If you are interested in loading only the resource data or the resource’s properties, pass `NULL` for the one you don’t want. If `properties` is non-`NULL` and `desiredProperties` is `NULL` then all properties are fetched. Note that as much work as possible is done even if `false` is returned. For instance, if one property is not available, the others are fetched anyway. This function is intended for convenience, not performance.

## See Also

### Core Foundation URL Access Utilities Miscellaneous Functions

- [CFURLCreatePropertyFromResource](cfurlcreatepropertyfromresource%28________%29.md): Deprecated. Returns a given property specified by a given URL and property string.
- [CFURLDestroyResource](cfurldestroyresource%28____%29.md): Deprecated. Destroys a resource indicated by a given URL.
- [CFURLWriteDataAndPropertiesToResource](cfurlwritedataandpropertiestoresource%28________%29.md): Deprecated. Writes the given data and properties to a given URL.
