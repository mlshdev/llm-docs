> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationalert/secondaryaction

# secondaryAction (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An optional secondary action, and button, for the navigation alert.

## Declaration

```swift
var secondaryAction: CPAlertAction? { get }
```

<a id="Discussion"></a>

## Discussion

The alert displays the button for a secondary action on the trailing edge of the alert.

## See Also

### Getting the actions

- [actions](actions.md): The array of actions associated with this navigation alert.
- [primaryAction](primaryaction.md): The primary action, and button, for the navigation alert.
- [maximumActionsCount](maximumactionscount.md): The maximum number of actions that a @c CPNavigationAlert can display.

# secondaryAction (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An optional secondary action, and button, for the navigation alert.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CPAlertAction * secondaryAction;
```

<a id="Discussion"></a>

## Discussion

The alert displays the button for a secondary action on the trailing edge of the alert.

## See Also

### Getting the actions

- [actions](actions.md): The array of actions associated with this navigation alert.
- [primaryAction](primaryaction.md): The primary action, and button, for the navigation alert.
- [maximumActionsCount](maximumactionscount.md): The maximum number of actions that a @c CPNavigationAlert can display.
