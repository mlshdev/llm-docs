> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/error/domain](https://developer.apple.com/documentation/metalkit/mtktextureloader/error/domain)

# domain (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The error domain used by `MetalKit` when returning texture loading errors.

## Declaration

```swift
static let domain: MTKTextureLoader.Error
```

## See Also

### Keys

- [key](key.md): The key used to retrieve an error string from an error object’s [userInfo](../../../foundation/nserror/userinfo.md) dictionary.

# MTKTextureLoaderErrorDomain (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The error domain used by `MetalKit` when returning texture loading errors.

## Declaration

```objectivec
extern MTKTextureLoaderError const MTKTextureLoaderErrorDomain;
```

## See Also

### Keys

- [MTKTextureLoaderErrorKey](key.md): The key used to retrieve an error string from an error object’s [userInfo](../../../foundation/nserror/userinfo.md) dictionary.
