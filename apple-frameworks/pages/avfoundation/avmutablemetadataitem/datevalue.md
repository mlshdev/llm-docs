> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/datevalue

# dateValue

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The value of the metadata item as a date.

## Declaration

```swift
var dateValue: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the system can’t represent the value as a date.

## See Also

### Accessing values

- [value](value.md): The value for the mutable metadata item.
- [extraAttributes](extraattributes.md): A dictionary of additional attributes for a metadata item.
- [dataType](datatype.md): The data type of the metadata item’s value.
- [stringValue](stringvalue.md): The value of the metadata item as a string.
- [numberValue](numbervalue.md): The value of the metadata item as a number.
- [dataValue](datavalue.md): The value of the metadata item as a data value.
