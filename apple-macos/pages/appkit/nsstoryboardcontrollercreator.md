> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboardcontrollercreator](https://developer.apple.com/documentation/appkit/nsstoryboardcontrollercreator)

# NSStoryboardControllerCreator

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A block that you use to handle the custom creation of controller objects from your storyboard file.

## Declaration

```objectivec
typedef id (^)(NSCoder *) NSStoryboardControllerCreator;
```

## Parameters

- `coder`: The coder object containing the storyboard data to use when configuring the window controller.

<a id="Discussion"></a>

## Discussion

Use your block to construct a window or view controller using a custom initialization method. Your custom method must accept an [NSCoder](https://developer.apple.com/documentation/foundation/nscoder) object as one of its parameters, and it may include other parameters that you need to initialize the contents of the object. The implementation of your method must call the inherited [initWithCoder:](nsresponder/init%28coder_%29.md) method at some point during its execution. Not doing so is a programmer error.

## See Also

### Instantiating Storyboard Controllers

- [instantiateControllerWithIdentifier:](nsstoryboard/instantiatecontroller%28withidentifier_%29.md): Instantiates a specified view controller or window controller from a storyboard.
- [NSStoryboardSceneIdentifier](nsstoryboard/sceneidentifier.md): A string that uniquely identifies a view controller or window controller in your storyboard file.
