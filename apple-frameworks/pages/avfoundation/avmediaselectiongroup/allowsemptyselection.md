> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectiongroup/allowsemptyselection](https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/allowsemptyselection)

# allowsEmptySelection (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether it’s possible to present none of the options in the group when an associated player item is played.

## Declaration

```swift
var allowsEmptySelection: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), you can deselect all of the available media options in the group by passing `nil` as the specified [AVMediaSelectionOption](../avmediaselectionoption.md) object to [select(\_:in:)](../avplayeritem/select%28__in_%29.md).

# allowsEmptySelection (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether it’s possible to present none of the options in the group when an associated player item is played.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL allowsEmptySelection;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), you can deselect all of the available media options in the group by passing `nil` as the specified [AVMediaSelectionOption](../avmediaselectionoption.md) object to [selectMediaOption:inMediaSelectionGroup:](../avplayeritem/select%28__in_%29.md).
