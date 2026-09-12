> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsattributedescription/valuetransformername](https://developer.apple.com/documentation/coredata/nsattributedescription/valuetransformername)

# valueTransformerName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name of the transformer to use for the attribute value.

## Declaration

```swift
var valueTransformerName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The attribute must be of type `NSTransformedAttributeType`.

The transformer must output an `NSData` object from [transformedValue(\_:)](../../foundation/valuetransformer/transformedvalue%28__%29.md) and must allow reverse transformations.

If this value is `nil`, Core Data uses a default a transformer that uses [NSCoding](../../foundation/nscoding.md) to archive and unarchive the attribute value.

## See Also

### Configuring the behavior

- [allowsCloudEncryption](allowscloudencryption.md): A Boolean value that determines whether to encrypt the attribute’s value.
- [allowsExternalBinaryDataStorage](allowsexternalbinarydatastorage.md): A Boolean value that indicates whether the attribute allows external binary storage.
- [defaultValue](defaultvalue.md): The default value of the attribute.
- [preservesValueInHistoryOnDeletion](preservesvalueinhistoryondeletion.md): A Boolean value that indicates whether the attribute records its value in the persistent history transaction for a managed object’s deletion.

# valueTransformerName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name of the transformer to use for the attribute value.

## Declaration

```objectivec
@property (copy, nullable) NSString * valueTransformerName;
```

<a id="Discussion"></a>

## Discussion

The attribute must be of type `NSTransformedAttributeType`.

The transformer must output an `NSData` object from [transformedValue:](../../foundation/valuetransformer/transformedvalue%28__%29.md) and must allow reverse transformations.

If this value is `nil`, Core Data uses a default a transformer that uses [NSCoding](../../foundation/nscoding.md) to archive and unarchive the attribute value.

## See Also

### Configuring the behavior

- [allowsCloudEncryption](allowscloudencryption.md): A Boolean value that determines whether to encrypt the attribute’s value.
- [allowsExternalBinaryDataStorage](allowsexternalbinarydatastorage.md): A Boolean value that indicates whether the attribute allows external binary storage.
- [defaultValue](defaultvalue.md): The default value of the attribute.
- [preservesValueInHistoryOnDeletion](preservesvalueinhistoryondeletion.md): A Boolean value that indicates whether the attribute records its value in the persistent history transaction for a managed object’s deletion.
