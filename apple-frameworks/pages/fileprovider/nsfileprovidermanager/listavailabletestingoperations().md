> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/listavailabletestingoperations()](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/listavailabletestingoperations())

# listAvailableTestingOperations() (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

Lists all the operations that are ready for scheduling.

## Declaration

```swift
func listAvailableTestingOperations() throws -> [any NSFileProviderTestingOperation]
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Before calling this method, you must set the domain’s [testingModes](../nsfileproviderdomain/testingmodes-swift.property.md) property to include the [interactive](../nsfileproviderdomain/testingmodes-swift.struct/interactive.md) value.

The system waits for all the pending disk and working set updates before returning the list of available operations. The operations that it returns may become invalid if the system receives new events, or when you schedule and execute operations using the [run(\_:)](run%28__%29.md) method.

## See Also

### Testing

- [run(\_:)](run%28__%29.md): Asks the system to schedule and execute the specified operations.

# listAvailableTestingOperationsWithError: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

Lists all the operations that are ready for scheduling.

## Declaration

```objectivec
- (NSArray<id<NSFileProviderTestingOperation>> *) listAvailableTestingOperationsWithError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Before calling this method, you must set the domain’s [testingModes](../nsfileproviderdomain/testingmodes-swift.property.md) property to include the [NSFileProviderDomainTestingModeInteractive](../nsfileproviderdomain/testingmodes-swift.struct/interactive.md) value.

The system waits for all the pending disk and working set updates before returning the list of available operations. The operations that it returns may become invalid if the system receives new events, or when you schedule and execute operations using the [runTestingOperations:error:](run%28__%29.md) method.

## See Also

### Testing

- [runTestingOperations:error:](run%28__%29.md): Asks the system to schedule and execute the specified operations.
