> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpnowplayingsession/delegate

# delegate (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

The Now Playing session’s delegate object.

## Declaration

```swift
weak var delegate: (any MPNowPlayingSessionDelegate)? { get set }
```

## See Also

### Accessing the delegate object

- [MPNowPlayingSessionDelegate](../mpnowplayingsessiondelegate.md): A protocol that defines the delegate interface for a Now Playing session.

# delegate (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

The Now Playing session’s delegate object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MPNowPlayingSessionDelegate> delegate;
```

## See Also

### Accessing the delegate object

- [MPNowPlayingSessionDelegate](../mpnowplayingsessiondelegate.md): A protocol that defines the delegate interface for a Now Playing session.
