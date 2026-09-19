> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidhue

# kIOVideoFeatureControlClassIDHue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

## Declaration

```objectivec
kIOVideoFeatureControlClassIDHue = 'hue '
```

<a id="discussion"></a>

## Discussion

A IOVideoFeatureControl that controls the hue offset. Positive values mean counterclockwise, negative values means clockwise on a vector scope. The units for the control's absolute value are degrees (\\xB0).
