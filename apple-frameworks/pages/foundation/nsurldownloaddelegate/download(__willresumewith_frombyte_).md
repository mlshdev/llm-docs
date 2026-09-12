> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownloaddelegate/download(_:willresumewith:frombyte:)](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate/download(_:willresumewith:frombyte:))

# download(\_:willResumeWith:fromByte:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent when a download object has received a response from the server after attempting to resume a download.

## Declaration

```swift
optional func download(_ download: NSURLDownload, willResumeWith response: URLResponse, fromByte startingByte: Int64)
```

## Parameters

- `download`: The URL download object sending the message.
- `response`: The URL response received from the server in response to an attempt to resume a download.
- `startingByte`: The location of the start of the resumed data, in bytes.

## See Also

### Download Data and Responses

- [download(\_:decideDestinationWithSuggestedFilename:)](download%28__decidedestinationwithsuggestedfilename_%29.md): The delegate receives this message when `download` has determined a suggested filename for the downloaded file.
- [downloadDidBegin(\_:)](downloaddidbegin%28__%29.md): Sent immediately after a download object begins a download.
- [download(\_:didCreateDestination:)](download%28__didcreatedestination_%29.md): Sent when the destination file is created.
- [download(\_:didReceive:)](download%28__didreceive_%29-817z3.md): Sent when a download object has received sufficient load data to construct the NSURLResponse object for the download.
- [download(\_:didReceiveDataOfLength:)](download%28__didreceivedataoflength_%29.md): Sent as a download object receives data incrementally.
- [download(\_:shouldDecodeSourceDataOfMIMEType:)](download%28__shoulddecodesourcedataofmimetype_%29.md): Sent when a download object determines that the downloaded file is encoded to inquire whether the file should be automatically decoded.
- [download(\_:willSend:redirectResponse:)](download%28__willsend_redirectresponse_%29.md): Sent when the download object determines that it must change URLs in order to continue loading a request.

# download:willResumeWithResponse:fromByte: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent when a download object has received a response from the server after attempting to resume a download.

## Declaration

```objectivec
- (void) download:(NSURLDownload *) download willResumeWithResponse:(NSURLResponse *) response fromByte:(long long) startingByte;
```

## Parameters

- `download`: The URL download object sending the message.
- `response`: The URL response received from the server in response to an attempt to resume a download.
- `startingByte`: The location of the start of the resumed data, in bytes.

## See Also

### Download Data and Responses

- [download:decideDestinationWithSuggestedFilename:](download%28__decidedestinationwithsuggestedfilename_%29.md): The delegate receives this message when `download` has determined a suggested filename for the downloaded file.
- [downloadDidBegin:](downloaddidbegin%28__%29.md): Sent immediately after a download object begins a download.
- [download:didCreateDestination:](download%28__didcreatedestination_%29.md): Sent when the destination file is created.
- [download:didReceiveResponse:](download%28__didreceive_%29-817z3.md): Sent when a download object has received sufficient load data to construct the NSURLResponse object for the download.
- [download:didReceiveDataOfLength:](download%28__didreceivedataoflength_%29.md): Sent as a download object receives data incrementally.
- [download:shouldDecodeSourceDataOfMIMEType:](download%28__shoulddecodesourcedataofmimetype_%29.md): Sent when a download object determines that the downloaded file is encoded to inquire whether the file should be automatically decoded.
- [download:willSendRequest:redirectResponse:](download%28__willsend_redirectresponse_%29.md): Sent when the download object determines that it must change URLs in order to continue loading a request.
