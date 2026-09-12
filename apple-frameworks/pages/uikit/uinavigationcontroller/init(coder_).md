> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/init(coder:)](https://developer.apple.com/documentation/uikit/uinavigationcontroller/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a navigation controller from data in an unarchiver.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

## See Also

### Creating a navigation controller

- [init(rootViewController:)](init%28rootviewcontroller_%29.md): Initializes and returns a newly created navigation controller.
- [init(navigationBarClass:toolbarClass:)](init%28navigationbarclass_toolbarclass_%29.md): Initializes and returns a newly created navigation controller that uses your custom bar subclasses.
- [init(nibName:bundle:)](init%28nibname_bundle_%29.md): Creates a navigation controller with the nib file in the specified bundle.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a navigation controller from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## See Also

### Creating a navigation controller

- [initWithRootViewController:](init%28rootviewcontroller_%29.md): Initializes and returns a newly created navigation controller.
- [initWithNavigationBarClass:toolbarClass:](init%28navigationbarclass_toolbarclass_%29.md): Initializes and returns a newly created navigation controller that uses your custom bar subclasses.
- [initWithNibName:bundle:](init%28nibname_bundle_%29.md): Creates a navigation controller with the nib file in the specified bundle.
