> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/arquicklookpreviewitem/init(fileat:)](https://developer.apple.com/documentation/quicklook/arquicklookpreviewitem/init(fileat:))

# init(fileAt:) (Swift)

**Framework:** Quick Look  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an object representing the 3D content that will be previewed in AR Quick Look.

## Declaration

```swift
init(fileAt url: URL)
```

## Parameters

- `url`: A file URL to 3D content file (e.g. usdz).

<a id="return-value"></a>

## Return Value

The preview object to display in AR Quick Look.

<a id="discussion"></a>

## Discussion

This object will be previewed in AR Quick Look using the default behavior:

- Start in Object mode without camera passthrough
- Display the Share button for 3D content sharing
- Allow scaling content in both Object and AR mode

This is a promise to the ARQuickLookPreviewItem class that the URL points to a 3D content file. This class does not deal with the file’s existence or content, and leaves it up to QuickLook to handle and process the URL.

# initWithFileAtURL: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an object representing the 3D content that will be previewed in AR Quick Look.

## Declaration

```objectivec
- (instancetype) initWithFileAtURL:(NSURL *) url;
```

## Parameters

- `url`: A file URL to 3D content file (e.g. usdz).

<a id="return-value"></a>

## Return Value

The preview object to display in AR Quick Look.

<a id="discussion"></a>

## Discussion

This object will be previewed in AR Quick Look using the default behavior:

- Start in Object mode without camera passthrough
- Display the Share button for 3D content sharing
- Allow scaling content in both Object and AR mode

This is a promise to the ARQuickLookPreviewItem class that the URL points to a 3D content file. This class does not deal with the file’s existence or content, and leaves it up to QuickLook to handle and process the URL.
