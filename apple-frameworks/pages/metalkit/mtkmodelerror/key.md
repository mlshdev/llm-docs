> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalkit/mtkmodelerror/key

# key (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The key used to retrieve an error string from an error object’s [userInfo](../../foundation/nserror/userinfo.md) dictionary.

## Declaration

```swift
static let key: MTKModelError
```

## See Also

### Constants

- [domain](domain.md): The error domain used by MetalKit when returning mesh initialization errors.

# MTKModelErrorKey (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The key used to retrieve an error string from an error object’s [userInfo](../../foundation/nserror/userinfo.md) dictionary.

## Declaration

```objectivec
extern MTKModelError const MTKModelErrorKey;
```

## See Also

### Constants

- [MTKModelErrorDomain](domain.md): The error domain used by MetalKit when returning mesh initialization errors.
