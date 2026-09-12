> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanagerdelegate/download(_:failedwitherror:)](https://developer.apple.com/documentation/backgroundassets/badownloadmanagerdelegate/download(_:failedwitherror:))

# download(\_:failedWithError:) (Swift)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Informs the delegate about a failed asset download.

## Declaration

```swift
optional func download(_ download: BADownload, failedWithError error: any Error)
```

## Parameters

- `download`: The failed asset download.
- `error`: An object that provides detailed information about why the framework isn’t able to download the asset.

## See Also

### Processing concluded downloads

- [download(\_:finishedWithFileURL:)](download%28__finishedwithfileurl_%29.md): Informs the delegate about a finished asset download and provides the on-disk location.

# download:failedWithError: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Informs the delegate about a failed asset download.

## Declaration

```objectivec
- (void) download:(BADownload *) download failedWithError:(NSError *) error;
```

## Parameters

- `download`: The failed asset download.
- `error`: An object that provides detailed information about why the framework isn’t able to download the asset.

## See Also

### Processing concluded downloads

- [download:finishedWithFileURL:](download%28__finishedwithfileurl_%29.md): Informs the delegate about a finished asset download and provides the on-disk location.
