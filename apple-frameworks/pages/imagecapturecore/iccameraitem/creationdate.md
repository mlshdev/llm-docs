> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/creationdate](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/creationdate)

# creationDate (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s creation date, usually the same as its `EXIF` creation date.

## Declaration

```swift
var creationDate: Date? { get }
```

## See Also

### Determining an Item’s Change Dates

- [modificationDate](modificationdate.md): The item’s modification date, usually the same as its `EXIF` modification date.
- [wasAddedAfterContentCatalogCompleted](wasaddedaftercontentcatalogcompleted.md): A Boolean value indicating whether the item was captured on the camera after the camera’s content had been fully enumerated.

# creationDate (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s creation date, usually the same as its `EXIF` creation date.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * creationDate;
```

## See Also

### Determining an Item’s Change Dates

- [modificationDate](modificationdate.md): The item’s modification date, usually the same as its `EXIF` modification date.
- [addedAfterContentCatalogCompleted](wasaddedaftercontentcatalogcompleted.md): A Boolean value indicating whether the item was captured on the camera after the camera’s content had been fully enumerated.
