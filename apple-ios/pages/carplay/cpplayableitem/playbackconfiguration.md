> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpplayableitem/playbackconfiguration

# playbackConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The media-related metadata to associate with the item.

## Declaration

```swift
@NSCopying var playbackConfiguration: CPPlaybackConfiguration? { get set }
```

<a id="discussion"></a>

## Discussion

Assign a value to this property to associate media-related metadata with an item. The default value of this property is `nil`.

# playbackConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The media-related metadata to associate with the item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CPPlaybackConfiguration * playbackConfiguration;
```

<a id="discussion"></a>

## Discussion

Assign a value to this property to associate media-related metadata with an item. The default value of this property is `nil`.
