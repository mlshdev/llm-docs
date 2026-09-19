> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/basuccesseserrorkey

# BASuccessesErrorKey

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The `-[NSError userInfo]` key for the set of asset packs the local availability of which the system successfully ensured.

## Declaration

```objectivec
extern NSErrorUserInfoKey const BASuccessesErrorKey;
```

<a id="discussion"></a>

## Discussion

This key is relevant when the error code is [BAManagedErrorCodeLocalAvailabilityFailure](bamanagederrorcode/bamanagederrorcodelocalavailabilityfailure.md). Its value should be an `NSSet<BAAssetPack*>` object.
