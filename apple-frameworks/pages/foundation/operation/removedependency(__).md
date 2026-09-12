> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/removedependency(_:)](https://developer.apple.com/documentation/foundation/operation/removedependency(_:))

# removeDependency(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the receiver’s dependence on the specified operation.

## Declaration

```swift
func removeDependency(_ op: Operation)
```

## Parameters

- `op`: The dependent operation to be removed from the receiver.

<a id="Discussion"></a>

## Discussion

This method may change the `isReady` and `dependencies` properties of the receiver.

## See Also

### Managing Dependencies

- [addDependency(\_:)](adddependency%28__%29.md): Makes the receiver dependent on the completion of the specified operation.
- [dependencies](dependencies.md): An array of the operation objects that must finish executing before the current object can begin executing.

# removeDependency: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the receiver’s dependence on the specified operation.

## Declaration

```objectivec
- (void) removeDependency:(NSOperation *) op;
```

## Parameters

- `op`: The dependent operation to be removed from the receiver.

<a id="Discussion"></a>

## Discussion

This method may change the `isReady` and `dependencies` properties of the receiver.

## See Also

### Managing Dependencies

- [addDependency:](adddependency%28__%29.md): Makes the receiver dependent on the completion of the specified operation.
- [dependencies](dependencies.md): An array of the operation objects that must finish executing before the current object can begin executing.
