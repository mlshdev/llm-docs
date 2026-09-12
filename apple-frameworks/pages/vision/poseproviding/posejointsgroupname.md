> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/poseproviding/posejointsgroupname](https://developer.apple.com/documentation/vision/poseproviding/posejointsgroupname)

# PoseJointsGroupName

**Framework:** Vision  
**Kind:** Associated Type  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A type that represents a joint group name.

## Declaration

```swift
associatedtype PoseJointsGroupName : CaseIterable, RawRepresentable where Self.PoseJointsGroupName.RawValue == String
```

## See Also

### Getting the joint group names

- [availableJointsGroupNames](availablejointsgroupnames.md): The names of the available joint groupings in the observation.
