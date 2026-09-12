> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatagroup/uniqueid](https://developer.apple.com/documentation/avfoundation/avmetadatagroup/uniqueid)

# uniqueID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

The unique identifier for the metadata group.

## Declaration

```swift
var uniqueID: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property may be `nil` if no unique identifier is defined for this group.

## See Also

### Inspecting the metadata group

- [items](items.md): The array of metadata items associated with the metadata group.
- [classifyingLabel](classifyinglabel.md): The classifying label associated with the metadata group.

# uniqueID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

The unique identifier for the metadata group.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * uniqueID;
```

<a id="Discussion"></a>

## Discussion

The value of this property may be `nil` if no unique identifier is defined for this group.

## See Also

### Inspecting the metadata group

- [items](items.md): The array of metadata items associated with the metadata group.
- [classifyingLabel](classifyinglabel.md): The classifying label associated with the metadata group.
