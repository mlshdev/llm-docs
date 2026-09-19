> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohidelement/1426877-setcalibration

# setCalibration

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual void setCalibration(UInt32 min, UInt32 max, UInt32 saturationMin, UInt32 saturationMax, UInt32 deadZoneMin, UInt32 deadZoneMax, IOFixed granularity);
```
