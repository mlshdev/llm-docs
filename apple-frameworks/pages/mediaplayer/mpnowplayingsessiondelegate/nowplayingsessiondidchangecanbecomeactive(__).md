> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayingsessiondelegate/nowplayingsessiondidchangecanbecomeactive(_:)](https://developer.apple.com/documentation/mediaplayer/mpnowplayingsessiondelegate/nowplayingsessiondidchangecanbecomeactive(_:))

# nowPlayingSessionDidChangeCanBecomeActive(\_:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the session is eligible to become active.

## Declaration

```swift
optional func nowPlayingSessionDidChangeCanBecomeActive(_ nowPlayingSession: MPNowPlayingSession)
```

## Parameters

- `nowPlayingSession`: The Now Playing session that changed.

## See Also

### Related Documentation

- [canBecomeActive](../mpnowplayingsession/canbecomeactive.md): A Boolean value that indicates whether the session can become the app’s active Now Playing session.

### Responding to state changes

- [nowPlayingSessionDidChangeActive(\_:)](nowplayingsessiondidchangeactive%28__%29.md): Tells the delegate that the session changed its active status.

# nowPlayingSessionDidChangeCanBecomeActive: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the session is eligible to become active.

## Declaration

```objectivec
- (void) nowPlayingSessionDidChangeCanBecomeActive:(MPNowPlayingSession *) nowPlayingSession;
```

## Parameters

- `nowPlayingSession`: The Now Playing session that changed.

## See Also

### Related Documentation

- [canBecomeActive](../mpnowplayingsession/canbecomeactive.md): A Boolean value that indicates whether the session can become the app’s active Now Playing session.

### Responding to state changes

- [nowPlayingSessionDidChangeActive:](nowplayingsessiondidchangeactive%28__%29.md): Tells the delegate that the session changed its active status.
