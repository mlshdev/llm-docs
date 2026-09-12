> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayingsessiondelegate/nowplayingsessiondidchangeactive(_:)](https://developer.apple.com/documentation/mediaplayer/mpnowplayingsessiondelegate/nowplayingsessiondidchangeactive(_:))

# nowPlayingSessionDidChangeActive(\_:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the session changed its active status.

## Declaration

```swift
optional func nowPlayingSessionDidChangeActive(_ nowPlayingSession: MPNowPlayingSession)
```

## Parameters

- `nowPlayingSession`: The Now Playing session that changed.

## See Also

### Related Documentation

- [isActive](../mpnowplayingsession/isactive.md): A Boolean value that indicates whether the session is the app’s active Now Playing session.

### Responding to state changes

- [nowPlayingSessionDidChangeCanBecomeActive(\_:)](nowplayingsessiondidchangecanbecomeactive%28__%29.md): Tells the delegate that the session is eligible to become active.

# nowPlayingSessionDidChangeActive: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the session changed its active status.

## Declaration

```objectivec
- (void) nowPlayingSessionDidChangeActive:(MPNowPlayingSession *) nowPlayingSession;
```

## Parameters

- `nowPlayingSession`: The Now Playing session that changed.

## See Also

### Related Documentation

- [active](../mpnowplayingsession/isactive.md): A Boolean value that indicates whether the session is the app’s active Now Playing session.

### Responding to state changes

- [nowPlayingSessionDidChangeCanBecomeActive:](nowplayingsessiondidchangecanbecomeactive%28__%29.md): Tells the delegate that the session is eligible to become active.
