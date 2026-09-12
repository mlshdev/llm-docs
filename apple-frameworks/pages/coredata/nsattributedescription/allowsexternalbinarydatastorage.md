> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsattributedescription/allowsexternalbinarydatastorage](https://developer.apple.com/documentation/coredata/nsattributedescription/allowsexternalbinarydatastorage)

# allowsExternalBinaryDataStorage (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the attribute allows external binary storage.

## Declaration

```swift
var allowsExternalBinaryDataStorage: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the attribute allows external binary storage, otherwise [false](https://developer.apple.com/documentation/swift/false). If this value is [true](https://developer.apple.com/documentation/swift/true), the corresponding attribute may be stored in a file external to the persistent store itself.

## See Also

### Configuring the behavior

- [allowsCloudEncryption](allowscloudencryption.md): A Boolean value that determines whether to encrypt the attribute’s value.
- [defaultValue](defaultvalue.md): The default value of the attribute.
- [preservesValueInHistoryOnDeletion](preservesvalueinhistoryondeletion.md): A Boolean value that indicates whether the attribute records its value in the persistent history transaction for a managed object’s deletion.
- [valueTransformerName](valuetransformername.md): The name of the transformer to use for the attribute value.

# allowsExternalBinaryDataStorage (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the attribute allows external binary storage.

## Declaration

```objectivec
@property BOOL allowsExternalBinaryDataStorage;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the attribute allows external binary storage, otherwise [false](https://developer.apple.com/documentation/swift/false). If this value is [true](https://developer.apple.com/documentation/swift/true), the corresponding attribute may be stored in a file external to the persistent store itself.

## See Also

### Configuring the behavior

- [allowsCloudEncryption](allowscloudencryption.md): A Boolean value that determines whether to encrypt the attribute’s value.
- [defaultValue](defaultvalue.md): The default value of the attribute.
- [preservesValueInHistoryOnDeletion](preservesvalueinhistoryondeletion.md): A Boolean value that indicates whether the attribute records its value in the persistent history transaction for a managed object’s deletion.
- [valueTransformerName](valuetransformername.md): The name of the transformer to use for the attribute value.
