> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerinteractivetransitioning/completionspeed](https://developer.apple.com/documentation/uikit/uiviewcontrollerinteractivetransitioning/completionspeed)

# completionSpeed (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+

Called when the system needs the speed at which to complete an interactive transition, after the interactive portion is finished.

## Declaration

```swift
optional var completionSpeed: CGFloat { get }
```

<a id="return-value"></a>

## Return Value

Default value is `1.0`, which corresponds to the total (noninteractive) transition duration scaled by the percentage of the transition remaining. Value must be greater than `0.0`.

## See Also

### Providing a transition’s completion characteristics

- [completionCurve](completioncurve.md): Called when the system needs the animation completion curve for an interactive view controller transition.

# completionSpeed (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Called when the system needs the speed at which to complete an interactive transition, after the interactive portion is finished.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat completionSpeed;
```

<a id="return-value"></a>

## Return Value

Default value is `1.0`, which corresponds to the total (noninteractive) transition duration scaled by the percentage of the transition remaining. Value must be greater than `0.0`.

## See Also

### Providing a transition’s completion characteristics

- [completionCurve](completioncurve.md): Called when the system needs the animation completion curve for an interactive view controller transition.
