> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectoryextensioncontext/removeidentificationentry(withphonenumber:)](https://developer.apple.com/documentation/callkit/cxcalldirectoryextensioncontext/removeidentificationentry(withphonenumber:))

# removeIdentificationEntry(withPhoneNumber:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Removes an identification entry that contains the specified phone number.

## Declaration

```swift
func removeIdentificationEntry(withPhoneNumber phoneNumber: CXCallDirectoryPhoneNumber)
```

## Parameters

- `phoneNumber`: The phone number to remove.

<a id="Discussion"></a>

## Discussion

If [isIncremental](isincremental.md) is [true](https://developer.apple.com/documentation/swift/true), the request provides incremental entries and may use this method to remove previously added identification entries. This method removes all identification entries that contain the specified phone number, even if multiple identification entries with different labels are present for a single phone number.

Don’t call this method if [isIncremental](isincremental.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Removing Entries

- [removeAllBlockingEntries()](removeallblockingentries%28%29.md): Removes all stored blocking entries.
- [removeAllIdentificationEntries()](removeallidentificationentries%28%29.md): Removes all stored identification entries.
- [removeBlockingEntry(withPhoneNumber:)](removeblockingentry%28withphonenumber_%29.md): Removes a blocking entry that contains the specified phone number.

# removeIdentificationEntryWithPhoneNumber: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Removes an identification entry that contains the specified phone number.

## Declaration

```objectivec
- (void) removeIdentificationEntryWithPhoneNumber:(CXCallDirectoryPhoneNumber) phoneNumber;
```

## Parameters

- `phoneNumber`: The phone number to remove.

<a id="Discussion"></a>

## Discussion

If [incremental](isincremental.md) is [true](https://developer.apple.com/documentation/swift/true), the request provides incremental entries and may use this method to remove previously added identification entries. This method removes all identification entries that contain the specified phone number, even if multiple identification entries with different labels are present for a single phone number.

Don’t call this method if [incremental](isincremental.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Removing Entries

- [removeAllBlockingEntries](removeallblockingentries%28%29.md): Removes all stored blocking entries.
- [removeAllIdentificationEntries](removeallidentificationentries%28%29.md): Removes all stored identification entries.
- [removeBlockingEntryWithPhoneNumber:](removeblockingentry%28withphonenumber_%29.md): Removes a blocking entry that contains the specified phone number.
