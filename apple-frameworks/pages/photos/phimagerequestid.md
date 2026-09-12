> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestid](https://developer.apple.com/documentation/photos/phimagerequestid)

# PHImageRequestID (Swift)

**Framework:** Photos  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A numeric identifier for an asynchronous image request.

## Declaration

```swift
typealias PHImageRequestID = Int32
```

<a id="Discussion"></a>

## Discussion

Pass this identifier to the [cancelImageRequest(\_:)](phimagemanager/cancelimagerequest%28__%29.md) method if you need to cancel a request before it completes.

## See Also

### Canceling a Request

- [cancelImageRequest(\_:)](phimagemanager/cancelimagerequest%28__%29.md): Cancels an asynchronous request
- [PHInvalidImageRequestID](phinvalidimagerequestid.md): A special value provided for asynchronous image requests that cannot be canceled.

# PHImageRequestID (Objective-C)

**Framework:** Photos  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A numeric identifier for an asynchronous image request.

## Declaration

```objectivec
typedef int32_t PHImageRequestID;
```

<a id="Discussion"></a>

## Discussion

Pass this identifier to the [cancelImageRequest:](phimagemanager/cancelimagerequest%28__%29.md) method if you need to cancel a request before it completes.

## See Also

### Canceling a Request

- [cancelImageRequest:](phimagemanager/cancelimagerequest%28__%29.md): Cancels an asynchronous request
- [PHInvalidImageRequestID](phinvalidimagerequestid.md): A special value provided for asynchronous image requests that cannot be canceled.
