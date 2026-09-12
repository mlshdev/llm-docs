> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaextensionproperties/extensionname](https://developer.apple.com/documentation/avfoundation/avmediaextensionproperties/extensionname)

# extensionName (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The name of the Media Extension.

## Declaration

```swift
var extensionName: String { get }
```

<a id="Discussion"></a>

## Discussion

This value corresponds to the extension’s [CFBundleDisplayName](../../bundleresources/information-property-list/cfbundledisplayname.md).

## See Also

### Inspecting the extension

- [containingBundleName](containingbundlename.md): The name of the containing app bundle.
- [extensionIdentifier](extensionidentifier.md)
- [extensionURL](extensionurl.md): The file URL of the Media Extension bundle.
- [containingBundleURL](containingbundleurl.md): The file URL of the host application for the Media Extension.

# extensionName (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The name of the Media Extension.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * extensionName;
```

<a id="Discussion"></a>

## Discussion

This value corresponds to the extension’s [CFBundleDisplayName](../../bundleresources/information-property-list/cfbundledisplayname.md).

## See Also

### Inspecting the extension

- [containingBundleName](containingbundlename.md): The name of the containing app bundle.
- [extensionIdentifier](extensionidentifier.md)
- [extensionURL](extensionurl.md): The file URL of the Media Extension bundle.
- [containingBundleURL](containingbundleurl.md): The file URL of the host application for the Media Extension.
