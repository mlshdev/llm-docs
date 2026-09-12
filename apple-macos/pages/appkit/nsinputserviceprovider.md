> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsinputserviceprovider](https://developer.apple.com/documentation/appkit/nsinputserviceprovider)

# NSInputServiceProvider (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```swift
protocol NSInputServiceProvider
```

## See Also

### Protocols

- [NSAccessibility](nsaccessibility.md): A legacy, informal protocol that Apple doesn’t recommend for active use.
- [NSEditorRegistration](nseditorregistration.md): A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.
- [NSInputServerMouseTracker](nsinputservermousetracker.md)
- [NSDrawerDelegate](nsdrawerdelegate.md): Deprecated. A set of methods that drawer delegates implement to open, close, and resize the drawer.

# NSInputServiceProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```objectivec
@protocol NSInputServiceProvider
```

## Topics

### Deprecated

- [activeConversationChanged:toNewConversation:](nsinputserviceprovider/activeconversationchanged_tonewconversation_.md): Deprecated.
- [activeConversationWillChange:fromOldConversation:](nsinputserviceprovider/activeconversationwillchange_fromoldconversation_.md): Deprecated.
- [canBeDisabled](nsinputserviceprovider/canbedisabled.md): Deprecated.
- [doCommandBySelector:client:](nsinputserviceprovider/docommandbyselector_client_.md): Deprecated.
- [inputClientBecomeActive:](nsinputserviceprovider/inputclientbecomeactive_.md): Deprecated.
- [inputClientDisabled:](nsinputserviceprovider/inputclientdisabled_.md): Deprecated.
- [inputClientEnabled:](nsinputserviceprovider/inputclientenabled_.md): Deprecated.
- [inputClientResignActive:](nsinputserviceprovider/inputclientresignactive_.md): Deprecated.
- [insertText:client:](nsinputserviceprovider/inserttext_client_.md): Deprecated.
- [markedTextAbandoned:](nsinputserviceprovider/markedtextabandoned_.md): Deprecated.
- [markedTextSelectionChanged:client:](nsinputserviceprovider/markedtextselectionchanged_client_.md): Deprecated.
- [terminate:](nsinputserviceprovider/terminate_.md): Deprecated.
- [wantsToDelayTextChangeNotifications](nsinputserviceprovider/wantstodelaytextchangenotifications.md): Deprecated.
- [wantsToHandleMouseEvents](nsinputserviceprovider/wantstohandlemouseevents.md): Deprecated.
- [wantsToInterpretAllKeystrokes](nsinputserviceprovider/wantstointerpretallkeystrokes.md): Deprecated.

## Relationships

### Conforming Types

- [NSInputServer](nsinputserver.md)

## See Also

### Protocols

- [NSAccessibility](nsaccessibility.md): A legacy, informal protocol that Apple doesn’t recommend for active use.
- [NSEditor](nseditor-deprecated-symbols.md): A set of methods that controllers and UI elements can implement to manage editing.
- [NSEditorRegistration](nseditorregistration.md): A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.
- [NSInputServerMouseTracker](nsinputservermousetracker.md)
- [NSDrawerDelegate](nsdrawerdelegate.md): Deprecated. A set of methods that drawer delegates implement to open, close, and resize the drawer.
