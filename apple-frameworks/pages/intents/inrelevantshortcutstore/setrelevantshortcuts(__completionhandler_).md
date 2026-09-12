> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrelevantshortcutstore/setrelevantshortcuts(_:completionhandler:)](https://developer.apple.com/documentation/intents/inrelevantshortcutstore/setrelevantshortcuts(_:completionhandler:))

# setRelevantShortcuts(\_:completionHandler:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Sets the relevant shortcuts.

## Declaration

```swift
func setRelevantShortcuts(_ shortcuts: [INRelevantShortcut], completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setRelevantShortcuts(_ shortcuts: [INRelevantShortcut]) async throws
```

## Parameters

- `shortcuts`: A list of relevant shortcuts.
- `completionHandler`: The block invoked on a background thread after the system stores the relevant shortcuts. This block has no return value and takes the following parameter:

  - **`error`**: An [NSError](../../foundation/nserror.md) object if a problem occurred storing the relevant shortcuts; otherwise, `nil`.

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

<a id="Discussion"></a>

## Discussion

Call this method to give Siri the list of relevant shortcuts for your app. To replace the list, call the method again, passing in a new list of relevant shortcuts. If you want to remove all relevant shortcuts associated with your app, call the method passing in an empty array.

To ensure the system stores the relevant shortcuts, wait for the system to call the `completionHandler` block.

# setRelevantShortcuts:completionHandler: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Sets the relevant shortcuts.

## Declaration

```objectivec
- (void) setRelevantShortcuts:(NSArray<INRelevantShortcut *> *) shortcuts completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `shortcuts`: A list of relevant shortcuts.
- `completionHandler`: The block invoked on a background thread after the system stores the relevant shortcuts. This block has no return value and takes the following parameter:

  - **`error`**: An [NSError](../../foundation/nserror.md) object if a problem occurred storing the relevant shortcuts; otherwise, `nil`.

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

<a id="Discussion"></a>

## Discussion

Call this method to give Siri the list of relevant shortcuts for your app. To replace the list, call the method again, passing in a new list of relevant shortcuts. If you want to remove all relevant shortcuts associated with your app, call the method passing in an empty array.

To ensure the system stores the relevant shortcuts, wait for the system to call the `completionHandler` block.
