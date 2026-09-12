> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessionfile/fileurl](https://developer.apple.com/documentation/watchconnectivity/wcsessionfile/fileurl)

# fileURL (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The URL of the file that was received.

## Declaration

```swift
var fileURL: URL { get }
```

<a id="Discussion"></a>

## Discussion

The system places downloaded files inside a temporary directory. If you intend to keep the file, it is your responsibility to move the file to a more permanent location inside your extension’s container directory. You must move the file before your session delegate’s [session(\_:didReceive:)](../wcsessiondelegate/session%28__didreceive_%29.md) method returns.

## See Also

### Getting the File Information

- [metadata](metadata.md): A dictionary of additional information that was sent with the file.

# fileURL (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The URL of the file that was received.

## Declaration

```objectivec
@property (nonatomic, readonly) NSURL * fileURL;
```

<a id="Discussion"></a>

## Discussion

The system places downloaded files inside a temporary directory. If you intend to keep the file, it is your responsibility to move the file to a more permanent location inside your extension’s container directory. You must move the file before your session delegate’s [session:didReceiveFile:](../wcsessiondelegate/session%28__didreceive_%29.md) method returns.

## See Also

### Getting the File Information

- [metadata](metadata.md): A dictionary of additional information that was sent with the file.
