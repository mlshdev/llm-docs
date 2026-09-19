> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidbacklightcompensation

# kIOVideoFeatureControlClassIDBacklightCompensation

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOVideoFeatureControlClassIDBacklightCompensation = 'bklt'
```

<a id="discussion"></a>

## Discussion

A IOVideoFeatureControl that controls the amount of backlight compensation to apply. A low number indicates the least amount of backlight compensation. The units for the control's absolute value are are undefined.
