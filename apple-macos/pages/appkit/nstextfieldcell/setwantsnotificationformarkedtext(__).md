> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfieldcell/setwantsnotificationformarkedtext(_:)](https://developer.apple.com/documentation/appkit/nstextfieldcell/setwantsnotificationformarkedtext(_:))

# setWantsNotificationForMarkedText(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Directs the cell’s associated field editor to post text change notifications.

## Declaration

```swift
func setWantsNotificationForMarkedText(_ flag: Bool)
```

## Parameters

- `flag`: If [true](https://developer.apple.com/documentation/swift/true), the field editor posts text change notifications (NSTextDidChangeNotification) while editing marked text; if [false](https://developer.apple.com/documentation/swift/false), notifications are delayed until the marked text confirmation.

## See Also

### Managing the Field Editor

- [setUpFieldEditorAttributes(\_:)](setupfieldeditorattributes%28__%29.md): Allows the cell to set up the field editor’s attributes before editing begins.

# setWantsNotificationForMarkedText: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Directs the cell’s associated field editor to post text change notifications.

## Declaration

```objectivec
- (void) setWantsNotificationForMarkedText:(BOOL) flag;
```

## Parameters

- `flag`: If [true](https://developer.apple.com/documentation/swift/true), the field editor posts text change notifications (NSTextDidChangeNotification) while editing marked text; if [false](https://developer.apple.com/documentation/swift/false), notifications are delayed until the marked text confirmation.

## See Also

### Managing the Field Editor

- [setUpFieldEditorAttributes:](setupfieldeditorattributes%28__%29.md): Allows the cell to set up the field editor’s attributes before editing begins.
