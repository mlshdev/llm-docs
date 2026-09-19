> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidpowerlinefrequency

# kIOVideoFeatureControlClassIDPowerLineFrequency

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOVideoFeatureControlClassIDPowerLineFrequency = 'pwfq'
```

<a id="discussion"></a>

## Discussion

A IOVideoFeatureControl to specify the power line frequency to properly implement anti-flicker processing. The units for the contorl's absolute value are hertz (Hz).
