> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewreply/init(fileurl:)](https://developer.apple.com/documentation/quicklookui/qlpreviewreply/init(fileurl:))

# init(fileURL:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a preview reply from an existing file URL.

## Declaration

```swift
init(fileURL: URL)
```

## Parameters

- `fileURL`: The file URL with the content of the reply.

<a id="Discussion"></a>

## Discussion

Use [init(fileURL:)](init%28fileurl_%29.md) to create a reply from an existing file URL, such as an image or PDF. The following example illustrates creating a reply from an existing URL:

```swift
guard let imageFileURL = Bundle.main.url(forResource: "yourImage", 
                                         withExtension: "jpg") else {
    return
}
let reply = QLPreviewReply(fileURL: imageFileURL)

```

# initWithFileURL: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a preview reply from an existing file URL.

## Declaration

```objectivec
- (instancetype) initWithFileURL:(NSURL *) fileURL;
```

## Parameters

- `fileURL`: The file URL with the content of the reply.

<a id="Discussion"></a>

## Discussion

Use [initWithFileURL:](init%28fileurl_%29.md) to create a reply from an existing file URL, such as an image or PDF. The following example illustrates creating a reply from an existing URL:

```swift
guard let imageFileURL = Bundle.main.url(forResource: "yourImage", 
                                         withExtension: "jpg") else {
    return
}
let reply = QLPreviewReply(fileURL: imageFileURL)

```
