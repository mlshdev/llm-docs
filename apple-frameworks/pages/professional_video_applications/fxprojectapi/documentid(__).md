> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxprojectapi/documentid(_:)](https://developer.apple.com/documentation/professional_video_applications/fxprojectapi/documentid(_:))

# documentID(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.2+

Provides the document ID number of the host’s project.

## Declaration

```swift
func documentID(_ documentID: UnsafeMutablePointer<Int>!) throws
```

## Parameters

- `documentID`: The document ID.

<a id="discussion"></a>

## Discussion

Use this method to get the document ID number of the host application’s project.

## See Also

### Getting Project Information from the Host

- [mediaFolderURL(\_:)](mediafolderurl%28__%29.md): Provides the security-scoped URL for a plug-in data folder within a project’s media folder.

# documentID:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides the document ID number of the host’s project.

## Declaration

```objectivec
- (BOOL) documentID:(NSUInteger *) documentID error:(NSError * *) error;
```

## Parameters

- `documentID`: The document ID.
- `error`: Returns information about what went wrong upon failure.

<a id="return-value"></a>

## Return Value

Returns `YES` if the documentID exists. Returns `NO` if the host can’t retrieve the documentID or some other error occurred while retrieving it.

<a id="discussion"></a>

## Discussion

Use this method to get the document ID number of the host application’s project.

## See Also

### Getting Project Information from the Host

- [mediaFolderURL:error:](mediafolderurl%28__%29.md): Provides the security-scoped URL for a plug-in data folder within a project’s media folder.
