> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dderror/next](https://developer.apple.com/documentation/devicediscoveryextension/dderror/next)

# next

**Framework:** DeviceDiscoveryExtension  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An error the framework reserves for future use.

## Declaration

```swift
static var next: DDError.Code { get }
```

## See Also

### Identifying an error cause

- [DDError.Code](code.md): Codes that identify errors that can occur during the framework’s use.
- [success](success.md): An error that indicates an operation succeeds.
- [unknown](unknown.md): An error that indicates an uncategorized problem.
- [badParameter](badparameter.md): An error that indicates the framework doesn’t support a parameter that the extension provides.
- [unsupported](unsupported.md): An error that indicates an unsupported configuration.
- [timeout](timeout.md): An error that indicates a timeout occurs.
- [internal](internal.md): An error that indicates a problem of internal origin.
- [missingEntitlement](missingentitlement.md): An error that indicates that the app extension lacks a required entitlement.
- [permission](permission.md): An error that indicates the app extension lacks necessary permissions.
