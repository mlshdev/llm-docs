> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownloaddelegate/download(_:didreceive:)-817z3](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate/download(_:didreceive:)-817z3)

# download(\_:didReceive:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent when a download object has received sufficient load data to construct the NSURLResponse object for the download.

## Declaration

```swift
optional func download(_ download: NSURLDownload, didReceive response: URLResponse)
```

## Parameters

- `download`: The URL download object sending the message.
- `response`: The URL response object received as part of the download. `response` is immutable and will not be modified after this method is called.

<a id="Discussion"></a>

## Discussion

In some rare cases, multiple responses may be received for a single download. In this case, the client should assume that each new response resets the download progress to 0 and should check the new response for the expected content length.

## See Also

### Download Data and Responses

- [download(\_:decideDestinationWithSuggestedFilename:)](download%28__decidedestinationwithsuggestedfilename_%29.md): The delegate receives this message when `download` has determined a suggested filename for the downloaded file.
- [downloadDidBegin(\_:)](downloaddidbegin%28__%29.md): Sent immediately after a download object begins a download.
- [download(\_:didCreateDestination:)](download%28__didcreatedestination_%29.md): Sent when the destination file is created.
- [download(\_:didReceiveDataOfLength:)](download%28__didreceivedataoflength_%29.md): Sent as a download object receives data incrementally.
- [download(\_:shouldDecodeSourceDataOfMIMEType:)](download%28__shoulddecodesourcedataofmimetype_%29.md): Sent when a download object determines that the downloaded file is encoded to inquire whether the file should be automatically decoded.
- [download(\_:willResumeWith:fromByte:)](download%28__willresumewith_frombyte_%29.md): Sent when a download object has received a response from the server after attempting to resume a download.
- [download(\_:willSend:redirectResponse:)](download%28__willsend_redirectresponse_%29.md): Sent when the download object determines that it must change URLs in order to continue loading a request.

# download:didReceiveResponse: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent when a download object has received sufficient load data to construct the NSURLResponse object for the download.

## Declaration

```objectivec
- (void) download:(NSURLDownload *) download didReceiveResponse:(NSURLResponse *) response;
```

## Parameters

- `download`: The URL download object sending the message.
- `response`: The URL response object received as part of the download. `response` is immutable and will not be modified after this method is called.

<a id="Discussion"></a>

## Discussion

In some rare cases, multiple responses may be received for a single download. In this case, the client should assume that each new response resets the download progress to 0 and should check the new response for the expected content length.

## See Also

### Download Data and Responses

- [download:decideDestinationWithSuggestedFilename:](download%28__decidedestinationwithsuggestedfilename_%29.md): The delegate receives this message when `download` has determined a suggested filename for the downloaded file.
- [downloadDidBegin:](downloaddidbegin%28__%29.md): Sent immediately after a download object begins a download.
- [download:didCreateDestination:](download%28__didcreatedestination_%29.md): Sent when the destination file is created.
- [download:didReceiveDataOfLength:](download%28__didreceivedataoflength_%29.md): Sent as a download object receives data incrementally.
- [download:shouldDecodeSourceDataOfMIMEType:](download%28__shoulddecodesourcedataofmimetype_%29.md): Sent when a download object determines that the downloaded file is encoded to inquire whether the file should be automatically decoded.
- [download:willResumeWithResponse:fromByte:](download%28__willresumewith_frombyte_%29.md): Sent when a download object has received a response from the server after attempting to resume a download.
- [download:willSendRequest:redirectResponse:](download%28__willsend_redirectresponse_%29.md): Sent when the download object determines that it must change URLs in order to continue loading a request.
