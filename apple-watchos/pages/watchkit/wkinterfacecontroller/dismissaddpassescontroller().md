> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/dismissaddpassescontroller()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/dismissaddpassescontroller())

# dismissAddPassesController() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Dismisses the pass interface controller

## Declaration

```swift
func dismissAddPassesController()
```

<a id="Discussion"></a>

## Discussion

Use this method to dismiss a pass controller you previously displayed using the [presentAddPassesController(withPasses:completion:)](presentaddpassescontroller%28withpasses_completion_%29.md) method. When dismissing the pass controller programmatically, WatchKit still calls the completion block you provided.

## See Also

### Adding PassKit passes

- [presentAddPassesController(withPasses:completion:)](presentaddpassescontroller%28withpasses_completion_%29.md): Displays a modal interface for presenting passes to the user.

# dismissAddPassesController (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Dismisses the pass interface controller

## Declaration

```objectivec
- (void) dismissAddPassesController;
```

<a id="Discussion"></a>

## Discussion

Use this method to dismiss a pass controller you previously displayed using the [presentAddPassesControllerWithPasses:completion:](presentaddpassescontroller%28withpasses_completion_%29.md) method. When dismissing the pass controller programmatically, WatchKit still calls the completion block you provided.

## See Also

### Adding PassKit passes

- [presentAddPassesControllerWithPasses:completion:](presentaddpassescontroller%28withpasses_completion_%29.md): Displays a modal interface for presenting passes to the user.
