> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerviewcontroller/canbegintrimming

# canBeginTrimming (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether the current media supports trimming.

## Declaration

```swift
var canBeginTrimming: Bool { get }
```

## Mentioned In

- [Trimming and exporting media in visionOS](../trimming-and-exporting-media-in-visionos.md)

<a id="Discussion"></a>

## Discussion

Not all media supports trimming. For example, this property returns `false` for HTTP Live Streaming media or protected content.

Observe this property to determine when to change the enabled state of your app UI that initiates trimming.

## See Also

### Presenting the visionOS trimming UI

- [beginTrimming(completionHandler:)](begintrimming%28completionhandler_%29.md): Presents the system trimming interface controls inside the player view.

# canBeginTrimming (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether the current media supports trimming.

## Declaration

```objectivec
@property (readonly) BOOL canBeginTrimming;
```

## Mentioned In

- [Trimming and exporting media in visionOS](../trimming-and-exporting-media-in-visionos.md)

<a id="Discussion"></a>

## Discussion

Not all media supports trimming. For example, this property returns `false` for HTTP Live Streaming media or protected content.

Observe this property to determine when to change the enabled state of your app UI that initiates trimming.

## See Also

### Presenting the visionOS trimming UI

- [beginTrimmingWithCompletionHandler:](begintrimming%28completionhandler_%29.md): Presents the system trimming interface controls inside the player view.
