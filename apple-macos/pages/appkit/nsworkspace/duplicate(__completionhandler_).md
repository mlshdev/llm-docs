> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/duplicate(_:completionhandler:)](https://developer.apple.com/documentation/appkit/nsworkspace/duplicate(_:completionhandler:))

# duplicate(\_:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Duplicates the specified URLS asynchronously in the same manner as the Finder.

## Declaration

```swift
func duplicate(_ URLs: [URL], completionHandler handler: (@Sendable ([URL : URL], (any Error)?) -> Void)? = nil)
```

```swift
func duplicate(_ URLs: [URL]) async throws -> [URL : URL]
```

## Parameters

- `URLs`: An array of [NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects representing the files to duplicate. This parameter must not be `nil`.
- `handler`: The completion handler block object to call when the operation completes. You may specify `nil` for this parameter. If this parameter is not `nil`, you must call the [duplicate(\_:completionHandler:)](duplicate%28__completionhandler_%29.md) method from a block running on an active dispatch queue; your completion handler block is subsequently executed on the same dispatch queue.

  This block takes two parameters:

  - **newURLs**: A dictionary parameter whose keys and values are [NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects. Each key is a URL from the `URLs` parameter. The value of each key is a URL representing the location of the duplicated file. If this method could not duplicate a file, the corresponding URL is not included in the dictionary.
  - **error**: If the operation succeeded for every file, this parameter is `nil`. If the operation failed for one or more files, the parameter contains an error object describing the overall result of the operation in a manner suitable for presentation to the user.

<a id="Discussion"></a>

## Discussion

This method may cause a progress indicator, or other user interface element, to be shown by the Finder.

In macOS 10.6, this method requires the app to run its main run loop in a common mode. You can safely call this method from any thread of your app.

## See Also

### Manipulating Files

- [recycle(\_:completionHandler:)](recycle%28__completionhandler_%29.md): Moves the specified URLs to the trash in the same manner as the Finder.
- [activateFileViewerSelecting(\_:)](activatefileviewerselecting%28__%29.md): Activates the Finder, and opens one or more windows selecting the specified files.
- [selectFile(\_:inFileViewerRootedAtPath:)](selectfile%28__infileviewerrootedatpath_%29.md): Selects the file at the specified path.

# duplicateURLs:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Duplicates the specified URLS asynchronously in the same manner as the Finder.

## Declaration

```objectivec
- (void) duplicateURLs:(NSArray<NSURL *> *) URLs completionHandler:(void (^)(NSDictionary<NSURL *,NSURL *> *newURLs, NSError *error)) handler;
```

## Parameters

- `URLs`: An array of [NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects representing the files to duplicate. This parameter must not be `nil`.
- `handler`: The completion handler block object to call when the operation completes. You may specify `nil` for this parameter. If this parameter is not `nil`, you must call the [duplicateURLs:completionHandler:](duplicate%28__completionhandler_%29.md) method from a block running on an active dispatch queue; your completion handler block is subsequently executed on the same dispatch queue.

  This block takes two parameters:

  - **newURLs**: A dictionary parameter whose keys and values are [NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects. Each key is a URL from the `URLs` parameter. The value of each key is a URL representing the location of the duplicated file. If this method could not duplicate a file, the corresponding URL is not included in the dictionary.
  - **error**: If the operation succeeded for every file, this parameter is `nil`. If the operation failed for one or more files, the parameter contains an error object describing the overall result of the operation in a manner suitable for presentation to the user.

<a id="Discussion"></a>

## Discussion

This method may cause a progress indicator, or other user interface element, to be shown by the Finder.

In macOS 10.6, this method requires the app to run its main run loop in a common mode. You can safely call this method from any thread of your app.

## See Also

### Manipulating Files

- [recycleURLs:completionHandler:](recycle%28__completionhandler_%29.md): Moves the specified URLs to the trash in the same manner as the Finder.
- [activateFileViewerSelectingURLs:](activatefileviewerselecting%28__%29.md): Activates the Finder, and opens one or more windows selecting the specified files.
- [selectFile:inFileViewerRootedAtPath:](selectfile%28__infileviewerrootedatpath_%29.md): Selects the file at the specified path.
