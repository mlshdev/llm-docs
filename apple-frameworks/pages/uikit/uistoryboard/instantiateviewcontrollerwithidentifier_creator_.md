> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboard/instantiateviewcontrollerwithidentifier:creator:](https://developer.apple.com/documentation/uikit/uistoryboard/instantiateviewcontrollerwithidentifier:creator:)

# instantiateViewControllerWithIdentifier:creator:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ (deprecated in 1.0)

Creates the specified view controller from the storyboard and initializes it using your custom initialization code.

## Declaration

```objectivec
- (UIViewController *) instantiateViewControllerWithIdentifier:(NSString *) identifier creator:(UIStoryboardViewControllerCreator) block;
```

## Parameters

- `identifier`: A string that uniquely identifies the view controller in the storyboard file. At design time, put this same string in the Storyboard ID attribute of your view controller in Interface Builder. This identifier is not a property of the view controller object itself. The storyboard uses it to locate the appropriate data for your view controller.

  If the specified identifier does not exist in the storyboard file, this method raises an exception.
- `block`: A block containing your custom creation code for the view controller. Use this block to create the view controller, initialize it with the provided `coder` object and any custom information you require, and return the result. This block returns a new view controller object and takes the following parameter:

  - **coder**: The coder object containing the storyboard data to use when configuring the view controller.

  If you return `nil` from your block, this method creates the view controller using the default [initWithCoder:](../uiviewcontroller/init%28coder_%29.md) method.

<a id="return-value"></a>

## Return Value

The view controller corresponding to the specified identifier string. If no view controller has the given identifier, this method throws an exception.

<a id="Discussion"></a>

## Discussion

Use this method to create a view controller object to present programmatically. Each time you call this method, it creates a new instance of the view controller using the block you provide.

In your block, create the view controller using your custom initialization method and return it. Your custom initialization method must accept an [NSCoder](../../foundation/nscoder.md) parameter and must call the inherited [initWithCoder:](../uiviewcontroller/init%28coder_%29.md) method at some point during its execution. Not doing so is a programmer error. After initializing the storyboard state, initialize your view controller’s custom properties.

## See Also

### Instantiating Storyboard View Controllers

- [instantiateViewControllerWithIdentifier:](instantiateviewcontroller%28withidentifier_%29.md): Deprecated. Creates the view controller with the specified identifier and initializes it with the data from the storyboard.
- [UIStoryboardViewControllerCreator](../uistoryboardviewcontrollercreator.md): A handler block that contains the custom initialization code for a view controller you instantiate from a storyboard.
