> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/isselected](https://developer.apple.com/documentation/mapkit/mkannotationview/isselected)

# isSelected (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates whether the annotation view is in a selected state.

## Declaration

```swift
var isSelected: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Don’t set the value of this property directly. If the property contains [true](https://developer.apple.com/documentation/swift/true), the annotation view is displaying a callout.

## See Also

### Managing the selection state

- [setSelected(\_:animated:)](setselected%28__animated_%29.md): Sets the selection state of the annotation view.

# selected (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates whether the annotation view is in a selected state.

## Declaration

```objectivec
@property (nonatomic, getter=isSelected) BOOL selected;
```

<a id="Discussion"></a>

## Discussion

Don’t set the value of this property directly. If the property contains [true](https://developer.apple.com/documentation/swift/true), the annotation view is displaying a callout.

## See Also

### Managing the selection state

- [setSelected:animated:](setselected%28__animated_%29.md): Sets the selection state of the annotation view.
