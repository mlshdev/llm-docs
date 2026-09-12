> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/play(_:)](https://developer.apple.com/documentation/quartz/qcview/play(_:))

# play(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Plays or pauses a composition in a view.

## Declaration

```swift
@IBAction func play(_ sender: Any!)
```

## Parameters

- `sender`: The object (such as a button or menu item) sending the message to play the composition. You need to connect the object in the interface to the action.

<a id="Discussion"></a>

## Discussion

This method starts rendering a composition if it is not already rendering, pauses a composition that is rendering, or resumes rendering for a composition whose rendering is paused. The method is invoked when the user clicks a button or issues a command from some other user interface element, such as a menu.

## See Also

### Using Interface Builder

- [start(\_:)](start%28__%29.md): Starts rendering a composition in a view.
- [stop(\_:)](stop%28__%29.md): Stops rendering a composition in a view.

# play: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Plays or pauses a composition in a view.

## Declaration

```objectivec
- (void) play:(id) sender;
```

## Parameters

- `sender`: The object (such as a button or menu item) sending the message to play the composition. You need to connect the object in the interface to the action.

<a id="Discussion"></a>

## Discussion

This method starts rendering a composition if it is not already rendering, pauses a composition that is rendering, or resumes rendering for a composition whose rendering is paused. The method is invoked when the user clicks a button or issues a command from some other user interface element, such as a menu.

## See Also

### Using Interface Builder

- [start:](start%28__%29.md): Starts rendering a composition in a view.
- [stop:](stop%28__%29.md): Stops rendering a composition in a view.
