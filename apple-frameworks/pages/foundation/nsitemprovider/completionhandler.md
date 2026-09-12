> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/completionhandler](https://developer.apple.com/documentation/foundation/nsitemprovider/completionhandler)

# NSItemProvider.CompletionHandler (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A block that receives the item provider’s data.

## Declaration

```swift
typealias CompletionHandler = @Sendable ((any NSSecureCoding)?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

Use this block to receive data from a call to the [loadItem(forTypeIdentifier:options:completionHandler:)](loaditem%28fortypeidentifier_options_completionhandler_%29.md) method. This block takes the following parameters:

- **item**: The item to be loaded. When specifying your block, set the type of this parameter to the specific data type you want. For example, when requesting text data, you might set the type to [NSString](../nsstring.md) or [NSAttributedString](../nsattributedstring.md). The item provider attempts to coerce the data to the class you specify.
- **error**: A pointer to an error object for receiving information about any problems that occurred when loading the data.

## See Also

### Constants

- [NSItemProvider.LoadHandler](loadhandler.md): A block that loads the item provider’s data and coerces it to the specified type.
- [Options Dictionary Key](../options-dictionary-key.md): Keys indicating options to use when generating the item provider’s data.
- [Keys for Items Accessed in JavaScript Code](../keys-for-items-accessed-in-javascript-code.md): Keys in property list items that the system recieves from or sends to JavaScript code.
- [errorDomain](errordomain.md): The error domain associated with the item provider.
- [NSItemProviderFileOptions](../nsitemproviderfileoptions.md): Data-access specifications that declare how to handle items.
- [NSItemProviderReading](../nsitemproviderreading.md): The protocol for implementing a class to allow an item provider to create an instance of the class.
- [NSItemProviderWriting](../nsitemproviderwriting.md): The protocol for implementing a class to allow an item provider to retrieve data from an instance of the class.
- [NSItemProviderRepresentationVisibility](../nsitemproviderrepresentationvisibility.md): Specifications that control which categories of processes can see an item.
- [NSItemProvider.ErrorCode](errorcode.md): The error codes that describe problems with consuming data from an item provider.

# NSItemProviderCompletionHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A block that receives the item provider’s data.

## Declaration

```objectivec
typedef void (^)(__kindof id<NSSecureCoding>, NSError *) NSItemProviderCompletionHandler;
```

<a id="Discussion"></a>

## Discussion

Use this block to receive data from a call to the [loadItemForTypeIdentifier:options:completionHandler:](loaditem%28fortypeidentifier_options_completionhandler_%29.md) method. This block takes the following parameters:

- **item**: The item to be loaded. When specifying your block, set the type of this parameter to the specific data type you want. For example, when requesting text data, you might set the type to [NSString](../nsstring.md) or [NSAttributedString](../nsattributedstring.md). The item provider attempts to coerce the data to the class you specify.
- **error**: A pointer to an error object for receiving information about any problems that occurred when loading the data.

## See Also

### Constants

- [NSItemProviderLoadHandler](loadhandler.md): A block that loads the item provider’s data and coerces it to the specified type.
- [Options Dictionary Key](../options-dictionary-key.md): Keys indicating options to use when generating the item provider’s data.
- [Keys for Items Accessed in JavaScript Code](../keys-for-items-accessed-in-javascript-code.md): Keys in property list items that the system recieves from or sends to JavaScript code.
- [NSItemProviderErrorDomain](errordomain.md): The error domain associated with the item provider.
- [NSItemProviderFileOptions](../nsitemproviderfileoptions.md): Data-access specifications that declare how to handle items.
- [NSItemProviderReading](../nsitemproviderreading.md): The protocol for implementing a class to allow an item provider to create an instance of the class.
- [NSItemProviderWriting](../nsitemproviderwriting.md): The protocol for implementing a class to allow an item provider to retrieve data from an instance of the class.
- [NSItemProviderRepresentationVisibility](../nsitemproviderrepresentationvisibility.md): Specifications that control which categories of processes can see an item.
- [NSItemProviderErrorCode](errorcode.md): The error codes that describe problems with consuming data from an item provider.
