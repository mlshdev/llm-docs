> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpplaybackconfiguration/playbackaction

# playbackAction (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The action to perform on the media item when someone selects it.

## Declaration

```swift
var playbackAction: CPPlaybackConfiguration.Action { get }
```

<a id="discussion"></a>

## Discussion

When someone selects an item, this property tells the system whether to begin playing the item. You can direct the system to play or pause the item, play the item from the beginning, or do nothing.

# playbackAction (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The action to perform on the media item when someone selects it.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CPPlaybackAction playbackAction;
```

<a id="discussion"></a>

## Discussion

When someone selects an item, this property tells the system whether to begin playing the item. You can direct the system to play or pause the item, play the item from the beginning, or do nothing.
