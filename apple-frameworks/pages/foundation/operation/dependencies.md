> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/dependencies](https://developer.apple.com/documentation/foundation/operation/dependencies)

# dependencies (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of the operation objects that must finish executing before the current object can begin executing.

## Declaration

```swift
var dependencies: [Operation] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of `NSOperation` objects. To add an object to this array, use the [addDependency(\_:)](adddependency%28__%29.md) method.

An operation object must not execute until all of its dependent operations finish executing. Operations are not removed from this dependency list as they finish executing. You can use this list to track all dependent operations, including those that have already finished executing. The only way to remove an operation from this list is to use the [removeDependency(\_:)](removedependency%28__%29.md) method.

## See Also

### Managing Dependencies

- [addDependency(\_:)](adddependency%28__%29.md): Makes the receiver dependent on the completion of the specified operation.
- [removeDependency(\_:)](removedependency%28__%29.md): Removes the receiver’s dependence on the specified operation.

# dependencies (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of the operation objects that must finish executing before the current object can begin executing.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSOperation *> * dependencies;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of `NSOperation` objects. To add an object to this array, use the [addDependency:](adddependency%28__%29.md) method.

An operation object must not execute until all of its dependent operations finish executing. Operations are not removed from this dependency list as they finish executing. You can use this list to track all dependent operations, including those that have already finished executing. The only way to remove an operation from this list is to use the [removeDependency:](removedependency%28__%29.md) method.

## See Also

### Managing Dependencies

- [addDependency:](adddependency%28__%29.md): Makes the receiver dependent on the completion of the specified operation.
- [removeDependency:](removedependency%28__%29.md): Removes the receiver’s dependence on the specified operation.
