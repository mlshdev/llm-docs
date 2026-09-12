> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/init(nibname:bundle:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/init(nibname:bundle:))

# init(nibName:bundle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a view controller with the nib file in the specified bundle.

## Declaration

```swift
init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?)
```

## Parameters

- `nibNameOrNil`: The name of the nib file to associate with the view controller. The nib file name should not contain any leading path information. If you specify `nil`, the [nibName](nibname.md) property is set to `nil`.
- `nibBundleOrNil`: The bundle in which to search for the nib file. This method looks for the nib file in the bundle’s language-specific project directories first, followed by the Resources directory.

<a id="return-value"></a>

## Return Value

A newly initialized [UIViewController](../uiviewcontroller.md) object.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for this class. When using a storyboard to define your view controller and its associated views, you never initialize your view controller class directly. Instead, view controllers are instantiated by the storyboard either automatically when a segue is triggered or programmatically when your app calls the [instantiateViewController(withIdentifier:)](../uistoryboard/instantiateviewcontroller%28withidentifier_%29.md) method of a storyboard object. When instantiating a view controller from a storyboard, iOS initializes the new view controller by calling its [init(coder:)](init%28coder_%29.md) method instead of this method and sets the [nibName](nibname.md) property to a nib file stored inside the storyboard.

The nib file you specify is not loaded right away. It is loaded the first time the view controller’s view is accessed. If you want to perform additional initialization after the nib file is loaded, override the [viewDidLoad()](viewdidload%28%29.md) method and perform your tasks there.

If you specify `nil` for the `nibName` parameter and you do not override the [loadView()](loadview%28%29.md) method, the view controller searches for a nib file as described in the [nibName](nibname.md) property.

For more information about how a view controller loads its view, see [View Controller Programming Guide for iOS](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/index.html#//apple_ref/doc/uid/TP40007457).

## See Also

### Related Documentation

- [loadView()](loadview%28%29.md): Creates the view that the controller manages.
- [nibBundle](nibbundle.md): Deprecated. The view controller’s nib bundle if it exists.
- [nibName](nibname.md): Deprecated. The name of the view controller’s nib file, if one was specified.
- [storyboard](storyboard.md): Deprecated. The storyboard from which the view controller originated.

### Creating a view controller

- [init(coder:)](init%28coder_%29.md): Creates a view controller with data in an unarchiver.

# initWithNibName:bundle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a view controller with the nib file in the specified bundle.

## Declaration

```objectivec
- (instancetype) initWithNibName:(NSString *) nibNameOrNil bundle:(NSBundle *) nibBundleOrNil;
```

## Parameters

- `nibNameOrNil`: The name of the nib file to associate with the view controller. The nib file name should not contain any leading path information. If you specify `nil`, the [nibName](nibname.md) property is set to `nil`.
- `nibBundleOrNil`: The bundle in which to search for the nib file. This method looks for the nib file in the bundle’s language-specific project directories first, followed by the Resources directory.

<a id="return-value"></a>

## Return Value

A newly initialized [UIViewController](../uiviewcontroller.md) object.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for this class. When using a storyboard to define your view controller and its associated views, you never initialize your view controller class directly. Instead, view controllers are instantiated by the storyboard either automatically when a segue is triggered or programmatically when your app calls the [instantiateViewControllerWithIdentifier:](../uistoryboard/instantiateviewcontroller%28withidentifier_%29.md) method of a storyboard object. When instantiating a view controller from a storyboard, iOS initializes the new view controller by calling its [initWithCoder:](init%28coder_%29.md) method instead of this method and sets the [nibName](nibname.md) property to a nib file stored inside the storyboard.

The nib file you specify is not loaded right away. It is loaded the first time the view controller’s view is accessed. If you want to perform additional initialization after the nib file is loaded, override the [viewDidLoad](viewdidload%28%29.md) method and perform your tasks there.

If you specify `nil` for the `nibName` parameter and you do not override the [loadView](loadview%28%29.md) method, the view controller searches for a nib file as described in the [nibName](nibname.md) property.

For more information about how a view controller loads its view, see [View Controller Programming Guide for iOS](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/index.html#//apple_ref/doc/uid/TP40007457).

## See Also

### Related Documentation

- [loadView](loadview%28%29.md): Creates the view that the controller manages.
- [nibBundle](nibbundle.md): Deprecated. The view controller’s nib bundle if it exists.
- [nibName](nibname.md): Deprecated. The name of the view controller’s nib file, if one was specified.
- [storyboard](storyboard.md): Deprecated. The storyboard from which the view controller originated.

### Creating a view controller

- [initWithCoder:](init%28coder_%29.md): Creates a view controller with data in an unarchiver.
