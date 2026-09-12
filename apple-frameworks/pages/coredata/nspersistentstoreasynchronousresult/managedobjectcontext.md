> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoreasynchronousresult/managedobjectcontext](https://developer.apple.com/documentation/coredata/nspersistentstoreasynchronousresult/managedobjectcontext)

# managedObjectContext (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The managed object context for the result.

## Declaration

```swift
var managedObjectContext: NSManagedObjectContext { get }
```

## See Also

### Inspecting the Result

- [operationError](operationerror.md): An error that contains details if the asynchronous fetch request fails.
- [progress](progress.md): An object that reports progress for the asynchronous fetch request.

# managedObjectContext (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The managed object context for the result.

## Declaration

```objectivec
@property (strong, readonly) NSManagedObjectContext * managedObjectContext;
```

## See Also

### Inspecting the Result

- [operationError](operationerror.md): An error that contains details if the asynchronous fetch request fails.
- [progress](progress.md): An object that reports progress for the asynchronous fetch request.
