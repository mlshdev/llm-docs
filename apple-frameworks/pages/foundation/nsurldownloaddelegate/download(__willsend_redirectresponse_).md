> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownloaddelegate/download(_:willsend:redirectresponse:)](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate/download(_:willsend:redirectresponse:))

# download(\_:willSend:redirectResponse:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent when the download object determines that it must change URLs in order to continue loading a request.

## Declaration

```swift
optional func download(_ download: NSURLDownload, willSend request: URLRequest, redirectResponse: URLResponse?) -> URLRequest?
```

## Parameters

- `download`: The URL download object sending the message.
- `request`: The proposed redirected request. The delegate should inspect the redirected request to verify that it meets its needs, and create a copy with new attributes to return to the connection if necessary.
- `redirectResponse`: The URL response that caused the redirect. May be `nil` in cases where this method is not being sent as a result of involving the delegate in redirect processing.

<a id="return-value"></a>

## Return Value

The actual URL request to use in light of the redirection response. The delegate may copy and modify `request` as necessary to change its attributes, return `request` unmodified, or return `nil`.

<a id="Discussion"></a>

## Discussion

If the delegate wishes to cancel the redirect, it should call the `download` object’s [cancel()](../nsurldownload/cancel%28%29.md) method. Alternatively, the delegate method can return `nil` to cancel the redirect, and the download will continue to process. This has special relevance in the case where `redirectResponse` is not `nil`. In this case, any data that is loaded for the download will be sent to the delegate, and the delegate will receive a [downloadDidFinish(\_:)](downloaddidfinish%28__%29.md) or [download(\_:didFailWithError:)](download%28__didfailwitherror_%29.md) message, as appropriate.

<a id="Special-Considerations"></a>

### Special Considerations

The delegate can receive this message as a result of transforming a request’s URL to its canonical form, or for protocol-specific reasons, such as an HTTP redirect. The delegate implementation should be prepared to receive this message multiple times.

## See Also

### Download Data and Responses

- [download(\_:decideDestinationWithSuggestedFilename:)](download%28__decidedestinationwithsuggestedfilename_%29.md): The delegate receives this message when `download` has determined a suggested filename for the downloaded file.
- [downloadDidBegin(\_:)](downloaddidbegin%28__%29.md): Sent immediately after a download object begins a download.
- [download(\_:didCreateDestination:)](download%28__didcreatedestination_%29.md): Sent when the destination file is created.
- [download(\_:didReceive:)](download%28__didreceive_%29-817z3.md): Sent when a download object has received sufficient load data to construct the NSURLResponse object for the download.
- [download(\_:didReceiveDataOfLength:)](download%28__didreceivedataoflength_%29.md): Sent as a download object receives data incrementally.
- [download(\_:shouldDecodeSourceDataOfMIMEType:)](download%28__shoulddecodesourcedataofmimetype_%29.md): Sent when a download object determines that the downloaded file is encoded to inquire whether the file should be automatically decoded.
- [download(\_:willResumeWith:fromByte:)](download%28__willresumewith_frombyte_%29.md): Sent when a download object has received a response from the server after attempting to resume a download.

# download:willSendRequest:redirectResponse: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sent when the download object determines that it must change URLs in order to continue loading a request.

## Declaration

```objectivec
- (NSURLRequest *) download:(NSURLDownload *) download willSendRequest:(NSURLRequest *) request redirectResponse:(NSURLResponse *) redirectResponse;
```

## Parameters

- `download`: The URL download object sending the message.
- `request`: The proposed redirected request. The delegate should inspect the redirected request to verify that it meets its needs, and create a copy with new attributes to return to the connection if necessary.
- `redirectResponse`: The URL response that caused the redirect. May be `nil` in cases where this method is not being sent as a result of involving the delegate in redirect processing.

<a id="return-value"></a>

## Return Value

The actual URL request to use in light of the redirection response. The delegate may copy and modify `request` as necessary to change its attributes, return `request` unmodified, or return `nil`.

<a id="Discussion"></a>

## Discussion

If the delegate wishes to cancel the redirect, it should call the `download` object’s [cancel](../nsurldownload/cancel%28%29.md) method. Alternatively, the delegate method can return `nil` to cancel the redirect, and the download will continue to process. This has special relevance in the case where `redirectResponse` is not `nil`. In this case, any data that is loaded for the download will be sent to the delegate, and the delegate will receive a [downloadDidFinish:](downloaddidfinish%28__%29.md) or [download:didFailWithError:](download%28__didfailwitherror_%29.md) message, as appropriate.

<a id="Special-Considerations"></a>

### Special Considerations

The delegate can receive this message as a result of transforming a request’s URL to its canonical form, or for protocol-specific reasons, such as an HTTP redirect. The delegate implementation should be prepared to receive this message multiple times.

## See Also

### Download Data and Responses

- [download:decideDestinationWithSuggestedFilename:](download%28__decidedestinationwithsuggestedfilename_%29.md): The delegate receives this message when `download` has determined a suggested filename for the downloaded file.
- [downloadDidBegin:](downloaddidbegin%28__%29.md): Sent immediately after a download object begins a download.
- [download:didCreateDestination:](download%28__didcreatedestination_%29.md): Sent when the destination file is created.
- [download:didReceiveResponse:](download%28__didreceive_%29-817z3.md): Sent when a download object has received sufficient load data to construct the NSURLResponse object for the download.
- [download:didReceiveDataOfLength:](download%28__didreceivedataoflength_%29.md): Sent as a download object receives data incrementally.
- [download:shouldDecodeSourceDataOfMIMEType:](download%28__shoulddecodesourcedataofmimetype_%29.md): Sent when a download object determines that the downloaded file is encoded to inquire whether the file should be automatically decoded.
- [download:willResumeWithResponse:fromByte:](download%28__willresumewith_frombyte_%29.md): Sent when a download object has received a response from the server after attempting to resume a download.
