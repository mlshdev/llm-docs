> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewreplyattachment/init(data:contenttype:)](https://developer.apple.com/documentation/quicklook/qlpreviewreplyattachment/init(data:contenttype:))

# init(data:contentType:) (Swift)

**Framework:** Quick Look  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```swift
init(data: Data, contentType: UTType)
```

## Parameters

- `data`: The data content of an html preview
- `contentType`: The UTType of the attachment for an html preview

<a id="discussion"></a>

## Discussion

Create an attachment for html previews by providing the data and mime type of the attachment.

# initWithData:contentType: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data contentType:(UTType *) contentType;
```

## Parameters

- `data`: The data content of an html preview
- `contentType`: The UTType of the attachment for an html preview

<a id="discussion"></a>

## Discussion

Create an attachment for html previews by providing the data and mime type of the attachment.
