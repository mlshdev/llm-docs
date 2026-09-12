> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxaction/timeoutdate](https://developer.apple.com/documentation/callkit/cxaction/timeoutdate)

# timeoutDate (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The time after which the action cannot be completed.

## Declaration

```swift
var timeoutDate: Date { get }
```

## See Also

### Accessing Action Attributes

- [uuid](uuid.md): The unique identifier for the action.
- [isComplete](iscomplete.md): A Boolean value that indicates whether the action has been performed by the provider.

# timeoutDate (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The time after which the action cannot be completed.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDate * timeoutDate;
```

## See Also

### Accessing Action Attributes

- [UUID](uuid.md): The unique identifier for the action.
- [complete](iscomplete.md): A Boolean value that indicates whether the action has been performed by the provider.
