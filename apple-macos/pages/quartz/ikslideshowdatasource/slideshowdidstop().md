> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikslideshowdatasource/slideshowdidstop()](https://developer.apple.com/documentation/quartz/ikslideshowdatasource/slideshowdidstop())

# slideshowDidStop() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Performs custom tasks when the slideshow stops.

## Declaration

```swift
optional func slideshowDidStop()
```

<a id="Discussion"></a>

## Discussion

TImage Kit invokes this method when the slideshow stops. Implement this method to perform custom tasks at that time.

## See Also

### Related Documentation

- [IKSlideshowDataSource](../ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](../ikslideshow.md) object uses to access the contents of its data source object.

### Performing Custom Tasks

- [slideshowWillStart()](slideshowwillstart%28%29.md): Performs custom tasks when the slideshow is about to start.
- [slideshowDidChangeCurrentIndex(\_:)](slideshowdidchangecurrentindex%28__%29.md): Performs custom tasks when the slideshow changes to the item at the specified index.

# slideshowDidStop (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Performs custom tasks when the slideshow stops.

## Declaration

```objectivec
- (void) slideshowDidStop;
```

<a id="Discussion"></a>

## Discussion

TImage Kit invokes this method when the slideshow stops. Implement this method to perform custom tasks at that time.

## See Also

### Related Documentation

- [IKSlideshowDataSource](../ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](../ikslideshow.md) object uses to access the contents of its data source object.

### Performing Custom Tasks

- [slideshowWillStart](slideshowwillstart%28%29.md): Performs custom tasks when the slideshow is about to start.
- [slideshowDidChangeCurrentIndex:](slideshowdidchangecurrentindex%28__%29.md): Performs custom tasks when the slideshow changes to the item at the specified index.
