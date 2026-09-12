> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaextensionproperties](https://developer.apple.com/documentation/avfoundation/avmediaextensionproperties)

# AVMediaExtensionProperties (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes a Media Extension.

## Declaration

```swift
class AVMediaExtensionProperties
```

## Topics

### Inspecting the extension

- [extensionName](avmediaextensionproperties/extensionname.md): The name of the Media Extension.
- [containingBundleName](avmediaextensionproperties/containingbundlename.md): The name of the containing app bundle.
- [extensionIdentifier](avmediaextensionproperties/extensionidentifier.md)
- [extensionURL](avmediaextensionproperties/extensionurl.md): The file URL of the Media Extension bundle.
- [containingBundleURL](avmediaextensionproperties/containingbundleurl.md): The file URL of the host application for the Media Extension.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Media Extension properties

- [mediaExtensionProperties](avurlasset/mediaextensionproperties.md): The properties of the media extension format reader that decodes the asset.

# AVMediaExtensionProperties (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes a Media Extension.

## Declaration

```objectivec
@interface AVMediaExtensionProperties : NSObject
```

## Topics

### Inspecting the extension

- [extensionName](avmediaextensionproperties/extensionname.md): The name of the Media Extension.
- [containingBundleName](avmediaextensionproperties/containingbundlename.md): The name of the containing app bundle.
- [extensionIdentifier](avmediaextensionproperties/extensionidentifier.md)
- [extensionURL](avmediaextensionproperties/extensionurl.md): The file URL of the Media Extension bundle.
- [containingBundleURL](avmediaextensionproperties/containingbundleurl.md): The file URL of the host application for the Media Extension.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Accessing Media Extension properties

- [mediaExtensionProperties](avurlasset/mediaextensionproperties.md): The properties of the media extension format reader that decodes the asset.
- [sidecarURL](avurlasset/sidecarurl.md): The sidecar URL used by the MediaExtension.
