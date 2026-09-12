> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreferencerestrictions/forbidremotereferencetolocal](https://developer.apple.com/documentation/avfoundation/avassetreferencerestrictions/forbidremotereferencetolocal)

# forbidRemoteReferenceToLocal (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A remote asset shouldn’t follow references to local media.

## Declaration

```swift
static var forbidRemoteReferenceToLocal: AVAssetReferenceRestrictions { get }
```

## See Also

### Reference restrictions

- [forbidAll](forbidall.md): The asset can only reference media stored within its container file.
- [forbidLocalReferenceToRemote](forbidlocalreferencetoremote.md): A local asset shouldn’t follow references to remote media.
- [forbidCrossSiteReference](forbidcrosssitereference.md): A remote asset shouldn’t follow references to remote media data stored at a different host.
- [forbidLocalReferenceToLocal](forbidlocalreferencetolocal.md): A local asset shouldn’t follow references to local media data stored outside its container file.
- [defaultPolicy](defaultpolicy.md): The asset should use the default reference restrictions policy.

# AVAssetReferenceRestrictionForbidRemoteReferenceToLocal (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A remote asset shouldn’t follow references to local media.

## Declaration

```objectivec
AVAssetReferenceRestrictionForbidRemoteReferenceToLocal
```

## See Also

### Reference restrictions

- [AVAssetReferenceRestrictionForbidNone](avassetreferencerestrictionforbidnone.md): The asset should follow all media references.
- [AVAssetReferenceRestrictionForbidAll](forbidall.md): The asset can only reference media stored within its container file.
- [AVAssetReferenceRestrictionForbidLocalReferenceToRemote](forbidlocalreferencetoremote.md): A local asset shouldn’t follow references to remote media.
- [AVAssetReferenceRestrictionForbidCrossSiteReference](forbidcrosssitereference.md): A remote asset shouldn’t follow references to remote media data stored at a different host.
- [AVAssetReferenceRestrictionForbidLocalReferenceToLocal](forbidlocalreferencetolocal.md): A local asset shouldn’t follow references to local media data stored outside its container file.
- [AVAssetReferenceRestrictionDefaultPolicy](defaultpolicy.md): The asset should use the default reference restrictions policy.
