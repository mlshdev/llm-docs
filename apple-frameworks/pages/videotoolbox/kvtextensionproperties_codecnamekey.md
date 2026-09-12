> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtextensionproperties_codecnamekey](https://developer.apple.com/documentation/videotoolbox/kvtextensionproperties_codecnamekey)

# kVTExtensionProperties_CodecNameKey

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A dictionary key for the user readable name string of the codec.

## Declaration

```objectivec
extern VTExtensionPropertiesKey const kVTExtensionProperties_CodecNameKey;
```

<a id="Discussion"></a>

## Discussion

This key points to a `CFStringRef` with the name of the codec from the supplied format description. This name will be the one listed in the extension CodecInfo array with the key CodecName.

## See Also

### Keys

- [kVTExtensionProperties_ContainingBundleNameKey](vtextensionpropertieskey/containingbundlename.md): A dictionary key for the extension host application localized name.
- [kVTExtensionProperties_ContainingBundleURLKey](vtextensionpropertieskey/containingbundleurl.md): A dictionary key for the URL of the extension host application.
- [kVTExtensionProperties_ExtensionIdentifierKey](vtextensionpropertieskey/extensionidentifier.md): A dictionary key for the video decoder extension identifier.
- [kVTExtensionProperties_ExtensionNameKey](vtextensionpropertieskey/extensionname.md): A dictionary key for the localized extension name.
- [kVTExtensionProperties_ExtensionURLKey](vtextensionpropertieskey/extensionurl.md): A dictionary key for the URL of the extension.
