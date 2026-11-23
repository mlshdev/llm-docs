> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsclock/countsup

# countsUp (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A Boolean value that indicates whether the event clock counts up.

## Declaration

```swift
var countsUp: Bool { get }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, the clock counts up from [timeValue](timevalue.md) to show the elapsed time of the match or current period. When the value of this property is `false`, the clock counts down from the initial time to show the time remaining in the sports event or in the current period. The clock starts counting from the value you provide at initialization time. If the clock counts down, CarPlay automatically stops the countdown when the number of seconds reaches `0`. CarPlay doesn’t stop a clock that counts upward.

## See Also

### Getting the clock attributes

- [timeValue](timevalue.md): The time value you specify at initialization.
- [isPaused](ispaused.md): A Boolean value that indicates whether the clock is paused.

# countsUp (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A Boolean value that indicates whether the event clock counts up.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL countsUp;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, the clock counts up from [timeValue](timevalue.md) to show the elapsed time of the match or current period. When the value of this property is `false`, the clock counts down from the initial time to show the time remaining in the sports event or in the current period. The clock starts counting from the value you provide at initialization time. If the clock counts down, CarPlay automatically stops the countdown when the number of seconds reaches `0`. CarPlay doesn’t stop a clock that counts upward.

## See Also

### Getting the clock attributes

- [timeValue](timevalue.md): The time value you specify at initialization.
- [paused](ispaused.md): A Boolean value that indicates whether the clock is paused.
