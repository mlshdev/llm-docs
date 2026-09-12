> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/error](https://developer.apple.com/documentation/metalkit/mtktextureloader/error)

# MTKTextureLoader.Error (Swift)

**Framework:** MetalKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Errors returned by the texture loader.

## Declaration

```swift
struct Error
```

## Topics

### Initializers

- [init(rawValue:)](error/init%28rawvalue_%29.md)

### Keys

- [domain](error/domain.md): The error domain used by `MetalKit` when returning texture loading errors.
- [key](error/key.md): The key used to retrieve an error string from an error object’s [userInfo](../../foundation/nserror/userinfo.md) dictionary.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MTKTextureLoaderError (Objective-C)

**Framework:** MetalKit  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Errors returned by the texture loader.

## Declaration

```objectivec
typedef NSString * MTKTextureLoaderError;
```

## Topics

### Keys

- [MTKTextureLoaderErrorDomain](error/domain.md): The error domain used by `MetalKit` when returning texture loading errors.
- [MTKTextureLoaderErrorKey](error/key.md): The key used to retrieve an error string from an error object’s [userInfo](../../foundation/nserror/userinfo.md) dictionary.
