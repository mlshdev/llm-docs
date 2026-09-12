> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectoryextensioncontext/addblockingentry(withnextsequentialphonenumber:)](https://developer.apple.com/documentation/callkit/cxcalldirectoryextensioncontext/addblockingentry(withnextsequentialphonenumber:))

# addBlockingEntry(withNextSequentialPhoneNumber:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

Adds a blocking entry with the specified phone number.

## Declaration

```swift
func addBlockingEntry(withNextSequentialPhoneNumber phoneNumber: CXCallDirectoryPhoneNumber)
```

## Parameters

- `phoneNumber`: The phone number to be blocked.

## Mentioned In

- [Identifying and blocking calls](../identifying-and-blocking-calls.md)

<a id="Discussion"></a>

## Discussion

When a phone number is blocked, the system telephony provider will disallow incoming calls from that phone number without displaying them to the user.

Call this method on the instance of [CXCallDirectoryExtensionContext](../cxcalldirectoryextensioncontext.md) passed as an argument to the block parameter of the  [CXCallDirectoryProvider](../cxcalldirectoryprovider.md) instance method [beginRequest(with:)](../cxcalldirectoryprovider/beginrequest%28with_%29.md).

## See Also

### Adding Entries

- [addIdentificationEntry(withNextSequentialPhoneNumber:label:)](addidentificationentry%28withnextsequentialphonenumber_label_%29.md): Adds an identification entry with the specified phone number and label.

# addBlockingEntryWithNextSequentialPhoneNumber: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Adds a blocking entry with the specified phone number.

## Declaration

```objectivec
- (void) addBlockingEntryWithNextSequentialPhoneNumber:(CXCallDirectoryPhoneNumber) phoneNumber;
```

## Parameters

- `phoneNumber`: The phone number to be blocked.

## Mentioned In

- [Identifying and blocking calls](../identifying-and-blocking-calls.md)

<a id="Discussion"></a>

## Discussion

When a phone number is blocked, the system telephony provider will disallow incoming calls from that phone number without displaying them to the user.

Call this method on the instance of [CXCallDirectoryExtensionContext](../cxcalldirectoryextensioncontext.md) passed as an argument to the block parameter of the  [CXCallDirectoryProvider](../cxcalldirectoryprovider.md) instance method [beginRequestWithExtensionContext:](../cxcalldirectoryprovider/beginrequest%28with_%29.md).

## See Also

### Adding Entries

- [addIdentificationEntryWithNextSequentialPhoneNumber:label:](addidentificationentry%28withnextsequentialphonenumber_label_%29.md): Adds an identification entry with the specified phone number and label.
