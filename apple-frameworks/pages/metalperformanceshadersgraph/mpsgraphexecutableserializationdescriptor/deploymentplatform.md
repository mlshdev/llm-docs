> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutableserializationdescriptor/deploymentplatform](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutableserializationdescriptor/deploymentplatform)

# deploymentPlatform (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The deployment platform used to serialize the executable.

## Declaration

```swift
var deploymentPlatform: MPSGraphDeploymentPlatform { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to the current platform.

# deploymentPlatform (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The deployment platform used to serialize the executable.

## Declaration

```objectivec
@property (atomic, readwrite) MPSGraphDeploymentPlatform deploymentPlatform;
```

<a id="discussion"></a>

## Discussion

Defaults to the current platform.
