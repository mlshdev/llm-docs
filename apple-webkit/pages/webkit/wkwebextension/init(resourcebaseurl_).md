> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/init(resourcebaseurl:)](https://developer.apple.com/documentation/webkit/wkwebextension/init(resourcebaseurl:))

# init(resourceBaseURL:)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Creates a web extension initialized with a specified resource base URL, which can point to either a directory or a ZIP archive.

## Declaration

```swift
@MainActor @preconcurrency convenience init(resourceBaseURL: URL) async throws
```

## Parameters

- `resourceBaseURL`: The file URL to use for the new web extension.

<a id="discussion"></a>

## Discussion

The URL must be a file URL that points to either a directory with a `manifest.json` file or a ZIP archive containing a `manifest.json` file. If the manifest is invalid or missing, or the URL points to an unsupported format or invalid archive, an error will be returned.

> **Throws**

> An error if the manifest is invalid or missing, or the URL points to an unsupported format or invalid archive.
