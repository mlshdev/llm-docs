> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckacceptsharesoperation/sharemetadatas](https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation/sharemetadatas)

# shareMetadatas (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The share metadatas to process.

## Declaration

```swift
var shareMetadatas: [CKShare.Metadata]? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to view or change the metadata of the shares you want to process. If you intend to specify or change the value of this property, do so before you execute the operation or submit it to a queue.

## See Also

### Processing the Share Accept Results

- [perShareCompletionBlock](persharecompletionblock.md): Deprecated. The block to execute as CloudKit processes individual shares.
- [acceptSharesCompletionBlock](acceptsharescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

# shareMetadatas (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The share metadatas to process.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<CKShareMetadata *> * shareMetadatas;
```

<a id="discussion"></a>

## Discussion

Use this property to view or change the metadata of the shares you want to process. If you intend to specify or change the value of this property, do so before you execute the operation or submit it to a queue.

## See Also

### Processing the Share Accept Results

- [perShareCompletionBlock](persharecompletionblock.md): Deprecated. The block to execute as CloudKit processes individual shares.
- [acceptSharesCompletionBlock](acceptsharescompletionblock.md): Deprecated. The closure to execute when the operation finishes.
