> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646638-anonymous/kionetworkfeaturenobsdwait

# kIONetworkFeatureNoBSDWait

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIONetworkFeatureNoBSDWait = 0x001
```

<a id="discussion"></a>

## Discussion

Set this bit in the value returned by getFeatures() to disable the automatic wait for "IOBSD" resource by the IONetworkController::start() method.
