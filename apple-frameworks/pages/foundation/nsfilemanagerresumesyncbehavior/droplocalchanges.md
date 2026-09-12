> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilemanagerresumesyncbehavior/droplocalchanges](https://developer.apple.com/documentation/foundation/nsfilemanagerresumesyncbehavior/droplocalchanges)

# NSFileManagerResumeSyncBehavior.dropLocalChanges (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Resumes synchronizing by overwriting any local changes with the remote version of the file.

## Declaration

```swift
case dropLocalChanges
```

<a id="discussion"></a>

## Discussion

If a conflict occurs, the file manager stores the local changes as an alternate version. Only use this behavior if you provide a separate means of resolving and merging conflicts.

## See Also

### Identifying sync behaviors

- [NSFileManagerResumeSyncBehavior.preserveLocalChanges](preservelocalchanges.md): Resumes synchronizing by uploading the local version of the file.
- [NSFileManagerResumeSyncBehavior.afterUploadWithFailOnConflict](afteruploadwithfailonconflict.md): Resumes sync by first uploading the local version of the file, failing if the provider detects a conflict.

# NSFileManagerResumeSyncBehaviorDropLocalChanges (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Resumes synchronizing by overwriting any local changes with the remote version of the file.

## Declaration

```objectivec
NSFileManagerResumeSyncBehaviorDropLocalChanges
```

<a id="discussion"></a>

## Discussion

If a conflict occurs, the file manager stores the local changes as an alternate version. Only use this behavior if you provide a separate means of resolving and merging conflicts.

## See Also

### Identifying sync behaviors

- [NSFileManagerResumeSyncBehaviorPreserveLocalChanges](preservelocalchanges.md): Resumes synchronizing by uploading the local version of the file.
- [NSFileManagerResumeSyncBehaviorAfterUploadWithFailOnConflict](afteruploadwithfailonconflict.md): Resumes sync by first uploading the local version of the file, failing if the provider detects a conflict.
