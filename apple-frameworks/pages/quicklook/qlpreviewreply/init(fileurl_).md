> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewreply/init(fileurl:)](https://developer.apple.com/documentation/quicklook/qlpreviewreply/init(fileurl:))

# init(fileURL:) (Swift)

**Framework:** Quick Look  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```swift
init(fileURL: URL)
```

## Parameters

- `fileURL`: A file URL representing a preview of the previewed URL. Currently supported types include: UTTypeImage, UTTypePDF, UTTypeHTML, UTTypeXML, UTTypePlainText, UTTypeRTF, UTTypeRTFD, UTTypeMovie, UTTypeAudio

<a id="discussion"></a>

## Discussion

Use this method to provide a preview by providing a URL to a file of a supported type.

# initWithFileURL: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithFileURL:(NSURL *) fileURL;
```

## Parameters

- `fileURL`: A file URL representing a preview of the previewed URL. Currently supported types include: UTTypeImage, UTTypePDF, UTTypeHTML, UTTypeXML, UTTypePlainText, UTTypeRTF, UTTypeRTFD, UTTypeMovie, UTTypeAudio

<a id="discussion"></a>

## Discussion

Use this method to provide a preview by providing a URL to a file of a supported type.
