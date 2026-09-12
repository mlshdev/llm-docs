> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/layoutguides](https://developer.apple.com/documentation/uikit/uiview/layoutguides)

# layoutGuides (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The array of layout guide objects owned by this view.

## Declaration

```swift
var layoutGuides: [UILayoutGuide] { get }
```

## See Also

### Working with layout guides

- [addLayoutGuide(\_:)](addlayoutguide%28__%29.md): Adds the specified layout guide to the view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide representing the view’s margins.
- [readableContentGuide](readablecontentguide.md): A layout guide representing an area with a readable width within the view.
- [removeLayoutGuide(\_:)](removelayoutguide%28__%29.md): Removes the specified layout guide from the view.

# layoutGuides (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The array of layout guide objects owned by this view.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<__kindof UILayoutGuide *> * layoutGuides;
```

## See Also

### Working with layout guides

- [addLayoutGuide:](addlayoutguide%28__%29.md): Adds the specified layout guide to the view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide representing the view’s margins.
- [readableContentGuide](readablecontentguide.md): A layout guide representing an area with a readable width within the view.
- [removeLayoutGuide:](removelayoutguide%28__%29.md): Removes the specified layout guide from the view.
