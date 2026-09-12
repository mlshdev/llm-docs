> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/primaryitem](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/primaryitem)

# primaryItem (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The player item that represents the primary content.

## Declaration

```swift
weak var primaryItem: AVPlayerItem? { get }
```

<a id="Discussion"></a>

## Discussion

The item must contain an [AVAsset](../avasset.md) that provides intrinsic mappings from its timeline to realtime dates.

## See Also

### Accessing player items

- [templateItems](templateitems.md): An array of player item configurations to use as templates for player items that play interstitial content.

# primaryItem (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The player item that represents the primary content.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) AVPlayerItem * primaryItem;
```

<a id="Discussion"></a>

## Discussion

The item must contain an [AVAsset](../avasset.md) that provides intrinsic mappings from its timeline to realtime dates.

## See Also

### Accessing player items

- [templateItems](templateitems.md): An array of player item configurations to use as templates for player items that play interstitial content.
