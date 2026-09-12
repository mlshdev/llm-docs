> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboard/instantiateinitialviewcontroller(creator:)](https://developer.apple.com/documentation/uikit/uistoryboard/instantiateinitialviewcontroller(creator:))

# instantiateInitialViewController(creator:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Creates the initial view controller from the storyboard and initializes it using your custom initialization code.

## Declaration

```swift
@MainActor @preconcurrency func instantiateInitialViewController<ViewController>(creator: ((NSCoder) -> ViewController?)? = nil) -> ViewController? where ViewController : UIViewController
```

## Parameters

- `creator`: A block containing your custom creation code for the view controller. Use this block to create the view controller, initialize it with the provided `coder` object and any custom information you require, and return the result. This block returns a new view controller object and takes the following parameter:

  - **coder**: The coder object containing the storyboard data to use when configuring the view controller.

  If you return `nil` from your block, this method creates the view controller using the default [init(coder:)](../uiviewcontroller/init%28coder_%29.md) method.

<a id="return-value"></a>

## Return Value

The initial view controller in the storyboard.

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)

<a id="Discussion"></a>

## Discussion

Every storyboard file has an initial view controller that represents the default view controller to create. Typically, you use the initial view controller as the root view controller for a window. However, you can also instantiate the initial view controller when transitioning to content in a new storyboard file.

This method creates a new instance of the initial view controller using the custom block you provide. In your block, create the view controller using your custom initialization method and return it. Your custom initialization method must accept an [NSCoder](../../foundation/nscoder.md) parameter and must call the inherited [init(coder:)](../uiviewcontroller/init%28coder_%29.md) method at some point during its execution. Not doing so is a programmer error.

## See Also

### Loading the Initial View Controller

- [instantiateInitialViewController()](instantiateinitialviewcontroller%28%29.md): Deprecated. Creates the initial view controller and initializes it with the data from the storyboard.
