> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/maketouchbar()](https://developer.apple.com/documentation/uikit/uiresponder/maketouchbar())

# makeTouchBar() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+

Asks the receiving responder to create and configure a Touch Bar object.

## Declaration

```swift
func makeTouchBar() -> NSTouchBar?
```

<a id="return-value"></a>

## Return Value

A newly created Touch Bar object.

<a id="Discussion"></a>

## Discussion

Override this method in a responder, such as [UIViewController](../uiviewcontroller.md), to create and configure a Touch Bar object for the responder.

```swift
#if targetEnvironment(macCatalyst)
extension RecipeDetailViewController: NSTouchBarDelegate {
    override func makeTouchBar() -> NSTouchBar? {
        let touchBar = NSTouchBar()
        touchBar.delegate = self
    
        touchBar.defaultItemIdentifiers = [
            .flexibleSpace,
            .deleteRecipe,
            .flexibleSpace,
            .editRecipe,
            .toggleRecipeIsFavorite,
            .flexibleSpace
        ]
    
        return touchBar
    }

    func touchBar(_ touchBar: NSTouchBar, makeItemForIdentifier identifier: NSTouchBarItem.Identifier) -> NSTouchBarItem? {
        let touchBarItem: NSTouchBarItem?
        // ...
        return touchBarItem
    }

#endif
```

## See Also

### Managing the Touch Bar

- [touchBar](touchbar.md): The Touch Bar object for the responder.

# makeTouchBar (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+

Asks the receiving responder to create and configure a Touch Bar object.

## Declaration

```objectivec
- (NSTouchBar *) makeTouchBar;
```

<a id="return-value"></a>

## Return Value

A newly created Touch Bar object.

<a id="Discussion"></a>

## Discussion

Override this method in a responder, such as [UIViewController](../uiviewcontroller.md), to create and configure a Touch Bar object for the responder.

```swift
#if targetEnvironment(macCatalyst)
extension RecipeDetailViewController: NSTouchBarDelegate {
    override func makeTouchBar() -> NSTouchBar? {
        let touchBar = NSTouchBar()
        touchBar.delegate = self
    
        touchBar.defaultItemIdentifiers = [
            .flexibleSpace,
            .deleteRecipe,
            .flexibleSpace,
            .editRecipe,
            .toggleRecipeIsFavorite,
            .flexibleSpace
        ]
    
        return touchBar
    }

    func touchBar(_ touchBar: NSTouchBar, makeItemForIdentifier identifier: NSTouchBarItem.Identifier) -> NSTouchBarItem? {
        let touchBarItem: NSTouchBarItem?
        // ...
        return touchBarItem
    }

#endif
```

## See Also

### Managing the Touch Bar

- [touchBar](touchbar.md): The Touch Bar object for the responder.
