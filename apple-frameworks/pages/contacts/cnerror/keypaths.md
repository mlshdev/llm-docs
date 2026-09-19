> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contacts/cnerror/keypaths

# keyPaths

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of key paths associated with the error.

## Declaration

```swift
var keyPaths: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

For validation errors, this contains key paths to specific object properties.

## See Also

### Error details

- [affectedRecordIdentifiers](affectedrecordidentifiers.md): An array of strings that uniquely identify the records affected by the error.
- [affectedRecords](affectedrecords.md): An array of record objects for which the error applies.
- [CNError.Code](code.md): Error codes that the system may return when you use Contacts framework methods.
