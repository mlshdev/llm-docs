> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/cachedmodelforpersistentstore(at:options:)

# cachedModelForPersistentStore(at:options:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

## Declaration

```swift
class func cachedModelForPersistentStore(at url: URL, options: [AnyHashable : Any]? = nil) throws -> NSManagedObjectModel
```

# cachedModelForPersistentStoreAtURL:options:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

## Declaration

```objectivec
+ (NSManagedObjectModel *) cachedModelForPersistentStoreAtURL:(NSURL *) url options:(NSDictionary *) options error:(NSError **) error;
```
