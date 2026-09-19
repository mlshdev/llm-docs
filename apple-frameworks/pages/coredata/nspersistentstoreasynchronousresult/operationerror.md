> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nspersistentstoreasynchronousresult/operationerror

# operationError (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An error that contains details if the asynchronous fetch request fails.

## Declaration

```swift
var operationError: (any Error)? { get }
```

## See Also

### Inspecting the Result

- [managedObjectContext](managedobjectcontext.md): The managed object context for the result.
- [progress](progress.md): An object that reports progress for the asynchronous fetch request.

# operationError (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An error that contains details if the asynchronous fetch request fails.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSError * operationError;
```

## See Also

### Inspecting the Result

- [managedObjectContext](managedobjectcontext.md): The managed object context for the result.
- [progress](progress.md): An object that reports progress for the asynchronous fetch request.
