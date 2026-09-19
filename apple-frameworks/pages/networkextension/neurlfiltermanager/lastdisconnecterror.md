> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neurlfiltermanager/lastdisconnecterror

# lastDisconnectError

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

The most recent error that caused the URL Filter to stop.

## Declaration

```swift
var lastDisconnectError: NEURLFilterManager.Error? { get async }
```

<a id="discussion"></a>

## Discussion

You can check this property after an unexpected status change to determine what caused the filter to stop.

> **Tip**

> This value may be a remnant of a previously-encountered issue, if nothing has caused a more recent error to overwrite it.

## See Also

### Handling errors

- [NEURLFilterManager.Error](error.md): An enumeration of URL filter error codes
