> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsfontassetrequest/download(withcompletionhandler:)

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
