> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanager/scheduledownload(_:)](https://developer.apple.com/documentation/backgroundassets/badownloadmanager/scheduledownload(_:))

# scheduleDownload(\_:) (Swift)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Schedules an asset download to execute in the background at a nonspecific time in the future.

## Declaration

```swift
func scheduleDownload(_ download: BADownload) throws
```

## Parameters

- `download`: The object that provides the URL of the asset to download.

## See Also

### Managing downloads

- [startForegroundDownload(\_:)](startforegrounddownload%28__%29.md): Schedules an asset download that executes immediately in the foreground.
- [cancel(\_:)](cancel%28__%29.md): Cancels an asset download.

# scheduleDownload:error: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Schedules an asset download to execute in the background at a nonspecific time in the future.

## Declaration

```objectivec
- (BOOL) scheduleDownload:(BADownload *) download error:(NSError **) error;
```

## Parameters

- `download`: The object that provides the URL of the asset to download.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Managing downloads

- [startForegroundDownload:error:](startforegrounddownload%28__%29.md): Schedules an asset download that executes immediately in the foreground.
- [cancelDownload:error:](cancel%28__%29.md): Cancels an asset download.
