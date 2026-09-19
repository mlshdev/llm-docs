> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neapppushmanagererror-swift.struct/inactivesession

# inactiveSession

**Framework:** Network Extension  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An error that indicates an invalid attempt to perform an operation on an inactive session.

## Declaration

```swift
static var inactiveSession: NEAppPushManagerError.Code { get }
```

## See Also

### Error constants

- [configurationInvalid](configurationinvalid.md): An error that indicates the app push configuration is invalid.
- [configurationNotLoaded](configurationnotloaded.md): An error that indicates the manager hasn’t loaded the app push configuration.
- [internalError](internalerror.md): An error that indicates an internal error in the local push connectivity framework.
