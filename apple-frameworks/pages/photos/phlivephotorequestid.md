> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotorequestid](https://developer.apple.com/documentation/photos/phlivephotorequestid)

# PHLivePhotoRequestID (Swift)

**Framework:** Photos  
**Kind:** Type Alias  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A numeric identifier for an asynchronous Live Photo loading request.

## Declaration

```swift
typealias PHLivePhotoRequestID = Int32
```

<a id="Discussion"></a>

## Discussion

Pass this identifier to the [cancelRequest(withRequestID:)](phlivephoto/cancelrequest%28withrequestid_%29.md) method if you need to cancel a request before it completes.

## See Also

### Constants

- [Image Request Identifiers](../photokit/image-request-identifiers.md): Special values for the Live Photo request ID that are returned by asynchronous requests.
- [Result Handler Info Dictionary Keys](../photokit/result-handler-info-dictionary-keys.md): Info describing an attempt to load a Live Photo.

# PHLivePhotoRequestID (Objective-C)

**Framework:** Photos  
**Kind:** Type Alias  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A numeric identifier for an asynchronous Live Photo loading request.

## Declaration

```objectivec
typedef int32_t PHLivePhotoRequestID;
```

<a id="Discussion"></a>

## Discussion

Pass this identifier to the [cancelLivePhotoRequestWithRequestID:](phlivephoto/cancelrequest%28withrequestid_%29.md) method if you need to cancel a request before it completes.

## See Also

### Constants

- [Image Request Identifiers](../photokit/image-request-identifiers.md): Special values for the Live Photo request ID that are returned by asynchronous requests.
- [Result Handler Info Dictionary Keys](../photokit/result-handler-info-dictionary-keys.md): Info describing an attempt to load a Live Photo.
