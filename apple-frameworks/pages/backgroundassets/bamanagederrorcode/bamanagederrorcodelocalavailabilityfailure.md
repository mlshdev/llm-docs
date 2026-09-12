> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/bamanagederrorcode/bamanagederrorcodelocalavailabilityfailure](https://developer.apple.com/documentation/backgroundassets/bamanagederrorcode/bamanagederrorcodelocalavailabilityfailure)

# BAManagedErrorCodeLocalAvailabilityFailure

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An error code that indicates that the system couldn’t ensure the local availability of some or all of the requested asset packs.

## Declaration

```objectivec
BAManagedErrorCodeLocalAvailabilityFailure
```

<a id="discussion"></a>

## Discussion

Refer to the values in `-[NSError userInfo]` for the keys [BASuccessesErrorKey](../basuccesseserrorkey.md) and [BAFailuresErrorKey](../bafailureserrorkey.md) for, respectively, the asset packs the local availability of which the system ensured successfully and the asset packs the local availability of which the system couldn’t ensure with associated underlying errors for the latter.
