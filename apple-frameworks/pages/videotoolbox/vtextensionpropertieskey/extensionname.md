> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtextensionpropertieskey/extensionname](https://developer.apple.com/documentation/videotoolbox/vtextensionpropertieskey/extensionname)

# extensionName (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** macOS 15.0+

A dictionary key for the localized extension name.

## Declaration

```swift
static let extensionName: VTExtensionPropertiesKey
```

<a id="Discussion"></a>

## Discussion

This key points to a `CFStringRef` value with the localized extension name.

## See Also

### Keys

- [containingBundleName](containingbundlename.md): A dictionary key for the extension host application localized name.
- [containingBundleURL](containingbundleurl.md): A dictionary key for the URL of the extension host application.
- [extensionIdentifier](extensionidentifier.md): A dictionary key for the video decoder extension identifier.
- [extensionURL](extensionurl.md): A dictionary key for the URL of the extension.

# kVTExtensionProperties_ExtensionNameKey (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A dictionary key for the localized extension name.

## Declaration

```objectivec
extern VTExtensionPropertiesKey const kVTExtensionProperties_ExtensionNameKey;
```

<a id="Discussion"></a>

## Discussion

This key points to a `CFStringRef` value with the localized extension name.

## See Also

### Keys

- [kVTExtensionProperties_CodecNameKey](../kvtextensionproperties_codecnamekey.md): A dictionary key for the user readable name string of the codec.
- [kVTExtensionProperties_ContainingBundleNameKey](containingbundlename.md): A dictionary key for the extension host application localized name.
- [kVTExtensionProperties_ContainingBundleURLKey](containingbundleurl.md): A dictionary key for the URL of the extension host application.
- [kVTExtensionProperties_ExtensionIdentifierKey](extensionidentifier.md): A dictionary key for the video decoder extension identifier.
- [kVTExtensionProperties_ExtensionURLKey](extensionurl.md): A dictionary key for the URL of the extension.
