> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingsportsclock/init(timeremaining:paused:)](https://developer.apple.com/documentation/carplay/cpnowplayingsportsclock/init(timeremaining:paused:))

# init(timeRemaining:paused:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Represents an amount of time remaining in the event, or play period of the event (quarter/inning/period).

## Declaration

```swift
init(timeRemaining: TimeInterval, paused: Bool)
```

<a id="discussion"></a>

## Discussion

When displayed on the now playing screen, the clock will count DOWN.

# initWithTimeRemaining:paused: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Represents an amount of time remaining in the event, or play period of the event (quarter/inning/period).

## Declaration

```objectivec
- (instancetype) initWithTimeRemaining:(NSTimeInterval) timeRemaining paused:(BOOL) paused;
```

<a id="discussion"></a>

## Discussion

When displayed on the now playing screen, the clock will count DOWN.
