> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssplitviewitem/viewcontroller

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
