> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsharemetadataoperation/init(shareurls:)](https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/init(shareurls:))

# init(shareURLs:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an operation for fetching the metadata for the specified shares.

## Declaration

```swift
convenience init(shareURLs: [URL])
```

## Parameters

- `shareURLs`: The URLs of the shares. If you specify `nil`, you must assign a value to the [shareURLs](shareurls.md) property before you execute the operation.

<a id="discussion"></a>

## Discussion

After creating the operation, assign a handler to the [fetchShareMetadataCompletionBlock](fetchsharemetadatacompletionblock.md) property to process the results.

## See Also

### Creating an Operation

- [init()](init%28%29.md): Creates an empty fetch share metadata operation.

# initWithShareURLs: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an operation for fetching the metadata for the specified shares.

## Declaration

```objectivec
- (instancetype) initWithShareURLs:(NSArray<NSURL *> *) shareURLs;
```

## Parameters

- `shareURLs`: The URLs of the shares. If you specify `nil`, you must assign a value to the [shareURLs](shareurls.md) property before you execute the operation.

<a id="discussion"></a>

## Discussion

After creating the operation, assign a handler to the [fetchShareMetadataCompletionBlock](fetchsharemetadatacompletionblock.md) property to process the results.

## See Also

### Creating an Operation

- [init](init%28%29.md): Creates an empty fetch share metadata operation.
