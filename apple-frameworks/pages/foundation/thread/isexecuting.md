> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/isexecuting](https://developer.apple.com/documentation/foundation/thread/isexecuting)

# isExecuting (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver is executing.

## Declaration

```swift
var isExecuting: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is executing, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining the Thread’s Execution State

- [isFinished](isfinished.md): A Boolean value that indicates whether the receiver has finished execution.
- [isCancelled](iscancelled.md): A Boolean value that indicates whether the receiver is cancelled.

# executing (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver is executing.

## Declaration

```objectivec
@property (readonly, getter=isExecuting) BOOL executing;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is executing, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining the Thread’s Execution State

- [finished](isfinished.md): A Boolean value that indicates whether the receiver has finished execution.
- [cancelled](iscancelled.md): A Boolean value that indicates whether the receiver is cancelled.
