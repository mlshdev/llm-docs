> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboard/instantiatecontroller(withidentifier:)](https://developer.apple.com/documentation/appkit/nsstoryboard/instantiatecontroller(withidentifier:))

# instantiateController(withIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Instantiates a specified view controller or window controller from a storyboard.

## Declaration

```swift
func instantiateController(withIdentifier identifier: NSStoryboard.SceneIdentifier) -> Any
```

## Parameters

- `identifier`: The unique identifier for the controller, which you have specified using the Identity inspector in Interface Builder.

<a id="return-value"></a>

## Return Value

The instantiated view controller or window controller identified by the `identifier` parameter, from the storyboard file. If the specified identifier does not exist (or is `nil`) in the storyboard file, this method raises an exception.

<a id="Discussion"></a>

## Discussion

Use this method to create a view controller or window controller object that you want to manipulate and present programmatically. Your controller object must have an identifier string. In Xcode’s storyboard editor, select your controller, display the identity inspector, and place this string in the Storyboard ID field.

This method creates a new instance of the specified controller each time you call it.

## See Also

### Instantiating Storyboard Controllers

- [instantiateController(identifier:creator:)](instantiatecontroller%28identifier_creator_%29-7ddcf.md): Creates the specified view controller from the storyboard and initializes it using your custom initialization code.
- [instantiateController(identifier:creator:)](instantiatecontroller%28identifier_creator_%29-50rw3.md): Creates the specified window controller from the storyboard and initializes it using your custom initialization code.
- [NSStoryboard.SceneIdentifier](sceneidentifier.md): A string that uniquely identifies a view controller or window controller in your storyboard file.

# instantiateControllerWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Instantiates a specified view controller or window controller from a storyboard.

## Declaration

```objectivec
- (id) instantiateControllerWithIdentifier:(NSStoryboardSceneIdentifier) identifier;
```

## Parameters

- `identifier`: The unique identifier for the controller, which you have specified using the Identity inspector in Interface Builder.

<a id="return-value"></a>

## Return Value

The instantiated view controller or window controller identified by the `identifier` parameter, from the storyboard file. If the specified identifier does not exist (or is `nil`) in the storyboard file, this method raises an exception.

<a id="Discussion"></a>

## Discussion

Use this method to create a view controller or window controller object that you want to manipulate and present programmatically. Your controller object must have an identifier string. In Xcode’s storyboard editor, select your controller, display the identity inspector, and place this string in the Storyboard ID field.

This method creates a new instance of the specified controller each time you call it.

## See Also

### Instantiating Storyboard Controllers

- [NSStoryboardControllerCreator](../nsstoryboardcontrollercreator.md): A block that you use to handle the custom creation of controller objects from your storyboard file.
- [NSStoryboardSceneIdentifier](sceneidentifier.md): A string that uniquely identifies a view controller or window controller in your storyboard file.
