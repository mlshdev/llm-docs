> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arappclipcodeanchor/radius](https://developer.apple.com/documentation/arkit/arappclipcodeanchor/radius)

# radius (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+

The App Clip Code’s radius in meters.

## Declaration

```swift
var radius: Float { get }
```

<a id="Discussion"></a>

## Discussion

ARKit estimates the value of this property at runtime. As the user views an App Clip Code from different angles, ARKit refines its estimate of the true radius of the App Clip Code.

# radius (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+

The App Clip Code’s radius in meters.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) float radius;
```

<a id="Discussion"></a>

## Discussion

ARKit estimates the value of this property at runtime. As the user views an App Clip Code from different angles, ARKit refines its estimate of the true radius of the App Clip Code.
