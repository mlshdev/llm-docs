> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroltexteditingdelegate/controltextdidendediting(_:)](https://developer.apple.com/documentation/appkit/nscontroltexteditingdelegate/controltextdidendediting(_:))

# controlTextDidEndEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the control finished editing its text content and committed the changes.

## Declaration

```swift
@MainActor optional func controlTextDidEndEditing(_ obj: Notification)
```

## Parameters

- `obj`: A notification object that contains details about the editing configuration.

<a id="Discussion"></a>

## Discussion

Use the key `“NSFieldEditor”` to obtain the field editor from the notification object’s `userInfo` dictionary.

> **Note**

>  If you call [abortEditing()](../nscontrol/abortediting%28%29.md) to discard pending edits, the control doesn’t call [controlTextDidEndEditing(\_:)](controltextdidendediting%28__%29.md).

## See Also

### Instance Methods

- [controlTextDidBeginEditing(\_:)](controltextdidbeginediting%28__%29.md): Tells the delegate that the control started editing its text content.
- [controlTextDidChange(\_:)](controltextdidchange%28__%29.md): Tells the delegate that the control made changes to its text content.

# controlTextDidEndEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the control finished editing its text content and committed the changes.

## Declaration

```objectivec
- (void) controlTextDidEndEditing:(NSNotification *) obj;
```

## Parameters

- `obj`: A notification object that contains details about the editing configuration.

<a id="Discussion"></a>

## Discussion

Use the key `“NSFieldEditor”` to obtain the field editor from the notification object’s `userInfo` dictionary.

> **Note**

>  If you call [abortEditing](../nscontrol/abortediting%28%29.md) to discard pending edits, the control doesn’t call [controlTextDidEndEditing:](controltextdidendediting%28__%29.md).

## See Also

### Instance Methods

- [controlTextDidBeginEditing:](controltextdidbeginediting%28__%29.md): Tells the delegate that the control started editing its text content.
- [controlTextDidChange:](controltextdidchange%28__%29.md): Tells the delegate that the control made changes to its text content.
