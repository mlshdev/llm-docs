> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/activatefileviewerselecting(_:)](https://developer.apple.com/documentation/appkit/nsworkspace/activatefileviewerselecting(_:))

# activateFileViewerSelecting(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Activates the Finder, and opens one or more windows selecting the specified files.

## Declaration

```swift
func activateFileViewerSelecting(_ fileURLs: [URL])
```

## Parameters

- `fileURLs`: The files to select and display in the Finder.

<a id="Discussion"></a>

## Discussion

You can safely call this method from any thread of your app.

## See Also

### Manipulating Files

- [duplicate(\_:completionHandler:)](duplicate%28__completionhandler_%29.md): Duplicates the specified URLS asynchronously in the same manner as the Finder.
- [recycle(\_:completionHandler:)](recycle%28__completionhandler_%29.md): Moves the specified URLs to the trash in the same manner as the Finder.
- [selectFile(\_:inFileViewerRootedAtPath:)](selectfile%28__infileviewerrootedatpath_%29.md): Selects the file at the specified path.

# activateFileViewerSelectingURLs: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Activates the Finder, and opens one or more windows selecting the specified files.

## Declaration

```objectivec
- (void) activateFileViewerSelectingURLs:(NSArray<NSURL *> *) fileURLs;
```

## Parameters

- `fileURLs`: The files to select and display in the Finder.

<a id="Discussion"></a>

## Discussion

You can safely call this method from any thread of your app.

## See Also

### Manipulating Files

- [duplicateURLs:completionHandler:](duplicate%28__completionhandler_%29.md): Duplicates the specified URLS asynchronously in the same manner as the Finder.
- [recycleURLs:completionHandler:](recycle%28__completionhandler_%29.md): Moves the specified URLs to the trash in the same manner as the Finder.
- [selectFile:inFileViewerRootedAtPath:](selectfile%28__infileviewerrootedatpath_%29.md): Selects the file at the specified path.
