> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webarchive/data](https://developer.apple.com/documentation/webkit/webarchive/data)

# data (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The data representation of the receiver.

## Declaration

```swift
var data: Data! { get }
```

<a id="Discussion"></a>

## Discussion

Can be used to save the web archive to a file, to put it on the pasteboard using the [WebArchivePboardType](../webarchivepboardtype.md) type, or used to initialize another web archive using the [init(data:)](init%28data_%29.md) method.

## See Also

### Getting attributes

- [mainResource](mainresource.md): Deprecated. The receiver’s main resource.
- [subresources](subresources.md): Deprecated. The receiver’s subresources, or `nil` if there are none.
- [subframeArchives](subframearchives.md): Deprecated. Archives representing the receiver’s subresources or `nil` if there are none.

# data (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The data representation of the receiver.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * data;
```

<a id="Discussion"></a>

## Discussion

Can be used to save the web archive to a file, to put it on the pasteboard using the [WebArchivePboardType](../webarchivepboardtype.md) type, or used to initialize another web archive using the [initWithData:](init%28data_%29.md) method.

## See Also

### Getting attributes

- [mainResource](mainresource.md): Deprecated. The receiver’s main resource.
- [subresources](subresources.md): Deprecated. The receiver’s subresources, or `nil` if there are none.
- [subframeArchives](subframearchives.md): Deprecated. Archives representing the receiver’s subresources or `nil` if there are none.
