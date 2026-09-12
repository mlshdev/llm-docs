> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auheadtrackingbinauralrenderer/isheadtracking](https://developer.apple.com/documentation/audiotoolbox/auheadtrackingbinauralrenderer/isheadtracking)

# isHeadTracking (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates whether the host currently has enabled head tracking for this spatial Audio Unit.

## Declaration

```swift
var isHeadTracking: Bool { get }
```

<a id="discussion"></a>

## Discussion

The host sets this property when the user enables or disables head tracking. When YES, the spatial Audio Unit should use head tracking data to adjust spatialization. When NO, the host has disabled head tracking.

The Audio Unit should monitor this property to detect changes in head tracking state.

This property supports Key-Value Observing (KVO).

# headTracking (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Indicates whether the host currently has enabled head tracking for this spatial Audio Unit.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isHeadTracking) BOOL headTracking;
```

<a id="discussion"></a>

## Discussion

The host sets this property when the user enables or disables head tracking. When YES, the spatial Audio Unit should use head tracking data to adjust spatialization. When NO, the host has disabled head tracking.

The Audio Unit should monitor this property to detect changes in head tracking state.

This property supports Key-Value Observing (KVO).
