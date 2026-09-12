> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1646638-anonymous/kionetworkfeaturenobsdwait](https://developer.apple.com/documentation/kernel/1646638-anonymous/kionetworkfeaturenobsdwait)

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
