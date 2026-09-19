> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/medialibrary/mlmediasource/rootmediagroup

# rootMediaGroup (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The base media group in the media source that contains all other groups within the source as descendant elements.

## Declaration

```swift
var rootMediaGroup: MLMediaGroup? { get }
```

<a id="Discussion"></a>

## Discussion

This accessor property is nonblocking. If there is no data yet, it returns `nil` and automatically triggers an internal asynchronous request. When data arrives, a KVO notification is sent via the main thread.

# rootMediaGroup (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The base media group in the media source that contains all other groups within the source as descendant elements.

## Declaration

```objectivec
@property (retain, readonly, nullable) MLMediaGroup * rootMediaGroup;
```

<a id="Discussion"></a>

## Discussion

This accessor property is nonblocking. If there is no data yet, it returns `nil` and automatically triggers an internal asynchronous request. When data arrives, a KVO notification is sent via the main thread.
