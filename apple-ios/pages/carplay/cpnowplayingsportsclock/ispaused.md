> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingsportsclock/ispaused](https://developer.apple.com/documentation/carplay/cpnowplayingsportsclock/ispaused)

# isPaused (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Whether the clock should be paused, e.g. due to a stoppage in play.

## Declaration

```swift
var isPaused: Bool { get }
```

<a id="discussion"></a>

## Discussion

If YES, the clock will be paused at the specified value.

If NO, the clock will count up (or down).

# paused (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Whether the clock should be paused, e.g. due to a stoppage in play.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isPaused) BOOL paused;
```

<a id="discussion"></a>

## Discussion

If YES, the clock will be paused at the specified value.

If NO, the clock will count up (or down).
