> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/encodesystemfields(with:)](https://developer.apple.com/documentation/cloudkit/ckrecord/encodesystemfields(with:))

# encodeSystemFields(with:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Encodes the record’s system fields using the specified archiver.

## Declaration

```swift
func encodeSystemFields(with coder: NSCoder)
```

## Parameters

- `coder`: An archiver object.

<a id="discussion"></a>

## Discussion

Use this method to encode the record’s metadata that CloudKit provides. Every record has keys that the system defines that correspond to record metadata, such as the record ID, record type, creation date, and so on. This method encodes those keys in the specified archiver. This method doesn’t include any keys you add to the record. It also doesn’t encode the keys that the [changedKeys](changedkeys.md) method returns.

You might use this method when you want to store only the system metadata because you store the actual record data elsewhere.

# encodeSystemFieldsWithCoder: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Encodes the record’s system fields using the specified archiver.

## Declaration

```objectivec
- (void) encodeSystemFieldsWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: An archiver object.

<a id="discussion"></a>

## Discussion

Use this method to encode the record’s metadata that CloudKit provides. Every record has keys that the system defines that correspond to record metadata, such as the record ID, record type, creation date, and so on. This method encodes those keys in the specified archiver. This method doesn’t include any keys you add to the record. It also doesn’t encode the keys that the [changedKeys](changedkeys.md) method returns.

You might use this method when you want to store only the system metadata because you store the actual record data elsewhere.
