> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/pmprinter

# PMPrinter (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

An opaque type that represents a printer.

## Declaration

```swift
typealias PMPrinter = OpaquePointer
```

<a id="discussion"></a>

## Discussion

You typically obtain a printer object using the function [PMSessionGetCurrentPrinter(\_:\_:)](1458998-pmsessiongetcurrentprinter.md) or [PMServerCreatePrinterList(\_:\_:)](1459953-pmservercreateprinterlist.md).

# PMPrinter (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

An opaque type that represents a printer.

## Declaration

```objectivec
typedef struct OpaquePMPrinter *PMPrinter;
```

<a id="discussion"></a>

## Discussion

You typically obtain a printer object using the function [PMSessionGetCurrentPrinter](1458998-pmsessiongetcurrentprinter.md) or [PMServerCreatePrinterList](1459953-pmservercreateprinterlist.md).
