> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcopyresourcepropertyforkey(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcopyresourcepropertyforkey(_:_:_:_:))

# CFURLCopyResourcePropertyForKey(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value of a given resource property of a given URL.

## Declaration

```swift
func CFURLCopyResourcePropertyForKey(_ url: CFURL!, _ key: CFString!, _ propertyValueTypeRefPtr: UnsafeMutableRawPointer!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

## Parameters

- `url`: The URL.
- `key`: The property value key for the requested value.
- `propertyValueTypeRefPtr`: The output pointer that is populated with the result.
- `error`: The error that occurred if the property’s value could not be obtained. This parameter is optional. If you are not interested in receiving error information, you can pass `NULL`.

<a id="return-value"></a>

## Return Value

`true` if `propertyValueTypeRefPtr` is successfully populated; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

This function first checks if the URL object already caches the resource value. If so, it returns the cached resource value to the caller. If not, then this function synchronously obtains the resource value from the backing store, adds the resource value to the URL object’s cache, and returns the resource value to the caller.

The type of the returned resource value varies by resource property; for details, see the documentation for the key you want to access.

If this function returns [true](https://developer.apple.com/documentation/swift/true) and the propertyValueTypeRefPtr is populated with `nil`, it means that the resource property is not available for the specified resource, and that no errors occurred when determining that the resource property was unavailable.

If this function returns [false](https://developer.apple.com/documentation/swift/false), an error occurred. the object pointer referenced by `error` is populated with additional information.

> **Note**

>  This method applies only to URLs that represent file system resources.

## See Also

### Related Documentation

- [CFURL](cfurl.md)

### Getting and Setting File System Resource Properties

- [CFURLClearResourcePropertyCache(\_:)](cfurlclearresourcepropertycache%28__%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [CFURLClearResourcePropertyCacheForKey(\_:\_:)](cfurlclearresourcepropertycacheforkey%28____%29.md): Removes the cached resource value identified by a given key from the URL object.
- [CFURLCopyResourcePropertiesForKeys(\_:\_:\_:)](cfurlcopyresourcepropertiesforkeys%28______%29.md): Returns the resource values for the properties identified by specified array of keys.
- [CFURLCreateResourcePropertiesForKeysFromBookmarkData(\_:\_:\_:)](cfurlcreateresourcepropertiesforkeysfrombookmarkdata%28______%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [CFURLCreateResourcePropertyForKeyFromBookmarkData(\_:\_:\_:)](cfurlcreateresourcepropertyforkeyfrombookmarkdata%28______%29.md): Returns the value of a resource property from specified bookmark data.
- [CFURLSetResourcePropertiesForKeys(\_:\_:\_:)](cfurlsetresourcepropertiesforkeys%28______%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [CFURLSetResourcePropertyForKey(\_:\_:\_:\_:)](cfurlsetresourcepropertyforkey%28________%29.md): Sets the URL’s resource property for a given key to a given value.
- [CFURLSetTemporaryResourcePropertyForKey(\_:\_:\_:)](cfurlsettemporaryresourcepropertyforkey%28______%29.md): Sets a temporary resource value on the URL.

# CFURLCopyResourcePropertyForKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value of a given resource property of a given URL.

## Declaration

```objectivec
extern Boolean CFURLCopyResourcePropertyForKey(CFURLRef url, CFStringRef key, void *propertyValueTypeRefPtr, CFErrorRef*error);
```

## Parameters

- `url`: The URL.
- `key`: The property value key for the requested value.
- `propertyValueTypeRefPtr`: The output pointer that is populated with the result.
- `error`: The error that occurred if the property’s value could not be obtained. This parameter is optional. If you are not interested in receiving error information, you can pass `NULL`.

<a id="return-value"></a>

## Return Value

`true` if `propertyValueTypeRefPtr` is successfully populated; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

This function first checks if the URL object already caches the resource value. If so, it returns the cached resource value to the caller. If not, then this function synchronously obtains the resource value from the backing store, adds the resource value to the URL object’s cache, and returns the resource value to the caller.

The type of the returned resource value varies by resource property; for details, see the documentation for the key you want to access.

If this function returns [true](https://developer.apple.com/documentation/swift/true) and the propertyValueTypeRefPtr is populated with `nil`, it means that the resource property is not available for the specified resource, and that no errors occurred when determining that the resource property was unavailable.

If this function returns [false](https://developer.apple.com/documentation/swift/false), an error occurred. the object pointer referenced by `error` is populated with additional information.

> **Note**

>  This method applies only to URLs that represent file system resources.

## See Also

### Related Documentation

- [CFURLRef](cfurl.md)

### Getting and Setting File System Resource Properties

- [CFURLClearResourcePropertyCache](cfurlclearresourcepropertycache%28__%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [CFURLClearResourcePropertyCacheForKey](cfurlclearresourcepropertycacheforkey%28____%29.md): Removes the cached resource value identified by a given key from the URL object.
- [CFURLCopyResourcePropertiesForKeys](cfurlcopyresourcepropertiesforkeys%28______%29.md): Returns the resource values for the properties identified by specified array of keys.
- [CFURLCreateResourcePropertiesForKeysFromBookmarkData](cfurlcreateresourcepropertiesforkeysfrombookmarkdata%28______%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [CFURLCreateResourcePropertyForKeyFromBookmarkData](cfurlcreateresourcepropertyforkeyfrombookmarkdata%28______%29.md): Returns the value of a resource property from specified bookmark data.
- [CFURLSetResourcePropertiesForKeys](cfurlsetresourcepropertiesforkeys%28______%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [CFURLSetResourcePropertyForKey](cfurlsetresourcepropertyforkey%28________%29.md): Sets the URL’s resource property for a given key to a given value.
- [CFURLSetTemporaryResourcePropertyForKey](cfurlsettemporaryresourcepropertyforkey%28______%29.md): Sets a temporary resource value on the URL.
