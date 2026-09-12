> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboard/instantiateviewcontroller(withidentifier:)](https://developer.apple.com/documentation/uikit/uistoryboard/instantiateviewcontroller(withidentifier:))

# instantiateViewController(withIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Creates the view controller with the specified identifier and initializes it with the data from the storyboard.

## Declaration

```swift
func instantiateViewController(withIdentifier identifier: String) -> UIViewController
```

## Parameters

- `identifier`: An identifier string that uniquely identifies the view controller in the storyboard file. At design time, put this same string in the Storyboard ID attribute of your view controller in Interface Builder. This identifier is not a property of the view controller object itself. The storyboard uses it to locate the appropriate data for your view controller.

  If the specified identifier does not exist in the storyboard file, this method raises an exception.

<a id="return-value"></a>

## Return Value

The view controller corresponding to the specified identifier string. If no view controller has the given identifier, this method throws an exception.

<a id="Discussion"></a>

## Discussion

Use this method to create a view controller object to present programmatically. Each time you call this method, it creates a new instance of the view controller using the [init(coder:)](../uiviewcontroller/init%28coder_%29.md) method.

## See Also

### Instantiating Storyboard View Controllers

- [instantiateViewController(identifier:creator:)](instantiateviewcontroller%28identifier_creator_%29.md): Creates the specified view controller from the storyboard and initializes it using your custom initialization code.

# instantiateViewControllerWithIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Creates the view controller with the specified identifier and initializes it with the data from the storyboard.

## Declaration

```objectivec
- (UIViewController *) instantiateViewControllerWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: An identifier string that uniquely identifies the view controller in the storyboard file. At design time, put this same string in the Storyboard ID attribute of your view controller in Interface Builder. This identifier is not a property of the view controller object itself. The storyboard uses it to locate the appropriate data for your view controller.

  If the specified identifier does not exist in the storyboard file, this method raises an exception.

<a id="return-value"></a>

## Return Value

The view controller corresponding to the specified identifier string. If no view controller has the given identifier, this method throws an exception.

<a id="Discussion"></a>

## Discussion

Use this method to create a view controller object to present programmatically. Each time you call this method, it creates a new instance of the view controller using the [initWithCoder:](../uiviewcontroller/init%28coder_%29.md) method.

## See Also

### Instantiating Storyboard View Controllers

- [instantiateViewControllerWithIdentifier:creator:](instantiateviewcontrollerwithidentifier_creator_.md): Deprecated. Creates the specified view controller from the storyboard and initializes it using your custom initialization code.
- [UIStoryboardViewControllerCreator](../uistoryboardviewcontrollercreator.md): A handler block that contains the custom initialization code for a view controller you instantiate from a storyboard.
