> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/presentaddpassescontroller(withpasses:completion:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/presentaddpassescontroller(withpasses:completion:))

# presentAddPassesController(withPasses:completion:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Displays a modal interface for presenting passes to the user.

## Declaration

```swift
func presentAddPassesController(withPasses passes: [PKPass], completion: @escaping () -> Void)
```

```swift
func presentAddPassesController(withPasses passes: [PKPass]) async
```

## Parameters

- `passes`: An array of [PKPass](https://developer.apple.com/documentation/passkit/pkpass) objects that you want to present to the user.
- `completion`: The block to execute when the user is ready to dismiss the interface. Use this block to perform any cleanup tasks related to the dismissal of the modal interface. This block has no return value and takes no parameters.

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

Use this method to display PassKit passes to the user and to give the user the option to add them to their pass library. This method executes asynchronously, returning shortly after you call it. During a subsequent run loop cycle, the system displays the pass interface over the current interface controller. Always call this method from your WatchKit extension’s main thread.

The user dismisses the interface using the built-in controls. At dismissal time, the interface controller executes your `completion` block so that you can perform any relevant cleanup tasks.

## See Also

### Adding PassKit passes

- [dismissAddPassesController()](dismissaddpassescontroller%28%29.md): Dismisses the pass interface controller

# presentAddPassesControllerWithPasses:completion: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Displays a modal interface for presenting passes to the user.

## Declaration

```objectivec
- (void) presentAddPassesControllerWithPasses:(NSArray<PKPass *> *) passes completion:(void (^)()) completion;
```

## Parameters

- `passes`: An array of [PKPass](https://developer.apple.com/documentation/passkit/pkpass) objects that you want to present to the user.
- `completion`: The block to execute when the user is ready to dismiss the interface. Use this block to perform any cleanup tasks related to the dismissal of the modal interface. This block has no return value and takes no parameters.

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

Use this method to display PassKit passes to the user and to give the user the option to add them to their pass library. This method executes asynchronously, returning shortly after you call it. During a subsequent run loop cycle, the system displays the pass interface over the current interface controller. Always call this method from your WatchKit extension’s main thread.

The user dismisses the interface using the built-in controls. At dismissal time, the interface controller executes your `completion` block so that you can perform any relevant cleanup tasks.

## See Also

### Adding PassKit passes

- [dismissAddPassesController](dismissaddpassescontroller%28%29.md): Dismisses the pass interface controller
