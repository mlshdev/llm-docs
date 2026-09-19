> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
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

### Getting the Actions

- [secondaryAction](secondaryaction.md): An optional secondary action, and button, for the navigation alert.

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

### Getting the Actions

- [secondaryAction](secondaryaction.md): An optional secondary action, and button, for the navigation alert.
