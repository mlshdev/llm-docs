> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikslideshowdatasource/slideshowdidchangecurrentindex(_:)](https://developer.apple.com/documentation/quartz/ikslideshowdatasource/slideshowdidchangecurrentindex(_:))

# slideshowDidChangeCurrentIndex(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Performs custom tasks when the slideshow changes to the item at the specified index.

## Declaration

```swift
optional func slideshowDidChangeCurrentIndex(_ newIndex: Int)
```

## Parameters

- `newIndex`: The index of the current item.

<a id="Discussion"></a>

## Discussion

Image Kit invokes this method when the slideshow changes to the specified item. Implement this method to perform custom tasks at that time.

## See Also

### Performing Custom Tasks

- [slideshowWillStart()](slideshowwillstart%28%29.md): Performs custom tasks when the slideshow is about to start.
- [slideshowDidStop()](slideshowdidstop%28%29.md): Performs custom tasks when the slideshow stops.

# slideshowDidChangeCurrentIndex: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Performs custom tasks when the slideshow changes to the item at the specified index.

## Declaration

```objectivec
- (void) slideshowDidChangeCurrentIndex:(NSUInteger) newIndex;
```

## Parameters

- `newIndex`: The index of the current item.

<a id="Discussion"></a>

## Discussion

Image Kit invokes this method when the slideshow changes to the specified item. Implement this method to perform custom tasks at that time.

## See Also

### Performing Custom Tasks

- [slideshowWillStart](slideshowwillstart%28%29.md): Performs custom tasks when the slideshow is about to start.
- [slideshowDidStop](slideshowdidstop%28%29.md): Performs custom tasks when the slideshow stops.
