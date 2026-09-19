> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopspoweradaptercurrentkey

# kIOPSPowerAdapterCurrentKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

This key refers to the current of the external AC power adapter attached to a portable. The value associated with this key is a CFNumberRef kCFNumberIntType integer value, in units of mAmps.

## Declaration

```objectivec
#define kIOPSPowerAdapterCurrentKey
```

<a id="discussion"></a>

## Discussion

This key may be present in the dictionary returned from [IOPSCopyExternalPowerAdapterDetails](1523866-iopscopyexternalpoweradapterdeta.md) This key might not be defined in the adapter details dictionary.
