> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidpan](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidpan)

# kIOVideoFeatureControlClassIDPan

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOVideoFeatureControlClassIDPan = 'pan '
```

<a id="discussion"></a>

## Discussion

A IOVideoFeatureControl that controls a panning mechanism. Positive values mean clockwise, negative values means counterclockwise. The units for the control's absolute value are degrees (\\xB0).
