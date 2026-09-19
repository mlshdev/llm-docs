> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neurlfiltermanager/status-swift.property

# status

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

The current status of the URL filter.

## Declaration

```swift
var status: NEURLFilterManager.Status { get async }
```

## See Also

### Working with filter statuses

- [handleStatusChange()](handlestatuschange%28%29.md): Sets up an observer for the status notification and models it as an asynchronous sequence.
- [NEURLFilterManager.Status](status-swift.enum.md): An enumeration of URL filter status codes.
