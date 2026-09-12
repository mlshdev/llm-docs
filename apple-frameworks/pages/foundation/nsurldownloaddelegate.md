> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownloaddelegate](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate)

# NSURLDownloadDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** macOS 10.2+

A protocol that URL download delegates implement to interact with a URL download request.

## Declaration

```swift
protocol NSURLDownloadDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [NSURLDownloadDelegate](nsurldownloaddelegate.md) protocol defines methods that allow an object to receive informational callbacks about the asynchronous load of a download’s URL request. Other delegate methods provide facilities that allow the delegate to customize the process of performing an asynchronous URL load.

Note that these delegate methods will be called on the thread that started the asynchronous load operation for the associated [NSURLDownload](nsurldownload.md) object.

- A [downloadDidBegin(\_:)](nsurldownloaddelegate/downloaddidbegin%28__%29.md) message will be sent to the delegate immediately upon starting the download.
- Zero or more [download(\_:willSend:redirectResponse:)](nsurldownloaddelegate/download%28__willsend_redirectresponse_%29.md) messages will be sent to the delegate before any further messages are sent if it is determined that the download must redirect to a new location. The delegate can allow the redirect, modify the destination or deny the redirect.
- Zero or more [download(\_:didReceive:)](nsurldownloaddelegate/download%28__didreceive_%29-1pc0v.md) messages will be sent to the delegate if it is necessary to authenticate in order to download the request and NSURLDownload does not already have authenticated credentials.
- Zero or more [download(\_:didCancel:)](nsurldownloaddelegate/download%28__didcancel_%29.md) messages will be sent to the delegate if [NSURLDownload](nsurldownload.md) cancels the authentication challenge due to encountering a protocol implementation error.
- Zero or more [download(\_:didReceive:)](nsurldownloaddelegate/download%28__didreceive_%29-817z3.md) messages will be sent to the delegate before receiving a [download(\_:didReceiveDataOfLength:)](nsurldownloaddelegate/download%28__didreceivedataoflength_%29.md) message. The only case where [download(\_:didReceive:)](nsurldownloaddelegate/download%28__didreceive_%29-817z3.md) is not sent to a delegate is when the protocol implementation encounters an error before a response could be created.
- Zero or more [download(\_:didReceiveDataOfLength:)](nsurldownloaddelegate/download%28__didreceivedataoflength_%29.md) messages will be sent before [downloadDidFinish(\_:)](nsurldownloaddelegate/downloaddidfinish%28__%29.md) or [download(\_:didFailWithError:)](nsurldownloaddelegate/download%28__didfailwitherror_%29.md) is sent to the delegate.
- Zero or one [download(\_:decideDestinationWithSuggestedFilename:)](nsurldownloaddelegate/download%28__decidedestinationwithsuggestedfilename_%29.md) will be sent to the delegate when sufficient information has been received to determine the suggested filename for the downloaded file. The delegate will not receive this message if [setDestination(\_:allowOverwrite:)](nsurldownload/setdestination%28__allowoverwrite_%29.md) has already been sent to the [NSURLDownload](nsurldownload.md) instance.
- A [download(\_:didCreateDestination:)](nsurldownloaddelegate/download%28__didcreatedestination_%29.md) message will be sent to the delegate when the [NSURLDownload](nsurldownload.md) instance creates the file on disk.
- If NSURLDownload determines that the downloaded file is in a format that it is able to decode (MacBinary, Binhex or gzip), the delegate will receive a [download(\_:shouldDecodeSourceDataOfMIMEType:)](nsurldownloaddelegate/download%28__shoulddecodesourcedataofmimetype_%29.md). The delegate should return [true](https://developer.apple.com/documentation/swift/true) to decode the data, [false](https://developer.apple.com/documentation/swift/false) otherwise.
- Unless an [NSURLDownload](nsurldownload.md) instance receives a [cancel()](nsurldownload/cancel%28%29.md) message, the delegate will receive one and only one [downloadDidFinish(\_:)](nsurldownloaddelegate/downloaddidfinish%28__%29.md) or [download(\_:didFailWithError:)](nsurldownloaddelegate/download%28__didfailwitherror_%29.md) message, but never both. In addition, once either of these messages are sent, the delegate will receive no further messages for the given [NSURLDownload](nsurldownload.md).

## Topics

### Download Authentication

- [download(\_:canAuthenticateAgainstProtectionSpace:)](nsurldownloaddelegate/download%28__canauthenticateagainstprotectionspace_%29.md): Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [download(\_:didCancel:)](nsurldownloaddelegate/download%28__didcancel_%29.md): Sent if an authentication challenge is canceled due to the protocol implementation encountering an error.
- [download(\_:didReceive:)](nsurldownloaddelegate/download%28__didreceive_%29-1pc0v.md): Sent when the URL download must authenticate a challenge in order to download the request.
- [downloadShouldUseCredentialStorage(\_:)](nsurldownloaddelegate/downloadshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should consult the credential storage to authenticate the download.

### Download Data and Responses

- [download(\_:decideDestinationWithSuggestedFilename:)](nsurldownloaddelegate/download%28__decidedestinationwithsuggestedfilename_%29.md): The delegate receives this message when `download` has determined a suggested filename for the downloaded file.
- [downloadDidBegin(\_:)](nsurldownloaddelegate/downloaddidbegin%28__%29.md): Sent immediately after a download object begins a download.
- [download(\_:didCreateDestination:)](nsurldownloaddelegate/download%28__didcreatedestination_%29.md): Sent when the destination file is created.
- [download(\_:didReceive:)](nsurldownloaddelegate/download%28__didreceive_%29-817z3.md): Sent when a download object has received sufficient load data to construct the NSURLResponse object for the download.
- [download(\_:didReceiveDataOfLength:)](nsurldownloaddelegate/download%28__didreceivedataoflength_%29.md): Sent as a download object receives data incrementally.
- [download(\_:shouldDecodeSourceDataOfMIMEType:)](nsurldownloaddelegate/download%28__shoulddecodesourcedataofmimetype_%29.md): Sent when a download object determines that the downloaded file is encoded to inquire whether the file should be automatically decoded.
- [download(\_:willResumeWith:fromByte:)](nsurldownloaddelegate/download%28__willresumewith_frombyte_%29.md): Sent when a download object has received a response from the server after attempting to resume a download.
- [download(\_:willSend:redirectResponse:)](nsurldownloaddelegate/download%28__willsend_redirectresponse_%29.md): Sent when the download object determines that it must change URLs in order to continue loading a request.

### Download Completion

- [download(\_:didFailWithError:)](nsurldownloaddelegate/download%28__didfailwitherror_%29.md): Sent if the download fails or if an I/O error occurs when the file is written to disk.
- [downloadDidFinish(\_:)](nsurldownloaddelegate/downloaddidfinish%28__%29.md): Sent when a download object has completed downloading successfully and has written its results to disk.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### URL Download

- [NSURLDownload](nsurldownload.md): An object that downloads a resource asynchronously and saves the data to a file.

# NSURLDownloadDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** macOS 10.2+

A protocol that URL download delegates implement to interact with a URL download request.

## Declaration

```objectivec
@protocol NSURLDownloadDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The [NSURLDownloadDelegate](nsurldownloaddelegate.md) protocol defines methods that allow an object to receive informational callbacks about the asynchronous load of a download’s URL request. Other delegate methods provide facilities that allow the delegate to customize the process of performing an asynchronous URL load.

