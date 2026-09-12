> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssynceddirectory/close()](https://developer.apple.com/documentation/gamesave/gssynceddirectory/close())

# close() (Swift)

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Closes the directory, and resumes syncing the directory to the cloud.

## Declaration

```swift
func close()
```

## See Also

### Finishing with a directory

- [triggerPendingUpload(completionHandler:)](triggerpendingupload%28completionhandler_%29.md): Triggers an upload of the directory for any changes that were pending.

# close (Objective-C)

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Closes the directory, and resumes syncing the directory to the cloud.

## Declaration

```objectivec
- (void) close;
```

## See Also

### Finishing with a directory

- [triggerPendingUploadWithCompletionHandler:](triggerpendingupload%28completionhandler_%29.md): Triggers an upload of the directory for any changes that were pending.
