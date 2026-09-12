> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtextensionpropertieskey](https://developer.apple.com/documentation/videotoolbox/vtextensionpropertieskey)

# VTExtensionPropertiesKey (Swift)

**Framework:** Video Toolbox  
**Kind:** Structure  
**Availability:** macOS 15.0+

A key in a Media Extension extension properties dictionary.

## Declaration

```swift
struct VTExtensionPropertiesKey
```

## Topics

### Keys

- [containingBundleName](vtextensionpropertieskey/containingbundlename.md): A dictionary key for the extension host application localized name.
- [containingBundleURL](vtextensionpropertieskey/containingbundleurl.md): A dictionary key for the URL of the extension host application.
- [extensionIdentifier](vtextensionpropertieskey/extensionidentifier.md): A dictionary key for the video decoder extension identifier.
- [extensionName](vtextensionpropertieskey/extensionname.md): A dictionary key for the localized extension name.
- [extensionURL](vtextensionpropertieskey/extensionurl.md): A dictionary key for the URL of the extension.

### Initializers

- [init(rawValue:)](vtextensionpropertieskey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# VTExtensionPropertiesKey (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** macOS 15.0+

A key in a Media Extension extension properties dictionary.

## Declaration

```objectivec
typedef CFStringRef VTExtensionPropertiesKey;
```

## Topics

### Keys

- [kVTExtensionProperties_CodecNameKey](kvtextensionproperties_codecnamekey.md): A dictionary key for the user readable name string of the codec.
- [kVTExtensionProperties_ContainingBundleNameKey](vtextensionpropertieskey/containingbundlename.md): A dictionary key for the extension host application localized name.
- [kVTExtensionProperties_ContainingBundleURLKey](vtextensionpropertieskey/containingbundleurl.md): A dictionary key for the URL of the extension host application.
- [kVTExtensionProperties_ExtensionIdentifierKey](vtextensionpropertieskey/extensionidentifier.md): A dictionary key for the video decoder extension identifier.
- [kVTExtensionProperties_ExtensionNameKey](vtextensionpropertieskey/extensionname.md): A dictionary key for the localized extension name.
- [kVTExtensionProperties_ExtensionURLKey](vtextensionpropertieskey/extensionurl.md): A dictionary key for the URL of the extension.

## See Also

### Media Extension

- [VTCopyVideoDecoderExtensionProperties](vtcopyvideodecoderextensionproperties.md): Returns information about the Media Extension video decoder required to decode the specified format.
