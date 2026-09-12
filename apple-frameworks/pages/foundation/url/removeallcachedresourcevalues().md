> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/removeallcachedresourcevalues()](https://developer.apple.com/documentation/foundation/url/removeallcachedresourcevalues())

# removeAllCachedResourceValues()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all cached resource values and all temporary resource values from the URL object.

## Declaration

```swift
mutating func removeAllCachedResourceValues()
```

<a id="Discussion"></a>

## Discussion

This method is currently applicable only to URLs for file system resources.

## See Also

### Accessing resource values

- [resourceValues(forKeys:)](resourcevalues%28forkeys_%29.md): Returns a collection of resource values identified by the given resource keys.
- [setResourceValues(\_:)](setresourcevalues%28__%29.md): Sets the resource value identified by a given resource key.
- [removeCachedResourceValue(forKey:)](removecachedresourcevalue%28forkey_%29.md): Removes the cached resource value identified by a given resource value key from the URL object.
- [setTemporaryResourceValue(\_:forKey:)](settemporaryresourcevalue%28__forkey_%29.md): Sets a temporary resource value on the URL object.
- [URLResourceKey](../urlresourcekey.md): Keys that apply to file system URLs.
- [URLResourceValues](../urlresourcevalues.md): The properties that the file system resources support.
