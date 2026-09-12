> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdaterangemetadatagroup/init(items:start:end:)](https://developer.apple.com/documentation/avfoundation/avdaterangemetadatagroup/init(items:start:end:))

# init(items:start:end:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an instance of `AVDateRangeMetadataGroup` with a collection of metadata items.

## Declaration

```swift
init(items: [AVMetadataItem], start startDate: Date, end endDate: Date?)
```

## Parameters

- `items`: The array of [AVMetadataItem](../avmetadataitem.md) instances to associate with this group.
- `startDate`: The starting date for the group of metadata items.
- `endDate`: The ending date for the group of metadata items.

<a id="return-value"></a>

## Return Value

A new instance of `AVDateRangeMetadataGroup`.

<a id="Discussion"></a>

## Discussion

Creates a new instance of `AVDateRangeMetadataGroup` with the specified collection of metadata items. The `startDate` and `endDate` arguments define the effective time range on the timeline to which the metadata applies.

# initWithItems:startDate:endDate: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an instance of `AVDateRangeMetadataGroup` with a collection of metadata items.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<AVMetadataItem *> *) items startDate:(NSDate *) startDate endDate:(NSDate *) endDate;
```

## Parameters

- `items`: The array of [AVMetadataItem](../avmetadataitem.md) instances to associate with this group.
- `startDate`: The starting date for the group of metadata items.
- `endDate`: The ending date for the group of metadata items.

<a id="return-value"></a>

## Return Value

A new instance of `AVDateRangeMetadataGroup`.

<a id="Discussion"></a>

## Discussion

Creates a new instance of `AVDateRangeMetadataGroup` with the specified collection of metadata items. The `startDate` and `endDate` arguments define the effective time range on the timeline to which the metadata applies.
