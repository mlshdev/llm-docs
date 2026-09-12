> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtextensionpropertieskey/containingbundlename](https://developer.apple.com/documentation/videotoolbox/vtextensionpropertieskey/containingbundlename)

# containingBundleName (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** macOS 15.0+

A dictionary key for the extension host application localized name.

## Declaration

```swift
static let containingBundleName: VTExtensionPropertiesKey
```

<a id="Discussion"></a>

## Discussion

This key points to a `CFStringRef` value with the localized name of the application hosting the extension.

## See Also

### Keys

- [containingBundleURL](containingbundleurl.md): A dictionary key for the URL of the extension host application.
- [extensionIdentifier](extensionidentifier.md): A dictionary key for the video decoder extension identifier.
- [extensionName](extensionname.md): A dictionary key for the localized extension name.
- [extensionURL](extensionurl.md): A dictionary key for the URL of the extension.

# kVTExtensionProperties_ContainingBundleNameKey (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A dictionary key for the extension host application localized name.

## Declaration

```objectivec
extern VTExtensionPropertiesKey const kVTExtensionProperties_ContainingBundleNameKey;
```

<a id="Discussion"></a>

## Discussion

This key points to a `CFStringRef` value with the localized name of the application hosting the extension.

## See Also

### Keys

- [kVTExtensionProperties_CodecNameKey](../kvtextensionproperties_codecnamekey.md): A dictionary key for the user readable name string of the codec.
- [kVTExtensionProperties_ContainingBundleURLKey](containingbundleurl.md): A dictionary key for the URL of the extension host application.
- [kVTExtensionProperties_ExtensionIdentifierKey](extensionidentifier.md): A dictionary key for the video decoder extension identifier.
- [kVTExtensionProperties_ExtensionNameKey](extensionname.md): A dictionary key for the localized extension name.
- [kVTExtensionProperties_ExtensionURLKey](extensionurl.md): A dictionary key for the URL of the extension.
