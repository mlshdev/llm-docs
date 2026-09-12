> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownloaddelegate/download(_:decidedestinationwithsuggestedfilename:)](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate/download(_:decidedestinationwithsuggestedfilename:))

# download(\_:decideDestinationWithSuggestedFilename:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

The delegate receives this message when `download` has determined a suggested filename for the downloaded file.

## Declaration

```swift
optional func download(_ download: NSURLDownload, decideDestinationWithSuggestedFilename filename: String)
```

## Parameters

- `download`: The URL download object sending the message.
- `filename`: The suggested filename for the download.

<a id="Discussion"></a>

## Discussion

The suggested filename is either derived from the last path component of the URL and the MIME type or, if the download was encoded, from the encoding. If the delegate wishes to modify the path, it should send [setDestination(\_:allowOverwrite:)](../nsurldownload/setdestination%28__allowoverwrite_%29.md) to `download`.

<a id="Special-Considerations"></a>

### Special Considerations

The delegate will not receive this message if `setDestination:allowOverwrite:` has already been called for the download.

## See Also

### Download Data and Responses

- [downloadDidBegin(\_:)](downloaddidbegin%28__%29.md): Sent immediately after a download object begins a download.
- [download(\_:didCreateDestination:)](download%28__didcreatedestination_%29.md): Sent when the destination file is created.
- [download(\_:didReceive:)](download%28__didreceive_%29-817z3.md): Sent when a download object has received sufficient load data to construct the NSURLResponse object for the download.
- [download(\_:didReceiveDataOfLength:)](download%28__didreceivedataoflength_%29.md): Sent as a download object receives data incrementally.
- [download(\_:shouldDecodeSourceDataOfMIMEType:)](download%28__shoulddecodesourcedataofmimetype_%29.md): Sent when a download object determines that the downloaded file is encoded to inquire whether the file should be automatically decoded.
- [download(\_:willResumeWith:fromByte:)](download%28__willresumewith_frombyte_%29.md): Sent when a download object has received a response from the server after attempting to resume a download.
- [download(\_:willSend:redirectResponse:)](download%28__willsend_redirectresponse_%29.md): Sent when the download object determines that it must change URLs in order to continue loading a request.

# download:decideDestinationWithSuggestedFilename: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

The delegate receives this message when `download` has determined a suggested filename for the downloaded file.

## Declaration

```objectivec
- (void) download:(NSURLDownload *) download decideDestinationWithSuggestedFilename:(NSString *) filename;
```

## Parameters

- `download`: The URL download object sending the message.
- `filename`: The suggested filename for the download.

<a id="Discussion"></a>

## Discussion

The suggested filename is either derived from the last path component of the URL and the MIME type or, if the download was encoded, from the encoding. If the delegate wishes to modify the path, it should send [setDestination:allowOverwrite:](../nsurldownload/setdestination%28__allowoverwrite_%29.md) to `download`.

<a id="Special-Considerations"></a>

### Special Considerations

The delegate will not receive this message if `setDestination:allowOverwrite:` has already been called for the download.

## See Also

### Download Data and Responses

- [downloadDidBegin:](downloaddidbegin%28__%29.md): Sent immediately after a download object begins a download.
- [download:didCreateDestination:](download%28__didcreatedestination_%29.md): Sent when the destination file is created.
- [download:didReceiveResponse:](download%28__didreceive_%29-817z3.md): Sent when a download object has received sufficient load data to construct the NSURLResponse object for the download.
- [download:didReceiveDataOfLength:](download%28__didreceivedataoflength_%29.md): Sent as a download object receives data incrementally.
- [download:shouldDecodeSourceDataOfMIMEType:](download%28__shoulddecodesourcedataofmimetype_%29.md): Sent when a download object determines that the downloaded file is encoded to inquire whether the file should be automatically decoded.
- [download:willResumeWithResponse:fromByte:](download%28__willresumewith_frombyte_%29.md): Sent when a download object has received a response from the server after attempting to resume a download.
- [download:willSendRequest:redirectResponse:](download%28__willsend_redirectresponse_%29.md): Sent when the download object determines that it must change URLs in order to continue loading a request.
