> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidtilt

# kIOVideoFeatureControlClassIDTilt

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOVideoFeatureControlClassIDTilt = 'tilt'
```

<a id="discussion"></a>

## Discussion

A IOVideoFeatureControl that controls a tilt mechanism. Positive values mean updwards, negative values means downwards. The units for the control's absolute value are degrees (\\xB0).
