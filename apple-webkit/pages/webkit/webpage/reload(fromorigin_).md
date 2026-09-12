> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/reload(fromorigin:)](https://developer.apple.com/documentation/webkit/webpage/reload(fromorigin:))

# reload(fromOrigin:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Reloads the current webpage.

## Declaration

```swift
@discardableResult @MainActor final func reload(fromOrigin: Bool = false) -> some AsyncSequence<WebPage.NavigationEvent, any Error>

```

## Parameters

- `fromOrigin`: If `true`, end-to-end revalidation of the content using cache-validating conditionals is performed, if possible.

<a id="return-value"></a>

## Return Value

An async sequence you use to track the loading progress of the navigation. If the `Task` enclosing the sequence is cancelled, the page will stop loading all resources.

## See Also

### Managing the loading process

- [stopLoading()](stoploading%28%29.md): Stops loading all resources on the current page.
