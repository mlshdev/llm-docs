> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/performcommand(for:)-25rd1](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/performcommand(for:)-25rd1)

# performCommand(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · visionOS 2.4+

Performs the command associated with the given key command.

## Declaration

```swift
func performCommand(for keyCommand: UIKeyCommand) -> Bool
```

## Parameters

- `keyCommand`: The key command received by the first responder.

<a id="return-value"></a>

## Return Value

Returns `YES` if a command corresponding to the UIKeyCommand was found and performed, `NO` otherwise.

<a id="discussion"></a>

## Discussion

This method checks for a command corresponding to the provided [UIKeyCommand](https://developer.apple.com/documentation/uikit/uikeycommand) and performs it, if available. The app should use this method to perform any extension commands at an appropriate time in the app’s responder object that handles the [performCommand(for:)](performcommand%28for_%29-25rd1.md) action.

# performCommandForKeyCommand: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · visionOS 2.4+

Performs the command associated with the given key command.

## Declaration

```objectivec
- (BOOL) performCommandForKeyCommand:(UIKeyCommand *) keyCommand;
```

## Parameters

- `keyCommand`: The key command received by the first responder.

<a id="return-value"></a>

## Return Value

Returns `YES` if a command corresponding to the UIKeyCommand was found and performed, `NO` otherwise.

<a id="discussion"></a>

## Discussion

This method checks for a command corresponding to the provided [UIKeyCommand](https://developer.apple.com/documentation/uikit/uikeycommand) and performs it, if available. The app should use this method to perform any extension commands at an appropriate time in the app’s responder object that handles the [performCommandForKeyCommand:](performcommand%28for_%29-25rd1.md) action.
