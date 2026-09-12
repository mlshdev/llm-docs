> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472127-appletalk_version_selector/gestaltappletalkversion](https://developer.apple.com/documentation/coreservices/1472127-appletalk_version_selector/gestaltappletalkversion)

# gestaltAppleTalkVersion

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltAppleTalkVersion = 'atlk'
```

<a id="discussion"></a>

## Discussion

The version number of the AppleTalk driver (in particular, the .MPP driver) currently installed.   The version number is placed into the low-order byte of the result; ignore the three high-order bytes. If an AppleTalk driver is not currently open, the `response` parameter is 0.
