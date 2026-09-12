> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemproviderfileoptions](https://developer.apple.com/documentation/foundation/nsitemproviderfileoptions)

# NSItemProviderFileOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Data-access specifications that declare how to handle items.

## Declaration

```swift
struct NSItemProviderFileOptions
```

## Topics

### Creating File Options

- [init(rawValue:)](nsitemproviderfileoptions/init%28rawvalue_%29.md)

### File Options

- [openInPlace](nsitemproviderfileoptions/openinplace.md): A data-access specification declaring that items should open in place, rather than being copied.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSItemProvider.CompletionHandler](nsitemprovider/completionhandler.md): A block that receives the item provider’s data.
- [NSItemProvider.LoadHandler](nsitemprovider/loadhandler.md): A block that loads the item provider’s data and coerces it to the specified type.
- [Options Dictionary Key](options-dictionary-key.md): Keys indicating options to use when generating the item provider’s data.
- [Keys for Items Accessed in JavaScript Code](keys-for-items-accessed-in-javascript-code.md): Keys in property list items that the system recieves from or sends to JavaScript code.
- [errorDomain](nsitemprovider/errordomain.md): The error domain associated with the item provider.
- [NSItemProviderReading](nsitemproviderreading.md): The protocol for implementing a class to allow an item provider to create an instance of the class.
- [NSItemProviderWriting](nsitemproviderwriting.md): The protocol for implementing a class to allow an item provider to retrieve data from an instance of the class.
- [NSItemProviderRepresentationVisibility](nsitemproviderrepresentationvisibility.md): Specifications that control which categories of processes can see an item.
- [NSItemProvider.ErrorCode](nsitemprovider/errorcode.md): The error codes that describe problems with consuming data from an item provider.

# NSItemProviderFileOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Data-access specifications that declare how to handle items.

## Declaration

```objectivec
enum NSItemProviderFileOptions : NSInteger;
```

## Topics

### File Options

- [NSItemProviderFileOptionOpenInPlace](nsitemproviderfileoptions/openinplace.md): A data-access specification declaring that items should open in place, rather than being copied.

## See Also

### Constants

- [NSItemProviderCompletionHandler](nsitemprovider/completionhandler.md): A block that receives the item provider’s data.
- [NSItemProviderLoadHandler](nsitemprovider/loadhandler.md): A block that loads the item provider’s data and coerces it to the specified type.
- [Options Dictionary Key](options-dictionary-key.md): Keys indicating options to use when generating the item provider’s data.
- [Keys for Items Accessed in JavaScript Code](keys-for-items-accessed-in-javascript-code.md): Keys in property list items that the system recieves from or sends to JavaScript code.
- [NSItemProviderErrorDomain](nsitemprovider/errordomain.md): The error domain associated with the item provider.
- [NSItemProviderReading](nsitemproviderreading.md): The protocol for implementing a class to allow an item provider to create an instance of the class.
- [NSItemProviderWriting](nsitemproviderwriting.md): The protocol for implementing a class to allow an item provider to retrieve data from an instance of the class.
- [NSItemProviderRepresentationVisibility](nsitemproviderrepresentationvisibility.md): Specifications that control which categories of processes can see an item.
- [NSItemProviderErrorCode](nsitemprovider/errorcode.md): The error codes that describe problems with consuming data from an item provider.
