> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/collaborationdata/priority-swift.enum](https://developer.apple.com/documentation/arkit/arsession/collaborationdata/priority-swift.enum)

# ARSession.CollaborationData.Priority (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Options that help you choose the appropriate network protocol or settings for a given data instance.

## Declaration

```swift
enum Priority
```

<a id="Discussion"></a>

## Discussion

When you send [ARSession.CollaborationData](../collaborationdata.md) over the network by using a protocol that allows you to specify varying reliability, this property provides you with a hint about which reliability setting to use for a given collaboration data instance. Depending on its priority, you may also choose to send a given collaboration data instance using different protocols.

## Topics

### Enumeration Cases

- [ARSession.CollaborationData.Priority.critical](priority-swift.enum/critical.md): A priority that indicates that collaboration depends on this data.
- [ARSession.CollaborationData.Priority.optional](priority-swift.enum/optional.md): A priority that indicates that collaboration can continue without this data.

### Initializers

- [init(rawValue:)](priority-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing Priority

- [priority](priority-swift.property.md): A property that gives you a hint about how to send a given data instance over the network.

# ARCollaborationDataPriority (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

Options that help you choose the appropriate network protocol or settings for a given data instance.

## Declaration

```objectivec
enum ARCollaborationDataPriority : NSInteger;
```

<a id="Discussion"></a>

## Discussion

When you send [ARCollaborationData](../collaborationdata.md) over the network by using a protocol that allows you to specify varying reliability, this property provides you with a hint about which reliability setting to use for a given collaboration data instance. Depending on its priority, you may also choose to send a given collaboration data instance using different protocols.

## Topics

### Enumeration Cases

- [ARCollaborationDataPriorityCritical](priority-swift.enum/critical.md): A priority that indicates that collaboration depends on this data.
- [ARCollaborationDataPriorityOptional](priority-swift.enum/optional.md): A priority that indicates that collaboration can continue without this data.

## See Also

### Observing Priority

- [priority](priority-swift.property.md): A property that gives you a hint about how to send a given data instance over the network.
