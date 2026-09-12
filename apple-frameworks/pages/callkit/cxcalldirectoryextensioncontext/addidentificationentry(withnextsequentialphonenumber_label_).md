> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectoryextensioncontext/addidentificationentry(withnextsequentialphonenumber:label:)](https://developer.apple.com/documentation/callkit/cxcalldirectoryextensioncontext/addidentificationentry(withnextsequentialphonenumber:label:))

# addIdentificationEntry(withNextSequentialPhoneNumber:label:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

Adds an identification entry with the specified phone number and label.

## Declaration

```swift
func addIdentificationEntry(withNextSequentialPhoneNumber phoneNumber: CXCallDirectoryPhoneNumber, label: String)
```

## Parameters

- `phoneNumber`: The phone number to be identified.
- `label`: The label to identify the phone number.

## Mentioned In

- [Identifying and blocking calls](../identifying-and-blocking-calls.md)

<a id="Discussion"></a>

## Discussion

When a phone number has an identification entry, incoming calls from that phone number will display its associated label to the user.

Call this method on the instance of [CXCallDirectoryExtensionContext](../cxcalldirectoryextensioncontext.md) passed as an argument to the block parameter of the  [CXCallDirectoryProvider](../cxcalldirectoryprovider.md) instance method [beginRequest(with:)](../cxcalldirectoryprovider/beginrequest%28with_%29.md).

## See Also

### Adding Entries

- [addBlockingEntry(withNextSequentialPhoneNumber:)](addblockingentry%28withnextsequentialphonenumber_%29.md): Adds a blocking entry with the specified phone number.

# addIdentificationEntryWithNextSequentialPhoneNumber:label: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Adds an identification entry with the specified phone number and label.

## Declaration

```objectivec
- (void) addIdentificationEntryWithNextSequentialPhoneNumber:(CXCallDirectoryPhoneNumber) phoneNumber label:(NSString *) label;
```

## Parameters

- `phoneNumber`: The phone number to be identified.
- `label`: The label to identify the phone number.

## Mentioned In

- [Identifying and blocking calls](../identifying-and-blocking-calls.md)

<a id="Discussion"></a>

## Discussion

When a phone number has an identification entry, incoming calls from that phone number will display its associated label to the user.

Call this method on the instance of [CXCallDirectoryExtensionContext](../cxcalldirectoryextensioncontext.md) passed as an argument to the block parameter of the  [CXCallDirectoryProvider](../cxcalldirectoryprovider.md) instance method [beginRequestWithExtensionContext:](../cxcalldirectoryprovider/beginrequest%28with_%29.md).

## See Also

### Adding Entries

- [addBlockingEntryWithNextSequentialPhoneNumber:](addblockingentry%28withnextsequentialphonenumber_%29.md): Adds a blocking entry with the specified phone number.
