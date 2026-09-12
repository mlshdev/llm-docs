> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dderrorhandler](https://developer.apple.com/documentation/devicediscoveryextension/dderrorhandler)

# DDErrorHandler (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A function that executes code you provide when an operation returns an error or completes successfully.

## Declaration

```swift
typealias DDErrorHandler = ((any Error)?) -> Void
```

## Parameters

- `inError`: A reference that the framework assigns an error object when the operation fails. When the operation succeeds, the value may be `nil` or [DDError.Code.success](dderror/code/success.md).

## See Also

### Errors

- [DDError](dderror.md): An error that the framework reports.
- [DDError.Code](dderror/code.md): Codes that identify errors that can occur during the framework’s use.
- [DDErrorOutType](dderrorouttype.md): A type for framework functions that return error references.
- [DDErrorDomain](dderrordomain.md): A unique error domain for the framework.

# DDErrorHandler (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A function that executes code you provide when an operation returns an error or completes successfully.

## Declaration

```objectivec
typedef void (^)(NSError *) DDErrorHandler;
```

## Parameters

- `inError`: A reference that the framework assigns an error object when the operation fails. When the operation succeeds, the value may be `nil` or [DDErrorCodeSuccess](dderror/code/success.md).

## See Also

### Errors

- [DDErrorCode](dderror/code.md): Codes that identify errors that can occur during the framework’s use.
- [DDErrorOutType](dderrorouttype.md): A type for framework functions that return error references.
- [DDErrorDomain](dderrordomain.md): A unique error domain for the framework.
