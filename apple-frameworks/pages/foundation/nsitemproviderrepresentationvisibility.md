> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemproviderrepresentationvisibility](https://developer.apple.com/documentation/foundation/nsitemproviderrepresentationvisibility)

# NSItemProviderRepresentationVisibility (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Specifications that control which categories of processes can see an item.

## Declaration

```swift
enum NSItemProviderRepresentationVisibility
```

## Topics

### Enumeration Cases

- [NSItemProviderRepresentationVisibility.all](nsitemproviderrepresentationvisibility/all.md): A representation visibility specification conferring item visibility to all processes.
- [NSItemProviderRepresentationVisibility.group](nsitemproviderrepresentationvisibility/group.md): A representation visibility specification confining item visibility to the app’s app group.
- [NSItemProviderRepresentationVisibility.ownProcess](nsitemproviderrepresentationvisibility/ownprocess.md): A representation visibility specification confining item visibility to the app that is the source of the item.
- [NSItemProviderRepresentationVisibility.team](nsitemproviderrepresentationvisibility/team.md): A representation visibility specification confining item visibility to processes created by the app’s development team.

### Initializers

- [init(rawValue:)](nsitemproviderrepresentationvisibility/init%28rawvalue_%29.md)

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

- [NSItemProvider.CompletionHandler](nsitemprovider/completionhandler.md): A block that receives the item provider’s data.
- [NSItemProvider.LoadHandler](nsitemprovider/loadhandler.md): A block that loads the item provider’s data and coerces it to the specified type.
- [Options Dictionary Key](options-dictionary-key.md): Keys indicating options to use when generating the item provider’s data.
- [Keys for Items Accessed in JavaScript Code](keys-for-items-accessed-in-javascript-code.md): Keys in property list items that the system recieves from or sends to JavaScript code.
- [errorDomain](nsitemprovider/errordomain.md): The error domain associated with the item provider.
- [NSItemProviderFileOptions](nsitemproviderfileoptions.md): Data-access specifications that declare how to handle items.
- [NSItemProviderReading](nsitemproviderreading.md): The protocol for implementing a class to allow an item provider to create an instance of the class.
- [NSItemProviderWriting](nsitemproviderwriting.md): The protocol for implementing a class to allow an item provider to retrieve data from an instance of the class.
- [NSItemProvider.ErrorCode](nsitemprovider/errorcode.md): The error codes that describe problems with consuming data from an item provider.

# NSItemProviderRepresentationVisibility (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Specifications that control which categories of processes can see an item.

## Declaration

```objectivec
enum NSItemProviderRepresentationVisibility : NSInteger;
```

## Topics

### Enumeration Cases

- [NSItemProviderRepresentationVisibilityAll](nsitemproviderrepresentationvisibility/all.md): A representation visibility specification conferring item visibility to all processes.
- [NSItemProviderRepresentationVisibilityGroup](nsitemproviderrepresentationvisibility/group.md): A representation visibility specification confining item visibility to the app’s app group.
- [NSItemProviderRepresentationVisibilityOwnProcess](nsitemproviderrepresentationvisibility/ownprocess.md): A representation visibility specification confining item visibility to the app that is the source of the item.
- [NSItemProviderRepresentationVisibilityTeam](nsitemproviderrepresentationvisibility/team.md): A representation visibility specification confining item visibility to processes created by the app’s development team.

## See Also

### Constants

- [NSItemProviderCompletionHandler](nsitemprovider/completionhandler.md): A block that receives the item provider’s data.
- [NSItemProviderLoadHandler](nsitemprovider/loadhandler.md): A block that loads the item provider’s data and coerces it to the specified type.
- [Options Dictionary Key](options-dictionary-key.md): Keys indicating options to use when generating the item provider’s data.
- [Keys for Items Accessed in JavaScript Code](keys-for-items-accessed-in-javascript-code.md): Keys in property list items that the system recieves from or sends to JavaScript code.
- [NSItemProviderErrorDomain](nsitemprovider/errordomain.md): The error domain associated with the item provider.
- [NSItemProviderFileOptions](nsitemproviderfileoptions.md): Data-access specifications that declare how to handle items.
- [NSItemProviderReading](nsitemproviderreading.md): The protocol for implementing a class to allow an item provider to create an instance of the class.
- [NSItemProviderWriting](nsitemproviderwriting.md): The protocol for implementing a class to allow an item provider to retrieve data from an instance of the class.
- [NSItemProviderErrorCode](nsitemprovider/errorcode.md): The error codes that describe problems with consuming data from an item provider.
