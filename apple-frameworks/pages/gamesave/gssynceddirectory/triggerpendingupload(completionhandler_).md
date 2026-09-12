> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssynceddirectory/triggerpendingupload(completionhandler:)](https://developer.apple.com/documentation/gamesave/gssynceddirectory/triggerpendingupload(completionhandler:))

# triggerPendingUpload(completionHandler:) (Swift)

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Triggers an upload of the directory for any changes that were pending.

## Declaration

```swift
func triggerPendingUpload(completionHandler completion: @escaping @Sendable (Bool) -> Void)
```

```swift
func triggerPendingUpload() async -> Bool
```

<a id="discussion"></a>

## Discussion

Calls the completion block with `YES` if there were pending uploads; otherwise with `NO`.

## See Also

### Finishing with a directory

- [close()](close%28%29.md): Closes the directory, and resumes syncing the directory to the cloud.

# triggerPendingUploadWithCompletionHandler: (Objective-C)

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Triggers an upload of the directory for any changes that were pending.

## Declaration

```objectivec
- (void) triggerPendingUploadWithCompletionHandler:(void (^)(BOOL )) completion;
```

<a id="discussion"></a>

## Discussion

Calls the completion block with `YES` if there were pending uploads; otherwise with `NO`.

## See Also

### Finishing with a directory

- [close](close%28%29.md): Closes the directory, and resumes syncing the directory to the cloud.
