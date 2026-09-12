> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmactionset/isexecuting](https://developer.apple.com/documentation/homekit/hmactionset/isexecuting)

# isExecuting (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The execution status of the action set.

## Declaration

```swift
var isExecuting: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) while executing, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Keeping track of execution

- [lastExecutionDate](lastexecutiondate.md): The last execution date of the action set.

# executing (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The execution status of the action set.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isExecuting) BOOL executing;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) while executing, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Keeping track of execution

- [lastExecutionDate](lastexecutiondate.md): The last execution date of the action set.
