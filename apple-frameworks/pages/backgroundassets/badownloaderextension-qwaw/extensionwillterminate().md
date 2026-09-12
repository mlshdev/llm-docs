> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloaderextension-qwaw/extensionwillterminate()](https://developer.apple.com/documentation/backgroundassets/badownloaderextension-qwaw/extensionwillterminate())

# extensionWillTerminate()

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · visionOS 2.4+ (deprecated in 2.4)

This method may be called shortly before the extension is terminated.

> extensionWillTerminate will not be invoked in all applicable circumstances and should not be relied upon.

## Declaration

```swift
func extensionWillTerminate()
```

<a id="discussion"></a>

## Discussion

This method is invoked if all extension callbacks have returned or if the extension has run over it’s alotted runtime. This callback provides a last chance to tidy up state before process termination.

> **Warning**

> This method is advisory only, there will be instances where the extension is terminated before this method is invoked. Do not rely on this method being invoked before the extension is terminated.

## Default Implementations

### BADownloaderExtension Implementations

- [extensionWillTerminate()](extensionwillterminate%28%29-236ac.md)

## See Also

### Reacting to extension events

- [extensionWillTerminate()](extensionwillterminate%28%29-236ac.md)
