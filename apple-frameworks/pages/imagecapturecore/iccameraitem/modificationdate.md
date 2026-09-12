> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/modificationdate](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/modificationdate)

# modificationDate (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s modification date, usually the same as its `EXIF` modification date.

## Declaration

```swift
var modificationDate: Date? { get }
```

## See Also

### Determining an Item’s Change Dates

- [creationDate](creationdate.md): The item’s creation date, usually the same as its `EXIF` creation date.
- [wasAddedAfterContentCatalogCompleted](wasaddedaftercontentcatalogcompleted.md): A Boolean value indicating whether the item was captured on the camera after the camera’s content had been fully enumerated.

# modificationDate (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s modification date, usually the same as its `EXIF` modification date.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * modificationDate;
```

## See Also

### Determining an Item’s Change Dates

- [creationDate](creationdate.md): The item’s creation date, usually the same as its `EXIF` creation date.
- [addedAfterContentCatalogCompleted](wasaddedaftercontentcatalogcompleted.md): A Boolean value indicating whether the item was captured on the camera after the camera’s content had been fully enumerated.
