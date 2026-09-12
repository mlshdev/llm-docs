> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxaction/uuid](https://developer.apple.com/documentation/callkit/cxaction/uuid)

# uuid (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The unique identifier for the action.

## Declaration

```swift
var uuid: UUID { get }
```

## See Also

### Accessing Action Attributes

- [isComplete](iscomplete.md): A Boolean value that indicates whether the action has been performed by the provider.
- [timeoutDate](timeoutdate.md): The time after which the action cannot be completed.

# UUID (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The unique identifier for the action.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * UUID;
```

## See Also

### Accessing Action Attributes

- [complete](iscomplete.md): A Boolean value that indicates whether the action has been performed by the provider.
- [timeoutDate](timeoutdate.md): The time after which the action cannot be completed.
