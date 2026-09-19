> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1567059-iomediaattributemask/kiomediaattributeejectablemask

# kIOMediaAttributeEjectableMask

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
kIOMediaAttributeEjectableMask = 0x00000001
```

<a id="discussion"></a>

## Discussion

Indicates whether the media is ejectable from the drive mechanism under software control. Implies kIOMediaAttributeRemovableMask.
