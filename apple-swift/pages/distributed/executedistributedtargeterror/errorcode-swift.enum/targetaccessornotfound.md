> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/executedistributedtargeterror/errorcode-swift.enum/targetaccessornotfound](https://developer.apple.com/documentation/distributed/executedistributedtargeterror/errorcode-swift.enum/targetaccessornotfound)

# ExecuteDistributedTargetError.ErrorCode.targetAccessorNotFound

**Framework:** Distributed  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Unable to resolve the target identifier to a function accessor. This can happen when the identifier is corrupt, illegal, or wrong in the sense that the caller and callee do not have the called function recorded using the same identifier.

## Declaration

```swift
case targetAccessorNotFound
```
