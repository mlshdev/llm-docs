> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646355-anonymous/kusboptionbitopenexclusivelybit

# kUSBOptionBitOpenExclusivelyBit

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kUSBOptionBitOpenExclusivelyBit = 17
```

<a id="discussion"></a>

## Discussion

Used in open()'ing the IOUSBDevice or IOUSBInterface by the corresponding user client. Only 1 user client can have exclusive access to those objects
