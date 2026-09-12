> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemporaleventtrigger/datecomponentsrange](https://developer.apple.com/documentation/intents/intemporaleventtrigger/datecomponentsrange)

# dateComponentsRange (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The triggering time range for an event.

## Declaration

```swift
@NSCopying var dateComponentsRange: INDateComponentsRange { get }
```

<a id="Discussion"></a>

## Discussion

This property is set automatically at initialization time and can’t be changed later.

# dateComponentsRange (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The triggering time range for an event.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INDateComponentsRange * dateComponentsRange;
```

```objectivec
@property (atomic, copy, readonly) INDateComponentsRange * dateComponentsRange;
```

<a id="Discussion"></a>

## Discussion

This property is set automatically at initialization time and can’t be changed later.
