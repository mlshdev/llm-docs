> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnerror/affectedrecordidentifiers](https://developer.apple.com/documentation/contacts/cnerror/affectedrecordidentifiers)

# affectedRecordIdentifiers

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of strings that uniquely identify the records affected by the error.

## Declaration

```swift
var affectedRecordIdentifiers: [String]? { get }
```

## See Also

### Error details

- [affectedRecords](affectedrecords.md): An array of record objects for which the error applies.
- [CNError.Code](code.md): Error codes that the system may return when you use Contacts framework methods.
- [keyPaths](keypaths.md): An array of key paths associated with the error.
