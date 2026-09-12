> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1645929-anonymous](https://developer.apple.com/documentation/coreservices/1645929-anonymous)

# Anonymous

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.12+

## Declaration

```objectivec
enum : unsigned int;
```

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kLSLaunchHasUntrustedContents](1645929-anonymous/klslaunchhasuntrustedcontents.md): Deprecated. A request that the system marks the launch items as untrustworthy.
- [kLSLaunchInClassic](1645929-anonymous/klslaunchinclassic.md): Deprecated. A request that the system forces the app to launch in the Classic emulation environment.
- [kLSLaunchInhibitBGOnly](1645929-anonymous/klslaunchinhibitbgonly.md): Deprecated. A request that the system fails the launch if the app is background-only.
- [kLSLaunchNoParams](1645929-anonymous/klslaunchnoparams.md): Deprecated. A request that the system uses the app’s information property to determine the launch parameters.
- [kLSLaunchStartClassic](1645929-anonymous/klslaunchstartclassic.md): Deprecated. A request that the system starts up the Classic emulation environment if the app requires it. If this flag is not set and the app requires the Classic environment, the launch fails.
