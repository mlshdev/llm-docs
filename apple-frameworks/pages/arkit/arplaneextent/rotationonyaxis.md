> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneextent/rotationonyaxis](https://developer.apple.com/documentation/arkit/arplaneextent/rotationonyaxis)

# rotationOnYAxis (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

A radian value that indicates a plane’s y-axis orientation.

## Declaration

```swift
var rotationOnYAxis: Float { get }
```

<a id="Discussion"></a>

## Discussion

As the session runs, the framework may update the plane’s y-rotation to better fit its rectangular area in the environment. In iOS 15 and earlier, the framework rotates the plane anchor according to that angle. In iOS 16, the framework doesn’t rotate the anchor automatically and its transform matrix remains unchanged. Instead, the framework exposes the angle in [rotationOnYAxis](rotationonyaxis.md) that you apply to any plane extent geometry in your app.

> **Important**

>  Apps that run on iOS 16 with a deployment target less than iOS 16 preserve the prior y-axis rotation behavior.

# rotationOnYAxis (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

A radian value that indicates a plane’s y-axis orientation.

## Declaration

```objectivec
@property (nonatomic, readonly) float rotationOnYAxis;
```

<a id="Discussion"></a>

## Discussion

As the session runs, the framework may update the plane’s y-rotation to better fit its rectangular area in the environment. In iOS 15 and earlier, the framework rotates the plane anchor according to that angle. In iOS 16, the framework doesn’t rotate the anchor automatically and its transform matrix remains unchanged. Instead, the framework exposes the angle in [rotationOnYAxis](rotationonyaxis.md) that you apply to any plane extent geometry in your app.

> **Important**

>  Apps that run on iOS 16 with a deployment target less than iOS 16 preserve the prior y-axis rotation behavior.
