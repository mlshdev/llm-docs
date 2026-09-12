> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/unhideallapplications(_:)](https://developer.apple.com/documentation/appkit/nsapplication/unhideallapplications(_:))

# unhideAllApplications(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Unhides all apps, including the receiver.

## Declaration

```swift
func unhideAllApplications(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This action causes each app to order its windows to the front, which could obscure the currently active window in the active app.

## See Also

### Hiding apps

- [hideOtherApplications(\_:)](hideotherapplications%28__%29.md): Hides all apps, except the receiver.

# unhideAllApplications: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Unhides all apps, including the receiver.

## Declaration

```objectivec
- (void) unhideAllApplications:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This action causes each app to order its windows to the front, which could obscure the currently active window in the active app.

## See Also

### Hiding apps

- [hideOtherApplications:](hideotherapplications%28__%29.md): Hides all apps, except the receiver.
