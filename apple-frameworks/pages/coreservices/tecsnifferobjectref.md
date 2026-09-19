> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/tecsnifferobjectref

# TECSnifferObjectRef

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines a reference to an opaque sniffer object.

## Declaration

```objectivec
typedef struct OpaqueTECSnifferObjectRef *TECSnifferObjectRef;
```

<a id="discussion"></a>

## Discussion

When analyzing text for possible encodings, the Text Encoding Converter requires a reference to a sniffer object that specifies what types of encodings can be detected. You receive this reference when calling the function [TECCreateSniffer](1571832-teccreatesniffer.md). A sniffer object reference is defined by the `TECSnifferObjectRef` data type. The structure of the `OpaqueTECObjectRef` data type is private, and a sniffer object is not accessible directly.
