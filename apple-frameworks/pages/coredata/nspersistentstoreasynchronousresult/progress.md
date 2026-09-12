> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoreasynchronousresult/progress](https://developer.apple.com/documentation/coredata/nspersistentstoreasynchronousresult/progress)

# progress (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that reports progress for the asynchronous fetch request.

## Declaration

```swift
var progress: Progress? { get }
```

## See Also

### Inspecting the Result

- [managedObjectContext](managedobjectcontext.md): The managed object context for the result.
- [operationError](operationerror.md): An error that contains details if the asynchronous fetch request fails.

# progress (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that reports progress for the asynchronous fetch request.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSProgress * progress;
```

## See Also

### Inspecting the Result

- [managedObjectContext](managedobjectcontext.md): The managed object context for the result.
- [operationError](operationerror.md): An error that contains details if the asynchronous fetch request fails.
