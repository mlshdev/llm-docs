> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronouskeyvalueloading/status(of:)](https://developer.apple.com/documentation/avfoundation/avasynchronouskeyvalueloading/status(of:))

# status(of:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a value that indicates the loaded status of a property.

## Declaration

```swift
func status<T>(of property: AVAsyncProperty<Self, T>) -> AVAsyncProperty<Self, T>.Status
```

## Parameters

- `property`: A property identifier with a status to check.

<a id="return-value"></a>

## Return Value

A status value.

## Mentioned In

- [Loading media data asynchronously](../loading-media-data-asynchronously.md)

<a id="Discussion"></a>

## Discussion

A status of [AVAsyncProperty.Status.loaded(\_:)](../avasyncproperty/status/loaded%28__%29.md) provides the property value, and a status of [AVAsyncProperty.Status.failed(\_:)](../avasyncproperty/status/failed%28__%29.md) provides an error that describes the failure.
