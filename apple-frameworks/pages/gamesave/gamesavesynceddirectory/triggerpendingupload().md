> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gamesavesynceddirectory/triggerpendingupload()](https://developer.apple.com/documentation/gamesave/gamesavesynceddirectory/triggerpendingupload())

# triggerPendingUpload()

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Triggers an upload of the directory for any changes that were pending.

## Declaration

```swift
func triggerPendingUpload() async -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if there were pending uploads; otherwise `false`.

## See Also

### Finishing with a directory

- [close()](close%28%29.md): Closes the directory, and resumes syncing the directory to the cloud.
