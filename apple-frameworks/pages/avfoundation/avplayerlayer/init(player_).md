> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlayer/init(player:)](https://developer.apple.com/documentation/avfoundation/avplayerlayer/init(player:))

# init(player:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates a layer object to present the visual contents of a player’s current item.

## Declaration

```swift
init(player: AVPlayer?)
```

## Parameters

- `player`: The player whose visual contents the layer presents.

<a id="return-value"></a>

## Return Value

A layer that displays the visual output of the associated player.

<a id="Discussion"></a>

## Discussion

You may create an arbitrary number of layers for the same player object.

# playerLayerWithPlayer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates a layer object to present the visual contents of a player’s current item.

## Declaration

```objectivec
+ (AVPlayerLayer *) playerLayerWithPlayer:(AVPlayer *) player;
```

## Parameters

- `player`: The player whose visual contents the layer presents.

<a id="return-value"></a>

## Return Value

A layer that displays the visual output of the associated player.

<a id="Discussion"></a>

## Discussion

You may create an arbitrary number of layers for the same player object.
