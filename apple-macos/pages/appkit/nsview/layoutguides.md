> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/layoutguides](https://developer.apple.com/documentation/appkit/nsview/layoutguides)

# layoutGuides (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The array of layout guide objects owned by this view.

## Declaration

```swift
var layoutGuides: [NSLayoutGuide] { get }
```

## See Also

### Managing Layout Guides

- [addLayoutGuide(\_:)](addlayoutguide%28__%29.md): Adds the provided layout guide to the view.
- [removeLayoutGuide(\_:)](removelayoutguide%28__%29.md): Removes the provided layout guide from the view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide that provides the recommended amount of padding for content inside of a view.

# layoutGuides (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The array of layout guide objects owned by this view.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSLayoutGuide *> * layoutGuides;
```

## See Also

### Managing Layout Guides

- [addLayoutGuide:](addlayoutguide%28__%29.md): Adds the provided layout guide to the view.
- [removeLayoutGuide:](removelayoutguide%28__%29.md): Removes the provided layout guide from the view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide that provides the recommended amount of padding for content inside of a view.
