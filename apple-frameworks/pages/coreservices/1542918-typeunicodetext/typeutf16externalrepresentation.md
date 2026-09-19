> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1542918-typeunicodetext/typeutf16externalrepresentation

# typeUTF16ExternalRepresentation

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
typeUTF16ExternalRepresentation = 'ut16'
```

<a id="discussion"></a>

## Discussion

Unicode text in 16-bit external representation with byte-order-mark (BOM).

Guarantees that either there is a BOM or the data is in UTF-16BE.
