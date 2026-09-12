> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dderrordomain](https://developer.apple.com/documentation/devicediscoveryextension/dderrordomain)

# DDErrorDomain (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A unique error domain for the framework.

## Declaration

```swift
let DDErrorDomain: String
```

<a id="Discussion"></a>

## Discussion

For more information, see [Error domains](../corefoundation/error-domains.md).

## See Also

### Errors

- [DDError](dderror.md): An error that the framework reports.
- [DDError.Code](dderror/code.md): Codes that identify errors that can occur during the framework’s use.
- [DDErrorHandler](dderrorhandler.md): A function that executes code you provide when an operation returns an error or completes successfully.
- [DDErrorOutType](dderrorouttype.md): A type for framework functions that return error references.

# DDErrorDomain (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A unique error domain for the framework.

## Declaration

```objectivec
extern NSString * const DDErrorDomain;
```

<a id="Discussion"></a>

## Discussion

For more information, see [Error domains](../corefoundation/error-domains.md).

## See Also

### Errors

- [DDErrorCode](dderror/code.md): Codes that identify errors that can occur during the framework’s use.
- [DDErrorHandler](dderrorhandler.md): A function that executes code you provide when an operation returns an error or completes successfully.
- [DDErrorOutType](dderrorouttype.md): A type for framework functions that return error references.
