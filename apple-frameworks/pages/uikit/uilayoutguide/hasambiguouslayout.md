> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilayoutguide/hasambiguouslayout](https://developer.apple.com/documentation/uikit/uilayoutguide/hasambiguouslayout)

# hasAmbiguousLayout (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the constraints impacting the layout guide specify its location ambiguously.

## Declaration

```swift
var hasAmbiguousLayout: Bool { get }
```

## See Also

### Debugging the layout guide

- [constraintsAffectingLayout(for:)](constraintsaffectinglayout%28for_%29.md): The constraints that impact the layout of the guide.

# hasAmbiguousLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the constraints impacting the layout guide specify its location ambiguously.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasAmbiguousLayout;
```

## See Also

### Debugging the layout guide

- [constraintsAffectingLayoutForAxis:](constraintsaffectinglayout%28for_%29.md): The constraints that impact the layout of the guide.
