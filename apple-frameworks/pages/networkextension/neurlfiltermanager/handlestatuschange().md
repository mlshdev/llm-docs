> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/handlestatuschange()](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/handlestatuschange())

# handleStatusChange()

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Sets up an observer for the status notification and models it as an asynchronous sequence.

## Declaration

```swift
func handleStatusChange() -> any AsyncSequence<NEURLFilterManager.Status, Never>
```

<a id="discussion"></a>

## Discussion

The [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence) created by this method produces a new status every time the filter posts the [NEURLFilterStatusDidChange](../../foundation/nsnotification/name-swift.struct/neurlfilterstatusdidchange.md) notification.

Use this method to watch for the status change notification and react to it.

## See Also

### Working with filter statuses

- [status](status-swift.property.md): The current status of the URL filter.
- [NEURLFilterManager.Status](status-swift.enum.md): An enumeration of URL filter status codes.
