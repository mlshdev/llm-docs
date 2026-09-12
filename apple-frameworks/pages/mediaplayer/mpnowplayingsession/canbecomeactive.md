> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayingsession/canbecomeactive](https://developer.apple.com/documentation/mediaplayer/mpnowplayingsession/canbecomeactive)

# canBecomeActive (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the session can become the app’s active Now Playing session.

## Declaration

```swift
var canBecomeActive: Bool { get }
```

## See Also

### Managing the active state

- [isActive](isactive.md): A Boolean value that indicates whether the session is the app’s active Now Playing session.
- [becomeActiveIfPossible(completion:)](becomeactiveifpossible%28completion_%29.md): Tells the system to make the session the active Now Playing session if possible.

# canBecomeActive (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the session can become the app’s active Now Playing session.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canBecomeActive;
```

## See Also

### Managing the active state

- [active](isactive.md): A Boolean value that indicates whether the session is the app’s active Now Playing session.
- [becomeActiveIfPossibleWithCompletion:](becomeactiveifpossible%28completion_%29.md): Tells the system to make the session the active Now Playing session if possible.
