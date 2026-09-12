> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinder/findindicatorneedsupdate](https://developer.apple.com/documentation/appkit/nstextfinder/findindicatorneedsupdate)

# findIndicatorNeedsUpdate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Invoke to specify that the find indicator needs updating when not contained within a scroll view.

## Declaration

```swift
var findIndicatorNeedsUpdate: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the [client](client.md) object’s document is not scrolled by an instance of `NSScrollView`, then set this property to [true](https://developer.apple.com/documentation/swift/true) when scrolling occurs to cause the find indicator to be updated appropriately.

# findIndicatorNeedsUpdate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Invoke to specify that the find indicator needs updating when not contained within a scroll view.

## Declaration

```objectivec
@property BOOL findIndicatorNeedsUpdate;
```

<a id="Discussion"></a>

## Discussion

If the [client](client.md) object’s document is not scrolled by an instance of `NSScrollView`, then set this property to [true](https://developer.apple.com/documentation/swift/true) when scrolling occurs to cause the find indicator to be updated appropriately.
