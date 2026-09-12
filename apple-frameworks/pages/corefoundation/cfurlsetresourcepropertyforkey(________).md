> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlsetresourcepropertyforkey(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlsetresourcepropertyforkey(_:_:_:_:))

# CFURLSetResourcePropertyForKey(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the URL’s resource property for a given key to a given value.

## Declaration

```swift
func CFURLSetResourcePropertyForKey(_ url: CFURL!, _ key: CFString!, _ propertyValue: CFTypeRef!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

## Parameters

- `url`: The URL.
- `key`: The name of one of the URL’s resource properties.
- `propertyValue`: The value for the resource property defined by `key`.
- `error`: The error that occurred if the resource value could not be set.

<a id="return-value"></a>

## Return Value

`true`  if the resource property named `key` is successfully set to `value`; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

This function synchronously writes the new resource value out to disk. Attempts to set a read-only resource property or to set a resource property that is not supported by the resource are ignored and are not considered errors.

If an error occurs, this method returns `false` and populates the object pointer referenced by `error` with additional information.

> **Note**

>  This method applies only to URLs for file system resources.

## See Also

### Related Documentation

- [CFURL](cfurl.md)

### Getting and Setting File System Resource Properties

- [CFURLClearResourcePropertyCache(\_:)](cfurlclearresourcepropertycache%28__%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [CFURLClearResourcePropertyCacheForKey(\_:\_:)](cfurlclearresourcepropertycacheforkey%28____%29.md): Removes the cached resource value identified by a given key from the URL object.
- [CFURLCopyResourcePropertiesForKeys(\_:\_:\_:)](cfurlcopyresourcepropertiesforkeys%28______%29.md): Returns the resource values for the properties identified by specified array of keys.
- [CFURLCopyResourcePropertyForKey(\_:\_:\_:\_:)](cfurlcopyresourcepropertyforkey%28________%29.md): Returns the value of a given resource property of a given URL.
- [CFURLCreateResourcePropertiesForKeysFromBookmarkData(\_:\_:\_:)](cfurlcreateresourcepropertiesforkeysfrombookmarkdata%28______%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [CFURLCreateResourcePropertyForKeyFromBookmarkData(\_:\_:\_:)](cfurlcreateresourcepropertyforkeyfrombookmarkdata%28______%29.md): Returns the value of a resource property from specified bookmark data.
- [CFURLSetResourcePropertiesForKeys(\_:\_:\_:)](cfurlsetresourcepropertiesforkeys%28______%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [CFURLSetTemporaryResourcePropertyForKey(\_:\_:\_:)](cfurlsettemporaryresourcepropertyforkey%28______%29.md): Sets a temporary resource value on the URL.

# CFURLSetResourcePropertyForKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the URL’s resource property for a given key to a given value.

## Declaration

```objectivec
extern Boolean CFURLSetResourcePropertyForKey(CFURLRef url, CFStringRef key, CFTypeRef propertyValue, CFErrorRef*error);
```

## Parameters

- `url`: The URL.
- `key`: The name of one of the URL’s resource properties.
- `propertyValue`: The value for the resource property defined by `key`.
- `error`: The error that occurred if the resource value could not be set.

<a id="return-value"></a>

## Return Value

`true`  if the resource property named `key` is successfully set to `value`; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

This function synchronously writes the new resource value out to disk. Attempts to set a read-only resource property or to set a resource property that is not supported by the resource are ignored and are not considered errors.

If an error occurs, this method returns `false` and populates the object pointer referenced by `error` with additional information.

> **Note**

>  This method applies only to URLs for file system resources.

## See Also

### Related Documentation

- [CFURLRef](cfurl.md)

### Getting and Setting File System Resource Properties

- [CFURLClearResourcePropertyCache](cfurlclearresourcepropertycache%28__%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [CFURLClearResourcePropertyCacheForKey](cfurlclearresourcepropertycacheforkey%28____%29.md): Removes the cached resource value identified by a given key from the URL object.
- [CFURLCopyResourcePropertiesForKeys](cfurlcopyresourcepropertiesforkeys%28______%29.md): Returns the resource values for the properties identified by specified array of keys.
- [CFURLCopyResourcePropertyForKey](cfurlcopyresourcepropertyforkey%28________%29.md): Returns the value of a given resource property of a given URL.
- [CFURLCreateResourcePropertiesForKeysFromBookmarkData](cfurlcreateresourcepropertiesforkeysfrombookmarkdata%28______%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [CFURLCreateResourcePropertyForKeyFromBookmarkData](cfurlcreateresourcepropertyforkeyfrombookmarkdata%28______%29.md): Returns the value of a resource property from specified bookmark data.
- [CFURLSetResourcePropertiesForKeys](cfurlsetresourcepropertiesforkeys%28______%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [CFURLSetTemporaryResourcePropertyForKey](cfurlsettemporaryresourcepropertyforkey%28______%29.md): Sets a temporary resource value on the URL.
