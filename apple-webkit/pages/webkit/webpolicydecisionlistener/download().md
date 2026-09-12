> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpolicydecisionlistener/download()](https://developer.apple.com/documentation/webkit/webpolicydecisionlistener/download())

# download() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Tells the listener to download the resource instead of displaying it.

## Declaration

```swift
func download()
```

<a id="Discussion"></a>

## Discussion

This method converts a location change that may be in progress to a download operation without having to stop and restart the download. You might invoke this method based on the content’s MIME type.

## See Also

### Making Resource-Usage Decisions

- [ignore()](ignore%28%29.md): Deprecated. Tells the listener to ignore the resource.
- [use()](use%28%29.md): Deprecated. Tells the listener to use the resource.

# download (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Tells the listener to download the resource instead of displaying it.

## Declaration

```objectivec
- (void) download;
```

<a id="Discussion"></a>

## Discussion

This method converts a location change that may be in progress to a download operation without having to stop and restart the download. You might invoke this method based on the content’s MIME type.

## See Also

### Making Resource-Usage Decisions

- [ignore](ignore%28%29.md): Deprecated. Tells the listener to ignore the resource.
- [use](use%28%29.md): Deprecated. Tells the listener to use the resource.
