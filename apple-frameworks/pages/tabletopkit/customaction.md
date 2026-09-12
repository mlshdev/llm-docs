> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/customaction](https://developer.apple.com/documentation/tabletopkit/customaction)

# CustomAction

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 26.0+

A protocol that represents an action whose behavior is implemented outside of TabletopKit. A custom action that can be applied to a `TableState`.

## Declaration

```swift
protocol CustomAction
```

## Topics

### Creating a custom action

- [init(from:)](customaction/init%28from_%29.md): Creates an instance of `CustomAction` initialized from the provided `TabletopAction`. If the provided action is not a custom action, this initializer returns `nil`.

### Applying the action

- [apply(table:)](customaction/apply%28table_%29.md): Implement this function to perform the changes to the table state that this action represents. It is important that the code performed in this function is only a function of the provided table state and the data of the action instance.

### Validating the action

- [validate(snapshot:)](customaction/validate%28snapshot_%29.md): Implement this function to detect whether the action is valid and should be applied given the state of the table represented by `snapshot`. If not implemented, the action is always considered valid. It is important that the validation for a given action is only a function of the given snapshot and the data of the action instance.

## See Also

### Actions

- [TabletopAction](tabletopaction.md): A protocol for objects that describe an action in a tabletop game.
- [MoveEquipmentAction](moveequipmentaction.md): An action that moves a piece of equipment on the table or changes the grouping.
- [UpdateEquipmentAction](updateequipmentaction.md): An action that updates properties of equipment on the table.
- [SetTurnAction](setturnaction.md): An action that sets the current seats participating in the current turn.
- [UpdateCounterAction](updatecounteraction.md): An action that updates the game counter.
- [CreateBookmarkAction](createbookmarkaction.md): An action that takes a snapshot of the game.
