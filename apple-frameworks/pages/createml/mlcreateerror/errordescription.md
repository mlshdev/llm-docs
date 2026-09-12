> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlcreateerror/errordescription](https://developer.apple.com/documentation/createml/mlcreateerror/errordescription)

# errorDescription

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A localized, human-readable description of the error and why it occurred, if applicable.

## Declaration

```swift
var errorDescription: String? { get }
```

## See Also

### Describing errors in a user interface

- [errorCode](errorcode.md): The numeric code of this error.
- [errorUserInfo](erroruserinfo.md): A dictionary that provides additional information about the error.
- [failureReason](failurereason.md): A localized, human-readable reason behind the failure, if applicable.
