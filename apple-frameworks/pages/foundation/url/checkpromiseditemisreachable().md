> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/checkpromiseditemisreachable()](https://developer.apple.com/documentation/foundation/url/checkpromiseditemisreachable())

# checkPromisedItemIsReachable()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether the promised item URL’s resource exists and is reachable.

## Declaration

```swift
func checkPromisedItemIsReachable() throws -> Bool
```

<a id="Discussion"></a>

## Discussion

This method synchronously checks if the resource’s backing store is reachable. Checking reachability is appropriate when making decisions that do not require other immediate operations on the resource, e.g. periodic maintenance of UI state that depends on the existence of a specific document. When performing operations such as opening a file or copying resource properties, it is more efficient to simply try the operation and handle failures. This method is currently applicable only to URLs for file system resources. For other URL types, `false` is returned.

## See Also

### Working with promised items

- [promisedItemResourceValues(forKeys:)](promiseditemresourcevalues%28forkeys_%29.md): Gets resource values from URLs of ‘promised’ items.
