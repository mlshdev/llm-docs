> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/wkbackgroundmodes](https://developer.apple.com/documentation/bundleresources/information-property-list/wkbackgroundmodes)

# WKBackgroundModes

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** watchOS 3.0+

The services a watchOS app provides that require it to continue running in the background.

## Details

`WKBackgroundModes`

## Possible Values

- `workout-processing`: Allows an active workout session to run in the background.
- `self-care`: Enables extended runtime sessions for brief activities focusing on health or emotional well-being.
- `mindfulness`: Enables extended runtime sessions for silent meditation.
- `physical-therapy`: Enables extended runtime sessions for stretching, strengthening, or range-of-motion exercises.
- `alarm`: Enables extended runtime sessions for smart alarms.
- `underwater-depth`: Enables extended runtime sessions for underwater depth experiences.

<a id="Discussion"></a>

## Discussion

To add this key to the Information Property List, enable your WatchKit extension’s Background Modes capability in Xcode.

> **Important**

>  You can only enable one of the extended runtime session modes (`self-care`, `mindfulness`, `physical-therapy`, or `alarm`). However, you can enable both an extended runtime session mode and the `workout-processing` mode. If you set the background modes using Xcode’s Signing & Capabilities tab, Xcode ensures that these values are set properly.

## See Also

### Related Documentation

- [Using extended runtime sessions](https://developer.apple.com/documentation/watchkit/using-extended-runtime-sessions): Create an extended runtime session that continues running your app after the user stops interacting with it.
- [Running workout sessions](../../healthkit/running-workout-sessions.md): Track a workout on Apple Watch.

### Background execution

- [UIBackgroundModes](uibackgroundmodes.md): Services provided by an app that require it to run in the background.
- [BGTaskSchedulerPermittedIdentifiers](bgtaskschedulerpermittedidentifiers.md): An array of strings containing developer-specified task identifiers in reverse URL notation.
- [LSBackgroundOnly](lsbackgroundonly.md): A Boolean value indicating whether the app runs only in the background.
