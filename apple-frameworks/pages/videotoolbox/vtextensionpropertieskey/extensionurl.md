> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtextensionpropertieskey/extensionurl](https://developer.apple.com/documentation/videotoolbox/vtextensionpropertieskey/extensionurl)

# extensionURL (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** macOS 15.0+

A dictionary key for the URL of the extension.

## Declaration

```swift
static let extensionURL: VTExtensionPropertiesKey
```

<a id="Discussion"></a>

## Discussion

This key points to a `CFURLRef` value with the URL for the extension.

## See Also

### Keys

- [containingBundleName](containingbundlename.md): A dictionary key for the extension host application localized name.
- [containingBundleURL](containingbundleurl.md): A dictionary key for the URL of the extension host application.
- [extensionIdentifier](extensionidentifier.md): A dictionary key for the video decoder extension identifier.
- [extensionName](extensionname.md): A dictionary key for the localized extension name.

# kVTExtensionProperties_ExtensionURLKey (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A dictionary key for the URL of the extension.

## Declaration

```objectivec
extern VTExtensionPropertiesKey const kVTExtensionProperties_ExtensionURLKey;
```

<a id="Discussion"></a>

## Discussion

This key points to a `CFURLRef` value with the URL for the extension.

## See Also

### Keys

- [kVTExtensionProperties_CodecNameKey](../kvtextensionproperties_codecnamekey.md): A dictionary key for the user readable name string of the codec.
- [kVTExtensionProperties_ContainingBundleNameKey](containingbundlename.md): A dictionary key for the extension host application localized name.
- [kVTExtensionProperties_ContainingBundleURLKey](containingbundleurl.md): A dictionary key for the URL of the extension host application.
- [kVTExtensionProperties_ExtensionIdentifierKey](extensionidentifier.md): A dictionary key for the video decoder extension identifier.
- [kVTExtensionProperties_ExtensionNameKey](extensionname.md): A dictionary key for the localized extension name.
