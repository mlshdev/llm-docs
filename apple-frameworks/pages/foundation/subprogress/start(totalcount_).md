> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/subprogress/start(totalcount:)](https://developer.apple.com/documentation/foundation/subprogress/start(totalcount:))

# start(totalCount:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Instantiates a ProgressManager which is a child to the parent from which `self` is returned.

## Declaration

```swift
consuming func start(totalCount: Int?) -> ProgressManager
```

## Parameters

- `totalCount`: Total count of returned child `ProgressManager` instance.

<a id="return-value"></a>

## Return Value

A `ProgressManager` instance.
