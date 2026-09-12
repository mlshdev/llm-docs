> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreateresourcepropertyforkeyfrombookmarkdata(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreateresourcepropertyforkeyfrombookmarkdata(_:_:_:))

# CFURLCreateResourcePropertyForKeyFromBookmarkData(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value of a resource property from specified bookmark data.

## Declaration

```swift
func CFURLCreateResourcePropertyForKeyFromBookmarkData(_ allocator: CFAllocator!, _ resourcePropertyKey: CFString!, _ bookmark: CFData!) -> Unmanaged<CFTypeRef>!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `resourcePropertyKey`: The resource property key. See [Common File System Resource Keys](common-file-system-resource-keys.md) for a list of possible keys.
- `bookmark`: The bookmark data the resource value is derived from.

<a id="return-value"></a>

## Return Value

The resource property value.

<a id="Discussion"></a>

## Discussion

This function does not attempt to resolve the bookmark data or perform I/O.

## See Also

### Getting and Setting File System Resource Properties

- [CFURLClearResourcePropertyCache(\_:)](cfurlclearresourcepropertycache%28__%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [CFURLClearResourcePropertyCacheForKey(\_:\_:)](cfurlclearresourcepropertycacheforkey%28____%29.md): Removes the cached resource value identified by a given key from the URL object.
- [CFURLCopyResourcePropertiesForKeys(\_:\_:\_:)](cfurlcopyresourcepropertiesforkeys%28______%29.md): Returns the resource values for the properties identified by specified array of keys.
- [CFURLCopyResourcePropertyForKey(\_:\_:\_:\_:)](cfurlcopyresourcepropertyforkey%28________%29.md): Returns the value of a given resource property of a given URL.
- [CFURLCreateResourcePropertiesForKeysFromBookmarkData(\_:\_:\_:)](cfurlcreateresourcepropertiesforkeysfrombookmarkdata%28______%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [CFURLSetResourcePropertiesForKeys(\_:\_:\_:)](cfurlsetresourcepropertiesforkeys%28______%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [CFURLSetResourcePropertyForKey(\_:\_:\_:\_:)](cfurlsetresourcepropertyforkey%28________%29.md): Sets the URL’s resource property for a given key to a given value.
- [CFURLSetTemporaryResourcePropertyForKey(\_:\_:\_:)](cfurlsettemporaryresourcepropertyforkey%28______%29.md): Sets a temporary resource value on the URL.

# CFURLCreateResourcePropertyForKeyFromBookmarkData (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value of a resource property from specified bookmark data.

## Declaration

```objectivec
extern CFTypeRefCFURLCreateResourcePropertyForKeyFromBookmarkData(CFAllocatorRef allocator, CFStringRef resourcePropertyKey, CFDataRef bookmark);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `resourcePropertyKey`: The resource property key. See [Common File System Resource Keys](common-file-system-resource-keys.md) for a list of possible keys.
- `bookmark`: The bookmark data the resource value is derived from.

<a id="return-value"></a>

## Return Value

The resource property value.

<a id="Discussion"></a>

## Discussion

This function does not attempt to resolve the bookmark data or perform I/O.

## See Also

### Getting and Setting File System Resource Properties

- [CFURLClearResourcePropertyCache](cfurlclearresourcepropertycache%28__%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [CFURLClearResourcePropertyCacheForKey](cfurlclearresourcepropertycacheforkey%28____%29.md): Removes the cached resource value identified by a given key from the URL object.
- [CFURLCopyResourcePropertiesForKeys](cfurlcopyresourcepropertiesforkeys%28______%29.md): Returns the resource values for the properties identified by specified array of keys.
- [CFURLCopyResourcePropertyForKey](cfurlcopyresourcepropertyforkey%28________%29.md): Returns the value of a given resource property of a given URL.
- [CFURLCreateResourcePropertiesForKeysFromBookmarkData](cfurlcreateresourcepropertiesforkeysfrombookmarkdata%28______%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [CFURLSetResourcePropertiesForKeys](cfurlsetresourcepropertiesforkeys%28______%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [CFURLSetResourcePropertyForKey](cfurlsetresourcepropertyforkey%28________%29.md): Sets the URL’s resource property for a given key to a given value.
- [CFURLSetTemporaryResourcePropertyForKey](cfurlsettemporaryresourcepropertyforkey%28______%29.md): Sets a temporary resource value on the URL.
