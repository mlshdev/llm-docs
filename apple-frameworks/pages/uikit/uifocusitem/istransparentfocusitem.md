> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusitem/istransparentfocusitem](https://developer.apple.com/documentation/uikit/uifocusitem/istransparentfocusitem)

# isTransparentFocusItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 18.0+ · visionOS 1.0+

Indicates if the focus item is transparent, which allows items behind it to become focused.

## Declaration

```swift
optional var isTransparentFocusItem: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The system ignores this value when the item is focusable, in which case the item is never considered transparent.

# isTransparentFocusItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 18.0+ · visionOS 1.0+

Indicates if the focus item is transparent, which allows items behind it to become focused.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isTransparentFocusItem;
```

<a id="Discussion"></a>

## Discussion

The system ignores this value when the item is focusable, in which case the item is never considered transparent.
