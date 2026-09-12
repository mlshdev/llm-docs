> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/settemporaryresourcevalue(_:forkey:)](https://developer.apple.com/documentation/foundation/nsurl/settemporaryresourcevalue(_:forkey:))

# setTemporaryResourceValue(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a temporary resource value on the URL object.

## Declaration

```swift
func setTemporaryResourceValue(_ value: (any Sendable)?, forKey key: URLResourceKey)
```

## Parameters

- `value`: The value to store.
- `key`: The key where the value should be stored. This key must be unique and must not conflict with any system-defined keys. Reverse-domain-name notation is recommended.

<a id="Discussion"></a>

## Discussion

Your app can use a temporary resource value to temporarily store a value for an app-defined resource value key in memory without modifying the actual resource that the URL represents. Once set, you can copy the temporary resource value from the URL object just as you would copy system-defined keys—by calling [getResourceValue(\_:forKey:)](getresourcevalue%28__forkey_%29.md) or [resourceValues(forKeys:)](resourcevalues%28forkeys_%29.md).

Your app can remove a temporary resource value from the URL object by calling [removeCachedResourceValue(forKey:)](removecachedresourcevalue%28forkey_%29.md) or [removeAllCachedResourceValues()](removeallcachedresourcevalues%28%29.md) (to remove all temporary values).

This method is applicable only to URLs for file system resources.

## See Also

### Accessing Resource Values

- [resourceValues(forKeys:)](resourcevalues%28forkeys_%29.md): Returns the resource values for the properties identified by specified array of keys.
- [getResourceValue(\_:forKey:)](getresourcevalue%28__forkey_%29.md): Returns the value of the resource property for the specified key.
- [setResourceValue(\_:forKey:)](setresourcevalue%28__forkey_%29.md): Sets the URL’s resource property for a given key to a given value.
- [setResourceValues(\_:)](setresourcevalues%28__%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [removeAllCachedResourceValues()](removeallcachedresourcevalues%28%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [removeCachedResourceValue(forKey:)](removecachedresourcevalue%28forkey_%29.md): Removes the cached resource value identified by a given key from the URL object.
- [URLResourceKey](../urlresourcekey.md): Keys that apply to file system URLs.

# setTemporaryResourceValue:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a temporary resource value on the URL object.

## Declaration

```objectivec
- (void) setTemporaryResourceValue:(id) value forKey:(NSURLResourceKey) key;
```

## Parameters

- `value`: The value to store.
- `key`: The key where the value should be stored. This key must be unique and must not conflict with any system-defined keys. Reverse-domain-name notation is recommended.

<a id="Discussion"></a>

## Discussion

Your app can use a temporary resource value to temporarily store a value for an app-defined resource value key in memory without modifying the actual resource that the URL represents. Once set, you can copy the temporary resource value from the URL object just as you would copy system-defined keys—by calling [getResourceValue:forKey:error:](getresourcevalue%28__forkey_%29.md) or [resourceValuesForKeys:error:](resourcevalues%28forkeys_%29.md).

Your app can remove a temporary resource value from the URL object by calling [removeCachedResourceValueForKey:](removecachedresourcevalue%28forkey_%29.md) or [removeAllCachedResourceValues](removeallcachedresourcevalues%28%29.md) (to remove all temporary values).

This method is applicable only to URLs for file system resources.

## See Also

### Accessing Resource Values

- [resourceValuesForKeys:error:](resourcevalues%28forkeys_%29.md): Returns the resource values for the properties identified by specified array of keys.
- [getResourceValue:forKey:error:](getresourcevalue%28__forkey_%29.md): Returns the value of the resource property for the specified key.
- [setResourceValue:forKey:error:](setresourcevalue%28__forkey_%29.md): Sets the URL’s resource property for a given key to a given value.
- [setResourceValues:error:](setresourcevalues%28__%29.md): Sets the URL’s resource properties for a given set of keys to a given set of values.
- [removeAllCachedResourceValues](removeallcachedresourcevalues%28%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [removeCachedResourceValueForKey:](removecachedresourcevalue%28forkey_%29.md): Removes the cached resource value identified by a given key from the URL object.
- [NSURLResourceKey](../urlresourcekey.md): Keys that apply to file system URLs.
