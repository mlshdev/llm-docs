> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmfalldetectionmanager/delegate](https://developer.apple.com/documentation/coremotion/cmfalldetectionmanager/delegate)

# delegate (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** watchOS 7.2+

A delegate that can receive notifications about fall detection events.

## Declaration

```swift
weak var delegate: (any CMFallDetectionDelegate)? { get set }
```

## See Also

### Handling Events

- [CMFallDetectionDelegate](../cmfalldetectiondelegate.md): A delegate that receives information about fall detection events and authorization status changes.

# delegate (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** watchOS 7.2+

A delegate that can receive notifications about fall detection events.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CMFallDetectionDelegate> delegate;
```

## See Also

### Handling Events

- [CMFallDetectionDelegate](../cmfalldetectiondelegate.md): A delegate that receives information about fall detection events and authorization status changes.
