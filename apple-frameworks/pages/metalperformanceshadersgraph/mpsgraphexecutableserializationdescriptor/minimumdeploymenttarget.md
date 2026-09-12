> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutableserializationdescriptor/minimumdeploymenttarget](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutableserializationdescriptor/minimumdeploymenttarget)

# minimumDeploymentTarget (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The minimum deployment target to serialize the executable.

## Declaration

```swift
var minimumDeploymentTarget: String { get set }
```

<a id="discussion"></a>

## Discussion

If not set, the package created will target the latest version of the `deploymentPlatform` set.

# minimumDeploymentTarget (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The minimum deployment target to serialize the executable.

## Declaration

```objectivec
@property (atomic, copy, readwrite) NSString * minimumDeploymentTarget;
```

<a id="discussion"></a>

## Discussion

If not set, the package created will target the latest version of the `deploymentPlatform` set.
