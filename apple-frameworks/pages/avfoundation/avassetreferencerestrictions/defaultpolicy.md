> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreferencerestrictions/defaultpolicy](https://developer.apple.com/documentation/avfoundation/avassetreferencerestrictions/defaultpolicy)

# defaultPolicy (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The asset should use the default reference restrictions policy.

## Declaration

```swift
static var defaultPolicy: AVAssetReferenceRestrictions { get }
```

<a id="Discussion"></a>

## Discussion

The default policy is [forbidLocalReferenceToRemote](forbidlocalreferencetoremote.md).

## See Also

### Reference restrictions

- [forbidAll](forbidall.md): The asset can only reference media stored within its container file.
- [forbidRemoteReferenceToLocal](forbidremotereferencetolocal.md): A remote asset shouldn’t follow references to local media.
- [forbidLocalReferenceToRemote](forbidlocalreferencetoremote.md): A local asset shouldn’t follow references to remote media.
- [forbidCrossSiteReference](forbidcrosssitereference.md): A remote asset shouldn’t follow references to remote media data stored at a different host.
- [forbidLocalReferenceToLocal](forbidlocalreferencetolocal.md): A local asset shouldn’t follow references to local media data stored outside its container file.

# AVAssetReferenceRestrictionDefaultPolicy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The asset should use the default reference restrictions policy.

## Declaration

```objectivec
AVAssetReferenceRestrictionDefaultPolicy
```

<a id="Discussion"></a>

## Discussion

The default policy is [AVAssetReferenceRestrictionForbidLocalReferenceToRemote](forbidlocalreferencetoremote.md).

## See Also

### Reference restrictions

- [AVAssetReferenceRestrictionForbidNone](avassetreferencerestrictionforbidnone.md): The asset should follow all media references.
- [AVAssetReferenceRestrictionForbidAll](forbidall.md): The asset can only reference media stored within its container file.
- [AVAssetReferenceRestrictionForbidRemoteReferenceToLocal](forbidremotereferencetolocal.md): A remote asset shouldn’t follow references to local media.
- [AVAssetReferenceRestrictionForbidLocalReferenceToRemote](forbidlocalreferencetoremote.md): A local asset shouldn’t follow references to remote media.
- [AVAssetReferenceRestrictionForbidCrossSiteReference](forbidcrosssitereference.md): A remote asset shouldn’t follow references to remote media data stored at a different host.
- [AVAssetReferenceRestrictionForbidLocalReferenceToLocal](forbidlocalreferencetolocal.md): A local asset shouldn’t follow references to local media data stored outside its container file.
