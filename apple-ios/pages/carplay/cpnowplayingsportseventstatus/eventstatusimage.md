> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportseventstatus/eventstatusimage

# eventStatusImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

An image you use to convey event-related details in the Now Playing interface.

## Declaration

```swift
@NSCopying var eventStatusImage: UIImage? { get }
```

<a id="discussion"></a>

## Discussion

CarPlay displays this image above the strings in the `eventStatusText` property. Use the image to convey information graphically. For example, you might use the image to show the positions of runners in a baseball game. If the property is `nil`, CarPlay doesn’t display an image.

## See Also

### Getting the event status

- [eventStatusText](eventstatustext.md): One to three strings you use to convey event-related details in the Now Playing interface.
- [eventClock](eventclock.md): The clock information you provided for the event.

# eventStatusImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

An image you use to convey event-related details in the Now Playing interface.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UIImage * eventStatusImage;
```

<a id="discussion"></a>

## Discussion

CarPlay displays this image above the strings in the `eventStatusText` property. Use the image to convey information graphically. For example, you might use the image to show the positions of runners in a baseball game. If the property is `nil`, CarPlay doesn’t display an image.

## See Also

### Getting the event status

- [eventStatusText](eventstatustext.md): One to three strings you use to convey event-related details in the Now Playing interface.
- [eventClock](eventclock.md): The clock information you provided for the event.
