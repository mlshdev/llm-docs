> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsource/activityviewcontrollerlinkmetadata(_:)](https://developer.apple.com/documentation/uikit/uiactivityitemsource/activityviewcontrollerlinkmetadata(_:))

# activityViewControllerLinkMetadata(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns metadata to display in the preview header of the share sheet.

## Declaration

```swift
optional func activityViewControllerLinkMetadata(_ activityViewController: UIActivityViewController) -> LPLinkMetadata?
```

## Parameters

- `activityViewController`: The [UIActivityViewController](../uiactivityviewcontroller.md) object requesting information about the item that the user wants to share.

<a id="return-value"></a>

## Return Value

The [LPLinkMetadata](https://developer.apple.com/documentation/linkpresentation/lplinkmetadata) object that contains the metadata about a URL, including its title, icon, images, and video.

<a id="Discussion"></a>

## Discussion

Using the [Link Presentation](https://developer.apple.com/documentation/linkpresentation) framework, you can display rich previews of web links inside your app. For instance, if your app already has a database of links, with titles and images that weren’t fetched by [LPMetadataProvider](https://developer.apple.com/documentation/linkpresentation/lpmetadataprovider), you don’t have to fetch new metadata from the internet. Use this method instead and avoid downloading it again.

In your implementation, create an [LPLinkMetadata](https://developer.apple.com/documentation/linkpresentation/lplinkmetadata) object, and fill in at least the [originalURL](https://developer.apple.com/documentation/linkpresentation/lplinkmetadata/originalurl) and [url](https://developer.apple.com/documentation/linkpresentation/lplinkmetadata/url) fields, plus whatever additional information you have.

```swift
func activityViewControllerLinkMetadata(_: UIActivityViewController) -> LPLinkMetadata? {
    let metadata = LPLinkMetadata()
    metadata.originalURL = URL(string: "https://www.example.com/apple-pie")
    metadata.url = metadata.originalURL
    metadata.title = "The Greatest Apple Pie In The World"
    metadata.imageProvider = NSItemProvider.init(contentsOf:
        Bundle.main.url(forResource: "apple-pie", withExtension: "jpg"))
    return metadata
}
```

To learn more about presenting rich links and accelerating the share sheet, see [Link Presentation](https://developer.apple.com/documentation/linkpresentation) and [LPMetadataProvider](https://developer.apple.com/documentation/linkpresentation/lpmetadataprovider), or watch the WWDC 2019 session [262: Embedding and Sharing Visually Rich Links](https://developer.apple.com/videos/play/wwdc2019/262/).

# activityViewControllerLinkMetadata: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns metadata to display in the preview header of the share sheet.

## Declaration

```objectivec
- (LPLinkMetadata *) activityViewControllerLinkMetadata:(UIActivityViewController *) activityViewController;
```

## Parameters

- `activityViewController`: The [UIActivityViewController](../uiactivityviewcontroller.md) object requesting information about the item that the user wants to share.

<a id="return-value"></a>

## Return Value

The [LPLinkMetadata](https://developer.apple.com/documentation/linkpresentation/lplinkmetadata) object that contains the metadata about a URL, including its title, icon, images, and video.

<a id="Discussion"></a>

## Discussion

Using the [Link Presentation](https://developer.apple.com/documentation/linkpresentation) framework, you can display rich previews of web links inside your app. For instance, if your app already has a database of links, with titles and images that weren’t fetched by [LPMetadataProvider](https://developer.apple.com/documentation/linkpresentation/lpmetadataprovider), you don’t have to fetch new metadata from the internet. Use this method instead and avoid downloading it again.

In your implementation, create an [LPLinkMetadata](https://developer.apple.com/documentation/linkpresentation/lplinkmetadata) object, and fill in at least the [originalURL](https://developer.apple.com/documentation/linkpresentation/lplinkmetadata/originalurl) and [URL](https://developer.apple.com/documentation/linkpresentation/lplinkmetadata/url) fields, plus whatever additional information you have.

```swift
func activityViewControllerLinkMetadata(_: UIActivityViewController) -> LPLinkMetadata? {
    let metadata = LPLinkMetadata()
    metadata.originalURL = URL(string: "https://www.example.com/apple-pie")
    metadata.url = metadata.originalURL
    metadata.title = "The Greatest Apple Pie In The World"
    metadata.imageProvider = NSItemProvider.init(contentsOf:
        Bundle.main.url(forResource: "apple-pie", withExtension: "jpg"))
    return metadata
}
```

To learn more about presenting rich links and accelerating the share sheet, see [Link Presentation](https://developer.apple.com/documentation/linkpresentation) and [LPMetadataProvider](https://developer.apple.com/documentation/linkpresentation/lpmetadataprovider), or watch the WWDC 2019 session [262: Embedding and Sharing Visually Rich Links](https://developer.apple.com/videos/play/wwdc2019/262/).
