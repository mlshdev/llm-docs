> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboardviewcontrollercreator](https://developer.apple.com/documentation/uikit/uistoryboardviewcontrollercreator)

# UIStoryboardViewControllerCreator

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A handler block that contains the custom initialization code for a view controller you instantiate from a storyboard.

## Declaration

```objectivec
typedef __kindof UIViewController *(^)(NSCoder *) UIStoryboardViewControllerCreator;
```

## Parameters

- `coder`: The coder object containing the storyboard data to use when configuring the view controller. Pass this coder object to any methods you use to restore the state of the view controller and its views. For example, you might pass it to the view controller’s [initWithCoder:](uiviewcontroller/init%28coder_%29.md) method before initializing any other custom properties.

## See Also

### Storyboards

- [Customizing the behavior of segue-based presentations](customizing-the-behavior-of-segue-based-presentations.md): Pass data between view controllers during a segue, and programmatically control when segues occur.
- [Dismissing a view controller with an unwind segue](dismissing-a-view-controller-with-an-unwind-segue.md): Configure an unwind segue in your storyboard file that dynamically chooses the most appropriate view controller to display next.
- [UIStoryboard](uistoryboard.md): Deprecated. An encapsulation of the design-time view controller graph represented in an Interface Builder storyboard resource file.
- [UIStoryboardSegue](uistoryboardsegue.md): Deprecated. An object that prepares for and performs the visual transition between two view controllers.
- [UIStoryboardUnwindSegueSource](uistoryboardunwindseguesource.md): An encapsulation of information about an unwind segue.
