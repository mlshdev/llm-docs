> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectoryextensioncontext/removeblockingentry(withphonenumber:)](https://developer.apple.com/documentation/callkit/cxcalldirectoryextensioncontext/removeblockingentry(withphonenumber:))

# removeBlockingEntry(withPhoneNumber:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Removes a blocking entry that contains the specified phone number.

## Declaration

```swift
func removeBlockingEntry(withPhoneNumber phoneNumber: CXCallDirectoryPhoneNumber)
```

## Parameters

- `phoneNumber`: The phone number to remove.

<a id="Discussion"></a>

## Discussion

If [isIncremental](isincremental.md) is [true](https://developer.apple.com/documentation/swift/true), the request provides incremental entries and may use this method to remove previously added blocking entries. This method removes all blocking entries that contain the specified phone number, even if multiple blocking entries with different labels are present for a single phone number.

Don’t call this method if [isIncremental](isincremental.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Removing Entries

- [removeAllBlockingEntries()](removeallblockingentries%28%29.md): Removes all stored blocking entries.
- [removeAllIdentificationEntries()](removeallidentificationentries%28%29.md): Removes all stored identification entries.
- [removeIdentificationEntry(withPhoneNumber:)](removeidentificationentry%28withphonenumber_%29.md): Removes an identification entry that contains the specified phone number.

# removeBlockingEntryWithPhoneNumber: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Removes a blocking entry that contains the specified phone number.

## Declaration

```objectivec
- (void) removeBlockingEntryWithPhoneNumber:(CXCallDirectoryPhoneNumber) phoneNumber;
```

## Parameters

- `phoneNumber`: The phone number to remove.

<a id="Discussion"></a>

## Discussion

If [incremental](isincremental.md) is [true](https://developer.apple.com/documentation/swift/true), the request provides incremental entries and may use this method to remove previously added blocking entries. This method removes all blocking entries that contain the specified phone number, even if multiple blocking entries with different labels are present for a single phone number.

Don’t call this method if [incremental](isincremental.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Removing Entries

- [removeAllBlockingEntries](removeallblockingentries%28%29.md): Removes all stored blocking entries.
- [removeAllIdentificationEntries](removeallidentificationentries%28%29.md): Removes all stored identification entries.
- [removeIdentificationEntryWithPhoneNumber:](removeidentificationentry%28withphonenumber_%29.md): Removes an identification entry that contains the specified phone number.
