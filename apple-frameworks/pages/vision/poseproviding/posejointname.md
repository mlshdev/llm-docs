> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/poseproviding/posejointname

# PoseJointName

**Framework:** Vision  
**Kind:** Associated Type  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A type that represents a joint name.

## Declaration

```swift
associatedtype PoseJointName : Decodable, Encodable, Hashable, RawRepresentable where Self.PoseJointName.RawValue == String
```

## See Also

### Getting the joint names

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
