> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportseventstatus/eventclock

# eventClock (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The clock information you provided for the event.

## Declaration

```swift
@NSCopying var eventClock: CPNowPlayingSportsClock? { get }
```

<a id="discussion"></a>

## Discussion

If you specify clock information for the event, CarPlay combines the current clock time with the first string from the [eventStatusText](eventstatustext.md) property.

CarPlay increments and decrements the clock value once a second. You don’t have to update the clock information manually. However, CarPlay doesn’t make the incremented or decremented value available to your app. Initialize new [CPNowPlayingSportsClock](../cpnowplayingsportsclock.md) objects from actual game data when a game pauses or resumes to ensure the content synchronizes.

## See Also

### Getting the event status

- [eventStatusText](eventstatustext.md): One to three strings you use to convey event-related details in the Now Playing interface.
- [eventStatusImage](eventstatusimage.md): An image you use to convey event-related details in the Now Playing interface.

# eventClock (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The clock information you provided for the event.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CPNowPlayingSportsClock * eventClock;
```

<a id="discussion"></a>

## Discussion

If you specify clock information for the event, CarPlay combines the current clock time with the first string from the [eventStatusText](eventstatustext.md) property.

CarPlay increments and decrements the clock value once a second. You don’t have to update the clock information manually. However, CarPlay doesn’t make the incremented or decremented value available to your app. Initialize new [CPNowPlayingSportsClock](../cpnowplayingsportsclock.md) objects from actual game data when a game pauses or resumes to ensure the content synchronizes.

## See Also

### Getting the event status

- [eventStatusText](eventstatustext.md): One to three strings you use to convey event-related details in the Now Playing interface.
- [eventStatusImage](eventstatusimage.md): An image you use to convey event-related details in the Now Playing interface.
