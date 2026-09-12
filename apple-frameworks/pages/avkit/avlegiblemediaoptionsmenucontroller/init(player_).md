> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avlegiblemediaoptionsmenucontroller/init(player:)](https://developer.apple.com/documentation/avkit/avlegiblemediaoptionsmenucontroller/init(player:))

# init(player:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
init(player: AVPlayer?)
```

## Parameters

- `player`: The AVPlayer to build menus from, or nil for non-track-specific options only

<a id="discussion"></a>

## Discussion

Creates an AVLegibleMediaOptionsMenuController with an optional player

When player is non-nil, both media tracks and caption appearance options will be included, otherwise, only caption appearance options.

# initWithPlayer: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
- (instancetype) initWithPlayer:(AVPlayer *) player;
```

## Parameters

- `player`: The AVPlayer to build menus from, or nil for non-track-specific options only

<a id="discussion"></a>

## Discussion

Creates an AVLegibleMediaOptionsMenuController with an optional player

When player is non-nil, both media tracks and caption appearance options will be included, otherwise, only caption appearance options.
