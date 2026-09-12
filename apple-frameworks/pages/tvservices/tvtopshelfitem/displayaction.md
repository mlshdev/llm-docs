> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfitem/displayaction](https://developer.apple.com/documentation/tvservices/tvtopshelfitem/displayaction)

# displayAction (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The action to perform when the user wants to see more information for the current item.

## Declaration

```swift
var displayAction: TVTopShelfAction? { get set }
```

<a id="Discussion"></a>

## Discussion

In a carousel inteface, the second of two buttons invites the user to display additional details for the current item. The action object you assign to this property provides the title and image to use for that button. When selected, the system loads the action’s URL.

In a sectioned or inset interface, tvOS loads the URL for the specified action when the user selects the current item.

## See Also

### Assigning Actions to the Item

- [playAction](playaction.md): The action to perform when the user wants to play the current item.

# displayAction (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The action to perform when the user wants to see more information for the current item.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TVTopShelfAction * displayAction;
```

<a id="Discussion"></a>

## Discussion

In a carousel inteface, the second of two buttons invites the user to display additional details for the current item. The action object you assign to this property provides the title and image to use for that button. When selected, the system loads the action’s URL.

In a sectioned or inset interface, tvOS loads the URL for the specified action when the user selects the current item.

## See Also

### Assigning Actions to the Item

- [playAction](playaction.md): The action to perform when the user wants to play the current item.
