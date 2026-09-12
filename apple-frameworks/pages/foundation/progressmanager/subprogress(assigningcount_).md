> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager/subprogress(assigningcount:)](https://developer.apple.com/documentation/foundation/progressmanager/subprogress(assigningcount:))

# subprogress(assigningCount:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a `Subprogress` representing a portion of `self` which can be passed to any method that reports progress.

## Declaration

```swift
final func subprogress(assigningCount portionOfParentTotal: Int) -> Subprogress
```

## Parameters

- `portionOfParentTotal`: The portion of `totalCount` to be delegated to the `Subprogress`.

<a id="return-value"></a>

## Return Value

A `Subprogress` instance.

<a id="discussion"></a>

## Discussion

If the `Subprogress` is not converted into a `ProgressManager` (for example, due to an error or early return), then the assigned count is marked as completed in the parent `ProgressManager`.
