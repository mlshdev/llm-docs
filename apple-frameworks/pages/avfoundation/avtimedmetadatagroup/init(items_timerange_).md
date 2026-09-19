> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avtimedmetadatagroup/init(items:timerange:)

# init(items:timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a timed metadata group initialized with the given metadata items.

## Declaration

```swift
init(items: [AVMetadataItem], timeRange: CMTimeRange)
```

## Parameters

- `items`: An array of [AVMetadataItem](../avmetadataitem.md) objects.
- `timeRange`: The time range of the metadata contained in `items`.

<a id="return-value"></a>

## Return Value

A metadata group initialized with `items`.

## See Also

### Creating a timed metadata group

- [init(sampleBuffer:)](init%28samplebuffer_%29-6atlv.md): Creates a timed metadata group with a sample buffer.
- [init(sampleBuffer:)](init%28samplebuffer_%29-bjuo.md): Deprecated.

# initWithItems:timeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a timed metadata group initialized with the given metadata items.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<AVMetadataItem *> *) items timeRange:(CMTimeRange) timeRange;
```

## Parameters

- `items`: An array of [AVMetadataItem](../avmetadataitem.md) objects.
- `timeRange`: The time range of the metadata contained in `items`.

<a id="return-value"></a>

## Return Value

A metadata group initialized with `items`.

## See Also

### Creating a timed metadata group

- [initWithSampleBuffer:](init%28samplebuffer_%29-bjuo.md): Deprecated.
