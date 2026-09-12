> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1527223-event_id_constants/kaeshowpreferences](https://developer.apple.com/documentation/coreservices/1527223-event_id_constants/kaeshowpreferences)

# kAEShowPreferences

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kAEShowPreferences = 'pref'
```

<a id="discussion"></a>

## Discussion

Event sent by the macOS to a process when the user chooses the Preferences item for that process.

Carbon applications that handle the Preferences command can install an Apple event handler for this event, but they more commonly install a Carbon event handler for `kEventCommandProcess` and check for the `kHICommandPreferences` command ID.
