> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopspoweradaptersourcekey](https://developer.apple.com/documentation/iokit/kiopspoweradaptersourcekey)

# kIOPSPowerAdapterSourceKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

This key refers to the source of the power. The value associated with this key is a CFNumberRef kCFNumberIntType integer value.

## Declaration

```objectivec
#define kIOPSPowerAdapterSourceKey
```

<a id="discussion"></a>

## Discussion

This key may be present in the dictionary returned from [IOPSCopyExternalPowerAdapterDetails](1523866-iopscopyexternalpoweradapterdeta.md) This key might not be defined in the adapter details dictionary.
