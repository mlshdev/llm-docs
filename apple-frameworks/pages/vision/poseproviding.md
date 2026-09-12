> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/poseproviding](https://developer.apple.com/documentation/vision/poseproviding)

# PoseProviding

**Framework:** Vision  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An observation that provides a collection of joints that make up a pose.

## Declaration

```swift
protocol PoseProviding
```

## Topics

### Getting the joints

- [joint(for:)](poseproviding/joint%28for_%29.md): Retrieves a joint for a given joint name.
- [allJoints(in:)](poseproviding/alljoints%28in_%29.md): Retrieves a dictionary of all joints in the observation or joint group.

### Getting the joint names

- [availableJointNames](poseproviding/availablejointnames.md): The names of the available joints in the observation.
- [PoseJointName](poseproviding/posejointname.md): A type that represents a joint name.

### Getting the joint group names

- [availableJointsGroupNames](poseproviding/availablejointsgroupnames.md): The names of the available joint groupings in the observation.
- [PoseJointsGroupName](poseproviding/posejointsgroupname.md): A type that represents a joint group name.

## Relationships

### Conforming Types

- [AnimalBodyPoseObservation](animalbodyposeobservation.md)
- [HumanBodyPoseObservation](humanbodyposeobservation.md)
- [HumanHandPoseObservation](humanhandposeobservation.md)

## See Also

### Protocols

- [ImageProcessingRequest](imageprocessingrequest.md): A type for image-analysis requests that focus on a specific part of an image.
- [StatefulRequest](statefulrequest.md): The protocol for a type that builds evidence of a condition over time.
- [TargetedRequest](targetedrequest.md): A type for analyzing two images together.
- [VisionObservation](visionobservation.md): A type for objects produced by image-analysis requests.
- [VisionRequest](visionrequest.md): A type for image-analysis requests.
- [DownloadableAssetsRequest](downloadableassetsrequest.md): A request whose execution depends on assets that may need to be downloaded.
- [DownloadableAssetsRequestStatus](downloadableassetsrequeststatus.md): The status of the assets required by a [DownloadableAssetsRequest](downloadableassetsrequest.md).
