> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/stringwithindex:error:](https://developer.apple.com/documentation/iousbhost/iousbhostobject/stringwithindex:error:)

# stringWithIndex:error:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Retrieves an English-language string from a string descriptor.

## Declaration

```objectivec
- (const NSString *) stringWithIndex:(NSUInteger) index error:(NSError **) error;
```

## Parameters

- `index`: The descriptor index value that is the low byte of `wValue` of the `SET_DESCRIPTOR` control request (See USB 3.2, 9.4.8.).
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.

<a id="return-value"></a>

## Return Value

The string from the specified string descriptor.

## See Also

### Retrieving Base Class Descriptors

- [Parsing USB Descriptors](../parsing-usb-descriptors.md): Extract information from various USB descriptors using helper methods.
- [descriptorWithType:length:index:languageID:requestType:requestRecipient:error:](descriptorwithtype_length_index_languageid_requesttype_requestrecipient_error_.md): Retrieves a descriptor from the cache or the device.
- [descriptorWithType:length:error:](descriptorwithtype_length_error_.md): Retrieves a descriptor with default arguments from the cache or the device.
- [descriptorWithType:length:index:languageID:error:](descriptorwithtype_length_index_languageid_error_.md): Retrieves a string descriptor from the cache or the device.
- [stringWithIndex:languageID:error:](stringwithindex_languageid_error_.md): Retrieves a string from a string descriptor.
