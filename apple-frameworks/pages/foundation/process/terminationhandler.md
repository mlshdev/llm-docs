> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/terminationhandler](https://developer.apple.com/documentation/foundation/process/terminationhandler)

# terminationHandler (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A completion block the system invokes when the task completes.

## Declaration

```swift
var terminationHandler: (@Sendable (Process) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The system passes the task object to the block to allow access to the task parameters, for example to determine if the task completed successfully.

This block isn’t guaranteed to be fully executed prior to [waitUntilExit()](waituntilexit%28%29.md) returning.

# terminationHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A completion block the system invokes when the task completes.

## Declaration

```objectivec
@property (copy, nullable) void (^)(NSTask *) terminationHandler;
```

<a id="Discussion"></a>

## Discussion

The system passes the task object to the block to allow access to the task parameters, for example to determine if the task completed successfully.

This block isn’t guaranteed to be fully executed prior to [waitUntilExit](waituntilexit%28%29.md) returning.
