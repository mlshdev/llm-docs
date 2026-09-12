> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/testingmodes-swift.struct/interactive](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/testingmodes-swift.struct/interactive)

# interactive (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

A testing mode where the extension can deterministically test asynchronous operations.

## Declaration

```swift
static var interactive: NSFileProviderDomain.TestingModes { get }
```

<a id="Discussion"></a>

## Discussion

Disable the system’s automatic scheduling and execution of operations. Instead, the File Provider extension can manually determine the order of execution.

This testing mode enables the following synchronous methods:

- **[listAvailableTestingOperations()](../../nsfileprovidermanager/listavailabletestingoperations%28%29.md)**: Lists all the operations that are ready for scheduling.
- **[run(\_:)](../../nsfileprovidermanager/run%28__%29.md)**: Asks the system to schedule and execute the specified operations.

The [interactive](interactive.md) testing mode expects the File Provider extension to repeat the following steps while running tests:

1. Call [listAvailableTestingOperations()](../../nsfileprovidermanager/listavailabletestingoperations%28%29.md)to get the list of outstanding operations.
2. Select the next set of operations required by your test.
3. Call [run(\_:)](../../nsfileprovidermanager/run%28__%29.md)to execute those operations.

The `interactive` testing mode also disables some of the File Provider extension’s crash guarantees. For example, the system may lose any event that it hasn’t yet ingested.

## See Also

### Accessing Modes

- [alwaysEnabled](alwaysenabled.md): A testing mode that automatically enables the domain.

# NSFileProviderDomainTestingModeInteractive (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

A testing mode where the extension can deterministically test asynchronous operations.

## Declaration

```objectivec
NSFileProviderDomainTestingModeInteractive
```

<a id="Discussion"></a>

## Discussion

Disable the system’s automatic scheduling and execution of operations. Instead, the File Provider extension can manually determine the order of execution.

This testing mode enables the following synchronous methods:

- **[listAvailableTestingOperationsWithError:](../../nsfileprovidermanager/listavailabletestingoperations%28%29.md)**: Lists all the operations that are ready for scheduling.
- **[runTestingOperations:error:](../../nsfileprovidermanager/run%28__%29.md)**: Asks the system to schedule and execute the specified operations.

The [NSFileProviderDomainTestingModeInteractive](interactive.md) testing mode expects the File Provider extension to repeat the following steps while running tests:

1. Call [listAvailableTestingOperationsWithError:](../../nsfileprovidermanager/listavailabletestingoperations%28%29.md)to get the list of outstanding operations.
2. Select the next set of operations required by your test.
3. Call [runTestingOperations:error:](../../nsfileprovidermanager/run%28__%29.md)to execute those operations.

The `interactive` testing mode also disables some of the File Provider extension’s crash guarantees. For example, the system may lose any event that it hasn’t yet ingested.

## See Also

### Accessing Modes

- [NSFileProviderDomainTestingModeAlwaysEnabled](alwaysenabled.md): A testing mode that automatically enables the domain.
