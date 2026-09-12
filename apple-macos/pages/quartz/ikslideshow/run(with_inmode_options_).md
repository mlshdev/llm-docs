> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikslideshow/run(with:inmode:options:)](https://developer.apple.com/documentation/quartz/ikslideshow/run(with:inmode:options:))

# run(with:inMode:options:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Runs a slideshow that contains the specified kind of items, provided from a data source.

## Declaration

```swift
func run(with dataSource: (any IKSlideshowDataSource)!, inMode slideshowMode: String!, options slideshowOptions: [AnyHashable : Any]! = [:])
```

## Parameters

- `dataSource`: The data source to use for the slideshow.
- `slideshowMode`: A constant that indicate what kind of items are in the slideshow—`IKSlideshowModeImages`, `IKSlideshowModePDF`, or `IKSlideshowModeQuickLook`. See [Slideshow Modes](../slideshow-modes.md).
- `slideshowOptions`: A dictionary of slideshow options. See [Slideshow Option Keys](../slideshow-option-keys.md).

## See Also

### Running and Stopping a Slideshow

- [stop(\_:)](stop%28__%29.md): Stops a slideshow.
- [autoPlayDelay](autoplaydelay.md): Controls the interval of time before a slideshow starts to play automatically.

# runSlideshowWithDataSource:inMode:options: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Runs a slideshow that contains the specified kind of items, provided from a data source.

## Declaration

```objectivec
- (void) runSlideshowWithDataSource:(id<IKSlideshowDataSource>) dataSource inMode:(NSString *) slideshowMode options:(NSDictionary *) slideshowOptions;
```

## Parameters

- `dataSource`: The data source to use for the slideshow.
- `slideshowMode`: A constant that indicate what kind of items are in the slideshow—`IKSlideshowModeImages`, `IKSlideshowModePDF`, or `IKSlideshowModeQuickLook`. See [Slideshow Modes](../slideshow-modes.md).
- `slideshowOptions`: A dictionary of slideshow options. See [Slideshow Option Keys](../slideshow-option-keys.md).

## See Also

### Running and Stopping a Slideshow

- [stopSlideshow:](stop%28__%29.md): Stops a slideshow.
- [autoPlayDelay](autoplaydelay.md): Controls the interval of time before a slideshow starts to play automatically.
