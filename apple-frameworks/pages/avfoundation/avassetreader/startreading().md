> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/startreading()](https://developer.apple.com/documentation/avfoundation/avassetreader/startreading())

# startReading() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Prepares the asset reader to start reading sample buffers from the asset.

> Use start() instead

## Declaration

```swift
func startReading() -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if the reader is able to start reading; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If this method returns `false`, you can determine the reason by checking the values of the [status](status-swift.property.md) and [error](error.md) properties.

## See Also

### Controlling reading

- [start()](start%28%29.md): Prepares the reader to read media data from the asset.
- [cancelReading()](cancelreading%28%29.md): Cancels any background work and stops the reader’s outputs from reading more samples.

# startReading (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Prepares the asset reader to start reading sample buffers from the asset.

## Declaration

```objectivec
- (BOOL) startReading;
```

<a id="return-value"></a>

## Return Value

`true` if the reader is able to start reading; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If this method returns `false`, you can determine the reason by checking the values of the [status](status-swift.property.md) and [error](error.md) properties.

## See Also

### Controlling reading

- [cancelReading](cancelreading%28%29.md): Cancels any background work and stops the reader’s outputs from reading more samples.
