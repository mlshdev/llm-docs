> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordkeyvalueiterator/next()](https://developer.apple.com/documentation/cloudkit/ckrecordkeyvalueiterator/next())

# next()

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+

Advances the iterator and returns the next key-value pair from the record.

## Declaration

```swift
mutating func next() -> (CKRecord.FieldKey, any CKRecordValueProtocol)?
```

<a id="return-value"></a>

## Return Value

The next key-value pair from the record, or `nil` if there are no more keys.
