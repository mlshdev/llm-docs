> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsmotionusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsmotionusagedescription)

# NSMotionUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · macOS 10.15+ · visionOS 1.0+

A message that tells people why the app is requesting access to the device’s motion data.

## Details

`NSMotionUsageDescription`

<a id="Discussion"></a>

## Discussion

> **Important**

>  This key is required if your app uses APIs that access the device’s motion data, including [CMSensorRecorder](../../coremotion/cmsensorrecorder.md), [CMPedometer](../../coremotion/cmpedometer.md), [CMMotionActivityManager](../../coremotion/cmmotionactivitymanager.md), and [CMMovementDisorderManager](../../coremotion/cmmovementdisordermanager.md). If you don’t include this key, your app will crash when it attempts to access motion data.

## See Also

### Motion

- [NSFallDetectionUsageDescription](nsfalldetectionusagedescription.md): A message to the user that explains the app’s request for permission to access fall detection event data.
