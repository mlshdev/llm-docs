> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dderrorouttype](https://developer.apple.com/documentation/devicediscoveryextension/dderrorouttype)

# DDErrorOutType (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A type for framework functions that return error references.

## Declaration

```swift
typealias DDErrorOutType = AutoreleasingUnsafeMutablePointer<NSError?>
```

## See Also

### Errors

- [DDError](dderror.md): An error that the framework reports.
- [DDError.Code](dderror/code.md): Codes that identify errors that can occur during the framework’s use.
- [DDErrorHandler](dderrorhandler.md): A function that executes code you provide when an operation returns an error or completes successfully.
- [DDErrorDomain](dderrordomain.md): A unique error domain for the framework.

# DDErrorOutType (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A type for framework functions that return error references.

## Declaration

```objectivec
typedef NSError ** DDErrorOutType;
```

## See Also

### Errors

- [DDErrorCode](dderror/code.md): Codes that identify errors that can occur during the framework’s use.
- [DDErrorHandler](dderrorhandler.md): A function that executes code you provide when an operation returns an error or completes successfully.
- [DDErrorDomain](dderrordomain.md): A unique error domain for the framework.
