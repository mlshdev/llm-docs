> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmactionset/lastexecutiondate](https://developer.apple.com/documentation/homekit/hmactionset/lastexecutiondate)

# lastExecutionDate (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The last execution date of the action set.

## Declaration

```swift
var lastExecutionDate: Date? { get }
```

## See Also

### Keeping track of execution

- [isExecuting](isexecuting.md): The execution status of the action set.

# lastExecutionDate (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The last execution date of the action set.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * lastExecutionDate;
```

## See Also

### Keeping track of execution

- [executing](isexecuting.md): The execution status of the action set.
