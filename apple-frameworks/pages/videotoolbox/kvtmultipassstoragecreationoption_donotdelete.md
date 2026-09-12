> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtmultipassstoragecreationoption_donotdelete](https://developer.apple.com/documentation/videotoolbox/kvtmultipassstoragecreationoption_donotdelete)

# kVTMultiPassStorageCreationOption_DoNotDelete (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Indicates that the multipass storage object’s backing store should not be deleted when finalized.

## Declaration

```swift
let kVTMultiPassStorageCreationOption_DoNotDelete: CFString
```

<a id="Discussion"></a>

## Discussion

If the backing store file did not exist when the storage was created, the file will be deleted when the multipass storage object is finalized, unless you set this option to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) in the options dictionary.

# kVTMultiPassStorageCreationOption_DoNotDelete (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Indicates that the multipass storage object’s backing store should not be deleted when finalized.

## Declaration

```objectivec
extern CFStringRef const kVTMultiPassStorageCreationOption_DoNotDelete;
```

<a id="Discussion"></a>

## Discussion

If the backing store file did not exist when the storage was created, the file will be deleted when the multipass storage object is finalized, unless you set this option to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) in the options dictionary.
