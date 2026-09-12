> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/performtextfinderaction(_:)](https://developer.apple.com/documentation/appkit/nsresponder/performtextfinderaction(_:))

# performTextFinderAction(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Performs all find oriented actions.

## Declaration

```swift
func performTextFinderAction(_ sender: Any?)
```

## Parameters

- `sender`: The sender of the find action.

<a id="Discussion"></a>

## Discussion

When an application performs a find action, it should send this message to the responder chain.

A responder of `performTextFinderAction:` is responsible for creating and owning an instance of `NSTextFinder`. Before any other messages are sent to the `NSTextFinder`, you should set its ‘client’ property to an object which implements the `NSTextFinderClient` protocol.

> **Note**

>  Before OS X v10.7, the default action for these menu items was [performFindPanelAction(\_:)](../nstextview/performfindpanelaction%28__%29.md). Whenever possible which you should update your implementation to use this new action.

# performTextFinderAction: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Performs all find oriented actions.

## Declaration

```objectivec
- (void) performTextFinderAction:(id) sender;
```

## Parameters

- `sender`: The sender of the find action.

<a id="Discussion"></a>

## Discussion

When an application performs a find action, it should send this message to the responder chain.

A responder of `performTextFinderAction:` is responsible for creating and owning an instance of `NSTextFinder`. Before any other messages are sent to the `NSTextFinder`, you should set its ‘client’ property to an object which implements the `NSTextFinderClient` protocol.

> **Note**

>  Before OS X v10.7, the default action for these menu items was [performFindPanelAction:](../nstextview/performfindpanelaction%28__%29.md). Whenever possible which you should update your implementation to use this new action.
