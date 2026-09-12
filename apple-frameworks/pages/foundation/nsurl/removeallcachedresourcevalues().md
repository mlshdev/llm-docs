> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/removeallcachedresourcevalues()](https://developer.apple.com/documentation/foundation/nsurl/removeallcachedresourcevalues())

# removeAllCachedResourceValues() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all cached resource values and temporary resource values from the URL object.

## Declaration

```swift
func removeAllCachedResourceValues()
```

<a id="Discussion"></a>

## Discussion

This method is applicable only to URLs that represent file system resources.

> **Note**

>  The caching behavior of the `NSURL` and `CFURL` APIs differ. For `NSURL`, all cached values (not temporary values) are automatically removed after each pass through the run loop. You only need to call the [removeCachedResourceValue(forKey:)](removecachedresourcevalue%28forkey_%29.md) method when you want to clear the cache within a single execution of the run loop. The `CFURL` functions, on the other hand, do not automatically clear cached resource values. The client has complete control over the cache lifetimes, and you must use [CFURLClearResourcePropertyCacheForKey(\_:\_:)](../../corefoundation/cfurlclearresourcepropertycacheforkey%28____%29.md) or [CFURLClearResourcePropertyCache(\_:)](../../corefoundation/cfurlclearresourcepropertycache%28__%29.md) to clear cached resource values.

## See Also

### Accessing Resource Values

- [resourceValues(forKeys:)](resourcevalues%28forkeys_%29.md): Returns the resource values for the properties identified by specified array of keys.
- [getResourceValue(\_:forKey:)](getresourcevalue%28__forkey_%29.md): Returns the value of the resource property for the specified key.
- [setResourceValue(\_:forKey:)](setresourcevalue%28__forkey_%29.md): Sets the URL’s resource property for a given key to a given value.
- [setResourceValues(\_:)](setresourcevalues%28__%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [removeCachedResourceValue(forKey:)](removecachedresourcevalue%28forkey_%29.md): Removes the cached resource value identified by a given key from the URL object.
- [setTemporaryResourceValue(\_:forKey:)](settemporaryresourcevalue%28__forkey_%29.md): Sets a temporary resource value on the URL object.
- [URLResourceKey](../urlresourcekey.md): Keys that apply to file system URLs.

# removeAllCachedResourceValues (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all cached resource values and temporary resource values from the URL object.

## Declaration

```objectivec
- (void) removeAllCachedResourceValues;
```

<a id="Discussion"></a>

## Discussion

This method is applicable only to URLs that represent file system resources.

> **Note**

>  The caching behavior of the `NSURL` and `CFURL` APIs differ. For `NSURL`, all cached values (not temporary values) are automatically removed after each pass through the run loop. You only need to call the [removeCachedResourceValueForKey:](removecachedresourcevalue%28forkey_%29.md) method when you want to clear the cache within a single execution of the run loop. The `CFURL` functions, on the other hand, do not automatically clear cached resource values. The client has complete control over the cache lifetimes, and you must use [CFURLClearResourcePropertyCacheForKey](../../corefoundation/cfurlclearresourcepropertycacheforkey%28____%29.md) or [CFURLClearResourcePropertyCache](../../corefoundation/cfurlclearresourcepropertycache%28__%29.md) to clear cached resource values.

## See Also

### Accessing Resource Values

- [resourceValuesForKeys:error:](resourcevalues%28forkeys_%29.md): Returns the resource values for the properties identified by specified array of keys.
- [getResourceValue:forKey:error:](getresourcevalue%28__forkey_%29.md): Returns the value of the resource property for the specified key.
- [setResourceValue:forKey:error:](setresourcevalue%28__forkey_%29.md): Sets the URL’s resource property for a given key to a given value.
- [setResourceValues:error:](setresourcevalues%28__%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [removeCachedResourceValueForKey:](removecachedresourcevalue%28forkey_%29.md): Removes the cached resource value identified by a given key from the URL object.
- [setTemporaryResourceValue:forKey:](settemporaryresourcevalue%28__forkey_%29.md): Sets a temporary resource value on the URL object.
- [NSURLResourceKey](../urlresourcekey.md): Keys that apply to file system URLs.
