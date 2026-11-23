> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsclock/init(elapsedtime:paused:)

# init(elapsedTime:paused:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates a clock that counts up to measure the elapsed time from the specified value.

## Declaration

```swift
init(elapsedTime: TimeInterval, paused: Bool)
```

## Parameters

- `elapsedTime`: The number of elapsed seconds in the match. Specify `0` to represent the start of the match.
- `paused`: `true` to prevent CarPlay from incrementing the time value automatically, or `false` to start counting up.

<a id="discussion"></a>

## Discussion

Use this method for sports events in which the game clock counts up from `0`. After updating the Now Playing interface with this information, CarPlay starts the clock if the `paused` parameter is `false`.

## See Also

### Creating a sports mode type

- [init(timeRemaining:paused:)](init%28timeremaining_paused_%29.md): Creates a clock that counts down from the specified value.
- [init(coder:)](init%28coder_%29.md)

# initWithElapsedTime:paused: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates a clock that counts up to measure the elapsed time from the specified value.

## Declaration

```objectivec
- (instancetype) initWithElapsedTime:(NSTimeInterval) elapsedTime paused:(BOOL) paused;
```

## Parameters

- `elapsedTime`: The number of elapsed seconds in the match. Specify `0` to represent the start of the match.
- `paused`: `true` to prevent CarPlay from incrementing the time value automatically, or `false` to start counting up.

<a id="discussion"></a>

## Discussion

Use this method for sports events in which the game clock counts up from `0`. After updating the Now Playing interface with this information, CarPlay starts the clock if the `paused` parameter is `false`.

## See Also

### Creating a sports mode type

- [initWithTimeRemaining:paused:](init%28timeremaining_paused_%29.md): Creates a clock that counts down from the specified value.
