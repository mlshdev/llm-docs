> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboard/instantiateinitialcontroller()](https://developer.apple.com/documentation/appkit/nsstoryboard/instantiateinitialcontroller())

# instantiateInitialController() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Creates the initial view controller or window controller from a storyboard.

## Declaration

```swift
func instantiateInitialController() -> Any?
```

<a id="return-value"></a>

## Return Value

The initial view controller or window controller for the storyboard.

<a id="Discussion"></a>

## Discussion

Every storyboard has an initial view controller or window controller that represents its starting point. For the main storyboard, this is usually the first controller presented to the user at launch time. Designate the initial view controller in Interface Builder when configuring the storyboard file.

Typically, you call this method only when transitioning to the initial view controller in a different storyboard file. For your app’s main storyboard file—that is, the storyboard file specified in the app’s `Info.plist` file using the `UIMainStoryboardFile` key—the initial view controller is loaded into memory and presented automatically.

Each time you call this method, it creates a new instance of the initial controller.

## See Also

### Loading the Initial View Controller

- [instantiateInitialController(creator:)](instantiateinitialcontroller%28creator_%29-pi04.md): Creates the initial view controller from the storyboard and initializes it using your custom code.
- [instantiateInitialController(creator:)](instantiateinitialcontroller%28creator_%29-529r1.md): Creates the initial window controller from the storyboard and initializes it using your custom code.

# instantiateInitialController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Creates the initial view controller or window controller from a storyboard.

## Declaration

```objectivec
- (id) instantiateInitialController;
```

<a id="return-value"></a>

## Return Value

The initial view controller or window controller for the storyboard.

<a id="Discussion"></a>

## Discussion

Every storyboard has an initial view controller or window controller that represents its starting point. For the main storyboard, this is usually the first controller presented to the user at launch time. Designate the initial view controller in Interface Builder when configuring the storyboard file.

Typically, you call this method only when transitioning to the initial view controller in a different storyboard file. For your app’s main storyboard file—that is, the storyboard file specified in the app’s `Info.plist` file using the `UIMainStoryboardFile` key—the initial view controller is loaded into memory and presented automatically.

Each time you call this method, it creates a new instance of the initial controller.
