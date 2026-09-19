> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/blockstoragedevicedriverkit/kiouserstorageoptionforceunitaccess

# kIOUserStorageOptionForceUnitAccess

**Interface language:** Objective-C

**Framework:** BlockStorageDeviceDriverKit  
**Kind:** Macro  
**Availability:** DriverKit 21.0+

An option to use Force Unit Access (FUA).

## Declaration

```objectivec
#define kIOUserStorageOptionForceUnitAccess
```

<a id="Discussion"></a>

## Discussion

This option tells the storage stack to force a request to access the media.

## See Also

### Storage Options

- [kIOUserStorageOptionNone](kiouserstorageoptionnone.md): A value that defines no options.
