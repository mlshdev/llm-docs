> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreferencerestrictions/forbidall](https://developer.apple.com/documentation/avfoundation/avassetreferencerestrictions/forbidall)

# forbidAll (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The asset can only reference media stored within its container file.

## Declaration

```swift
static var forbidAll: AVAssetReferenceRestrictions { get }
```

## See Also

### Reference restrictions

- [forbidRemoteReferenceToLocal](forbidremotereferencetolocal.md): A remote asset shouldn’t follow references to local media.
- [forbidLocalReferenceToRemote](forbidlocalreferencetoremote.md): A local asset shouldn’t follow references to remote media.
- [forbidCrossSiteReference](forbidcrosssitereference.md): A remote asset shouldn’t follow references to remote media data stored at a different host.
- [forbidLocalReferenceToLocal](forbidlocalreferencetolocal.md): A local asset shouldn’t follow references to local media data stored outside its container file.
- [defaultPolicy](defaultpolicy.md): The asset should use the default reference restrictions policy.

# AVAssetReferenceRestrictionForbidAll (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The asset can only reference media stored within its container file.

## Declaration

```objectivec
AVAssetReferenceRestrictionForbidAll
```

## See Also

### Reference restrictions

- [AVAssetReferenceRestrictionForbidNone](avassetreferencerestrictionforbidnone.md): The asset should follow all media references.
- [AVAssetReferenceRestrictionForbidRemoteReferenceToLocal](forbidremotereferencetolocal.md): A remote asset shouldn’t follow references to local media.
- [AVAssetReferenceRestrictionForbidLocalReferenceToRemote](forbidlocalreferencetoremote.md): A local asset shouldn’t follow references to remote media.
- [AVAssetReferenceRestrictionForbidCrossSiteReference](forbidcrosssitereference.md): A remote asset shouldn’t follow references to remote media data stored at a different host.
- [AVAssetReferenceRestrictionForbidLocalReferenceToLocal](forbidlocalreferencetolocal.md): A local asset shouldn’t follow references to local media data stored outside its container file.
- [AVAssetReferenceRestrictionDefaultPolicy](defaultpolicy.md): The asset should use the default reference restrictions policy.
