> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboard/instantiateinitialcontroller(creator:)-529r1](https://developer.apple.com/documentation/appkit/nsstoryboard/instantiateinitialcontroller(creator:)-529r1)

# instantiateInitialController(creator:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Creates the initial window controller from the storyboard and initializes it using your custom code.

## Declaration

```swift
func instantiateInitialController<Controller>(creator: ((NSCoder) -> Controller?)? = nil) -> Controller? where Controller : NSWindowController
```

## Parameters

- `creator`: A block that contains your custom creation code for the window controller. Use this block to create the window controller, initialize it with the provided coder object and any custom information you require, and return the result. This block returns a new window controller object and takes the following parameter:

  - **coder**: The coder object that contains the storyboard data to use when configuring the window controller.

  If you return `nil` from your block, this method creates the window controller using the default [init(coder:)](../nswindowcontroller/init%28coder_%29.md) method.

<a id="Discussion"></a>

## Discussion

Every storyboard file has an initial controller object that represents the default interface to create. Use this method to construct that object using a custom code that you provide. Use this method when the constructor for your object takes parameters in addition to the specified `coder` object.

In your `creator` block, create the window controller using your custom constructor method. Your custom constructor method must accept an [NSCoder](https://developer.apple.com/documentation/foundation/nscoder) parameter and must call the inherited [init(coder:)](../nsresponder/init%28coder_%29.md) method at some point during its execution. Not doing so is a programmer error.

## See Also

### Loading the Initial View Controller

- [instantiateInitialController()](instantiateinitialcontroller%28%29.md): Creates the initial view controller or window controller from a storyboard.
- [instantiateInitialController(creator:)](instantiateinitialcontroller%28creator_%29-pi04.md): Creates the initial view controller from the storyboard and initializes it using your custom code.
