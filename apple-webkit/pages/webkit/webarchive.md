> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webarchive](https://developer.apple.com/documentation/webkit/webarchive)

# WebArchive (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A WebArchive object represents a webpage that can be archived—for example, archived on disk or on the pasteboard. A WebArchive object contains the main resource, as well as the subresources and subframes of the main resource. The main resource can be an entire webpage, a portion of a webpage, or some other kind of data such as an image. Use this class to archive webpages, or place a portion of a webpage on the pasteboard, or to represent rich web content in any application.

## Declaration

```swift
class WebArchive
```

## Topics

### Initializing

- [init(mainResource:subresources:subframeArchives:)](webarchive/init%28mainresource_subresources_subframearchives_%29.md): Deprecated. Initializes the receiver with a resource and optional subresources and subframe archives..
- [init(data:)](webarchive/init%28data_%29.md): Deprecated. Initializes and returns the receiver, specifying the initial content data.

### Getting attributes

- [mainResource](webarchive/mainresource.md): Deprecated. The receiver’s main resource.
- [subresources](webarchive/subresources.md): Deprecated. The receiver’s subresources, or `nil` if there are none.
- [subframeArchives](webarchive/subframearchives.md): Deprecated. Archives representing the receiver’s subresources or `nil` if there are none.
- [data](webarchive/data.md): Deprecated. The data representation of the receiver.

### Constants

- [WebArchivePboardType](webarchivepboardtype.md): Deprecated. The pasteboard type constant used when adding or accessing a WebArchive on the pasteboard.

### Initializers

- [init(coder:)](webarchive/init%28coder_%29.md): Deprecated.

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

# WebArchive (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A WebArchive object represents a webpage that can be archived—for example, archived on disk or on the pasteboard. A WebArchive object contains the main resource, as well as the subresources and subframes of the main resource. The main resource can be an entire webpage, a portion of a webpage, or some other kind of data such as an image. Use this class to archive webpages, or place a portion of a webpage on the pasteboard, or to represent rich web content in any application.

## Declaration

```objectivec
@interface WebArchive : NSObject
```

## Topics

### Initializing

- [initWithMainResource:subresources:subframeArchives:](webarchive/init%28mainresource_subresources_subframearchives_%29.md): Deprecated. Initializes the receiver with a resource and optional subresources and subframe archives..
- [initWithData:](webarchive/init%28data_%29.md): Deprecated. Initializes and returns the receiver, specifying the initial content data.

### Getting attributes

- [mainResource](webarchive/mainresource.md): Deprecated. The receiver’s main resource.
- [subresources](webarchive/subresources.md): Deprecated. The receiver’s subresources, or `nil` if there are none.
- [subframeArchives](webarchive/subframearchives.md): Deprecated. Archives representing the receiver’s subresources or `nil` if there are none.
- [data](webarchive/data.md): Deprecated. The data representation of the receiver.

### Constants

- [WebArchivePboardType](webarchivepboardtype.md): Deprecated. The pasteboard type constant used when adding or accessing a WebArchive on the pasteboard.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)
