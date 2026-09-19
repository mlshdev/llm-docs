> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/consttexttounicodeinfo

# ConstTextToUnicodeInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines a constant text to Unicode converter object.

## Declaration

```objectivec
typedef const TextToUnicodeInfo ConstTextToUnicodeInfo;
```

<a id="discussion"></a>

## Discussion

The  [TruncateForTextToUnicode](1433518-truncatefortexttounicode.md) function requires a Unicode converter object as a parameter. This function does not modify the contents of the private structure to which the Unicode converter object refers, so it uses the constant Unicode converter object defined by the `ConstTextToUnicodeInfo` data type.
