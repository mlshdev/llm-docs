> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibarbuttonitemgroup/ishidden

# isHidden (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean that determines the visibility of the group.

## Declaration

```swift
var isHidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to hide the group, or [false](https://developer.apple.com/documentation/swift/false) to display the group.

## See Also

### Determining the group’s appearance

- [isDisplayingRepresentativeItem](isdisplayingrepresentativeitem.md): A Boolean value indicating whether the representative item is showing in place of the group’s items.

# hidden (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean that determines the visibility of the group.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite, getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to hide the group, or [false](https://developer.apple.com/documentation/swift/false) to display the group.

## See Also

### Determining the group’s appearance

- [displayingRepresentativeItem](isdisplayingrepresentativeitem.md): A Boolean value indicating whether the representative item is showing in place of the group’s items.
