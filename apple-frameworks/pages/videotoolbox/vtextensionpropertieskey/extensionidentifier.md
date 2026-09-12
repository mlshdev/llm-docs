> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtextensionpropertieskey/extensionidentifier](https://developer.apple.com/documentation/videotoolbox/vtextensionpropertieskey/extensionidentifier)

# extensionIdentifier (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** macOS 15.0+

A dictionary key for the video decoder extension identifier.

## Declaration

```swift
static let extensionIdentifier: VTExtensionPropertiesKey
```

<a id="Discussion"></a>

## Discussion

This key points to a `CFStringRef` value with the extension identifier, corresponding to the ClassImplementationID value from the EXAppExtensionAttributes dictionary in the Info.plist file.

## See Also

### Keys

- [containingBundleName](containingbundlename.md): A dictionary key for the extension host application localized name.
- [containingBundleURL](containingbundleurl.md): A dictionary key for the URL of the extension host application.
- [extensionName](extensionname.md): A dictionary key for the localized extension name.
- [extensionURL](extensionurl.md): A dictionary key for the URL of the extension.

# kVTExtensionProperties_ExtensionIdentifierKey (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A dictionary key for the video decoder extension identifier.

## Declaration

```objectivec
extern VTExtensionPropertiesKey const kVTExtensionProperties_ExtensionIdentifierKey;
```

<a id="Discussion"></a>

## Discussion

This key points to a `CFStringRef` value with the extension identifier, corresponding to the ClassImplementationID value from the EXAppExtensionAttributes dictionary in the Info.plist file.

## See Also

### Keys

- [kVTExtensionProperties_CodecNameKey](../kvtextensionproperties_codecnamekey.md): A dictionary key for the user readable name string of the codec.
- [kVTExtensionProperties_ContainingBundleNameKey](containingbundlename.md): A dictionary key for the extension host application localized name.
- [kVTExtensionProperties_ContainingBundleURLKey](containingbundleurl.md): A dictionary key for the URL of the extension host application.
- [kVTExtensionProperties_ExtensionNameKey](extensionname.md): A dictionary key for the localized extension name.
- [kVTExtensionProperties_ExtensionURLKey](extensionurl.md): A dictionary key for the URL of the extension.
