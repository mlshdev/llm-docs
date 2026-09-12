> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxprojectapi/mediafolderurl(_:)](https://developer.apple.com/documentation/professional_video_applications/fxprojectapi/mediafolderurl(_:))

# mediaFolderURL(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.2+

Provides the security-scoped URL for a plug-in data folder within a project’s media folder.

## Declaration

```swift
func mediaFolderURL(_ mediaURL: AutoreleasingUnsafeMutablePointer<NSURL?>!) throws
```

## Parameters

- `mediaURL`: The NSURL of a directory within the media folder of a Motion project.

<a id="discussion"></a>

## Discussion

Use this method to get the URL for a plug-in-specific directory within the media folder of a Motion project. The `mediaURL` will be `nil` if the user has not saved the project or the user did not select the “Collect Media” feature when saving. A sandboxed plug-in needs to add the appropriate entitlements to use security-scoped bookmarks to use this URL.

## See Also

### Getting Project Information from the Host

- [documentID(\_:)](documentid%28__%29.md): Provides the document ID number of the host’s project.

# mediaFolderURL:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides the security-scoped URL for a plug-in data folder within a project’s media folder.

## Declaration

```objectivec
- (BOOL) mediaFolderURL:(NSURL * *) mediaURL error:(NSError * *) error;
```

## Parameters

- `mediaURL`: The NSURL of a directory within the media folder of a Motion project.
- `error`: Returns information about what went wrong upon failure.

<a id="return-value"></a>

## Return Value

Returns `YES` if the mediaURL exists and your plug-in can write to it. Returns `NO` if the host cannot retrieve the mediaURL or some other error occurred in retrieving it.

<a id="discussion"></a>

## Discussion

Use this method to get the URL for a plug-in-specific directory within the media folder of a Motion project. The `mediaURL` will be `nil` if the user has not saved the project or the user did not select the “Collect Media” feature when saving. A sandboxed plug-in needs to add the appropriate entitlements to use security-scoped bookmarks to use this URL.

## See Also

### Getting Project Information from the Host

- [documentID:error:](documentid%28__%29.md): Provides the document ID number of the host’s project.
