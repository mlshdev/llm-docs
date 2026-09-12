> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/init(nibname:bundle:)](https://developer.apple.com/documentation/uikit/uinavigationcontroller/init(nibname:bundle:))

# init(nibName:bundle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a navigation controller with the nib file in the specified bundle.

## Declaration

```swift
init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?)
```

## See Also

### Creating a navigation controller

- [init(rootViewController:)](init%28rootviewcontroller_%29.md): Initializes and returns a newly created navigation controller.
- [init(navigationBarClass:toolbarClass:)](init%28navigationbarclass_toolbarclass_%29.md): Initializes and returns a newly created navigation controller that uses your custom bar subclasses.
- [init(coder:)](init%28coder_%29.md): Creates a navigation controller from data in an unarchiver.

# initWithNibName:bundle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a navigation controller with the nib file in the specified bundle.

## Declaration

```objectivec
- (instancetype) initWithNibName:(NSString *) nibNameOrNil bundle:(NSBundle *) nibBundleOrNil;
```

## See Also

### Creating a navigation controller

- [initWithRootViewController:](init%28rootviewcontroller_%29.md): Initializes and returns a newly created navigation controller.
- [initWithNavigationBarClass:toolbarClass:](init%28navigationbarclass_toolbarclass_%29.md): Initializes and returns a newly created navigation controller that uses your custom bar subclasses.
- [initWithCoder:](init%28coder_%29.md): Creates a navigation controller from data in an unarchiver.
