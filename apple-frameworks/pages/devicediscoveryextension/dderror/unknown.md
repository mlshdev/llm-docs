> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dderror/unknown](https://developer.apple.com/documentation/devicediscoveryextension/dderror/unknown)

# unknown

**Framework:** DeviceDiscoveryExtension  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An error that indicates an uncategorized problem.

## Declaration

```swift
static var unknown: DDError.Code { get }
```

## See Also

### Identifying an error cause

- [DDError.Code](code.md): Codes that identify errors that can occur during the framework’s use.
- [success](success.md): An error that indicates an operation succeeds.
- [badParameter](badparameter.md): An error that indicates the framework doesn’t support a parameter that the extension provides.
- [unsupported](unsupported.md): An error that indicates an unsupported configuration.
- [timeout](timeout.md): An error that indicates a timeout occurs.
- [internal](internal.md): An error that indicates a problem of internal origin.
- [missingEntitlement](missingentitlement.md): An error that indicates that the app extension lacks a required entitlement.
- [permission](permission.md): An error that indicates the app extension lacks necessary permissions.
- [next](next.md): An error the framework reserves for future use.
