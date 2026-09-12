> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatagroup/classifyinglabel](https://developer.apple.com/documentation/avfoundation/avmetadatagroup/classifyinglabel)

# classifyingLabel (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

The classifying label associated with the metadata group.

## Declaration

```swift
var classifyingLabel: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property may be `nil` if no classifying label is defined for this group.

## See Also

### Inspecting the metadata group

- [items](items.md): The array of metadata items associated with the metadata group.
- [uniqueID](uniqueid.md): The unique identifier for the metadata group.

# classifyingLabel (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

The classifying label associated with the metadata group.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * classifyingLabel;
```

<a id="Discussion"></a>

## Discussion

The value of this property may be `nil` if no classifying label is defined for this group.

## See Also

### Inspecting the metadata group

- [items](items.md): The array of metadata items associated with the metadata group.
- [uniqueID](uniqueid.md): The unique identifier for the metadata group.
