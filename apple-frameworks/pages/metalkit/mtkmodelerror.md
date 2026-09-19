> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalkit/mtkmodelerror

# MTKModelError (Swift)

**Framework:** MetalKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Constants used to declare Model Errors.

## Declaration

```swift
struct MTKModelError
```

## Topics

### Initializing a Raw Constant

- [init(rawValue:)](mtkmodelerror/init%28rawvalue_%29.md)

### Finding Model Error Constants

- [domain](mtkmodelerror/domain.md): The error domain used by MetalKit when returning mesh initialization errors.
- [key](mtkmodelerror/key.md): The key used to retrieve an error string from an error object’s [userInfo](../foundation/nserror/userinfo.md) dictionary.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MTKModelError (Objective-C)

**Framework:** MetalKit  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Constants used to declare Model Errors.

## Declaration

```objectivec
typedef NSString * MTKModelError;
```

## Topics

### Finding Model Error Constants

- [MTKModelErrorDomain](mtkmodelerror/domain.md): The error domain used by MetalKit when returning mesh initialization errors.
- [MTKModelErrorKey](mtkmodelerror/key.md): The key used to retrieve an error string from an error object’s [userInfo](../foundation/nserror/userinfo.md) dictionary.
