> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfitem/playaction](https://developer.apple.com/documentation/tvservices/tvtopshelfitem/playaction)

# playAction (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The action to perform when the user wants to play the current item.

## Declaration

```swift
var playAction: TVTopShelfAction? { get set }
```

<a id="Discussion"></a>

## Discussion

In a carousel inteface, the first of two buttons invites the user to play the content associated with the current item. The action object you assign to this property provides the title and image to use for that button. When selected, the system loads the action’s URL.

In a sectioned interface, tvOS loads the URL for the specified action when the current item is focused and the user presses the play/pause button.

## See Also

### Assigning Actions to the Item

- [displayAction](displayaction.md): The action to perform when the user wants to see more information for the current item.

# playAction (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The action to perform when the user wants to play the current item.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TVTopShelfAction * playAction;
```

<a id="Discussion"></a>

## Discussion

In a carousel inteface, the first of two buttons invites the user to play the content associated with the current item. The action object you assign to this property provides the title and image to use for that button. When selected, the system loads the action’s URL.

In a sectioned interface, tvOS loads the URL for the specified action when the current item is focused and the user presses the play/pause button.

## See Also

### Assigning Actions to the Item

- [displayAction](displayaction.md): The action to perform when the user wants to see more information for the current item.
