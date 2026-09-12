> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownload](https://developer.apple.com/documentation/foundation/nsurldownload)

# NSURLDownload (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.2+

An object that downloads a resource asynchronously and saves the data to a file.

## Declaration

```swift
class NSURLDownload
```

<a id="overview"></a>

## Overview

> **Important**

>  This API is considered legacy. Use [URLSession](urlsession.md) instead.

The interface for [NSURLDownload](nsurldownload.md) provides methods to initialize a download, set the destination path and cancel loading the request.

The delegate object assigned to each instance of this class should implement the methods defined by the [NSURLDownloadDelegate](nsurldownloaddelegate.md) protocol. These methods provide the delegate with the current status of in-progress asynchronous downloads and allow the delegate to customize the URL loading process. These delegate methods are called on the thread that started the asynchronous load operation for the associated [NSURLDownload](nsurldownload.md) object.

## Topics

### Creating and configuring a download instance

- [init(request:delegate:)](nsurldownload/init%28request_delegate_%29.md): Deprecated. Returns an initialized URL download for a URL request and begins to download the data for the request.
- [setDestination(\_:allowOverwrite:)](nsurldownload/setdestination%28__allowoverwrite_%29.md): Sets the destination path of the downloaded file.

### Resuming partial downloads

- [canResumeDownloadDecoded(withEncodingMIMEType:)](nsurldownload/canresumedownloaddecoded%28withencodingmimetype_%29.md): Returns whether a URL download object can resume a download that was decoded with the specified MIME type.
- [init(resumeData:delegate:path:)](nsurldownload/init%28resumedata_delegate_path_%29.md): Deprecated. Returns an initialized NSURLDownload object that will resume downloading the specified data to the specified file and begins the download.
- [resumeData](nsurldownload/resumedata.md): Returns the resume data for a download that is not yet complete.
- [deletesFileUponFailure](nsurldownload/deletesfileuponfailure.md): Returns whether the receiver deletes partially downloaded files when a download stops prematurely.

### Canceling a download

- [cancel()](nsurldownload/cancel%28%29.md): Cancels the receiver’s download and deletes the downloaded file.

### Getting download properties

- [request](nsurldownload/request.md): Returns the request that initiated the receiver’s download.
- [deletesFileUponFailure](nsurldownload/deletesfileuponfailure.md): Returns whether the receiver deletes partially downloaded files when a download stops prematurely.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### URL Download

- [NSURLDownloadDelegate](nsurldownloaddelegate.md): A protocol that URL download delegates implement to interact with a URL download request.

# NSURLDownload (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.2+

An object that downloads a resource asynchronously and saves the data to a file.

## Declaration

```objectivec
@interface NSURLDownload : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  This API is considered legacy. Use [NSURLSession](urlsession.md) instead.

The interface for [NSURLDownload](nsurldownload.md) provides methods to initialize a download, set the destination path and cancel loading the request.

The delegate object assigned to each instance of this class should implement the methods defined by the [NSURLDownloadDelegate](nsurldownloaddelegate.md) protocol. These methods provide the delegate with the current status of in-progress asynchronous downloads and allow the delegate to customize the URL loading process. These delegate methods are called on the thread that started the asynchronous load operation for the associated [NSURLDownload](nsurldownload.md) object.

## Topics

### Creating and configuring a download instance

- [initWithRequest:delegate:](nsurldownload/init%28request_delegate_%29.md): Deprecated. Returns an initialized URL download for a URL request and begins to download the data for the request.
- [setDestination:allowOverwrite:](nsurldownload/setdestination%28__allowoverwrite_%29.md): Sets the destination path of the downloaded file.

### Resuming partial downloads

- [canResumeDownloadDecodedWithEncodingMIMEType:](nsurldownload/canresumedownloaddecoded%28withencodingmimetype_%29.md): Returns whether a URL download object can resume a download that was decoded with the specified MIME type.
- [initWithResumeData:delegate:path:](nsurldownload/init%28resumedata_delegate_path_%29.md): Deprecated. Returns an initialized NSURLDownload object that will resume downloading the specified data to the specified file and begins the download.
- [resumeData](nsurldownload/resumedata.md): Returns the resume data for a download that is not yet complete.
- [deletesFileUponFailure](nsurldownload/deletesfileuponfailure.md): Returns whether the receiver deletes partially downloaded files when a download stops prematurely.

### Canceling a download

- [cancel](nsurldownload/cancel%28%29.md): Cancels the receiver’s download and deletes the downloaded file.

### Getting download properties

- [request](nsurldownload/request.md): Returns the request that initiated the receiver’s download.
- [deletesFileUponFailure](nsurldownload/deletesfileuponfailure.md): Returns whether the receiver deletes partially downloaded files when a download stops prematurely.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### URL Download

- [NSURLDownloadDelegate](nsurldownloaddelegate.md): A protocol that URL download delegates implement to interact with a URL download request.
