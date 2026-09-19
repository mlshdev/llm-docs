> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsanimation/progressmarkuserinfokey

# progressMarkUserInfoKey (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

## Declaration

```swift
class let progressMarkUserInfoKey: String
```

<a id="Discussion"></a>

## Discussion

Contains the value of an [NSAnimation.Progress](progress.md) as an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) instance that indicates the current animation progress. The value will be between `0.0` and `1.0`.

# NSAnimationProgressMark (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

## Declaration

```objectivec
extern NSString * NSAnimationProgressMark;
```

<a id="Discussion"></a>

## Discussion

Contains the value of an [NSAnimationProgress](progress.md) as an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) instance that indicates the current animation progress. The value will be between `0.0` and `1.0`.
