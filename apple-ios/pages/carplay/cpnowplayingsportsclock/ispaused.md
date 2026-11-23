> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsclock/ispaused

# isPaused (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A Boolean value that indicates whether the clock is paused.

## Declaration

```swift
var isPaused: Bool { get }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, CarPlay holds the clock at the value in [timeValue](timevalue.md) and doesn’t increment or decrement it. When the value of this property is `false`, CarPlay updates the clock every second, counting up or down based on the clock’s configuration.

## See Also

### Getting the clock attributes

- [timeValue](timevalue.md): The time value you specify at initialization.
- [countsUp](countsup.md): A Boolean value that indicates whether the event clock counts up.

# paused (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A Boolean value that indicates whether the clock is paused.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isPaused) BOOL paused;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, CarPlay holds the clock at the value in [timeValue](timevalue.md) and doesn’t increment or decrement it. When the value of this property is `false`, CarPlay updates the clock every second, counting up or down based on the clock’s configuration.

## See Also

### Getting the clock attributes

- [timeValue](timevalue.md): The time value you specify at initialization.
- [countsUp](countsup.md): A Boolean value that indicates whether the event clock counts up.
