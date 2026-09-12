> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/transfershorizontalscrollingtoparent](https://developer.apple.com/documentation/uikit/uiscrollview/transfershorizontalscrollingtoparent)

# transfersHorizontalScrollingToParent (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that determines whether the scroll view passes horizontal scroll events to a superview.

## Declaration

```swift
var transfersHorizontalScrollingToParent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `true`, in which case when the scroll view reaches either end of its horizontal scroll axis it transfers scroll events to a containing scroll view. To stop this behavior, set the property to `false`.

## See Also

### Nesting scroll views

- [transfersVerticalScrollingToParent](transfersverticalscrollingtoparent.md): A Boolean value that determines whether the scroll view passes vertical scroll events to a superview.

# transfersHorizontalScrollingToParent (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that determines whether the scroll view passes horizontal scroll events to a superview.

## Declaration

```objectivec
@property (nonatomic) BOOL transfersHorizontalScrollingToParent;
```

<a id="Discussion"></a>

## Discussion

The default value is `true`, in which case when the scroll view reaches either end of its horizontal scroll axis it transfers scroll events to a containing scroll view. To stop this behavior, set the property to `false`.

## See Also

### Nesting scroll views

- [transfersVerticalScrollingToParent](transfersverticalscrollingtoparent.md): A Boolean value that determines whether the scroll view passes vertical scroll events to a superview.
