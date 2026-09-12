> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectoryextensioncontext/removeallblockingentries()](https://developer.apple.com/documentation/callkit/cxcalldirectoryextensioncontext/removeallblockingentries())

# removeAllBlockingEntries() (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Removes all stored blocking entries.

## Declaration

```swift
func removeAllBlockingEntries()
```

<a id="Discussion"></a>

## Discussion

If [isIncremental](isincremental.md) is [true](https://developer.apple.com/documentation/swift/true), the request provides incremental entries and may use this method to remove all previously added blocking entries. Don’t call this method if [isIncremental](isincremental.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Removing Entries

- [removeAllIdentificationEntries()](removeallidentificationentries%28%29.md): Removes all stored identification entries.
- [removeBlockingEntry(withPhoneNumber:)](removeblockingentry%28withphonenumber_%29.md): Removes a blocking entry that contains the specified phone number.
- [removeIdentificationEntry(withPhoneNumber:)](removeidentificationentry%28withphonenumber_%29.md): Removes an identification entry that contains the specified phone number.

# removeAllBlockingEntries (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Removes all stored blocking entries.

## Declaration

```objectivec
- (void) removeAllBlockingEntries;
```

<a id="Discussion"></a>

## Discussion

If [incremental](isincremental.md) is [true](https://developer.apple.com/documentation/swift/true), the request provides incremental entries and may use this method to remove all previously added blocking entries. Don’t call this method if [incremental](isincremental.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Removing Entries

- [removeAllIdentificationEntries](removeallidentificationentries%28%29.md): Removes all stored identification entries.
- [removeBlockingEntryWithPhoneNumber:](removeblockingentry%28withphonenumber_%29.md): Removes a blocking entry that contains the specified phone number.
- [removeIdentificationEntryWithPhoneNumber:](removeidentificationentry%28withphonenumber_%29.md): Removes an identification entry that contains the specified phone number.
