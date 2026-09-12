> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioservicesplayalertsoundwithdetails](https://developer.apple.com/documentation/audiotoolbox/audioservicesplayalertsoundwithdetails)

# AudioServicesPlayAlertSoundWithDetails

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** visionOS 26.0+

## Declaration

```objectivec
extern void AudioServicesPlayAlertSoundWithDetails(SystemSoundID inSystemSoundID, CFDictionaryRef inDetails, void (^inCompletionBlock)());
```

## Parameters

- `inSystemSoundID`: A SystemSoundID for the system sound server to play with alert sound behavior.
- `inDetails`: A set of details as described above.
- `inCompletionBlock`: The completion block gets executed for every attempt to play a system sound irrespective of success or failure. The callbacks are issued on a serial queue and the client is responsible for handling thread safety.

<a id="discussion"></a>

## Discussion

Play the alert designated by the provided SystemSoundID.
