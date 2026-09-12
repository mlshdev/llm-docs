> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopspoweradapterfamilykey](https://developer.apple.com/documentation/iokit/kiopspoweradapterfamilykey)

# kIOPSPowerAdapterFamilyKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The power adapter's family code. The value associated with this key is a CFNumberRef kCFNumberIntType integer value

## Declaration

```objectivec
#define kIOPSPowerAdapterFamilyKey
```

<a id="discussion"></a>

## Discussion

This key may be present in the dictionary returned from [IOPSCopyExternalPowerAdapterDetails](1523866-iopscopyexternalpoweradapterdeta.md) This key might not be defined in the adapter details dictionary.
