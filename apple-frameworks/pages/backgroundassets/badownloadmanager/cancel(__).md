> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanager/cancel(_:)](https://developer.apple.com/documentation/backgroundassets/badownloadmanager/cancel(_:))

# cancel(\_:) (Swift)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Cancels an asset download.

## Declaration

```swift
func cancel(_ download: BADownload) throws
```

## Parameters

- `download`: The object that identifies the scheduled or in-progress download to cancel.

## See Also

### Managing downloads

- [scheduleDownload(\_:)](scheduledownload%28__%29.md): Schedules an asset download to execute in the background at a nonspecific time in the future.
- [startForegroundDownload(\_:)](startforegrounddownload%28__%29.md): Schedules an asset download that executes immediately in the foreground.

# cancelDownload:error: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Cancels an asset download.

## Declaration

```objectivec
- (BOOL) cancelDownload:(BADownload *) download error:(NSError **) error;
```

## Parameters

- `download`: The object that identifies the scheduled or in-progress download to cancel.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Managing downloads

- [scheduleDownload:error:](scheduledownload%28__%29.md): Schedules an asset download to execute in the background at a nonspecific time in the future.
- [startForegroundDownload:error:](startforegrounddownload%28__%29.md): Schedules an asset download that executes immediately in the foreground.
