> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemproviderwriting](https://developer.apple.com/documentation/foundation/nsitemproviderwriting)

# NSItemProviderWriting (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The protocol for implementing a class to allow an item provider to retrieve data from an instance of the class.

## Declaration

```swift
protocol NSItemProviderWriting : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A source app uses an object that conforms to this protocol to initialize an item provider for a copied or dragged item.

## Topics

### Loading data

- [loadData(withTypeIdentifier:forItemProviderCompletionHandler:)](nsitemproviderwriting/loaddata%28withtypeidentifier_foritemprovidercompletionhandler_%29.md): Loads data of a particular type, identified by the given UTI.

### Getting the writable type identifiers

- [writableTypeIdentifiersForItemProvider](nsitemproviderwriting/writabletypeidentifiersforitemprovider-swift.type.property.md): An array of UTI strings representing the types of data that can be loaded for an item provider.
- [writableTypeIdentifiersForItemProvider](nsitemproviderwriting/writabletypeidentifiersforitemprovider-swift.property.md): An array of UTI strings representing the types of data that can be loaded for an item provider.

### Getting the representation visibility specification

The representation visibility specifications control which categories of processes can see the item provider.

- [itemProviderVisibilityForRepresentation(withTypeIdentifier:)](nsitemproviderwriting/itemprovidervisibilityforrepresentation%28withtypeidentifier_%29-swift.type.method.md): Asks the item provider for the default representation visibility specification for the given UTI.
- [itemProviderVisibilityForRepresentation(withTypeIdentifier:)](nsitemproviderwriting/itemprovidervisibilityforrepresentation%28withtypeidentifier_%29-swift.method.md): Asks the item provider for the representation visibility specification for the given UTI.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [NSAttributedString](nsattributedstring.md)
- [NSMutableString](nsmutablestring.md)
- [NSString](nsstring.md)
- [NSURL](nsurl.md)
- [NSUserActivity](nsuseractivity.md)

## See Also

### Constants

- [NSItemProvider.CompletionHandler](nsitemprovider/completionhandler.md): A block that receives the item provider’s data.
- [NSItemProvider.LoadHandler](nsitemprovider/loadhandler.md): A block that loads the item provider’s data and coerces it to the specified type.
- [Options Dictionary Key](options-dictionary-key.md): Keys indicating options to use when generating the item provider’s data.
- [Keys for Items Accessed in JavaScript Code](keys-for-items-accessed-in-javascript-code.md): Keys in property list items that the system recieves from or sends to JavaScript code.
- [errorDomain](nsitemprovider/errordomain.md): The error domain associated with the item provider.
- [NSItemProviderFileOptions](nsitemproviderfileoptions.md): Data-access specifications that declare how to handle items.
- [NSItemProviderReading](nsitemproviderreading.md): The protocol for implementing a class to allow an item provider to create an instance of the class.
- [NSItemProviderRepresentationVisibility](nsitemproviderrepresentationvisibility.md): Specifications that control which categories of processes can see an item.
- [NSItemProvider.ErrorCode](nsitemprovider/errorcode.md): The error codes that describe problems with consuming data from an item provider.

# NSItemProviderWriting (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The protocol for implementing a class to allow an item provider to retrieve data from an instance of the class.

## Declaration

```objectivec
@protocol NSItemProviderWriting <NSObject>
```

<a id="overview"></a>

## Overview

A source app uses an object that conforms to this protocol to initialize an item provider for a copied or dragged item.

## Topics

### Loading data

- [loadDataWithTypeIdentifier:forItemProviderCompletionHandler:](nsitemproviderwriting/loaddata%28withtypeidentifier_foritemprovidercompletionhandler_%29.md): Loads data of a particular type, identified by the given UTI.

### Getting the writable type identifiers

- [writableTypeIdentifiersForItemProvider](nsitemproviderwriting/writabletypeidentifiersforitemprovider-swift.type.property.md): An array of UTI strings representing the types of data that can be loaded for an item provider.
- [writableTypeIdentifiersForItemProvider](nsitemproviderwriting/writabletypeidentifiersforitemprovider-swift.property.md): An array of UTI strings representing the types of data that can be loaded for an item provider.

### Getting the representation visibility specification

The representation visibility specifications control which categories of processes can see the item provider.

- [itemProviderVisibilityForRepresentationWithTypeIdentifier:](nsitemproviderwriting/itemprovidervisibilityforrepresentation%28withtypeidentifier_%29-swift.type.method.md): Asks the item provider for the default representation visibility specification for the given UTI.
- [itemProviderVisibilityForRepresentationWithTypeIdentifier:](nsitemproviderwriting/itemprovidervisibilityforrepresentation%28withtypeidentifier_%29-swift.method.md): Asks the item provider for the representation visibility specification for the given UTI.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [NSAttributedString](nsattributedstring.md)
- [NSString](nsstring.md)
- [NSURL](nsurl.md)
- [NSUserActivity](nsuseractivity.md)

## See Also

### Constants

- [NSItemProviderCompletionHandler](nsitemprovider/completionhandler.md): A block that receives the item provider’s data.
- [NSItemProviderLoadHandler](nsitemprovider/loadhandler.md): A block that loads the item provider’s data and coerces it to the specified type.
- [Options Dictionary Key](options-dictionary-key.md): Keys indicating options to use when generating the item provider’s data.
- [Keys for Items Accessed in JavaScript Code](keys-for-items-accessed-in-javascript-code.md): Keys in property list items that the system recieves from or sends to JavaScript code.
- [NSItemProviderErrorDomain](nsitemprovider/errordomain.md): The error domain associated with the item provider.
- [NSItemProviderFileOptions](nsitemproviderfileoptions.md): Data-access specifications that declare how to handle items.
- [NSItemProviderReading](nsitemproviderreading.md): The protocol for implementing a class to allow an item provider to create an instance of the class.
- [NSItemProviderRepresentationVisibility](nsitemproviderrepresentationvisibility.md): Specifications that control which categories of processes can see an item.
- [NSItemProviderErrorCode](nsitemprovider/errorcode.md): The error codes that describe problems with consuming data from an item provider.
