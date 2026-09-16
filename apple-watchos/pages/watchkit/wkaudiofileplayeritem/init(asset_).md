> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkaudiofileplayeritem/init(asset:)

# init(asset:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Creates and returns a player item for the specified audio file asset.

## Declaration

```swift
init(asset: WKAudioFileAsset)
```

## Parameters

- `asset`: The audio file asset to be played.

<a id="return-value"></a>

## Return Value

An initialized player item.

# playerItemWithAsset: (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Creates and returns a player item for the specified audio file asset.

## Declaration

```objectivec
+ (WKAudioFilePlayerItem *) playerItemWithAsset:(WKAudioFileAsset *) asset;
```

## Parameters

- `asset`: The audio file asset to be played.

<a id="return-value"></a>

## Return Value

An initialized player item.
