> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/setresourcevalues(_:)](https://developer.apple.com/documentation/foundation/url/setresourcevalues(_:))

# setResourceValues(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the resource value identified by a given resource key.

## Declaration

```swift
mutating func setResourceValues(_ values: URLResourceValues) throws
```

## Mentioned In

- [Using the file system effectively](../using-the-file-system-effectively.md)

<a id="Discussion"></a>

## Discussion

This method writes the new resource values out to the backing store. Attempts to set a read-only resource property or to set a resource property not supported by the resource are ignored and are not considered errors. This method is currently applicable only to URLs for file system resources.

`URLResourceValues` keeps track of which of its properties have been set. Those values are the ones used by this function to determine which properties to write.

## See Also

### Accessing resource values

- [resourceValues(forKeys:)](resourcevalues%28forkeys_%29.md): Returns a collection of resource values identified by the given resource keys.
- [removeCachedResourceValue(forKey:)](removecachedresourcevalue%28forkey_%29.md): Removes the cached resource value identified by a given resource value key from the URL object.
- [removeAllCachedResourceValues()](removeallcachedresourcevalues%28%29.md): Removes all cached resource values and all temporary resource values from the URL object.
- [setTemporaryResourceValue(\_:forKey:)](settemporaryresourcevalue%28__forkey_%29.md): Sets a temporary resource value on the URL object.
- [URLResourceKey](../urlresourcekey.md): Keys that apply to file system URLs.
- [URLResourceValues](../urlresourcevalues.md): The properties that the file system resources support.
