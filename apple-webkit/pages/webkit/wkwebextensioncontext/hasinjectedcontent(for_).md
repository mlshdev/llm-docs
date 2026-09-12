> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/hasinjectedcontent(for:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/hasinjectedcontent(for:))

# hasInjectedContent(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks if the extension has script or stylesheet content that can be injected into the specified URL.

## Declaration

```swift
func hasInjectedContent(for url: URL) -> Bool
```

## Parameters

- `url`: The webpage URL to check.

<a id="return-value"></a>

## Return Value

Returns `YES` if the extension has content that can be injected by matching the URL against the extension’s requested match patterns.

<a id="discussion"></a>

## Discussion

The extension context will still need to be loaded and have granted website permissions for its content to actually be injected.

# hasInjectedContentForURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks if the extension has script or stylesheet content that can be injected into the specified URL.

## Declaration

```objectivec
- (BOOL) hasInjectedContentForURL:(NSURL *) url;
```

## Parameters

- `url`: The webpage URL to check.

<a id="return-value"></a>

## Return Value

Returns `YES` if the extension has content that can be injected by matching the URL against the extension’s requested match patterns.

<a id="discussion"></a>

## Discussion

The extension context will still need to be loaded and have granted website permissions for its content to actually be injected.
