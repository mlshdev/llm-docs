> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlclearresourcepropertycacheforkey(_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlclearresourcepropertycacheforkey(_:_:))

# CFURLClearResourcePropertyCacheForKey(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the cached resource value identified by a given key from the URL object.

## Declaration

```swift
func CFURLClearResourcePropertyCacheForKey(_ url: CFURL!, _ key: CFString!)
```

## Parameters

- `url`: The URL.
- `key`: The resource value key whose cached values you want to remove.

<a id="Discussion"></a>

## Discussion

Removing a cached resource value may remove other cached resource values because some resource values are cached as a set of values, and because some resource values depend on other resource values. (Temporary resource values have no dependencies.)

This method is currently applicable only to URLs for file system resources.

> **Note**

>  The caching behavior of the `NSURL` and `CFURL` APIs differ. For `NSURL`, all cached values (not temporary values) are automatically removed after each pass through the run loop. You only need to call the [CFURL](cfurl.md) method when you want to clear the cache within a single execution of the run loop. The `CFURL` functions, on the other hand, do not automatically clear cached resource values. The client has complete control over the cache lifetimes, and you must use [CFURLClearResourcePropertyCacheForKey(\_:\_:)](cfurlclearresourcepropertycacheforkey%28____%29.md) or [CFURLClearResourcePropertyCache(\_:)](cfurlclearresourcepropertycache%28__%29.md) to clear cached resource values.

## See Also

### Getting and Setting File System Resource Properties

- [CFURLClearResourcePropertyCache(\_:)](cfurlclearresourcepropertycache%28__%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [CFURLCopyResourcePropertiesForKeys(\_:\_:\_:)](cfurlcopyresourcepropertiesforkeys%28______%29.md): Returns the resource values for the properties identified by specified array of keys.
- [CFURLCopyResourcePropertyForKey(\_:\_:\_:\_:)](cfurlcopyresourcepropertyforkey%28________%29.md): Returns the value of a given resource property of a given URL.
- [CFURLCreateResourcePropertiesForKeysFromBookmarkData(\_:\_:\_:)](cfurlcreateresourcepropertiesforkeysfrombookmarkdata%28______%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [CFURLCreateResourcePropertyForKeyFromBookmarkData(\_:\_:\_:)](cfurlcreateresourcepropertyforkeyfrombookmarkdata%28______%29.md): Returns the value of a resource property from specified bookmark data.
- [CFURLSetResourcePropertiesForKeys(\_:\_:\_:)](cfurlsetresourcepropertiesforkeys%28______%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [CFURLSetResourcePropertyForKey(\_:\_:\_:\_:)](cfurlsetresourcepropertyforkey%28________%29.md): Sets the URL’s resource property for a given key to a given value.
- [CFURLSetTemporaryResourcePropertyForKey(\_:\_:\_:)](cfurlsettemporaryresourcepropertyforkey%28______%29.md): Sets a temporary resource value on the URL.

# CFURLClearResourcePropertyCacheForKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the cached resource value identified by a given key from the URL object.

## Declaration

```objectivec
extern void CFURLClearResourcePropertyCacheForKey(CFURLRef url, CFStringRef key);
```

## Parameters

- `url`: The URL.
- `key`: The resource value key whose cached values you want to remove.

<a id="Discussion"></a>

## Discussion

Removing a cached resource value may remove other cached resource values because some resource values are cached as a set of values, and because some resource values depend on other resource values. (Temporary resource values have no dependencies.)

This method is currently applicable only to URLs for file system resources.

> **Note**

>  The caching behavior of the `NSURL` and `CFURL` APIs differ. For `NSURL`, all cached values (not temporary values) are automatically removed after each pass through the run loop. You only need to call the [CFURLRef](cfurl.md) method when you want to clear the cache within a single execution of the run loop. The `CFURL` functions, on the other hand, do not automatically clear cached resource values. The client has complete control over the cache lifetimes, and you must use [CFURLClearResourcePropertyCacheForKey](cfurlclearresourcepropertycacheforkey%28____%29.md) or [CFURLClearResourcePropertyCache](cfurlclearresourcepropertycache%28__%29.md) to clear cached resource values.

## See Also

### Getting and Setting File System Resource Properties

- [CFURLClearResourcePropertyCache](cfurlclearresourcepropertycache%28__%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [CFURLCopyResourcePropertiesForKeys](cfurlcopyresourcepropertiesforkeys%28______%29.md): Returns the resource values for the properties identified by specified array of keys.
- [CFURLCopyResourcePropertyForKey](cfurlcopyresourcepropertyforkey%28________%29.md): Returns the value of a given resource property of a given URL.
- [CFURLCreateResourcePropertiesForKeysFromBookmarkData](cfurlcreateresourcepropertiesforkeysfrombookmarkdata%28______%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [CFURLCreateResourcePropertyForKeyFromBookmarkData](cfurlcreateresourcepropertyforkeyfrombookmarkdata%28______%29.md): Returns the value of a resource property from specified bookmark data.
- [CFURLSetResourcePropertiesForKeys](cfurlsetresourcepropertiesforkeys%28______%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [CFURLSetResourcePropertyForKey](cfurlsetresourcepropertyforkey%28________%29.md): Sets the URL’s resource property for a given key to a given value.
- [CFURLSetTemporaryResourcePropertyForKey](cfurlsettemporaryresourcepropertyforkey%28______%29.md): Sets a temporary resource value on the URL.
