> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndetectionid](https://developer.apple.com/documentation/cinematic/cndetectionid)

# CNDetectionID (Swift)

**Framework:** Cinematic  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS

A structure representing a unique identifier assigned by the Cinematic script to all detections of the same subject and detection type across time.

## Declaration

```swift
struct CNDetectionID
```

## Topics

### Initializers

- [init(\_:)](cndetectionid/init%28__%29.md)
- [init(rawValue:)](cndetectionid/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CNDetectionGroupID](cndetectiongroupid.md): A structure representing a unique number representing the detection to focus on if this is a group decision.

# CNDetectionID (Objective-C)

**Framework:** Cinematic  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS

A structure representing a unique identifier assigned by the Cinematic script to all detections of the same subject and detection type across time.

## Declaration

```objectivec
typedef int64_t CNDetectionID;
```

## See Also

### Data Types

- [CNDetectionGroupID](cndetectiongroupid.md): A structure representing a unique number representing the detection to focus on if this is a group decision.
