> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/bafailureserrorkey](https://developer.apple.com/documentation/backgroundassets/bafailureserrorkey)

# BAFailuresErrorKey

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The `-[NSError userInfo]` key for the set of asset packs the local availability of which the system couldn’t ensure and their respective associated underlying errors.

## Declaration

```objectivec
extern NSErrorUserInfoKey const BAFailuresErrorKey;
```

<a id="discussion"></a>

## Discussion

This key is relevant when the error code is [BAManagedErrorCodeLocalAvailabilityFailure](bamanagederrorcode/bamanagederrorcodelocalavailabilityfailure.md). Its value should be an `NSDictionary<BAAssetPack*, NSError*>` object.
