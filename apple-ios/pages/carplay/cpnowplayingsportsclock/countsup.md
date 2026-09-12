> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingsportsclock/countsup](https://developer.apple.com/documentation/carplay/cpnowplayingsportsclock/countsup)

# countsUp (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

If true, the timer is counting UP, so as to indicate an amount of time elapsed so far in this event.

## Declaration

```swift
var countsUp: Bool { get }
```

<a id="discussion"></a>

## Discussion

If false, the timer is counting DOWN, so as to indicate an amount of time remaining in the event, or a play period of the event (quarter/inning/period).

# countsUp (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

If true, the timer is counting UP, so as to indicate an amount of time elapsed so far in this event.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL countsUp;
```

<a id="discussion"></a>

## Discussion

If false, the timer is counting DOWN, so as to indicate an amount of time remaining in the event, or a play period of the event (quarter/inning/period).
