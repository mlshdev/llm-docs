> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmetadatagroup/items

# items (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The array of metadata items associated with the metadata group.

## Declaration

```swift
var items: [AVMetadataItem] { get }
```

<a id="Discussion"></a>

## Discussion

The `items` array may be empty if no metadata items are associated with this group.

## See Also

### Inspecting the metadata group

- [uniqueID](uniqueid.md): The unique identifier for the metadata group.
- [classifyingLabel](classifyinglabel.md): The classifying label associated with the metadata group.

# items (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The array of metadata items associated with the metadata group.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<AVMetadataItem *> * items;
```

<a id="Discussion"></a>

## Discussion

The `items` array may be empty if no metadata items are associated with this group.

## See Also

### Inspecting the metadata group

- [uniqueID](uniqueid.md): The unique identifier for the metadata group.
- [classifyingLabel](classifyinglabel.md): The classifying label associated with the metadata group.
