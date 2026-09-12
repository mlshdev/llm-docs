> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/start(_:)](https://developer.apple.com/documentation/quartz/qcview/start(_:))

# start(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Starts rendering a composition in a view.

## Declaration

```swift
@IBAction func start(_ sender: Any!)
```

## Parameters

- `sender`: The object (such as a button or menu item) sending the message to start rendering. You need to connect the object in the interface to the action.

<a id="Discussion"></a>

## Discussion

The method is invoked when the user clicks a button or issues a command from some other user interface element, such as a menu. It is equivalent to the [startRendering()](startrendering%28%29.md) method.

## See Also

### Using Interface Builder

- [play(\_:)](play%28__%29.md): Plays or pauses a composition in a view.
- [stop(\_:)](stop%28__%29.md): Stops rendering a composition in a view.

# start: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Starts rendering a composition in a view.

## Declaration

```objectivec
- (void) start:(id) sender;
```

## Parameters

- `sender`: The object (such as a button or menu item) sending the message to start rendering. You need to connect the object in the interface to the action.

<a id="Discussion"></a>

## Discussion

The method is invoked when the user clicks a button or issues a command from some other user interface element, such as a menu. It is equivalent to the [startRendering](startrendering%28%29.md) method.

## See Also

### Using Interface Builder

- [play:](play%28__%29.md): Plays or pauses a composition in a view.
- [stop:](stop%28__%29.md): Stops rendering a composition in a view.
