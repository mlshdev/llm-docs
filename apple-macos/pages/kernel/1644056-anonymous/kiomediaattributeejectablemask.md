> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1644056-anonymous/kiomediaattributeejectablemask

# kIOMediaAttributeEjectableMask

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOMediaAttributeEjectableMask = 0x00000001
```

<a id="discussion"></a>

## Discussion

Indicates whether the media is ejectable from the drive mechanism under software control. Implies kIOMediaAttributeRemovableMask.
