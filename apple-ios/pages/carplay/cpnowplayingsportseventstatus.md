> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingsportseventstatus](https://developer.apple.com/documentation/carplay/cpnowplayingsportseventstatus)

# CPNowPlayingSportsEventStatus (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A representation of the status of a sporting event.

## Declaration

```swift
@MainActor class CPNowPlayingSportsEventStatus
```

## Topics

### Initializers

- [init(coder:)](cpnowplayingsportseventstatus/init%28coder_%29.md)
- [init(eventStatusText:eventStatusImage:eventClock:)](cpnowplayingsportseventstatus/init%28eventstatustext_eventstatusimage_eventclock_%29.md): Initialize an event status with optional event status text, an optional event status image, and an optional event clock.

### Instance Properties

- [eventClock](cpnowplayingsportseventstatus/eventclock.md): The event timer, if it applies to this event. See @c CPNowPlayingSportsClock.
- [eventStatusImage](cpnowplayingsportseventstatus/eventstatusimage.md): An optional event status image for this event, if it applies to this event. For example, a baseball game could display a representation of the bases and outs, indicating how many bases are loaded and the number of outs in the current inning.
- [eventStatusText](cpnowplayingsportseventstatus/eventstatustext.md): Up to three separate strings for event status may be displayed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CPNowPlayingSportsEventStatus (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A representation of the status of a sporting event.

## Declaration

```objectivec
@interface CPNowPlayingSportsEventStatus : NSObject
```

## Topics

### Instance Properties

- [eventClock](cpnowplayingsportseventstatus/eventclock.md): The event timer, if it applies to this event. See @c CPNowPlayingSportsClock.
- [eventStatusImage](cpnowplayingsportseventstatus/eventstatusimage.md): An optional event status image for this event, if it applies to this event. For example, a baseball game could display a representation of the bases and outs, indicating how many bases are loaded and the number of outs in the current inning.
- [eventStatusText](cpnowplayingsportseventstatus/eventstatustext.md): Up to three separate strings for event status may be displayed.

### Instance Methods

- [initWithEventStatusText:eventStatusImage:eventClock:](cpnowplayingsportseventstatus/init%28eventstatustext_eventstatusimage_eventclock_%29.md): Initialize an event status with optional event status text, an optional event status image, and an optional event clock.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
