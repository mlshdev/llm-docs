> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportseventstatus/eventstatustext

# eventStatusText (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

One to three strings you use to convey event-related details in the Now Playing interface.

## Declaration

```swift
var eventStatusText: [String]? { get }
```

<a id="discussion"></a>

## Discussion

If the array contains more than three strings, CarPlay displays only the first three. If the sport has an event clock, CarPlay combines the clock information with the first string in this array before displaying it. In that situation, choose an initial string that combines well with the event. For example, specify a string with the current period of a basketball or hockey game.

## See Also

### Getting the event status

- [eventStatusImage](eventstatusimage.md): An image you use to convey event-related details in the Now Playing interface.
- [eventClock](eventclock.md): The clock information you provided for the event.

# eventStatusText (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

One to three strings you use to convey event-related details in the Now Playing interface.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * eventStatusText;
```

<a id="discussion"></a>

## Discussion

If the array contains more than three strings, CarPlay displays only the first three. If the sport has an event clock, CarPlay combines the clock information with the first string in this array before displaying it. In that situation, choose an initial string that combines well with the event. For example, specify a string with the current period of a basketball or hockey game.

## See Also

### Getting the event status

- [eventStatusImage](eventstatusimage.md): An image you use to convey event-related details in the Now Playing interface.
- [eventClock](eventclock.md): The clock information you provided for the event.
