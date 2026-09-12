> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsattributedescription/defaultvalue](https://developer.apple.com/documentation/coredata/nsattributedescription/defaultvalue)

# defaultValue (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The default value of the attribute.

## Declaration

```swift
var defaultValue: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

Default values are retained by a managed object model, not copied. This means that attribute values do not have to implement the `NSCopying` protocol, however it also means that you should not modify any objects after they have been set as default values.

<a id="Special-Considerations"></a>

### Special Considerations

Setting the default value raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Configuring the behavior

- [allowsCloudEncryption](allowscloudencryption.md): A Boolean value that determines whether to encrypt the attribute’s value.
- [allowsExternalBinaryDataStorage](allowsexternalbinarydatastorage.md): A Boolean value that indicates whether the attribute allows external binary storage.
- [preservesValueInHistoryOnDeletion](preservesvalueinhistoryondeletion.md): A Boolean value that indicates whether the attribute records its value in the persistent history transaction for a managed object’s deletion.
- [valueTransformerName](valuetransformername.md): The name of the transformer to use for the attribute value.

# defaultValue (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The default value of the attribute.

## Declaration

```objectivec
@property (retain, nullable) id defaultValue;
```

<a id="Discussion"></a>

## Discussion

Default values are retained by a managed object model, not copied. This means that attribute values do not have to implement the `NSCopying` protocol, however it also means that you should not modify any objects after they have been set as default values.

<a id="Special-Considerations"></a>

### Special Considerations

Setting the default value raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Configuring the behavior

- [allowsCloudEncryption](allowscloudencryption.md): A Boolean value that determines whether to encrypt the attribute’s value.
- [allowsExternalBinaryDataStorage](allowsexternalbinarydatastorage.md): A Boolean value that indicates whether the attribute allows external binary storage.
- [preservesValueInHistoryOnDeletion](preservesvalueinhistoryondeletion.md): A Boolean value that indicates whether the attribute records its value in the persistent history transaction for a managed object’s deletion.
- [valueTransformerName](valuetransformername.md): The name of the transformer to use for the attribute value.
