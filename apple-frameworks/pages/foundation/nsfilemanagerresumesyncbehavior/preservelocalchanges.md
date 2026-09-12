> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilemanagerresumesyncbehavior/preservelocalchanges](https://developer.apple.com/documentation/foundation/nsfilemanagerresumesyncbehavior/preservelocalchanges)

# NSFileManagerResumeSyncBehavior.preserveLocalChanges (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Resumes synchronizing by uploading the local version of the file.

## Declaration

```swift
case preserveLocalChanges
```

<a id="discussion"></a>

## Discussion

If the server has a newer version, the server may create a conflict copy of the file, or may automatically pick the winner of the conflict. Apps can choose to implement conflict handling themselves by passing `NSFileManagerResumeSyncBehaviorAfterUploadWithFailOnConflict`.

## See Also

### Identifying sync behaviors

- [NSFileManagerResumeSyncBehavior.afterUploadWithFailOnConflict](afteruploadwithfailonconflict.md): Resumes sync by first uploading the local version of the file, failing if the provider detects a conflict.
- [NSFileManagerResumeSyncBehavior.dropLocalChanges](droplocalchanges.md): Resumes synchronizing by overwriting any local changes with the remote version of the file.

# NSFileManagerResumeSyncBehaviorPreserveLocalChanges (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Resumes synchronizing by uploading the local version of the file.

## Declaration

```objectivec
NSFileManagerResumeSyncBehaviorPreserveLocalChanges
```

<a id="discussion"></a>

## Discussion

If the server has a newer version, the server may create a conflict copy of the file, or may automatically pick the winner of the conflict. Apps can choose to implement conflict handling themselves by passing `NSFileManagerResumeSyncBehaviorAfterUploadWithFailOnConflict`.

## See Also

### Identifying sync behaviors

- [NSFileManagerResumeSyncBehaviorAfterUploadWithFailOnConflict](afteruploadwithfailonconflict.md): Resumes sync by first uploading the local version of the file, failing if the provider detects a conflict.
- [NSFileManagerResumeSyncBehaviorDropLocalChanges](droplocalchanges.md): Resumes synchronizing by overwriting any local changes with the remote version of the file.
