> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/pmpreset](https://developer.apple.com/documentation/applicationservices/pmpreset)

# PMPreset (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

An opaque type that stores information about a named preset available for a print job.

## Declaration

```swift
typealias PMPreset = OpaquePointer
```

<a id="discussion"></a>

## Discussion

Your application uses a preset object to identify a named preset in the Print dialog. You typically obtain an instance of this type using the function [PMPrinterCopyPresets(\_:\_:)](1459117-pmprintercopypresets.md).

# PMPreset (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

An opaque type that stores information about a named preset available for a print job.

## Declaration

```objectivec
typedef struct OpaquePMPreset *PMPreset;
```

<a id="discussion"></a>

## Discussion

Your application uses a preset object to identify a named preset in the Print dialog. You typically obtain an instance of this type using the function [PMPrinterCopyPresets](1459117-pmprintercopypresets.md).
