> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/fseventstreameventid](https://developer.apple.com/documentation/coreservices/fseventstreameventid)

# FSEventStreamEventId (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```swift
typealias FSEventStreamEventId = UInt64
```

<a id="discussion"></a>

## Discussion

Event IDs that can be passed to the FSEventStreamCreate...() functions and FSEventStreamCallback(). They are monotonically increasing per system, even across reboots and drives coming and going. They bear no relation to any particular clock or timebase.

# FSEventStreamEventId (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
typedef UInt64 FSEventStreamEventId;
```

<a id="discussion"></a>

## Discussion

Event IDs that can be passed to the FSEventStreamCreate...() functions and FSEventStreamCallback(). They are monotonically increasing per system, even across reboots and drives coming and going. They bear no relation to any particular clock or timebase.
