> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/selectfile(_:infileviewerrootedatpath:)](https://developer.apple.com/documentation/appkit/nsworkspace/selectfile(_:infileviewerrootedatpath:))

# selectFile(\_:inFileViewerRootedAtPath:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the file at the specified path.

## Declaration

```swift
func selectFile(_ fullPath: String?, inFileViewerRootedAtPath rootFullPath: String) -> Bool
```

## Parameters

- `fullPath`: The full path of the file to select.
- `rootFullPath`: The path to use for the file viewer. If you specify a nonempty path string, this method opens a new file viewer. If you specify an empty string (`@""`), this method selects the file in the main viewer.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file was successfully selected; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

In macOS 10.5 and later, this method does not follow symlinks when selecting the file. If the `fullPath` parameter contains any symlinks, this method selects the symlink instead of the file it targets. If you want to select the target file, use the [resolvingSymlinksInPath](https://developer.apple.com/documentation/foundation/nsstring/resolvingsymlinksinpath) method to resolve any symlinks before calling this method.

You can safely call this method from any thread of your app.

## See Also

### Manipulating Files

- [duplicate(\_:completionHandler:)](duplicate%28__completionhandler_%29.md): Duplicates the specified URLS asynchronously in the same manner as the Finder.
- [recycle(\_:completionHandler:)](recycle%28__completionhandler_%29.md): Moves the specified URLs to the trash in the same manner as the Finder.
- [activateFileViewerSelecting(\_:)](activatefileviewerselecting%28__%29.md): Activates the Finder, and opens one or more windows selecting the specified files.

# selectFile:inFileViewerRootedAtPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the file at the specified path.

## Declaration

```objectivec
- (BOOL) selectFile:(NSString *) fullPath inFileViewerRootedAtPath:(NSString *) rootFullPath;
```

## Parameters

- `fullPath`: The full path of the file to select.
- `rootFullPath`: The path to use for the file viewer. If you specify a nonempty path string, this method opens a new file viewer. If you specify an empty string (`@""`), this method selects the file in the main viewer.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file was successfully selected; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

In macOS 10.5 and later, this method does not follow symlinks when selecting the file. If the `fullPath` parameter contains any symlinks, this method selects the symlink instead of the file it targets. If you want to select the target file, use the [stringByResolvingSymlinksInPath](https://developer.apple.com/documentation/foundation/nsstring/resolvingsymlinksinpath) method to resolve any symlinks before calling this method.

You can safely call this method from any thread of your app.

## See Also

### Manipulating Files

- [duplicateURLs:completionHandler:](duplicate%28__completionhandler_%29.md): Duplicates the specified URLS asynchronously in the same manner as the Finder.
- [recycleURLs:completionHandler:](recycle%28__completionhandler_%29.md): Moves the specified URLs to the trash in the same manner as the Finder.
- [activateFileViewerSelectingURLs:](activatefileviewerselecting%28__%29.md): Activates the Finder, and opens one or more windows selecting the specified files.
