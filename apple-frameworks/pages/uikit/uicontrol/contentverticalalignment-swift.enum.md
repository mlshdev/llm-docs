> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/contentverticalalignment-swift.enum](https://developer.apple.com/documentation/uikit/uicontrol/contentverticalalignment-swift.enum)

# UIControl.ContentVerticalAlignment (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants for specifying the vertical alignment of content (text and images) in a control.

## Declaration

```swift
enum ContentVerticalAlignment
```

<a id="overview"></a>

## Overview

You use these constants as the value of the [contentVerticalAlignment](contentverticalalignment-swift.property.md) property.

## Topics

### Constants

- [UIControl.ContentVerticalAlignment.center](contentverticalalignment-swift.enum/center.md): Aligns the content vertically in the center of the control.
- [UIControl.ContentVerticalAlignment.top](contentverticalalignment-swift.enum/top.md): Aligns the content vertically at the top in the control (the default).
- [UIControl.ContentVerticalAlignment.bottom](contentverticalalignment-swift.enum/bottom.md): Aligns the content vertically at the bottom in the control.
- [UIControl.ContentVerticalAlignment.fill](contentverticalalignment-swift.enum/fill.md): Aligns the content vertically to fill the content rectangle; images may be stretched.

### Initializers

- [init(rawValue:)](contentverticalalignment-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying content alignment

- [contentVerticalAlignment](contentverticalalignment-swift.property.md): The vertical alignment of content within the control’s bounds.
- [contentHorizontalAlignment](contenthorizontalalignment-swift.property.md): The horizontal alignment of content within the control’s bounds.
- [effectiveContentHorizontalAlignment](effectivecontenthorizontalalignment.md): The horizontal alignment currently in effect for the control.
- [UIControl.ContentHorizontalAlignment](contenthorizontalalignment-swift.enum.md): The horizontal alignment of content (text and images) within a control.

# UIControlContentVerticalAlignment (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants for specifying the vertical alignment of content (text and images) in a control.

## Declaration

```objectivec
enum UIControlContentVerticalAlignment : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants as the value of the [contentVerticalAlignment](contentverticalalignment-swift.property.md) property.

## Topics

### Constants

- [UIControlContentVerticalAlignmentCenter](contentverticalalignment-swift.enum/center.md): Aligns the content vertically in the center of the control.
- [UIControlContentVerticalAlignmentTop](contentverticalalignment-swift.enum/top.md): Aligns the content vertically at the top in the control (the default).
- [UIControlContentVerticalAlignmentBottom](contentverticalalignment-swift.enum/bottom.md): Aligns the content vertically at the bottom in the control.
- [UIControlContentVerticalAlignmentFill](contentverticalalignment-swift.enum/fill.md): Aligns the content vertically to fill the content rectangle; images may be stretched.

## See Also

### Specifying content alignment

- [contentVerticalAlignment](contentverticalalignment-swift.property.md): The vertical alignment of content within the control’s bounds.
- [contentHorizontalAlignment](contenthorizontalalignment-swift.property.md): The horizontal alignment of content within the control’s bounds.
- [effectiveContentHorizontalAlignment](effectivecontenthorizontalalignment.md): The horizontal alignment currently in effect for the control.
- [UIControlContentHorizontalAlignment](contenthorizontalalignment-swift.enum.md): The horizontal alignment of content (text and images) within a control.
