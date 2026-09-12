> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/errorcode](https://developer.apple.com/documentation/foundation/nsitemprovider/errorcode)

# NSItemProvider.ErrorCode (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The error codes that describe problems with consuming data from an item provider.

## Declaration

```swift
enum ErrorCode
```

## Topics

### Constants

- [NSItemProvider.ErrorCode.itemUnavailableError](errorcode/itemunavailableerror.md): An error code indicating that the requested data was unavailable from an item provider.
- [NSItemProvider.ErrorCode.unavailableCoercionError](errorcode/unavailablecoercionerror.md): An error code indicating that the requested data type coercion is unavailable from an item provider.
- [NSItemProvider.ErrorCode.unexpectedValueClassError](errorcode/unexpectedvalueclasserror.md): An error code indicating that type coercion to the requested class failed.
- [NSItemProvider.ErrorCode.unknownError](errorcode/unknownerror.md): An error code indicating an unknown error with consuming data from an item provider.

### Initializers

- [init(rawValue:)](errorcode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSItemProvider.CompletionHandler](completionhandler.md): A block that receives the item provider’s data.
- [NSItemProvider.LoadHandler](loadhandler.md): A block that loads the item provider’s data and coerces it to the specified type.
- [Options Dictionary Key](../options-dictionary-key.md): Keys indicating options to use when generating the item provider’s data.
- [Keys for Items Accessed in JavaScript Code](../keys-for-items-accessed-in-javascript-code.md): Keys in property list items that the system recieves from or sends to JavaScript code.
- [errorDomain](errordomain.md): The error domain associated with the item provider.
- [NSItemProviderFileOptions](../nsitemproviderfileoptions.md): Data-access specifications that declare how to handle items.
- [NSItemProviderReading](../nsitemproviderreading.md): The protocol for implementing a class to allow an item provider to create an instance of the class.
- [NSItemProviderWriting](../nsitemproviderwriting.md): The protocol for implementing a class to allow an item provider to retrieve data from an instance of the class.
- [NSItemProviderRepresentationVisibility](../nsitemproviderrepresentationvisibility.md): Specifications that control which categories of processes can see an item.

# NSItemProviderErrorCode (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The error codes that describe problems with consuming data from an item provider.

## Declaration

```objectivec
enum NSItemProviderErrorCode : NSInteger;
```

## Topics

### Constants

- [NSItemProviderItemUnavailableError](errorcode/itemunavailableerror.md): An error code indicating that the requested data was unavailable from an item provider.
- [NSItemProviderUnavailableCoercionError](errorcode/unavailablecoercionerror.md): An error code indicating that the requested data type coercion is unavailable from an item provider.
- [NSItemProviderUnexpectedValueClassError](errorcode/unexpectedvalueclasserror.md): An error code indicating that type coercion to the requested class failed.
- [NSItemProviderUnknownError](errorcode/unknownerror.md): An error code indicating an unknown error with consuming data from an item provider.

## See Also

### Constants

- [NSItemProviderCompletionHandler](completionhandler.md): A block that receives the item provider’s data.
- [NSItemProviderLoadHandler](loadhandler.md): A block that loads the item provider’s data and coerces it to the specified type.
- [Options Dictionary Key](../options-dictionary-key.md): Keys indicating options to use when generating the item provider’s data.
- [Keys for Items Accessed in JavaScript Code](../keys-for-items-accessed-in-javascript-code.md): Keys in property list items that the system recieves from or sends to JavaScript code.
- [NSItemProviderErrorDomain](errordomain.md): The error domain associated with the item provider.
- [NSItemProviderFileOptions](../nsitemproviderfileoptions.md): Data-access specifications that declare how to handle items.
- [NSItemProviderReading](../nsitemproviderreading.md): The protocol for implementing a class to allow an item provider to create an instance of the class.
- [NSItemProviderWriting](../nsitemproviderwriting.md): The protocol for implementing a class to allow an item provider to retrieve data from an instance of the class.
- [NSItemProviderRepresentationVisibility](../nsitemproviderrepresentationvisibility.md): Specifications that control which categories of processes can see an item.
