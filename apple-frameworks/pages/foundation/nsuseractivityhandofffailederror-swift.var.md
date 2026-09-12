> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivityhandofffailederror-swift.var](https://developer.apple.com/documentation/foundation/nsuseractivityhandofffailederror-swift.var)

# NSUserActivityHandoffFailedError

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data for the user activity wasn’t available.

## Declaration

```swift
var NSUserActivityHandoffFailedError: Int { get }
```

<a id="Discussion"></a>

## Discussion

This error can occur if the remote device became unavailable.

## See Also

### Reporting errors

- [NSUserActivityConnectionUnavailableError](nsuseractivityconnectionunavailableerror-swift.var.md): The user activity couldn’t be continued because a required connection wasn’t available.
- [NSUserActivityErrorMaximum](nsuseractivityerrormaximum-swift.var.md): The end of the range of error codes reserved for user activity errors.
- [NSUserActivityErrorMinimum](nsuseractivityerrorminimum-swift.var.md): The start of the range of error codes reserved for user activity errors.
- [NSUserActivityHandoffUserInfoTooLargeError](nsuseractivityhandoffuserinfotoolargeerror-swift.var.md): The user info dictionary was too large to receive.
- [NSUserActivityRemoteApplicationTimedOutError](nsuseractivityremoteapplicationtimedouterror-swift.var.md): The remote application failed to send data within the specified time.
