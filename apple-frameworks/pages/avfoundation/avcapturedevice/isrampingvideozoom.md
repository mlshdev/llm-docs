> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/isrampingvideozoom

# isRampingVideoZoom (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether a zoom transition is in progress.

## Declaration

```swift
var isRampingVideoZoom: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Key-value observe this property to determine when a zoom transitions begins or ends.

# rampingVideoZoom (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether a zoom transition is in progress.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRampingVideoZoom) BOOL rampingVideoZoom;
```

<a id="Discussion"></a>

## Discussion

Key-value observe this property to determine when a zoom transitions begins or ends.
