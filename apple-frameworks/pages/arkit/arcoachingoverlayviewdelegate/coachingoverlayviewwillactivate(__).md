> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arcoachingoverlayviewdelegate/coachingoverlayviewwillactivate(_:)

# coachingOverlayViewWillActivate(\_:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Tells you when the coaching overlay view activates.

## Declaration

```swift
optional func coachingOverlayViewWillActivate(_ coachingOverlayView: ARCoachingOverlayView)
```

<a id="Discussion"></a>

## Discussion

Override this function to hide your app’s UI while the coaching overlay is active.

## See Also

### Enabling Coaching

- [coachingOverlayViewDidDeactivate(\_:)](coachingoverlayviewdiddeactivate%28__%29.md): Tells you when the coaching experience is completely deactivated.

# coachingOverlayViewWillActivate: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Tells you when the coaching overlay view activates.

## Declaration

```objectivec
- (void) coachingOverlayViewWillActivate:(ARCoachingOverlayView *) coachingOverlayView;
```

<a id="Discussion"></a>

## Discussion

Override this function to hide your app’s UI while the coaching overlay is active.

## See Also

### Enabling Coaching

- [coachingOverlayViewDidDeactivate:](coachingoverlayviewdiddeactivate%28__%29.md): Tells you when the coaching experience is completely deactivated.
