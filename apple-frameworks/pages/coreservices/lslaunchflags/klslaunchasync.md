> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lslaunchflags/klslaunchasync](https://developer.apple.com/documentation/coreservices/lslaunchflags/klslaunchasync)

# kLSLaunchAsync

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Requests that the application be launched asynchronously.

## Declaration

```objectivec
kLSLaunchAsync = 0x00010000
```

<a id="discussion"></a>

## Discussion

The Launch Services function launching it returns control immediately without waiting for it to complete its launch sequence (indicated visually to the user when the application’s icon stops “bouncing” in the Dock).
