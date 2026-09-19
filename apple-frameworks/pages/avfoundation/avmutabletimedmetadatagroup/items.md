> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmutabletimedmetadatagroup/items

# items (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of metadata items in the timed metadata group.

## Declaration

```swift
var items: [AVMetadataItem] { get set }
```

<a id="Discussion"></a>

## Discussion

The array contains instances of [AVMetadataItem](../avmetadataitem.md).

## See Also

### Configuring the group

- [timeRange](timerange.md): The time range of the timed metadata.

# items (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of metadata items in the timed metadata group.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<AVMetadataItem *> * items;
```

<a id="Discussion"></a>

## Discussion

The array contains instances of [AVMetadataItem](../avmetadataitem.md).

## See Also

### Configuring the group

- [timeRange](timerange.md): The time range of the timed metadata.
