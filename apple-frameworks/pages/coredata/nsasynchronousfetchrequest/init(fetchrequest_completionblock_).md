> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsasynchronousfetchrequest/init(fetchrequest:completionblock:)](https://developer.apple.com/documentation/coredata/nsasynchronousfetchrequest/init(fetchrequest:completionblock:))

# init(fetchRequest:completionBlock:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a new asynchronous fetch request configured with the provided fetch request and completion block.

## Declaration

```swift
init(fetchRequest request: NSFetchRequest<ResultType>, completionBlock blk: ((NSAsynchronousFetchResult<ResultType>) -> Void)? = nil)
```

# initWithFetchRequest:completionBlock: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a new asynchronous fetch request configured with the provided fetch request and completion block.

## Declaration

```objectivec
- (instancetype) initWithFetchRequest:(NSFetchRequest<id<NSFetchRequestResult>> *) request completionBlock:(void (^)(NSAsynchronousFetchResult<id<NSFetchRequestResult>> *)) blk;
```
