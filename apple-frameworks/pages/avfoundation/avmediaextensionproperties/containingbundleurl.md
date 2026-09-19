> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmediaextensionproperties/containingbundleurl

# containingBundleURL (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The file URL of the host application for the Media Extension.

## Declaration

```swift
var containingBundleURL: URL { get }
```

## See Also

### Inspecting the extension

- [extensionName](extensionname.md): The name of the Media Extension.
- [containingBundleName](containingbundlename.md): The name of the containing app bundle.
- [extensionIdentifier](extensionidentifier.md)
- [extensionURL](extensionurl.md): The file URL of the Media Extension bundle.

# containingBundleURL (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The file URL of the host application for the Media Extension.

## Declaration

```objectivec
@property (nonatomic, readonly) NSURL * containingBundleURL;
```

## See Also

### Inspecting the extension

- [extensionName](extensionname.md): The name of the Media Extension.
- [containingBundleName](containingbundlename.md): The name of the containing app bundle.
- [extensionIdentifier](extensionidentifier.md)
- [extensionURL](extensionurl.md): The file URL of the Media Extension bundle.
