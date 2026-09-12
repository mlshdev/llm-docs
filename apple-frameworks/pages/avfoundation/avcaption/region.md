> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/region](https://developer.apple.com/documentation/avfoundation/avcaption/region)

# region (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

The region in which the caption exists.

## Declaration

```swift
var region: AVCaptionRegion? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` when the underlying caption format doesn’t support or use regions.

# region (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

The region in which the caption exists.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVCaptionRegion * region;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` when the underlying caption format doesn’t support or use regions.
