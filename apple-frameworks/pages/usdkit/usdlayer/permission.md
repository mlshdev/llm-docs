> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/permission](https://developer.apple.com/documentation/usdkit/usdlayer/permission)

# USDLayer.Permission

**Framework:** USDKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Access permission for a spec.

## Declaration

```swift
enum Permission
```

## Topics

### Enumeration Cases

- [USDLayer.Permission.private](permission/private.md): Accessible only within the defining layer.
- [USDLayer.Permission.public](permission/public.md): Accessible from any layer.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [USDValueProtocol](../usdvalueprotocol.md)

## See Also

### Opening and finding layers

- [find(identifier:)](find%28identifier_%29.md): Returns an already-loaded layer with this identifier, or `nil` if none is loaded. Does no I/O.
- [open(\_:options:)](open%28__options_%29.md): Returns an already-loaded layer at the identifier, or opens it from the resolved asset path.
- [USDLayer.OpenOptions](openoptions.md): Options for opening a layer.
