> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449675-fseventstreamgetdevicebeingwatch](https://developer.apple.com/documentation/coreservices/1449675-fseventstreamgetdevicebeingwatch)

# FSEventStreamGetDeviceBeingWatched(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventStreamGetDeviceBeingWatched(_ streamRef: ConstFSEventStreamRef) -> dev_t
```

## Parameters

- `streamRef`: A valid stream.

<a id="return_value"></a>

## Return Value

The dev_t for a device-relative stream, otherwise 0.

<a id="discussion"></a>

## Discussion

Fetches the dev_t supplied when the stream was created via FSEventStreamCreateRelativeToDevice(), otherwise 0.

# FSEventStreamGetDeviceBeingWatched (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
dev_t FSEventStreamGetDeviceBeingWatched(ConstFSEventStreamRef streamRef);
```

## Parameters

- `streamRef`: A valid stream.

<a id="return_value"></a>

## Return Value

The dev_t for a device-relative stream, otherwise 0.

<a id="discussion"></a>

## Discussion

Fetches the dev_t supplied when the stream was created via FSEventStreamCreateRelativeToDevice(), otherwise 0.
