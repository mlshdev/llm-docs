> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dderror](https://developer.apple.com/documentation/devicediscoveryextension/dderror)

# DDError

**Framework:** DeviceDiscoveryExtension  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An error that the framework reports.

## Declaration

```swift
struct DDError
```

## Topics

### Identifying an error cause

- [DDError.Code](dderror/code.md): Codes that identify errors that can occur during the framework’s use.
- [success](dderror/success.md): An error that indicates an operation succeeds.
- [unknown](dderror/unknown.md): An error that indicates an uncategorized problem.
- [badParameter](dderror/badparameter.md): An error that indicates the framework doesn’t support a parameter that the extension provides.
- [unsupported](dderror/unsupported.md): An error that indicates an unsupported configuration.
- [timeout](dderror/timeout.md): An error that indicates a timeout occurs.
- [internal](dderror/internal.md): An error that indicates a problem of internal origin.
- [missingEntitlement](dderror/missingentitlement.md): An error that indicates that the app extension lacks a required entitlement.
- [permission](dderror/permission.md): An error that indicates the app extension lacks necessary permissions.
- [next](dderror/next.md): An error the framework reserves for future use.

### Type Properties

- [errorDomain](dderror/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [DDError.Code](dderror/code.md): Codes that identify errors that can occur during the framework’s use.
- [DDErrorHandler](dderrorhandler.md): A function that executes code you provide when an operation returns an error or completes successfully.
- [DDErrorOutType](dderrorouttype.md): A type for framework functions that return error references.
- [DDErrorDomain](dderrordomain.md): A unique error domain for the framework.
