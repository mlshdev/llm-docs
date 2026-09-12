> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/subprogress(assigningcount:)](https://developer.apple.com/documentation/foundation/progress/subprogress(assigningcount:))

# subprogress(assigningCount:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a Subprogress which can be passed to any method that reports progress It can be then used to create a child `ProgressManager` reporting to this `Progress`

## Declaration

```swift
func subprogress(assigningCount count: Int) -> Subprogress
```

## Parameters

- `count`: Number of units delegated to a child instance of `ProgressManager` which may be instantiated by `Subprogress` later when `reporter(totalCount:)` is called.

<a id="return-value"></a>

## Return Value

A `Subprogress` instance.

<a id="discussion"></a>

## Discussion

Delegates a portion of totalUnitCount to a future child `ProgressManager` instance.
