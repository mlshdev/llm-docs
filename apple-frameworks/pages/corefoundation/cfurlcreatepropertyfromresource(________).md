> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatepropertyfromresource(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatepropertyfromresource(_:_:_:_:))

# CFURLCreatePropertyFromResource(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a given property specified by a given URL and property string.

> For file resource properties, use CFURLCopyResourcePropertyForKey.

## Declaration

```swift
func CFURLCreatePropertyFromResource(_ alloc: CFAllocator!, _ url: CFURL!, _ property: CFString!, _ errorCode: UnsafeMutablePointer<Int32>!) -> CFTypeRef!
```

## Parameters

- `alloc`: The allocator to use to to allocate memory for the new `CFType` object for the requested property. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `url`: The `CFURL` object referring to the resource whose properties are loaded.
- `property`: The name of the property you wish to load. Pass one of the provided string constants indicating the property. See [File URL Properties](file-url-properties.md) and [HTTP URL Properties](http-url-properties.md) for the list of available properties.
- `errorCode`: On return, `0` if successful, otherwise an error code indicating the nature of the problem. See [CFURLError](cfurlerror.md) for a list of possible error codes.

<a id="return-value"></a>

## Return Value

If successful, the requested property as a `CFType` object, `NULL` otherwise. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This is a convenience function for retrieving individual property values which calls through to [CFURLCreateDataAndPropertiesFromResource(\_:\_:\_:\_:\_:\_:)](cfurlcreatedataandpropertiesfromresource%28____________%29.md).

## See Also

### Core Foundation URL Access Utilities Miscellaneous Functions

- [CFURLCreateDataAndPropertiesFromResource(\_:\_:\_:\_:\_:\_:)](cfurlcreatedataandpropertiesfromresource%28____________%29.md): Deprecated. Loads the data and properties referred to by a given URL.
- [CFURLDestroyResource(\_:\_:)](cfurldestroyresource%28____%29.md): Deprecated. Destroys a resource indicated by a given URL.
- [CFURLWriteDataAndPropertiesToResource(\_:\_:\_:\_:)](cfurlwritedataandpropertiestoresource%28________%29.md): Deprecated. Writes the given data and properties to a given URL.

# CFURLCreatePropertyFromResource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a given property specified by a given URL and property string.

> For file resource properties, use CFURLCopyResourcePropertyForKey.

## Declaration

```objectivec
extern CFTypeRefCFURLCreatePropertyFromResource(CFAllocatorRef alloc, CFURLRef url, CFStringRef property, SInt32 *errorCode);
```

## Parameters

- `alloc`: The allocator to use to to allocate memory for the new `CFType` object for the requested property. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `url`: The `CFURL` object referring to the resource whose properties are loaded.
- `property`: The name of the property you wish to load. Pass one of the provided string constants indicating the property. See [File URL Properties](file-url-properties.md) and [HTTP URL Properties](http-url-properties.md) for the list of available properties.
- `errorCode`: On return, `0` if successful, otherwise an error code indicating the nature of the problem. See [CFURLError](cfurlerror.md) for a list of possible error codes.

<a id="return-value"></a>

## Return Value

If successful, the requested property as a `CFType` object, `NULL` otherwise. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This is a convenience function for retrieving individual property values which calls through to [CFURLCreateDataAndPropertiesFromResource](cfurlcreatedataandpropertiesfromresource%28____________%29.md).

## See Also

### Core Foundation URL Access Utilities Miscellaneous Functions

- [CFURLCreateDataAndPropertiesFromResource](cfurlcreatedataandpropertiesfromresource%28____________%29.md): Deprecated. Loads the data and properties referred to by a given URL.
- [CFURLDestroyResource](cfurldestroyresource%28____%29.md): Deprecated. Destroys a resource indicated by a given URL.
- [CFURLWriteDataAndPropertiesToResource](cfurlwritedataandpropertiestoresource%28________%29.md): Deprecated. Writes the given data and properties to a given URL.
