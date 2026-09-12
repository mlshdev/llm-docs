> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontassetrequest/download(withcompletionhandler:)](https://developer.apple.com/documentation/appkit/nsfontassetrequest/download(withcompletionhandler:))

# download(withCompletionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

## Declaration

```swift
func download(withCompletionHandler completionHandler: @escaping ((any Error)?) -> Bool)
```

## See Also

### Downloading a Font Asset

- [downloadedFontDescriptors](downloadedfontdescriptors.md)

# downloadFontAssetsWithCompletionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

## Declaration

```objectivec
- (void) downloadFontAssetsWithCompletionHandler:(BOOL (^)(NSError *error)) completionHandler;
```

## See Also

### Downloading a Font Asset

- [downloadedFontDescriptors](downloadedfontdescriptors.md)
