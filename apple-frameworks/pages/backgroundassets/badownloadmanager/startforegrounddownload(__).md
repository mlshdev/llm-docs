> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanager/startforegrounddownload(_:)](https://developer.apple.com/documentation/backgroundassets/badownloadmanager/startforegrounddownload(_:))

# startForegroundDownload(\_:) (Swift)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Schedules an asset download that executes immediately in the foreground.

## Declaration

```swift
func startForegroundDownload(_ download: BADownload) throws
```

## Parameters

- `download`: The object that provides the URL of the asset to download.

<a id="Discussion"></a>

## Discussion

Use this method to start new asset downloads immediately, or to promote existing, queued downloads that are yet to start. Only use this method in your app; the framework throws an error if you attempt to start a foreground download in your extension.

## See Also

### Managing downloads

- [scheduleDownload(\_:)](scheduledownload%28__%29.md): Schedules an asset download to execute in the background at a nonspecific time in the future.
- [cancel(\_:)](cancel%28__%29.md): Cancels an asset download.

# startForegroundDownload:error: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Schedules an asset download that executes immediately in the foreground.

## Declaration

```objectivec
- (BOOL) startForegroundDownload:(BADownload *) download error:(NSError **) error;
```

## Parameters

- `download`: The object that provides the URL of the asset to download.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

Use this method to start new asset downloads immediately, or to promote existing, queued downloads that are yet to start. Only use this method in your app; the framework throws an error if you attempt to start a foreground download in your extension.

## See Also

### Managing downloads

- [scheduleDownload:error:](scheduledownload%28__%29.md): Schedules an asset download to execute in the background at a nonspecific time in the future.
- [cancelDownload:error:](cancel%28__%29.md): Cancels an asset download.
