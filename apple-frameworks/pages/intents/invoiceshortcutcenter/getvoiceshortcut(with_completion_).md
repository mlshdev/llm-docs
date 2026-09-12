> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invoiceshortcutcenter/getvoiceshortcut(with:completion:)](https://developer.apple.com/documentation/intents/invoiceshortcutcenter/getvoiceshortcut(with:completion:))

# getVoiceShortcut(with:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Retrieves a shortcut the user added to Siri.

## Declaration

```swift
func getVoiceShortcut(with identifier: UUID, completion completionHandler: @escaping @Sendable (INVoiceShortcut?, (any Error)?) -> Void)
```

```swift
func getVoiceShortcut(with identifier: UUID) async throws -> INVoiceShortcut
```

## Parameters

- `identifier`: The shortcut identifier.
- `completionHandler`: The block invoked on a background thread after the system retrieves the shortcut. This block has no return value and takes the following parameters:

  - **`voiceShortcut`**: An instance of [INVoiceShortcut](../invoiceshortcut.md) representing the requested shortcut; otherwise, `nil` if the shortcut doesn’t exist or an error occurs.
  - **`error`**: An [NSError](../../foundation/nserror.md) object if a problem occurred retrieving the shortcut; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

This method only retrieves shortcuts associated with the app that calls the method. It cannot retrieve shortcuts associated with other apps.

## See Also

### Getting Shortcuts Added to Siri

- [getAllVoiceShortcuts(completion:)](getallvoiceshortcuts%28completion_%29.md): Retrieves all shortcuts added to Siri for your app.

# getVoiceShortcutWithIdentifier:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Retrieves a shortcut the user added to Siri.

## Declaration

```objectivec
- (void) getVoiceShortcutWithIdentifier:(NSUUID *) identifier completion:(void (^)(INVoiceShortcut *voiceShortcut, NSError *error)) completionHandler;
```

## Parameters

- `identifier`: The shortcut identifier.
- `completionHandler`: The block invoked on a background thread after the system retrieves the shortcut. This block has no return value and takes the following parameters:

  - **`voiceShortcut`**: An instance of [INVoiceShortcut](../invoiceshortcut.md) representing the requested shortcut; otherwise, `nil` if the shortcut doesn’t exist or an error occurs.
  - **`error`**: An [NSError](../../foundation/nserror.md) object if a problem occurred retrieving the shortcut; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

This method only retrieves shortcuts associated with the app that calls the method. It cannot retrieve shortcuts associated with other apps.

## See Also

### Getting Shortcuts Added to Siri

- [getAllVoiceShortcutsWithCompletion:](getallvoiceshortcuts%28completion_%29.md): Retrieves all shortcuts added to Siri for your app.
