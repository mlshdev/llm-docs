> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtextensionpropertieskey/containingbundleurl](https://developer.apple.com/documentation/videotoolbox/vtextensionpropertieskey/containingbundleurl)

# containingBundleURL (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** macOS 15.0+

A dictionary key for the URL of the extension host application.

## Declaration

```swift
static let containingBundleURL: VTExtensionPropertiesKey
```

<a id="Discussion"></a>

## Discussion

This key points to a `CFURLRef` value with the URL of the extension host application.

## See Also

### Keys

- [containingBundleName](containingbundlename.md): A dictionary key for the extension host application localized name.
- [extensionIdentifier](extensionidentifier.md): A dictionary key for the video decoder extension identifier.
- [extensionName](extensionname.md): A dictionary key for the localized extension name.
- [extensionURL](extensionurl.md): A dictionary key for the URL of the extension.

# kVTExtensionProperties_ContainingBundleURLKey (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A dictionary key for the URL of the extension host application.

## Declaration

```objectivec
extern VTExtensionPropertiesKey const kVTExtensionProperties_ContainingBundleURLKey;
```

<a id="Discussion"></a>

## Discussion

This key points to a `CFURLRef` value with the URL of the extension host application.

## See Also

### Keys

- [kVTExtensionProperties_CodecNameKey](../kvtextensionproperties_codecnamekey.md): A dictionary key for the user readable name string of the codec.
- [kVTExtensionProperties_ContainingBundleNameKey](containingbundlename.md): A dictionary key for the extension host application localized name.
- [kVTExtensionProperties_ExtensionIdentifierKey](extensionidentifier.md): A dictionary key for the video decoder extension identifier.
- [kVTExtensionProperties_ExtensionNameKey](extensionname.md): A dictionary key for the localized extension name.
- [kVTExtensionProperties_ExtensionURLKey](extensionurl.md): A dictionary key for the URL of the extension.
