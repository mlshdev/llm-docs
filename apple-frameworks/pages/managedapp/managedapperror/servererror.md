> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedapp/managedapperror/servererror](https://developer.apple.com/documentation/managedapp/managedapperror/servererror)

# ManagedAppError.serverError

**Framework:** ManagedApp  
**Kind:** Case  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · macOS 27.0+ · visionOS 2.4+

An error that indicates a failure requesting a secret from the asset server.

## Declaration

```swift
case serverError
```

<a id="discussion"></a>

## Discussion

This error can also indicate a problem communicating with a subsequent server, such as ACME or SCEP.
