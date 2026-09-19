> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationalert/actions

# actions (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The array of actions associated with this navigation alert.

## Declaration

```swift
var actions: [CPAlertAction] { get }
```

<a id="discussion"></a>

## Discussion

If the alert was created with the older @c primaryAction / @c secondaryAction initializer, this property returns those actions as an array for backward compatibility.

> **Note**

> CPAlertActionStyleCancel actions are rendered as standard labeled buttons in the primary action row.

# actions (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The array of actions associated with this navigation alert.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CPAlertAction *> * actions;
```

<a id="discussion"></a>

## Discussion

If the alert was created with the older @c primaryAction / @c secondaryAction initializer, this property returns those actions as an array for backward compatibility.

> **Note**

> CPAlertActionStyleCancel actions are rendered as standard labeled buttons in the primary action row.
