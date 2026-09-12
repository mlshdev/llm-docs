> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreferencerestrictions/forbidlocalreferencetolocal](https://developer.apple.com/documentation/avfoundation/avassetreferencerestrictions/forbidlocalreferencetolocal)

# forbidLocalReferenceToLocal (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A local asset shouldn’t follow references to local media data stored outside its container file.

## Declaration

```swift
static var forbidLocalReferenceToLocal: AVAssetReferenceRestrictions { get }
```

## See Also

### Reference restrictions

- [forbidAll](forbidall.md): The asset can only reference media stored within its container file.
- [forbidRemoteReferenceToLocal](forbidremotereferencetolocal.md): A remote asset shouldn’t follow references to local media.
- [forbidLocalReferenceToRemote](forbidlocalreferencetoremote.md): A local asset shouldn’t follow references to remote media.
- [forbidCrossSiteReference](forbidcrosssitereference.md): A remote asset shouldn’t follow references to remote media data stored at a different host.
- [defaultPolicy](defaultpolicy.md): The asset should use the default reference restrictions policy.

# AVAssetReferenceRestrictionForbidLocalReferenceToLocal (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A local asset shouldn’t follow references to local media data stored outside its container file.

## Declaration

```objectivec
AVAssetReferenceRestrictionForbidLocalReferenceToLocal
```

## See Also

### Reference restrictions

- [AVAssetReferenceRestrictionForbidNone](avassetreferencerestrictionforbidnone.md): The asset should follow all media references.
- [AVAssetReferenceRestrictionForbidAll](forbidall.md): The asset can only reference media stored within its container file.
- [AVAssetReferenceRestrictionForbidRemoteReferenceToLocal](forbidremotereferencetolocal.md): A remote asset shouldn’t follow references to local media.
- [AVAssetReferenceRestrictionForbidLocalReferenceToRemote](forbidlocalreferencetoremote.md): A local asset shouldn’t follow references to remote media.
- [AVAssetReferenceRestrictionForbidCrossSiteReference](forbidcrosssitereference.md): A remote asset shouldn’t follow references to remote media data stored at a different host.
- [AVAssetReferenceRestrictionDefaultPolicy](defaultpolicy.md): The asset should use the default reference restrictions policy.
