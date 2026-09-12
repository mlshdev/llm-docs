> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/isfinished](https://developer.apple.com/documentation/foundation/thread/isfinished)

# isFinished (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver has finished execution.

## Declaration

```swift
var isFinished: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has finished execution, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining the Thread’s Execution State

- [isExecuting](isexecuting.md): A Boolean value that indicates whether the receiver is executing.
- [isCancelled](iscancelled.md): A Boolean value that indicates whether the receiver is cancelled.

# finished (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver has finished execution.

## Declaration

```objectivec
@property (readonly, getter=isFinished) BOOL finished;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has finished execution, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining the Thread’s Execution State

- [executing](isexecuting.md): A Boolean value that indicates whether the receiver is executing.
- [cancelled](iscancelled.md): A Boolean value that indicates whether the receiver is cancelled.
