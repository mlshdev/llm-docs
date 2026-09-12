> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikslideshow/stop(_:)](https://developer.apple.com/documentation/quartz/ikslideshow/stop(_:))

# stop(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Stops a slideshow.

## Declaration

```swift
func stop(_ sender: Any!)
```

## Parameters

- `sender`: The object sending the message to stop the slideshow.

<a id="Discussion"></a>

## Discussion

This method is invoked when the user clicks a button or issues a stop command.

## See Also

### Running and Stopping a Slideshow

- [run(with:inMode:options:)](run%28with_inmode_options_%29.md): Runs a slideshow that contains the specified kind of items, provided from a data source.
- [autoPlayDelay](autoplaydelay.md): Controls the interval of time before a slideshow starts to play automatically.

# stopSlideshow: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Stops a slideshow.

## Declaration

```objectivec
- (void) stopSlideshow:(id) sender;
```

## Parameters

- `sender`: The object sending the message to stop the slideshow.

<a id="Discussion"></a>

## Discussion

This method is invoked when the user clicks a button or issues a stop command.

## See Also

### Running and Stopping a Slideshow

- [runSlideshowWithDataSource:inMode:options:](run%28with_inmode_options_%29.md): Runs a slideshow that contains the specified kind of items, provided from a data source.
- [autoPlayDelay](autoplaydelay.md): Controls the interval of time before a slideshow starts to play automatically.
