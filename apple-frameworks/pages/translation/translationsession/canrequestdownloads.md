> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/canrequestdownloads](https://developer.apple.com/documentation/translation/translationsession/canrequestdownloads)

# canRequestDownloads

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A boolean value that indicates whether a translation session can request language downloads.

## Declaration

```swift
var canRequestDownloads: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property is true, then the system prompts the person to authorize downloading additional languages if they aren’t already installed.

If this property is false, then the session cannot request language downloads and will throw the error [notInstalled](../translationerror/notinstalled.md) if you attempt to translate and the languages aren’t installed.

> **Note**

> A session created using `.translationTask()` can always request downloads, however when it’s created directly using [init(installedSource:target:)](init%28installedsource_target_%29.md) it cannot request downloads. The system only throws an error when attempting to translate and the languages aren’t installed.

## See Also

### Accessing the session properties

- [isReady](isready.md): A boolean value that indicates whether the system has installed the source and target languages of the session and is ready to begin translation.
- [preferredStrategy](preferredstrategy.md): The preferred translation strategy configured for the session.
