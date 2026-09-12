> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikslideshowdatasource/slideshowwillstart()](https://developer.apple.com/documentation/quartz/ikslideshowdatasource/slideshowwillstart())

# slideshowWillStart() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Performs custom tasks when the slideshow is about to start.

## Declaration

```swift
optional func slideshowWillStart()
```

<a id="Discussion"></a>

## Discussion

Image Kit invokes this method when the slideshow is about to start. Implement this method to perform custom tasks at that time.

## See Also

### Related Documentation

- [IKSlideshowDataSource](../ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](../ikslideshow.md) object uses to access the contents of its data source object.

### Performing Custom Tasks

- [slideshowDidStop()](slideshowdidstop%28%29.md): Performs custom tasks when the slideshow stops.
- [slideshowDidChangeCurrentIndex(\_:)](slideshowdidchangecurrentindex%28__%29.md): Performs custom tasks when the slideshow changes to the item at the specified index.

# slideshowWillStart (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Performs custom tasks when the slideshow is about to start.

## Declaration

```objectivec
- (void) slideshowWillStart;
```

<a id="Discussion"></a>

## Discussion

Image Kit invokes this method when the slideshow is about to start. Implement this method to perform custom tasks at that time.

## See Also

### Related Documentation

- [IKSlideshowDataSource](../ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](../ikslideshow.md) object uses to access the contents of its data source object.

### Performing Custom Tasks

- [slideshowDidStop](slideshowdidstop%28%29.md): Performs custom tasks when the slideshow stops.
- [slideshowDidChangeCurrentIndex:](slideshowdidchangecurrentindex%28__%29.md): Performs custom tasks when the slideshow changes to the item at the specified index.
