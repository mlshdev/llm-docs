> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/handlekeyentry(_:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/handlekeyentry(_:completionhandler:))

# handleKeyEntry(\_:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Accepts key-entry events from the text system for the text view to process.

## Declaration

```swift
func handleKeyEntry(_ entry: BEKeyEntry, completionHandler: @escaping @Sendable (BEKeyEntry, Bool) -> Void)
```

```swift
func handleKeyEntry(_ entry: BEKeyEntry) async -> (BEKeyEntry, Bool)
```

## Parameters

- `entry`: The keyboard event delivered by the system.
- `completionHandler`: A block that you call to indicate whether your text view handled the event.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

Implement this method to receive keyboard events from the system. If you handle the `entry` in code, call the completion handler with `true` as the second parameter. Otherwise, call the completion handler with `false` as the second argument, and call the delegate’s [shouldDeferEventHandlingToSystem(for:context:)](../betextinputdelegate/shoulddefereventhandlingtosystem%28for_context_%29.md) method. In either case, pass the `entry` you received as the first parameter to the completion handler.

The system delivers events on a serial queue, so call the completion handler after your view processes an event to allow the system to send a subsequent event.

# handleKeyEntry:withCompletionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Accepts key-entry events from the text system for the text view to process.

## Declaration

```objectivec
- (void) handleKeyEntry:(BEKeyEntry *) entry withCompletionHandler:(void (^)(BEKeyEntry *theEvent, BOOL wasHandled)) completionHandler;
```

## Parameters

- `entry`: The keyboard event delivered by the system.
- `completionHandler`: A block that you call to indicate whether your text view handled the event.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

Implement this method to receive keyboard events from the system. If you handle the `entry` in code, call the completion handler with `true` as the second parameter. Otherwise, call the completion handler with `false` as the second argument, and call the delegate’s [shouldDeferEventHandlingToSystemForTextInput:context:](../betextinputdelegate/shoulddefereventhandlingtosystem%28for_context_%29.md) method. In either case, pass the `entry` you received as the first parameter to the completion handler.

The system delivers events on a serial queue, so call the completion handler after your view processes an event to allow the system to send a subsequent event.
