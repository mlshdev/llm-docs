> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_exchangedata_t/file1

# file1 (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The first file involved in the data exchange.

## Declaration

```swift
var file1: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [file2](file2.md): The second file involved in the data exchange.
- [reserved](reserved.md): An unused field reserved for future use.

# file1 (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The first file involved in the data exchange.

## Declaration

```objectivec
es_file_t * file1;
```

## See Also

### Inspecting Event Properties

- [file2](file2.md): The second file involved in the data exchange.
- [reserved](reserved.md): An unused field reserved for future use.
