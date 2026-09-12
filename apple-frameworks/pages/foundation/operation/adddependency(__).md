> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/adddependency(_:)](https://developer.apple.com/documentation/foundation/operation/adddependency(_:))

# addDependency(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Makes the receiver dependent on the completion of the specified operation.

## Declaration

```swift
func addDependency(_ op: Operation)
```

## Parameters

- `op`: The operation on which the receiver should depend. The same dependency should not be added more than once to the receiver, and the results of doing so are undefined.

<a id="Discussion"></a>

## Discussion

The receiver is not considered ready to execute until all of its dependent operations have finished executing. If the receiver is already executing its task, adding dependencies has no practical effect. This method may change the `isReady` and `dependencies` properties of the receiver.

It is a programmer error to create any circular dependencies among a set of operations. Doing so can cause a deadlock among the operations and may freeze your program.

## See Also

### Managing Dependencies

- [removeDependency(\_:)](removedependency%28__%29.md): Removes the receiver’s dependence on the specified operation.
- [dependencies](dependencies.md): An array of the operation objects that must finish executing before the current object can begin executing.

# addDependency: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Makes the receiver dependent on the completion of the specified operation.

## Declaration

```objectivec
- (void) addDependency:(NSOperation *) op;
```

## Parameters

- `op`: The operation on which the receiver should depend. The same dependency should not be added more than once to the receiver, and the results of doing so are undefined.

<a id="Discussion"></a>

## Discussion

The receiver is not considered ready to execute until all of its dependent operations have finished executing. If the receiver is already executing its task, adding dependencies has no practical effect. This method may change the `isReady` and `dependencies` properties of the receiver.

It is a programmer error to create any circular dependencies among a set of operations. Doing so can cause a deadlock among the operations and may freeze your program.

## See Also

### Managing Dependencies

- [removeDependency:](removedependency%28__%29.md): Removes the receiver’s dependence on the specified operation.
- [dependencies](dependencies.md): An array of the operation objects that must finish executing before the current object can begin executing.
