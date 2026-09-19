> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_exchangedata_t/file2

# file2 (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The second file involved in the data exchange.

## Declaration

```swift
var file2: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [file1](file1.md): The first file involved in the data exchange.
- [reserved](reserved.md): An unused field reserved for future use.

# file2 (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The second file involved in the data exchange.

## Declaration

```objectivec
es_file_t * file2;
```

## See Also

### Inspecting Event Properties

- [file1](file1.md): The first file involved in the data exchange.
- [reserved](reserved.md): An unused field reserved for future use.
