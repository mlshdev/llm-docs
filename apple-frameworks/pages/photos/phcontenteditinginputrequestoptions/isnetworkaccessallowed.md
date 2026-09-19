> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phcontenteditinginputrequestoptions/isnetworkaccessallowed

# isNetworkAccessAllowed (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that specifies whether Photos can download the asset from iCloud.

## Declaration

```swift
var isNetworkAccessAllowed: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the value is `false`. If `true`, Photos downloads the asset for editing if it’s not available on the local device. Use the [progressHandler](progresshandler.md) property to track the progress of the download.

## See Also

### Fetching Asset Data from iCloud

- [progressHandler](progresshandler.md): A block Photos calls periodically while downloading the asset.

# networkAccessAllowed (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that specifies whether Photos can download the asset from iCloud.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isNetworkAccessAllowed) BOOL networkAccessAllowed;
```

<a id="Discussion"></a>

## Discussion

By default, the value is `false`. If `true`, Photos downloads the asset for editing if it’s not available on the local device. Use the [progressHandler](progresshandler.md) property to track the progress of the download.

## See Also

### Fetching Asset Data from iCloud

- [progressHandler](progresshandler.md): A block Photos calls periodically while downloading the asset.
