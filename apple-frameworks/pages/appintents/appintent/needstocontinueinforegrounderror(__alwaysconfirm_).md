> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/needstocontinueinforegrounderror(_:alwaysconfirm:)](https://developer.apple.com/documentation/appintents/appintent/needstocontinueinforegrounderror(_:alwaysconfirm:))

# needsToContinueInForegroundError(\_:alwaysConfirm:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Asks the person to continue the intent’s action in the foreground.

## Declaration

```swift
func needsToContinueInForegroundError(_ dialog: IntentDialog? = nil, alwaysConfirm: Bool = true) -> AppIntentError
```

## Parameters

- `dialog`: The localized text you want the system to display or speak to confirm the transition.
- `alwaysConfirm`: `true` to ask the person to confirm the transition. If you specify `false`, the system might not ask for confirmation if it already received a recent confirmation. It doesn’t ask for confirmation if you recently called a `requestChoice` or `requestConfirmation` method of your intent, or asked to disambiguate a value. It does ask for confirmation if your app intent conforms to the [ProgressReportingIntent](../progressreportingintent.md) protocol and you didn’t update the progress value recently.

<a id="discussion"></a>

## Discussion

If your intent code encounters an error and needs to continue in the foreground, call this method to start the transition process. Before calling this method, use the contextual information in the intent’s [systemContext](systemcontext.md) property to verify the app can transition to the foreground. If you call this method and it’s not possible to transition the app to the foreground, the system throws an [notAllowed](../appintenterror/unrecoverable/notallowed.md) error.

## See Also

### Running in the foreground or background

- [supportedModes](supportedmodes.md): The foreground and background modes the app intent supports.
- [IntentModes](../intentmodes.md): A set of options you use to configure the runtime behavior of an app intent.
- [continueInForeground(\_:alwaysConfirm:)](continueinforeground%28__alwaysconfirm_%29.md): Attempts to transition the app to the foreground after optionally requesting permission to do so.
