> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screensaver/screensaverview/animationtimeinterval

# animationTimeInterval (Swift)

**Framework:** Screen Saver  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The time interval between animation frames.

## Declaration

```swift
var animationTimeInterval: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

If your screen saver has particular requirements for time between animation frames, call this method to set the animation rate to a reasonable value.

# animationTimeInterval (Objective-C)

**Framework:** Screen Saver  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The time interval between animation frames.

## Declaration

```objectivec
@property (atomic) NSTimeInterval animationTimeInterval;
```

<a id="Discussion"></a>

## Discussion

If your screen saver has particular requirements for time between animation frames, call this method to set the animation rate to a reasonable value.
