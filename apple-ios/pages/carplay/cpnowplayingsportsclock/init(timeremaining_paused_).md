> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsclock/init(timeremaining:paused:)

# init(timeRemaining:paused:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates a clock that counts down from the specified value.

## Declaration

```swift
init(timeRemaining: TimeInterval, paused: Bool)
```

## Parameters

- `timeRemaining`: The number of seconds remaining in the match or period.
- `paused`: `true` to prevent CarPlay from decrementing the time value automatically, or `false` to start counting down.

<a id="discussion"></a>

## Discussion

Use this method for sports events in which the game clock counts down for the current period or the overall match. After updating the Now Playing interface with this information, CarPlay starts the clock if the `paused` parameter is `false`.

## See Also

### Creating a sports mode type

- [init(elapsedTime:paused:)](init%28elapsedtime_paused_%29.md): Creates a clock that counts up to measure the elapsed time from the specified value.
- [init(coder:)](init%28coder_%29.md)

# initWithTimeRemaining:paused: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates a clock that counts down from the specified value.

## Declaration

```objectivec
- (instancetype) initWithTimeRemaining:(NSTimeInterval) timeRemaining paused:(BOOL) paused;
```

## Parameters

- `timeRemaining`: The number of seconds remaining in the match or period.
- `paused`: `true` to prevent CarPlay from decrementing the time value automatically, or `false` to start counting down.

<a id="discussion"></a>

## Discussion

Use this method for sports events in which the game clock counts down for the current period or the overall match. After updating the Now Playing interface with this information, CarPlay starts the clock if the `paused` parameter is `false`.

## See Also

### Creating a sports mode type

- [initWithElapsedTime:paused:](init%28elapsedtime_paused_%29.md): Creates a clock that counts up to measure the elapsed time from the specified value.
