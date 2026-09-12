> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/stop(_:)](https://developer.apple.com/documentation/quartz/qcview/stop(_:))

# stop(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Stops rendering a composition in a view.

## Declaration

```swift
@IBAction func stop(_ sender: Any!)
```

## Parameters

- `sender`: The object (such as a button or menu item) sending the message to stop rendering. You need to connect the object in the interface to the action.

<a id="Discussion"></a>

## Discussion

The method is invoked when the user clicks a button or issues a command from some other user interface element, such as a menu. It is equivalent to the [stopRendering()](stoprendering%28%29.md) method.

## See Also

### Using Interface Builder

- [play(\_:)](play%28__%29.md): Plays or pauses a composition in a view.
- [start(\_:)](start%28__%29.md): Starts rendering a composition in a view.

# stop: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Stops rendering a composition in a view.

## Declaration

```objectivec
- (void) stop:(id) sender;
```

## Parameters

- `sender`: The object (such as a button or menu item) sending the message to stop rendering. You need to connect the object in the interface to the action.

<a id="Discussion"></a>

## Discussion

The method is invoked when the user clicks a button or issues a command from some other user interface element, such as a menu. It is equivalent to the [stopRendering](stoprendering%28%29.md) method.

## See Also

### Using Interface Builder

- [play:](play%28__%29.md): Plays or pauses a composition in a view.
- [start:](start%28__%29.md): Starts rendering a composition in a view.
