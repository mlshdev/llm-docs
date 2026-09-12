> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avtimedmetadatagroup/items](https://developer.apple.com/documentation/avfoundation/avtimedmetadatagroup/items)

# items (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of metadata items in the timed metadata group.

## Declaration

```swift
var items: [AVMetadataItem] { get }
```

<a id="Discussion"></a>

## Discussion

The array contains instances of [AVMetadataItem](../avmetadataitem.md).

## See Also

### Accessing group attributes

- [timeRange](timerange.md): The time range for the timed metadata.

# items (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of metadata items in the timed metadata group.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<AVMetadataItem *> * items;
```

<a id="Discussion"></a>

## Discussion

The array contains instances of [AVMetadataItem](../avmetadataitem.md).

## See Also

### Accessing group attributes

- [timeRange](timerange.md): The time range for the timed metadata.
