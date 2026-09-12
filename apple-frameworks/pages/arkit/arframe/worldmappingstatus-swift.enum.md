> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/worldmappingstatus-swift.enum](https://developer.apple.com/documentation/arkit/arframe/worldmappingstatus-swift.enum)

# ARFrame.WorldMappingStatus (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A value describing the world mapping status for the area visible in a given frame.

## Declaration

```swift
enum WorldMappingStatus
```

## Topics

### Enumeration Cases

- [ARFrame.WorldMappingStatus.extending](worldmappingstatus-swift.enum/extending.md): World tracking has mapped recently visited areas, but is still mapping around the current device position.
- [ARFrame.WorldMappingStatus.limited](worldmappingstatus-swift.enum/limited.md): World tracking has not yet sufficiently mapped the area around the current device position.
- [ARFrame.WorldMappingStatus.mapped](worldmappingstatus-swift.enum/mapped.md): World tracking has adequately mapped the visible area.
- [ARFrame.WorldMappingStatus.notAvailable](worldmappingstatus-swift.enum/notavailable.md): No world map is available.

### Initializers

- [init(rawValue:)](worldmappingstatus-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking world-mapping status

- [worldMappingStatus](worldmappingstatus-swift.property.md): The feasibility of generating or relocalizing a world map for this frame.

# ARWorldMappingStatus (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

A value describing the world mapping status for the area visible in a given frame.

## Declaration

```objectivec
enum ARWorldMappingStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [ARWorldMappingStatusExtending](worldmappingstatus-swift.enum/extending.md): World tracking has mapped recently visited areas, but is still mapping around the current device position.
- [ARWorldMappingStatusLimited](worldmappingstatus-swift.enum/limited.md): World tracking has not yet sufficiently mapped the area around the current device position.
- [ARWorldMappingStatusMapped](worldmappingstatus-swift.enum/mapped.md): World tracking has adequately mapped the visible area.
- [ARWorldMappingStatusNotAvailable](worldmappingstatus-swift.enum/notavailable.md): No world map is available.

## See Also

### Checking world-mapping status

- [worldMappingStatus](worldmappingstatus-swift.property.md): The feasibility of generating or relocalizing a world map for this frame.
