> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcedatarequestid](https://developer.apple.com/documentation/photos/phassetresourcedatarequestid)

# PHAssetResourceDataRequestID (Swift)

**Framework:** Photos  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A numeric identifier for an asynchronous asset resource loading request.

## Declaration

```swift
typealias PHAssetResourceDataRequestID = Int32
```

<a id="Discussion"></a>

## Discussion

Pass this identifier to the [cancelDataRequest(\_:)](phassetresourcemanager/canceldatarequest%28__%29.md) method if you need to cancel a request before it completes.

## See Also

### Constants

- [Resource Loading Request Identifiers](../photokit/resource-loading-request-identifiers.md): Special values for the [PHAssetResourceDataRequestID](phassetresourcedatarequestid.md) identifier that are returned by asynchronous requests.

# PHAssetResourceDataRequestID (Objective-C)

**Framework:** Photos  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A numeric identifier for an asynchronous asset resource loading request.

## Declaration

```objectivec
typedef int32_t PHAssetResourceDataRequestID;
```

<a id="Discussion"></a>

## Discussion

Pass this identifier to the [cancelDataRequest:](phassetresourcemanager/canceldatarequest%28__%29.md) method if you need to cancel a request before it completes.

## See Also

### Constants

- [Resource Loading Request Identifiers](../photokit/resource-loading-request-identifiers.md): Special values for the [PHAssetResourceDataRequestID](phassetresourcedatarequestid.md) identifier that are returned by asynchronous requests.
