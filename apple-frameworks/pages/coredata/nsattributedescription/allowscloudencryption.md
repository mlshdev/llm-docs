> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsattributedescription/allowscloudencryption](https://developer.apple.com/documentation/coredata/nsattributedescription/allowscloudencryption)

# allowsCloudEncryption (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that determines whether to encrypt the attribute’s value.

## Declaration

```swift
var allowsCloudEncryption: Bool { get set }
```

## Mentioned In

- [Configuring Attributes](../configuring-attributes.md)

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to store the attribute’s value in an encrypted form in iCloud. Only use this property with new attributes. Core Data doesn’t support encrypting attributes that already exist in your CloudKit schema, or attributes that represent relationships between entities.

You can also set this property using the Allow Cloud Encryption attribute in the Attributes inspector of the Core Data model editor.

> **Important**

>  Attributes can’t change their encryption state after you promote them to your production CloudKit schema. If you choose to encrypt an attribute, it always remains that way.

## See Also

### Configuring the behavior

- [allowsExternalBinaryDataStorage](allowsexternalbinarydatastorage.md): A Boolean value that indicates whether the attribute allows external binary storage.
- [defaultValue](defaultvalue.md): The default value of the attribute.
- [preservesValueInHistoryOnDeletion](preservesvalueinhistoryondeletion.md): A Boolean value that indicates whether the attribute records its value in the persistent history transaction for a managed object’s deletion.
- [valueTransformerName](valuetransformername.md): The name of the transformer to use for the attribute value.

# allowsCloudEncryption (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that determines whether to encrypt the attribute’s value.

## Declaration

```objectivec
@property BOOL allowsCloudEncryption;
```

## Mentioned In

- [Configuring Attributes](../configuring-attributes.md)

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to store the attribute’s value in an encrypted form in iCloud. Only use this property with new attributes. Core Data doesn’t support encrypting attributes that already exist in your CloudKit schema, or attributes that represent relationships between entities.

You can also set this property using the Allow Cloud Encryption attribute in the Attributes inspector of the Core Data model editor.

> **Important**

>  Attributes can’t change their encryption state after you promote them to your production CloudKit schema. If you choose to encrypt an attribute, it always remains that way.

## See Also

### Configuring the behavior

- [allowsExternalBinaryDataStorage](allowsexternalbinarydatastorage.md): A Boolean value that indicates whether the attribute allows external binary storage.
- [defaultValue](defaultvalue.md): The default value of the attribute.
- [preservesValueInHistoryOnDeletion](preservesvalueinhistoryondeletion.md): A Boolean value that indicates whether the attribute records its value in the persistent history transaction for a managed object’s deletion.
- [valueTransformerName](valuetransformername.md): The name of the transformer to use for the attribute value.
