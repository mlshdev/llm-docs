> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensorkit/sracousticsettings/headphonesafetyaudiolevel-9ziqo

# headphoneSafetyAudioLevel

**Interface language:** Objective-C

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSNumber * headphoneSafetyAudioLevel;
```

<a id="discussion"></a>

## Discussion

Reduce Loud Audio

iPhone can analyze headphone audio and reduce any sound that is over a set decibel level. A nil value means the setting is disabled. If the setting is enabled, the property will hold the decibel value that headphone audio sound volume is not to exceed.
