> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nspersistentstoreasynchronousfetchresultcompletionblock

# NSPersistentStoreAsynchronousFetchResultCompletionBlock (Swift)

**Framework:** Core Data  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A completion block that an asynchronous fetch request calls with a result.

## Declaration

```swift
typealias NSPersistentStoreAsynchronousFetchResultCompletionBlock = (NSAsynchronousFetchResult<any NSFetchRequestResult>) -> Void
```

## Parameters

- `result`: The result of the fetch request.

# NSPersistentStoreAsynchronousFetchResultCompletionBlock (Objective-C)

**Framework:** Core Data  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A completion block that an asynchronous fetch request calls with a result.

## Declaration

```objectivec
typedef void (^)(NSAsynchronousFetchResult *) NSPersistentStoreAsynchronousFetchResultCompletionBlock;
```

## Parameters

- `result`: The result of the fetch request.
