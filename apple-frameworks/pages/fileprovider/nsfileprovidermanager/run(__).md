> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/run(_:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/run(_:))

# run(\_:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

Asks the system to schedule and execute the specified operations.

## Declaration

```swift
func run(_ operations: [any NSFileProviderTestingOperation]) throws -> [AnyHashable : any Error]
```

## Parameters

- `operations`: An array of operations. Populate this array with one or more operations returned by the [listAvailableTestingOperations()](listavailabletestingoperations%28%29.md) method.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Before calling this method, you must set the domain’s [testingModes](../nsfileproviderdomain/testingmodes-swift.property.md) property to include the [interactive](../nsfileproviderdomain/testingmodes-swift.struct/interactive.md) value.

The system waits until all of the specified operations complete and reports an error for any operations that fail.

## See Also

### Testing

- [listAvailableTestingOperations()](listavailabletestingoperations%28%29.md): Lists all the operations that are ready for scheduling.

# runTestingOperations:error: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

Asks the system to schedule and execute the specified operations.

## Declaration

```objectivec
- (NSDictionary<id<NSFileProviderTestingOperation>,NSError *> *) runTestingOperations:(NSArray<id<NSFileProviderTestingOperation>> *) operations error:(NSError **) error;
```

## Parameters

- `operations`: An array of operations. Populate this array with one or more operations returned by the [listAvailableTestingOperationsWithError:](listavailabletestingoperations%28%29.md) method.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Before calling this method, you must set the domain’s [testingModes](../nsfileproviderdomain/testingmodes-swift.property.md) property to include the [NSFileProviderDomainTestingModeInteractive](../nsfileproviderdomain/testingmodes-swift.struct/interactive.md) value.

The system waits until all of the specified operations complete and reports an error for any operations that fail.

## See Also

### Testing

- [listAvailableTestingOperationsWithError:](listavailabletestingoperations%28%29.md): Lists all the operations that are ready for scheduling.
