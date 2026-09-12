> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroltexteditingdelegate/controltextdidchange(_:)](https://developer.apple.com/documentation/appkit/nscontroltexteditingdelegate/controltextdidchange(_:))

# controlTextDidChange(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the control made changes to its text content.

## Declaration

```swift
@MainActor optional func controlTextDidChange(_ obj: Notification)
```

## Parameters

- `obj`: A notification object that contains details about the editing configuration.

<a id="Discussion"></a>

## Discussion

Use the key `“NSFieldEditor”` to obtain the field editor from the notification object’s `userInfo` dictionary.

## See Also

### Instance Methods

- [controlTextDidBeginEditing(\_:)](controltextdidbeginediting%28__%29.md): Tells the delegate that the control started editing its text content.
- [controlTextDidEndEditing(\_:)](controltextdidendediting%28__%29.md): Tells the delegate that the control finished editing its text content and committed the changes.

# controlTextDidChange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the control made changes to its text content.

## Declaration

```objectivec
- (void) controlTextDidChange:(NSNotification *) obj;
```

## Parameters

- `obj`: A notification object that contains details about the editing configuration.

<a id="Discussion"></a>

## Discussion

Use the key `“NSFieldEditor”` to obtain the field editor from the notification object’s `userInfo` dictionary.

## See Also

### Instance Methods

- [controlTextDidBeginEditing:](controltextdidbeginediting%28__%29.md): Tells the delegate that the control started editing its text content.
- [controlTextDidEndEditing:](controltextdidendediting%28__%29.md): Tells the delegate that the control finished editing its text content and committed the changes.
