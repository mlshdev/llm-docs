> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1551508-network/kionetworkfeaturenobsdwait

# kIONetworkFeatureNoBSDWait

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kIONetworkFeatureNoBSDWait = 0x001
```

<a id="discussion"></a>

## Discussion

Set this bit in the value returned by getFeatures() to disable the automatic wait for "IOBSD" resource by the IONetworkController::start() method.
