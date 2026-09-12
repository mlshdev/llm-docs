> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresource](https://developer.apple.com/documentation/webkit/webresource)

# WebResource (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS

A `WebResource` object represents a downloaded URL. It encapsulates the data of the download as well as other resource properties such as the URL, MIME type, and frame name.

## Declaration

```swift
class WebResource
```

<a id="overview"></a>

## Overview

Use the [init(data:url:mimeType:textEncodingName:frameName:)](webresource/init%28data_url_mimetype_textencodingname_framename_%29-914h4.md) method to initialize a newly created `WebResource` object. Use the other methods in this class to get the properties of a `WebResource` object.

## Topics

### Initializing

- [init(data:url:mimeType:textEncodingName:frameName:)](webresource/init%28data_url_mimetype_textencodingname_framename_%29-914h4.md): Initializes and returns a web resource instance.

### Getting attributes

- [data](webresource/data.md): The receiver’s data.
- [url](webresource/url.md): The receiver’s URL.
- [mimeType](webresource/mimetype.md): The receiver’s MIME type.
- [textEncodingName](webresource/textencodingname.md): The receiver’s text encoding name.
- [frameName](webresource/framename.md): The name of the frame. If the receiver does not represent the contents of an entire HTML frame, this is `nil`.

### Initializers

- [init(coder:)](webresource/init%28coder_%29.md)
- [init(data:URL:MIMEType:textEncodingName:frameName:)](webresource/init%28data_url_mimetype_textencodingname_framename_%29-6mz1.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Loading Resources (Legacy)

- [WebResourceLoadDelegate](webresourceloaddelegate.md): Deprecated. Web view resource load delegates implement this protocol to be notified on the progress of loading individual resources. Note that there can be hundreds of resources, such as images and other media, per page. So, if you just want to get page loading status see the WebFrameLoadDelegate protocol.

# WebResource (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS

A `WebResource` object represents a downloaded URL. It encapsulates the data of the download as well as other resource properties such as the URL, MIME type, and frame name.

## Declaration

```objectivec
@interface WebResource : NSObject
```

<a id="overview"></a>

## Overview

Use the [initWithData:URL:MIMEType:textEncodingName:frameName:](webresource/init%28data_url_mimetype_textencodingname_framename_%29-914h4.md) method to initialize a newly created `WebResource` object. Use the other methods in this class to get the properties of a `WebResource` object.

## Topics

### Initializing

- [initWithData:URL:MIMEType:textEncodingName:frameName:](webresource/init%28data_url_mimetype_textencodingname_framename_%29-914h4.md): Initializes and returns a web resource instance.

### Getting attributes

- [data](webresource/data.md): The receiver’s data.
- [URL](webresource/url.md): The receiver’s URL.
- [MIMEType](webresource/mimetype.md): The receiver’s MIME type.
- [textEncodingName](webresource/textencodingname.md): The receiver’s text encoding name.
- [frameName](webresource/framename.md): The name of the frame. If the receiver does not represent the contents of an entire HTML frame, this is `nil`.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Loading Resources (Legacy)

- [WebResourceLoadDelegate](webresourceloaddelegate.md): Deprecated. Web view resource load delegates implement this protocol to be notified on the progress of loading individual resources. Note that there can be hundreds of resources, such as images and other media, per page. So, if you just want to get page loading status see the WebFrameLoadDelegate protocol.
