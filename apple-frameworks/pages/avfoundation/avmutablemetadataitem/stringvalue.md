> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/stringvalue

# stringValue

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The value of the metadata item as a string.

## Declaration

```swift
var stringValue: String? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the system can’t represent the value as a string.

## See Also

### Accessing values

- [value](value.md): The value for the mutable metadata item.
- [extraAttributes](extraattributes.md): A dictionary of additional attributes for a metadata item.
- [dataType](datatype.md): The data type of the metadata item’s value.
- [numberValue](numbervalue.md): The value of the metadata item as a number.
- [dateValue](datevalue.md): The value of the metadata item as a date.
- [dataValue](datavalue.md): The value of the metadata item as a data value.
