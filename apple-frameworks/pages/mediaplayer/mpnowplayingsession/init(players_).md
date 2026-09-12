> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayingsession/init(players:)](https://developer.apple.com/documentation/mediaplayer/mpnowplayingsession/init(players:))

# init(players:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Now Playing session object.

## Declaration

```swift
init(players: [AVPlayer])
```

## Parameters

- `players`: An array of player objects. Passing `nil` or an empty array raises an error.

# initWithPlayers: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Now Playing session object.

## Declaration

```objectivec
- (instancetype) initWithPlayers:(NSArray<AVPlayer *> *) players;
```

## Parameters

- `players`: An array of player objects. Passing `nil` or an empty array raises an error.
