> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedapp/managedapperror/invalididentifier](https://developer.apple.com/documentation/managedapp/managedapperror/invalididentifier)

# ManagedAppError.invalidIdentifier

**Framework:** ManagedApp  
**Kind:** Case  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · macOS 27.0+ · visionOS 2.4+

An error that indicates a failure finding an identifier.

## Declaration

```swift
case invalidIdentifier
```

<a id="discussion"></a>

## Discussion

This error indicates that the MDM admin hasn’t provisioned a secret with the given identifier for this instance of your app.
