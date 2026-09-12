> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/poseproviding/alljoints(in:)](https://developer.apple.com/documentation/vision/poseproviding/alljoints(in:))

# allJoints(in:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Retrieves a dictionary of all joints in the observation or joint group.

## Declaration

```swift
func allJoints(in groupName: Self.PoseJointsGroupName?) -> [Self.PoseJointName : Joint]
```

## Parameters

- `groupName`: The group name to retrieve the joint names of.

<a id="return-value"></a>

## Return Value

The list of joints in the observation or joint group. If no `groupName` is specified, the system returns all joints in the observation..

## See Also

### Getting the joints

- [joint(for:)](joint%28for_%29.md): Retrieves a joint for a given joint name.
