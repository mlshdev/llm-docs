> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/viewcontroller](https://developer.apple.com/documentation/appkit/nssplitviewitem/viewcontroller)

# viewController (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view controller that the split view item represents.

## Declaration

```swift
var viewController: NSViewController { get set }
```

<a id="Discussion"></a>

## Discussion

Don’t set this property while adding the split view item to a split view controller. If you do, the system raises an exception.

# viewController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view controller that the split view item represents.

## Declaration

```objectivec
@property (strong) NSViewController * viewController;
```

<a id="Discussion"></a>

## Discussion

Don’t set this property while adding the split view item to a split view controller. If you do, the system raises an exception.
