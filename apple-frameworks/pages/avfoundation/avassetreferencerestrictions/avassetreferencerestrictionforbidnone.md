> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetreferencerestrictions/avassetreferencerestrictionforbidnone

# AVAssetReferenceRestrictionForbidNone

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The asset should follow all media references.

## Declaration

```objectivec
AVAssetReferenceRestrictionForbidNone
```

## See Also

### Reference restrictions

- [AVAssetReferenceRestrictionForbidAll](forbidall.md): The asset can only reference media stored within its container file.
- [AVAssetReferenceRestrictionForbidRemoteReferenceToLocal](forbidremotereferencetolocal.md): A remote asset shouldn’t follow references to local media.
- [AVAssetReferenceRestrictionForbidLocalReferenceToRemote](forbidlocalreferencetoremote.md): A local asset shouldn’t follow references to remote media.
- [AVAssetReferenceRestrictionForbidCrossSiteReference](forbidcrosssitereference.md): A remote asset shouldn’t follow references to remote media data stored at a different host.
- [AVAssetReferenceRestrictionForbidLocalReferenceToLocal](forbidlocalreferencetolocal.md): A local asset shouldn’t follow references to local media data stored outside its container file.
- [AVAssetReferenceRestrictionDefaultPolicy](defaultpolicy.md): The asset should use the default reference restrictions policy.
