> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationalert/primaryaction

# primaryAction (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The primary action, and button, for the navigation alert.

## Declaration

```swift
var primaryAction: CPAlertAction { get }
```

<a id="Discussion"></a>

## Discussion

Each navigation alert must have a primary action.

## See Also

### Getting the actions

- [actions](actions.md): The array of actions associated with this navigation alert.
- [secondaryAction](secondaryaction.md): An optional secondary action, and button, for the navigation alert.
- [maximumActionsCount](maximumactionscount.md): The maximum number of actions that a @c CPNavigationAlert can display.

# primaryAction (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The primary action, and button, for the navigation alert.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CPAlertAction * primaryAction;
```

<a id="Discussion"></a>

## Discussion

Each navigation alert must have a primary action.

## See Also

### Getting the actions

- [actions](actions.md): The array of actions associated with this navigation alert.
- [secondaryAction](secondaryaction.md): An optional secondary action, and button, for the navigation alert.
- [maximumActionsCount](maximumactionscount.md): The maximum number of actions that a @c CPNavigationAlert can display.
