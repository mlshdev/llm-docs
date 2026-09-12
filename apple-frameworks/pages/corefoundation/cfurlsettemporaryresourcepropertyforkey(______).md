> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlsettemporaryresourcepropertyforkey(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlsettemporaryresourcepropertyforkey(_:_:_:))

# CFURLSetTemporaryResourcePropertyForKey(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a temporary resource value on the URL.

## Declaration

```swift
func CFURLSetTemporaryResourcePropertyForKey(_ url: CFURL!, _ key: CFString!, _ propertyValue: CFTypeRef!)
```

## Parameters

- `url`: The URL.
- `key`: The key where the value should be stored. This key must be unique and must not conflict with any system-defined keys. Reverse-domain-name notation is recommended.
- `propertyValue`: The value to store.

<a id="Discussion"></a>

## Discussion

Your app can use a temporary resource value to temporarily store a value for an app-defined resource value key in memory without modifying the actual resource that the URL represents. Once set, you can copy the temporary resource value from the URL object just as you would copy system-defined keys—by calling [CFURLCopyResourcePropertyForKey(\_:\_:\_:\_:)](cfurlcopyresourcepropertyforkey%28________%29.md) or [CFURLCopyResourcePropertiesForKeys(\_:\_:\_:)](cfurlcopyresourcepropertiesforkeys%28______%29.md).

Your app can remove a temporary resource value from the URL object by calling [CFURLClearResourcePropertyCacheForKey(\_:\_:)](cfurlclearresourcepropertycacheforkey%28____%29.md) or [CFURLClearResourcePropertyCache(\_:)](cfurlclearresourcepropertycache%28__%29.md) (to remove all temporary values).

This method is applicable only to URLs for file system resources.

## See Also

### Getting and Setting File System Resource Properties

- [CFURLClearResourcePropertyCache(\_:)](cfurlclearresourcepropertycache%28__%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [CFURLClearResourcePropertyCacheForKey(\_:\_:)](cfurlclearresourcepropertycacheforkey%28____%29.md): Removes the cached resource value identified by a given key from the URL object.
- [CFURLCopyResourcePropertiesForKeys(\_:\_:\_:)](cfurlcopyresourcepropertiesforkeys%28______%29.md): Returns the resource values for the properties identified by specified array of keys.
- [CFURLCopyResourcePropertyForKey(\_:\_:\_:\_:)](cfurlcopyresourcepropertyforkey%28________%29.md): Returns the value of a given resource property of a given URL.
- [CFURLCreateResourcePropertiesForKeysFromBookmarkData(\_:\_:\_:)](cfurlcreateresourcepropertiesforkeysfrombookmarkdata%28______%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [CFURLCreateResourcePropertyForKeyFromBookmarkData(\_:\_:\_:)](cfurlcreateresourcepropertyforkeyfrombookmarkdata%28______%29.md): Returns the value of a resource property from specified bookmark data.
- [CFURLSetResourcePropertiesForKeys(\_:\_:\_:)](cfurlsetresourcepropertiesforkeys%28______%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [CFURLSetResourcePropertyForKey(\_:\_:\_:\_:)](cfurlsetresourcepropertyforkey%28________%29.md): Sets the URL’s resource property for a given key to a given value.

# CFURLSetTemporaryResourcePropertyForKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a temporary resource value on the URL.

## Declaration

```objectivec
extern void CFURLSetTemporaryResourcePropertyForKey(CFURLRef url, CFStringRef key, CFTypeRef propertyValue);
```

## Parameters

- `url`: The URL.
- `key`: The key where the value should be stored. This key must be unique and must not conflict with any system-defined keys. Reverse-domain-name notation is recommended.
- `propertyValue`: The value to store.

<a id="Discussion"></a>

## Discussion

Your app can use a temporary resource value to temporarily store a value for an app-defined resource value key in memory without modifying the actual resource that the URL represents. Once set, you can copy the temporary resource value from the URL object just as you would copy system-defined keys—by calling [CFURLCopyResourcePropertyForKey](cfurlcopyresourcepropertyforkey%28________%29.md) or [CFURLCopyResourcePropertiesForKeys](cfurlcopyresourcepropertiesforkeys%28______%29.md).

Your app can remove a temporary resource value from the URL object by calling [CFURLClearResourcePropertyCacheForKey](cfurlclearresourcepropertycacheforkey%28____%29.md) or [CFURLClearResourcePropertyCache](cfurlclearresourcepropertycache%28__%29.md) (to remove all temporary values).

This method is applicable only to URLs for file system resources.

## See Also

### Getting and Setting File System Resource Properties

- [CFURLClearResourcePropertyCache](cfurlclearresourcepropertycache%28__%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [CFURLClearResourcePropertyCacheForKey](cfurlclearresourcepropertycacheforkey%28____%29.md): Removes the cached resource value identified by a given key from the URL object.
- [CFURLCopyResourcePropertiesForKeys](cfurlcopyresourcepropertiesforkeys%28______%29.md): Returns the resource values for the properties identified by specified array of keys.
- [CFURLCopyResourcePropertyForKey](cfurlcopyresourcepropertyforkey%28________%29.md): Returns the value of a given resource property of a given URL.
- [CFURLCreateResourcePropertiesForKeysFromBookmarkData](cfurlcreateresourcepropertiesforkeysfrombookmarkdata%28______%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [CFURLCreateResourcePropertyForKeyFromBookmarkData](cfurlcreateresourcepropertyforkeyfrombookmarkdata%28______%29.md): Returns the value of a resource property from specified bookmark data.
- [CFURLSetResourcePropertiesForKeys](cfurlsetresourcepropertiesforkeys%28______%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [CFURLSetResourcePropertyForKey](cfurlsetresourcepropertyforkey%28________%29.md): Sets the URL’s resource property for a given key to a given value.
