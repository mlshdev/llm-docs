> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdownloaddelegate/downloadwindow(forauthenticationsheet:)](https://developer.apple.com/documentation/webkit/webdownloaddelegate/downloadwindow(forauthenticationsheet:))

# downloadWindow(forAuthenticationSheet:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the window to be used by the authentication sheet.

## Declaration

```swift
optional func downloadWindow(forAuthenticationSheet download: WebDownload!) -> NSWindow!
```

## Parameters

- `download`: The download object that is requesting the window.

<a id="return-value"></a>

## Return Value

An [NSWindow](https://developer.apple.com/documentation/appkit/nswindow) object into which the `WebDownload` object should draw its authentication sheet.

<a id="discussion"></a>

## Discussion

The default implementation prompts the user for authentication using the standard WebKit authentication panel, as either a sheet or window.

# downloadWindowForAuthenticationSheet: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the window to be used by the authentication sheet.

## Declaration

```objectivec
- (NSWindow *) downloadWindowForAuthenticationSheet:(WebDownload *) download;
```

## Parameters

- `download`: The download object that is requesting the window.

<a id="return-value"></a>

## Return Value

An [NSWindow](https://developer.apple.com/documentation/appkit/nswindow) object into which the `WebDownload` object should draw its authentication sheet.

<a id="discussion"></a>

## Discussion

The default implementation prompts the user for authentication using the standard WebKit authentication panel, as either a sheet or window.
