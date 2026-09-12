> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingsportsclock/init(elapsedtime:paused:)](https://developer.apple.com/documentation/carplay/cpnowplayingsportsclock/init(elapsedtime:paused:))

# init(elapsedTime:paused:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Represents a duration of time that has elapsed so far in this event, or play period of the event (quarter/inning/period).

## Declaration

```swift
init(elapsedTime: TimeInterval, paused: Bool)
```

<a id="discussion"></a>

## Discussion

When displayed on the now playing screen, the clock will count UP.

# initWithElapsedTime:paused: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Represents a duration of time that has elapsed so far in this event, or play period of the event (quarter/inning/period).

## Declaration

```objectivec
- (instancetype) initWithElapsedTime:(NSTimeInterval) elapsedTime paused:(BOOL) paused;
```

<a id="discussion"></a>

## Discussion

When displayed on the now playing screen, the clock will count UP.
