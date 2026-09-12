> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvbrowserviewcontroller/delegate](https://developer.apple.com/documentation/tvmlkit/tvbrowserviewcontroller/delegate)

# delegate (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The object that acts as the delegate and handles callbacks for the browser view.

## Declaration

```swift
weak var delegate: (any TVBrowserViewControllerDelegate)? { get set }
```

## See Also

### Managing Interactions with the Browser

- [TVBrowserViewControllerDelegate](../tvbrowserviewcontrollerdelegate.md): Methods for detecting events and performing actions on the browser view.

# delegate (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The object that acts as the delegate and handles callbacks for the browser view.

## Declaration

```objectivec
@property (nonatomic, weak) id<TVBrowserViewControllerDelegate> delegate;
```

## See Also

### Managing Interactions with the Browser

- [TVBrowserViewControllerDelegate](../tvbrowserviewcontrollerdelegate.md): Methods for detecting events and performing actions on the browser view.
