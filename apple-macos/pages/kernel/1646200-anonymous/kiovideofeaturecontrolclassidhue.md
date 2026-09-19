> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidhue

# kIOVideoFeatureControlClassIDHue

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOVideoFeatureControlClassIDHue = 'hue '
```

<a id="discussion"></a>

## Discussion

A IOVideoFeatureControl that controls the hue offset. Positive values mean counterclockwise, negative values means clockwise on a vector scope. The units for the control's absolute value are degrees (\\xB0).
