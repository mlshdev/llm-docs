> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboard/sceneidentifier](https://developer.apple.com/documentation/appkit/nsstoryboard/sceneidentifier)

# NSStoryboard.SceneIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A string that uniquely identifies a view controller or window controller in your storyboard file.

## Declaration

```swift
typealias SceneIdentifier = String
```

<a id="Discussion"></a>

## Discussion

Set scene identifiers in your storyboard by assigning a value to the Storyboard ID attribute.

## See Also

### Instantiating Storyboard Controllers

- [instantiateController(withIdentifier:)](instantiatecontroller%28withidentifier_%29.md): Instantiates a specified view controller or window controller from a storyboard.
- [instantiateController(identifier:creator:)](instantiatecontroller%28identifier_creator_%29-7ddcf.md): Creates the specified view controller from the storyboard and initializes it using your custom initialization code.
- [instantiateController(identifier:creator:)](instantiatecontroller%28identifier_creator_%29-50rw3.md): Creates the specified window controller from the storyboard and initializes it using your custom initialization code.

# NSStoryboardSceneIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A string that uniquely identifies a view controller or window controller in your storyboard file.

## Declaration

```objectivec
typedef NSString * NSStoryboardSceneIdentifier;
```

<a id="Discussion"></a>

## Discussion

Set scene identifiers in your storyboard by assigning a value to the Storyboard ID attribute.

## See Also

### Instantiating Storyboard Controllers

- [instantiateControllerWithIdentifier:](instantiatecontroller%28withidentifier_%29.md): Instantiates a specified view controller or window controller from a storyboard.
- [NSStoryboardControllerCreator](../nsstoryboardcontrollercreator.md): A block that you use to handle the custom creation of controller objects from your storyboard file.
