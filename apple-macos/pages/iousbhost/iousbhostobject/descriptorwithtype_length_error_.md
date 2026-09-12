> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/descriptorwithtype:length:error:](https://developer.apple.com/documentation/iousbhost/iousbhostobject/descriptorwithtype:length:error:)

# descriptorWithType:length:error:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Retrieves a descriptor with default arguments from the cache or the device.

## Declaration

```objectivec
- (const IOUSBDescriptor *) descriptorWithType:(tIOUSBDescriptorType) type length:(NSUInteger *) length error:(NSError **) error;
```

## Parameters

- `type`: The type of the descriptor to find.
- `length`: A reference to an [NSUInteger](https://developer.apple.com/documentation/objectivec/nsuinteger) that updates with the length of the descriptor. You can use `wLength` when searching for variable-length configuration or BOS descriptors, or when searching for nonstandard descriptor types.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.

<a id="return-value"></a>

## Return Value

A pointer to the cached descriptor, or `nil` if no matching descriptor returns.

<a id="Discussion"></a>

## Discussion

This method searches the descriptor cache for the descriptor that matches the input arguments. If the descriptor isn’t in the cache, the method issues a `GET_DESCRIPTOR` control request (See USB 3.2, 9.4.3.) to retrieve the descriptor from the device. If the device request is successful, the method adds the retrieved descriptor to the cache.

## See Also

### Retrieving Base Class Descriptors

- [Parsing USB Descriptors](../parsing-usb-descriptors.md): Extract information from various USB descriptors using helper methods.
- [descriptorWithType:length:index:languageID:requestType:requestRecipient:error:](descriptorwithtype_length_index_languageid_requesttype_requestrecipient_error_.md): Retrieves a descriptor from the cache or the device.
- [descriptorWithType:length:index:languageID:error:](descriptorwithtype_length_index_languageid_error_.md): Retrieves a string descriptor from the cache or the device.
- [stringWithIndex:languageID:error:](stringwithindex_languageid_error_.md): Retrieves a string from a string descriptor.
- [stringWithIndex:error:](stringwithindex_error_.md): Retrieves an English-language string from a string descriptor.
