> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmfalldetectionevent/date](https://developer.apple.com/documentation/coremotion/cmfalldetectionevent/date)

# date (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** watchOS 7.2+

The event’s time and date.

## Declaration

```swift
var date: Date { get }
```

<a id="Discussion"></a>

## Discussion

Use the `date` to identify a fall event. The system guarantees fall events have different `date` values.

# date (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** watchOS 7.2+

The event’s time and date.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * date;
```

<a id="Discussion"></a>

## Discussion

Use the `date` to identify a fall event. The system guarantees fall events have different `date` values.
