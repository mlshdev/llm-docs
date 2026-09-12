> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckacceptsharesoperation/init(sharemetadatas:)](https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation/init(sharemetadatas:))

# init(shareMetadatas:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an operation for accepting the specified shares.

## Declaration

```swift
convenience init(shareMetadatas: [CKShare.Metadata])
```

## Parameters

- `shareMetadatas`: The share metadatas to accept. If you specify `nil`, you must assign a value to the [shareMetadatas](sharemetadatas.md) property before you execute the operation.

<a id="discussion"></a>

## Discussion

After initializing the operation, assign a handler to the [acceptSharesCompletionBlock](acceptsharescompletionblock.md) property to process the results.

## See Also

### Creating a Share Accept Operation

- [init()](init%28%29.md): Creates an operation for accepting shares.

# initWithShareMetadatas: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an operation for accepting the specified shares.

## Declaration

```objectivec
- (instancetype) initWithShareMetadatas:(NSArray<CKShareMetadata *> *) shareMetadatas;
```

## Parameters

- `shareMetadatas`: The share metadatas to accept. If you specify `nil`, you must assign a value to the [shareMetadatas](sharemetadatas.md) property before you execute the operation.

<a id="discussion"></a>

## Discussion

After initializing the operation, assign a handler to the [acceptSharesCompletionBlock](acceptsharescompletionblock.md) property to process the results.

## See Also

### Creating a Share Accept Operation

- [init](init%28%29.md): Creates an operation for accepting shares.
