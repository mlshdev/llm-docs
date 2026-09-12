> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager/assign(count:to:)-98a77](https://developer.apple.com/documentation/foundation/progressmanager/assign(count:to:)-98a77)

# assign(count:to:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Adds a `ProgressReporter` as a child, with its progress representing a portion of `self`’s progress.

## Declaration

```swift
final func assign(count: Int, to reporter: ProgressReporter)
```

## Parameters

- `count`: Units, which is a portion of `totalCount`delegated to an instance of `Subprogress`.
- `reporter`: A `ProgressReporter` instance.

<a id="discussion"></a>

## Discussion

If a cycle is detected, this will cause a crash at runtime.
