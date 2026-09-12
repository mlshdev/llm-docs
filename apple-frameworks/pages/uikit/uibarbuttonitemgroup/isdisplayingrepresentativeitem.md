> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitemgroup/isdisplayingrepresentativeitem](https://developer.apple.com/documentation/uikit/uibarbuttonitemgroup/isdisplayingrepresentativeitem)

# isDisplayingRepresentativeItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value indicating whether the representative item is showing in place of the group’s items.

## Declaration

```swift
var isDisplayingRepresentativeItem: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the representative item is being displayed in the shortcuts bar. The value is [false](https://developer.apple.com/documentation/swift/false) when the individual bar button items are being displayed in the shortcuts bar.

## See Also

### Determining the group’s appearance

- [isHidden](ishidden.md): A Boolean that determines the visibility of the group.

# displayingRepresentativeItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value indicating whether the representative item is showing in place of the group’s items.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isDisplayingRepresentativeItem) BOOL displayingRepresentativeItem;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the representative item is being displayed in the shortcuts bar. The value is [false](https://developer.apple.com/documentation/swift/false) when the individual bar button items are being displayed in the shortcuts bar.

## See Also

### Determining the group’s appearance

- [hidden](ishidden.md): A Boolean that determines the visibility of the group.
