> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsalarmkitusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsalarmkitusagedescription)

# NSAlarmKitUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A message that tells people why the app is requesting access to schedule alarms.

## Details

`NSAlarmKitUsageDescription`

<a id="Discussion"></a>

## Discussion

Include a descriptive string explaining why your app schedules alarms. This string appears in the system prompt when requesting authorization. If the `NSAlarmKitUsageDescription` key is missing or its value is an empty string, your app can’t schedule alarms with AlarmKit.
