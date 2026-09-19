> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikslideshow/autoplaydelay

# autoPlayDelay (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

Controls the interval of time before a slideshow starts to play automatically.

## Declaration

```swift
var autoPlayDelay: TimeInterval { get set }
```

## See Also

### Running and Stopping a Slideshow

- [run(with:inMode:options:)](run%28with_inmode_options_%29.md): Runs a slideshow that contains the specified kind of items, provided from a data source.
- [stop(\_:)](stop%28__%29.md): Stops a slideshow.

# autoPlayDelay (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

Controls the interval of time before a slideshow starts to play automatically.

## Declaration

```objectivec
@property NSTimeInterval autoPlayDelay;
```

## See Also

### Running and Stopping a Slideshow

- [runSlideshowWithDataSource:inMode:options:](run%28with_inmode_options_%29.md): Runs a slideshow that contains the specified kind of items, provided from a data source.
- [stopSlideshow:](stop%28__%29.md): Stops a slideshow.
