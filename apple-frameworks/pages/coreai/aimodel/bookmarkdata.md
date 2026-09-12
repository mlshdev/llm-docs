> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodel/bookmarkdata](https://developer.apple.com/documentation/coreai/aimodel/bookmarkdata)

# bookmarkData

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Create a bookmark for this AIModel’s cached specialized asset entry as serialized data.

## Declaration

```swift
var bookmarkData: Data { get }
```

<a id="discussion"></a>

## Discussion

The data returned  can be stored and later resolved to re-create a model with init?(resolvingBookmark:). It contains information about the cache and entry backing the model

> **Note**

> Bookmark data is just data. It does not pin entries in the cache. Only a `AIModel` will pin its associated entry in the cache while it is held.

## See Also

### Inspecting a model

- [deviceArchitectureName](devicearchitecturename.md): The Core AI architecture name of the current device.