Note that these delegate methods will be called on the thread that started the asynchronous load operation for the associated [NSURLDownload](nsurldownload.md) object.

- A [downloadDidBegin:](nsurldownloaddelegate/downloaddidbegin%28__%29.md) message will be sent to the delegate immediately upon starting the download.
- Zero or more [download:willSendRequest:redirectResponse:](nsurldownloaddelegate/download%28__willsend_redirectresponse_%29.md) messages will be sent to the delegate before any further messages are sent if it is determined that the download must redirect to a new location. The delegate can allow the redirect, modify the destination or deny the redirect.
- Zero or more [download:didReceiveAuthenticationChallenge:](nsurldownloaddelegate/download%28__didreceive_%29-1pc0v.md) messages will be sent to the delegate if it is necessary to authenticate in order to download the request and NSURLDownload does not already have authenticated credentials.
- Zero or more [download:didCancelAuthenticationChallenge:](nsurldownloaddelegate/download%28__didcancel_%29.md) messages will be sent to the delegate if [NSURLDownload](nsurldownload.md) cancels the authentication challenge due to encountering a protocol implementation error.
- Zero or more [download:didReceiveResponse:](nsurldownloaddelegate/download%28__didreceive_%29-817z3.md) messages will be sent to the delegate before receiving a [download:didReceiveDataOfLength:](nsurldownloaddelegate/download%28__didreceivedataoflength_%29.md) message. The only case where [download:didReceiveResponse:](nsurldownloaddelegate/download%28__didreceive_%29-817z3.md) is not sent to a delegate is when the protocol implementation encounters an error before a response could be created.
- Zero or more [download:didReceiveDataOfLength:](nsurldownloaddelegate/download%28__didreceivedataoflength_%29.md) messages will be sent before [downloadDidFinish:](nsurldownloaddelegate/downloaddidfinish%28__%29.md) or [download:didFailWithError:](nsurldownloaddelegate/download%28__didfailwitherror_%29.md) is sent to the delegate.
- Zero or one [download:decideDestinationWithSuggestedFilename:](nsurldownloaddelegate/download%28__decidedestinationwithsuggestedfilename_%29.md) will be sent to the delegate when sufficient information has been received to determine the suggested filename for the downloaded file. The delegate will not receive this message if [setDestination:allowOverwrite:](nsurldownload/setdestination%28__allowoverwrite_%29.md) has already been sent to the [NSURLDownload](nsurldownload.md) instance.
- A [download:didCreateDestination:](nsurldownloaddelegate/download%28__didcreatedestination_%29.md) message will be sent to the delegate when the [NSURLDownload](nsurldownload.md) instance creates the file on disk.
- If NSURLDownload determines that the downloaded file is in a format that it is able to decode (MacBinary, Binhex or gzip), the delegate will receive a [download:shouldDecodeSourceDataOfMIMEType:](nsurldownloaddelegate/download%28__shoulddecodesourcedataofmimetype_%29.md). The delegate should return [true](https://developer.apple.com/documentation/swift/true) to decode the data, [false](https://developer.apple.com/documentation/swift/false) otherwise.
- Unless an [NSURLDownload](nsurldownload.md) instance receives a [cancel](nsurldownload/cancel%28%29.md) message, the delegate will receive one and only one [downloadDidFinish:](nsurldownloaddelegate/downloaddidfinish%28__%29.md) or [download:didFailWithError:](nsurldownloaddelegate/download%28__didfailwitherror_%29.md) message, but never both. In addition, once either of these messages are sent, the delegate will receive no further messages for the given [NSURLDownload](nsurldownload.md).

## Topics

### Download Authentication

- [download:canAuthenticateAgainstProtectionSpace:](nsurldownloaddelegate/download%28__canauthenticateagainstprotectionspace_%29.md): Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [download:didCancelAuthenticationChallenge:](nsurldownloaddelegate/download%28__didcancel_%29.md): Sent if an authentication challenge is canceled due to the protocol implementation encountering an error.
- [download:didReceiveAuthenticationChallenge:](nsurldownloaddelegate/download%28__didreceive_%29-1pc0v.md): Sent when the URL download must authenticate a challenge in order to download the request.
- [downloadShouldUseCredentialStorage:](nsurldownloaddelegate/downloadshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should consult the credential storage to authenticate the download.

### Download Data and Responses

- [download:decideDestinationWithSuggestedFilename:](nsurldownloaddelegate/download%28__decidedestinationwithsuggestedfilename_%29.md): The delegate receives this message when `download` has determined a suggested filename for the downloaded file.
- [downloadDidBegin:](nsurldownloaddelegate/downloaddidbegin%28__%29.md): Sent immediately after a download object begins a download.
- [download:didCreateDestination:](nsurldownloaddelegate/download%28__didcreatedestination_%29.md): Sent when the destination file is created.
- [download:didReceiveResponse:](nsurldownloaddelegate/download%28__didreceive_%29-817z3.md): Sent when a download object has received sufficient load data to construct the NSURLResponse object for the download.
- [download:didReceiveDataOfLength:](nsurldownloaddelegate/download%28__didreceivedataoflength_%29.md): Sent as a download object receives data incrementally.
- [download:shouldDecodeSourceDataOfMIMEType:](nsurldownloaddelegate/download%28__shoulddecodesourcedataofmimetype_%29.md): Sent when a download object determines that the downloaded file is encoded to inquire whether the file should be automatically decoded.
- [download:willResumeWithResponse:fromByte:](nsurldownloaddelegate/download%28__willresumewith_frombyte_%29.md): Sent when a download object has received a response from the server after attempting to resume a download.
- [download:willSendRequest:redirectResponse:](nsurldownloaddelegate/download%28__willsend_redirectresponse_%29.md): Sent when the download object determines that it must change URLs in order to continue loading a request.

### Download Completion

- [download:didFailWithError:](nsurldownloaddelegate/download%28__didfailwitherror_%29.md): Sent if the download fails or if an I/O error occurs when the file is written to disk.
- [downloadDidFinish:](nsurldownloaddelegate/downloaddidfinish%28__%29.md): Sent when a download object has completed downloading successfully and has written its results to disk.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### URL Download

- [NSURLDownload](nsurldownload.md): An object that downloads a resource asynchronously and saves the data to a file.
