> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayviewdelegate/coachingoverlayviewdidrequestsessionreset(_:)](https://developer.apple.com/documentation/arkit/arcoachingoverlayviewdelegate/coachingoverlayviewdidrequestsessionreset(_:))

# coachingOverlayViewDidRequestSessionReset(\_:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Tells you when the user taps the coaching overlay view’s Start Over button while the session is relocalizing.

## Declaration

```swift
optional func coachingOverlayViewDidRequestSessionReset(_ coachingOverlayView: ARCoachingOverlayView)
```

<a id="Discussion"></a>

## Discussion

Implement this function to do the actions your app requires to restart the AR experience. For example, you might hide custom relocalization UI, deallocate resources, or restore virtual content to a starting location.

If you don’t implement this function, the coaching overlay resets the session for you––equivalent to calling [run(\_:options:)](../arsession/run%28__options_%29.md) with the [resetTracking](../arsession/runoptions/resettracking.md) option––when the user taps Start Over.

# coachingOverlayViewDidRequestSessionReset: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Tells you when the user taps the coaching overlay view’s Start Over button while the session is relocalizing.

## Declaration

```objectivec
- (void) coachingOverlayViewDidRequestSessionReset:(ARCoachingOverlayView *) coachingOverlayView;
```

<a id="Discussion"></a>

## Discussion

Implement this function to do the actions your app requires to restart the AR experience. For example, you might hide custom relocalization UI, deallocate resources, or restore virtual content to a starting location.

If you don’t implement this function, the coaching overlay resets the session for you––equivalent to calling [runWithConfiguration:options:](../arsession/run%28__options_%29.md) with the [ARSessionRunOptionResetTracking](../arsession/runoptions/resettracking.md) option––when the user taps Start Over.
