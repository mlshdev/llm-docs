> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerrorblock](https://developer.apple.com/documentation/homekit/hmerrorblock)

# HMErrorBlock (Swift)

**Framework:** HomeKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A completion block that provides an error.

## Declaration

```swift
typealias HMErrorBlock = ((any Error)?) -> Void
```

## Parameters

- `error`: The error the block returns.

## See Also

### Errors

- [HMError](hmerror.md): An error HomeKit returns.
- [HMErrorDomain](hmerrordomain.md): A string that identifies the HomeKit error domain.
- [HMError.Code](hmerror/code.md): Possible error values that can be returned from HomeKit APIs.

# HMErrorBlock (Objective-C)

**Framework:** HomeKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A completion block that provides an error.

## Declaration

```objectivec
typedef void (^)(NSError *) HMErrorBlock;
```

## Parameters

- `error`: The error the block returns.

## See Also

### Errors

- [HMErrorDomain](hmerrordomain.md): A string that identifies the HomeKit error domain.
- [HMErrorCode](hmerror/code.md): Possible error values that can be returned from HomeKit APIs.
