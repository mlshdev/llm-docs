> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsattributedescription/preservesvalueinhistoryondeletion](https://developer.apple.com/documentation/coredata/nsattributedescription/preservesvalueinhistoryondeletion)

# preservesValueInHistoryOnDeletion (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the attribute records its value in the persistent history transaction for a managed object’s deletion.

## Declaration

```swift
var preservesValueInHistoryOnDeletion: Bool { get set }
```

## See Also

### Configuring the behavior

- [allowsCloudEncryption](allowscloudencryption.md): A Boolean value that determines whether to encrypt the attribute’s value.
- [allowsExternalBinaryDataStorage](allowsexternalbinarydatastorage.md): A Boolean value that indicates whether the attribute allows external binary storage.
- [defaultValue](defaultvalue.md): The default value of the attribute.
- [valueTransformerName](valuetransformername.md): The name of the transformer to use for the attribute value.

# preservesValueInHistoryOnDeletion (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the attribute records its value in the persistent history transaction for a managed object’s deletion.

## Declaration

```objectivec
@property BOOL preservesValueInHistoryOnDeletion;
```

## See Also

### Configuring the behavior

- [allowsCloudEncryption](allowscloudencryption.md): A Boolean value that determines whether to encrypt the attribute’s value.
- [allowsExternalBinaryDataStorage](allowsexternalbinarydatastorage.md): A Boolean value that indicates whether the attribute allows external binary storage.
- [defaultValue](defaultvalue.md): The default value of the attribute.
- [valueTransformerName](valuetransformername.md): The name of the transformer to use for the attribute value.
