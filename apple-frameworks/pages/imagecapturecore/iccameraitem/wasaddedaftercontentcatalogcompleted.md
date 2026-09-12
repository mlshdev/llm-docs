> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/wasaddedaftercontentcatalogcompleted](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/wasaddedaftercontentcatalogcompleted)

# wasAddedAfterContentCatalogCompleted (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether the item was captured on the camera after the camera’s content had been fully enumerated.

## Declaration

```swift
var wasAddedAfterContentCatalogCompleted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value does not apply to files added as a result of adding a new store to the camera.

## See Also

### Determining an Item’s Change Dates

- [creationDate](creationdate.md): The item’s creation date, usually the same as its `EXIF` creation date.
- [modificationDate](modificationdate.md): The item’s modification date, usually the same as its `EXIF` modification date.

# addedAfterContentCatalogCompleted (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether the item was captured on the camera after the camera’s content had been fully enumerated.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=wasAddedAfterContentCatalogCompleted) BOOL addedAfterContentCatalogCompleted;
```

<a id="Discussion"></a>

## Discussion

This value does not apply to files added as a result of adding a new store to the camera.

## See Also

### Determining an Item’s Change Dates

- [creationDate](creationdate.md): The item’s creation date, usually the same as its `EXIF` creation date.
- [modificationDate](modificationdate.md): The item’s modification date, usually the same as its `EXIF` modification date.
