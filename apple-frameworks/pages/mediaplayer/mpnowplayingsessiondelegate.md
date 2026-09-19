> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpnowplayingsessiondelegate

# MPNowPlayingSessionDelegate (Swift)

**Framework:** Media Player  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

A protocol that defines the delegate interface for a Now Playing session.

## Declaration

```swift
protocol MPNowPlayingSessionDelegate : NSObjectProtocol
```

## Topics

### Responding to state changes

- [nowPlayingSessionDidChangeActive(\_:)](mpnowplayingsessiondelegate/nowplayingsessiondidchangeactive%28__%29.md): Tells the delegate that the session changed its active status.
- [nowPlayingSessionDidChangeCanBecomeActive(\_:)](mpnowplayingsessiondelegate/nowplayingsessiondidchangecanbecomeactive%28__%29.md): Tells the delegate that the session is eligible to become active.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing the delegate object

- [delegate](mpnowplayingsession/delegate.md): The Now Playing session’s delegate object.

# MPNowPlayingSessionDelegate (Objective-C)

**Framework:** Media Player  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

A protocol that defines the delegate interface for a Now Playing session.

## Declaration

```objectivec
@protocol MPNowPlayingSessionDelegate <NSObject>
```

## Topics

### Responding to state changes

- [nowPlayingSessionDidChangeActive:](mpnowplayingsessiondelegate/nowplayingsessiondidchangeactive%28__%29.md): Tells the delegate that the session changed its active status.
- [nowPlayingSessionDidChangeCanBecomeActive:](mpnowplayingsessiondelegate/nowplayingsessiondidchangecanbecomeactive%28__%29.md): Tells the delegate that the session is eligible to become active.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing the delegate object

- [delegate](mpnowplayingsession/delegate.md): The Now Playing session’s delegate object.
