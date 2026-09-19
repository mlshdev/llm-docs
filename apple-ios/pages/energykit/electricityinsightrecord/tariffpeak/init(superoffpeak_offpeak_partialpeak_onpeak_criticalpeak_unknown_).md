> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityinsightrecord/tariffpeak/init(superoffpeak:offpeak:partialpeak:onpeak:criticalpeak:unknown:)

# init(superOffPeak:offPeak:partialPeak:onPeak:criticalPeak:unknown:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Creates an instance of the energy peak data.

## Declaration

```swift
init(superOffPeak: Measure?, offPeak: Measure?, partialPeak: Measure?, onPeak: Measure?, criticalPeak: Measure?, unknown: Measure?)
```

## Parameters

- `superOffPeak`: The duration of energy or runtime data during super off-peak hours.
- `offPeak`: The duration of energy or runtime data during off-peak hours.
- `partialPeak`: The duration of energy or runtime data during partial peak hours.
- `onPeak`: The duration of energy or runtime data during peak hours.
- `criticalPeak`: The duration of energy or runtime data during critical peak hours.
- `unknown`: The unknown duration of energy or runtime data.
