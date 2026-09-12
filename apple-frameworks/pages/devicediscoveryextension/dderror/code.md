> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dderror/code](https://developer.apple.com/documentation/devicediscoveryextension/dderror/code)

# DDError.Code (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Codes that identify errors that can occur during the framework’s use.

## Declaration

```swift
enum Code
```

<a id="overview"></a>

## Overview

The system returns one of these codes to describe a completed operation by invoking a [DDErrorHandler](../dderrorhandler.md) that the client provides.

## Topics

### Errors

- [DDError.Code.success](code/success.md): An error that indicates an operation succeeds.
- [DDError.Code.unknown](code/unknown.md): An error that indicates an uncategorized problem.
- [DDError.Code.badParameter](code/badparameter.md): An error that indicates the framework doesn’t support a parameter that the extension provides.
- [DDError.Code.unsupported](code/unsupported.md): An error that indicates an unsupported configuration.
- [DDError.Code.timeout](code/timeout.md): An error that indicates a timeout occurs.
- [DDError.Code.internal](code/internal.md): An error that indicates a problem of internal origin.
- [DDError.Code.missingEntitlement](code/missingentitlement.md): An error that indicates that the app extension lacks a required entitlement.
- [DDError.Code.permission](code/permission.md): An error that indicates the app extension lacks necessary permissions.
- [DDError.Code.next](code/next.md): An error the framework reserves for future use.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [DDError](../dderror.md): An error that the framework reports.
- [DDErrorHandler](../dderrorhandler.md): A function that executes code you provide when an operation returns an error or completes successfully.
- [DDErrorOutType](../dderrorouttype.md): A type for framework functions that return error references.
- [DDErrorDomain](../dderrordomain.md): A unique error domain for the framework.

# DDErrorCode (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Codes that identify errors that can occur during the framework’s use.

## Declaration

```objectivec
enum DDErrorCode : NSInteger;
```

<a id="overview"></a>

## Overview

The system returns one of these codes to describe a completed operation by invoking a [DDErrorHandler](../dderrorhandler.md) that the client provides.

## Topics

### Errors

- [DDErrorCodeSuccess](code/success.md): An error that indicates an operation succeeds.
- [DDErrorCodeUnknown](code/unknown.md): An error that indicates an uncategorized problem.
- [DDErrorCodeBadParameter](code/badparameter.md): An error that indicates the framework doesn’t support a parameter that the extension provides.
- [DDErrorCodeUnsupported](code/unsupported.md): An error that indicates an unsupported configuration.
- [DDErrorCodeTimeout](code/timeout.md): An error that indicates a timeout occurs.
- [DDErrorCodeInternal](code/internal.md): An error that indicates a problem of internal origin.
- [DDErrorCodeMissingEntitlement](code/missingentitlement.md): An error that indicates that the app extension lacks a required entitlement.
- [DDErrorCodePermission](code/permission.md): An error that indicates the app extension lacks necessary permissions.
- [DDErrorCodeNext](code/next.md): An error the framework reserves for future use.

## See Also

### Errors

- [DDErrorHandler](../dderrorhandler.md): A function that executes code you provide when an operation returns an error or completes successfully.
- [DDErrorOutType](../dderrorouttype.md): A type for framework functions that return error references.
- [DDErrorDomain](../dderrordomain.md): A unique error domain for the framework.
