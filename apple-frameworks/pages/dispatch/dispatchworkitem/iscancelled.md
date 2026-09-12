> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchworkitem/iscancelled](https://developer.apple.com/documentation/dispatch/dispatchworkitem/iscancelled)

# isCancelled

**Framework:** Dispatch  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value indicating whether the work item has been canceled.

## Declaration

```swift
var isCancelled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the work item has been canceled.

## See Also

### Canceling a Work Item

- [cancel()](cancel%28%29.md): Cancels the current work item asynchronously.
