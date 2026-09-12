> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/canbegintrimming](https://developer.apple.com/documentation/avkit/avplayerview/canbegintrimming)

# canBeginTrimming (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that indicates whether the player view can begin trimming.

## Declaration

```swift
var canBeginTrimming: Bool { get }
```

## Mentioned In

- [Implementing Trimming in a macOS Player](../implementing-trimming-in-a-macos-player.md)

<a id="Discussion"></a>

## Discussion

Before calling [beginTrimming(completionHandler:)](begintrimming%28completionhandler_%29.md), check the value of this property to determine whether the player view and current media support trimming. This property value is `false` if the current controls style doesn’t support trimming, the media is content protected, or when playing HTTP Live Streaming media.

If you’re presenting a menu item to initiate trimming, a good place to perform this check is in the [validateUserInterfaceItem(\_:)](https://developer.apple.com/documentation/appkit/nsdocument/validateuserinterfaceitem%28_:%29) method of [NSDocument](https://developer.apple.com/documentation/appkit/nsdocument):

```swift
override func validateUserInterfaceItem(_ item: NSValidatedUserInterfaceItem) -> Bool {
    if item.action == #selector(beginTrimming) {
        return playerView.canBeginTrimming
    }
    return super.validateUserInterfaceItem(item)
}
```

## See Also

### Trimming media

- [beginTrimming(completionHandler:)](begintrimming%28completionhandler_%29.md): Puts the player view into trimming mode.
- [AVPlayerViewTrimResult](../avplayerviewtrimresult.md): Constants that specify an action a user takes when trimming media in a player view.

# canBeginTrimming (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that indicates whether the player view can begin trimming.

## Declaration

```objectivec
@property (readonly) BOOL canBeginTrimming;
```

## Mentioned In

- [Implementing Trimming in a macOS Player](../implementing-trimming-in-a-macos-player.md)

<a id="Discussion"></a>

## Discussion

Before calling [beginTrimmingWithCompletionHandler:](begintrimming%28completionhandler_%29.md), check the value of this property to determine whether the player view and current media support trimming. This property value is `false` if the current controls style doesn’t support trimming, the media is content protected, or when playing HTTP Live Streaming media.

If you’re presenting a menu item to initiate trimming, a good place to perform this check is in the [validateUserInterfaceItem:](https://developer.apple.com/documentation/appkit/nsdocument/validateuserinterfaceitem%28_:%29) method of [NSDocument](https://developer.apple.com/documentation/appkit/nsdocument):

```swift
override func validateUserInterfaceItem(_ item: NSValidatedUserInterfaceItem) -> Bool {
    if item.action == #selector(beginTrimming) {
        return playerView.canBeginTrimming
    }
    return super.validateUserInterfaceItem(item)
}
```

## See Also

### Trimming media

- [beginTrimmingWithCompletionHandler:](begintrimming%28completionhandler_%29.md): Puts the player view into trimming mode.
- [AVPlayerViewTrimResult](../avplayerviewtrimresult.md): Constants that specify an action a user takes when trimming media in a player view.
