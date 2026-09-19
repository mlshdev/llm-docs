> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzcustomvirtiodeviceconfiguration/supportssaverestore

# supportsSaveRestore (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

## Declaration

```swift
var supportsSaveRestore: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Whether the device supports save/restore.

This property defaults to `NO`. Set to `YES` if the device supports save/restore. If `supportsSaveRestore` is `YES` but the delegate set on `VZCustomVirtioDevice` does not actually implement the save/restore methods, an exception will be raised.

# supportsSaveRestore (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

## Declaration

```objectivec
@property (readwrite) BOOL supportsSaveRestore;
```

<a id="discussion"></a>

## Discussion

Whether the device supports save/restore.

This property defaults to `NO`. Set to `YES` if the device supports save/restore. If `supportsSaveRestore` is `YES` but the delegate set on `VZCustomVirtioDevice` does not actually implement the save/restore methods, an exception will be raised.
