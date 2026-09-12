> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mllinearregressor/init(checkpoint:)](https://developer.apple.com/documentation/createml/mllinearregressor/init(checkpoint:))

# init(checkpoint:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a linear regressor from a checkpoint.

## Declaration

```swift
init(checkpoint: MLCheckpoint) throws
```

## Parameters

- `checkpoint`: Training checkpoint.

<a id="discussion"></a>

## Discussion

> **Throws**

> `MLCreateError` if the checkpoint can’t be loaded.
