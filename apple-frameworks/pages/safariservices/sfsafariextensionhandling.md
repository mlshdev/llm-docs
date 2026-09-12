> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionhandling](https://developer.apple.com/documentation/safariservices/sfsafariextensionhandling)

# SFSafariExtensionHandling (Swift)

**Framework:** Safari Services  
**Kind:** Protocol  
**Availability:** macOS 10.12+

A protocol for implementing event handling in a Safari app extension.

## Declaration

```swift
protocol SFSafariExtensionHandling : NSObjectProtocol
```

## Topics

### Receiving Messages in Your App Extension

- [messageReceived(withName:from:userInfo:)](sfsafariextensionhandling/messagereceived%28withname_from_userinfo_%29.md): A method the system calls when the extension receives a message from an injected script.
- [messageReceivedFromContainingApp(withName:userInfo:)](sfsafariextensionhandling/messagereceivedfromcontainingapp%28withname_userinfo_%29.md): A method the system calls when the extension receives a message from the extension’s containing app.

### Responding to Context Menu Selections

- [contextMenuItemSelected(withCommand:in:userInfo:)](sfsafariextensionhandling/contextmenuitemselected%28withcommand_in_userinfo_%29.md): A method the system calls when a user selects one of the app extension’s context menu items.
- [validateContextMenuItem(withCommand:in:userInfo:validationHandler:)](sfsafariextensionhandling/validatecontextmenuitem%28withcommand_in_userinfo_validationhandler_%29.md): Validates whether a particular contextual menu item should be displayed.

### Working with Toolbar Items

- [toolbarItemClicked(in:)](sfsafariextensionhandling/toolbaritemclicked%28in_%29.md): A method the system calls when a user clicks a toolbar item associated with the app extension.
- [validateToolbarItem(in:validationHandler:)](sfsafariextensionhandling/validatetoolbaritem%28in_validationhandler_%29.md): Determines if a toolbar menu item should be enabled or have badge text when browser state changes.

### Working with Popovers

- [popoverViewController()](sfsafariextensionhandling/popoverviewcontroller%28%29.md): Asks the handler to provide a popover view controller for display.
- [popoverWillShow(in:)](sfsafariextensionhandling/popoverwillshow%28in_%29.md): Tells the handler that the app extension’s popover is about to be opened.
- [popoverDidClose(in:)](sfsafariextensionhandling/popoverdidclose%28in_%29.md): Tells the handler that the app extension’s popover was closed.

### Working with Content Blockers

- [contentBlocker(withIdentifier:blockedResourcesWith:on:)](sfsafariextensionhandling/contentblocker%28withidentifier_blockedresourceswith_on_%29.md): Tells the handler which resources a content blocker blocked on a webpage.

### Responding to Page Navigation

- [page(\_:willNavigateTo:)](sfsafariextensionhandling/page%28__willnavigateto_%29.md): A method the system calls when a webpage is about to navigate to a new URL.

### Instance Methods

- [additionalRequestHeaders(for:completionHandler:)](sfsafariextensionhandling/additionalrequestheaders%28for_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SFSafariExtensionHandler](sfsafariextensionhandler.md)

## See Also

### Related Documentation

- [dispatchMessage(withName:toExtensionWithIdentifier:userInfo:completionHandler:)](sfsafariapplication/dispatchmessage%28withname_toextensionwithidentifier_userinfo_completionhandler_%29.md): Sends a message to a Safari app extension, launching Safari if necessary.

### Injected style sheets and scripts

- [Using injected style sheets and scripts](using-injected-style-sheets-and-scripts.md): Learn how you can affect the appearance or behavior of a webpage by using injected style sheets and scripts.
- [Injecting a script into a webpage](injecting-a-script-into-a-webpage.md): Inject a script that you write for a Safari app extension into a webpage.
- [Injecting CSS style sheets into a webpage](injecting-css-style-sheets-into-a-webpage.md): Add to or override styles by injecting CSS style sheets into webpages.
- [Passing messages between Safari app extensions and injected scripts](passing-messages-between-safari-app-extensions-and-injected-scripts.md): Communicate between your Safari app extension and injected scripts.
- [SFSafariExtensionHandler](sfsafariextensionhandler.md): A base class that you subclass to handle events in your Safari app extension.
- [SFSafariExtensionManager](sfsafariextensionmanager.md): A class that your app uses to find out the current state of a Safari extension.
- [SFSafariExtensionState](sfsafariextensionstate.md): The state of a Safari extension.
- [SFSafariPageProperties](sfsafaripageproperties.md): An object that captures information about a webpage.
- [SFExtensionProfileKey](sfextensionprofilekey.md): A string the system uses as a key in a user info dictionary to identify a profile identifier.

# SFSafariExtensionHandling (Objective-C)

**Framework:** Safari Services  
**Kind:** Protocol  
**Availability:** macOS 10.12+

A protocol for implementing event handling in a Safari app extension.

## Declaration

```objectivec
@protocol SFSafariExtensionHandling <NSObject>
```

## Topics

### Receiving Messages in Your App Extension

- [messageReceivedWithName:fromPage:userInfo:](sfsafariextensionhandling/messagereceived%28withname_from_userinfo_%29.md): A method the system calls when the extension receives a message from an injected script.
- [messageReceivedFromContainingAppWithName:userInfo:](sfsafariextensionhandling/messagereceivedfromcontainingapp%28withname_userinfo_%29.md): A method the system calls when the extension receives a message from the extension’s containing app.

### Responding to Context Menu Selections

- [contextMenuItemSelectedWithCommand:inPage:userInfo:](sfsafariextensionhandling/contextmenuitemselected%28withcommand_in_userinfo_%29.md): A method the system calls when a user selects one of the app extension’s context menu items.
- [validateContextMenuItemWithCommand:inPage:userInfo:validationHandler:](sfsafariextensionhandling/validatecontextmenuitem%28withcommand_in_userinfo_validationhandler_%29.md): Validates whether a particular contextual menu item should be displayed.

### Working with Toolbar Items

- [toolbarItemClickedInWindow:](sfsafariextensionhandling/toolbaritemclicked%28in_%29.md): A method the system calls when a user clicks a toolbar item associated with the app extension.
- [validateToolbarItemInWindow:validationHandler:](sfsafariextensionhandling/validatetoolbaritem%28in_validationhandler_%29.md): Determines if a toolbar menu item should be enabled or have badge text when browser state changes.

### Working with Popovers

- [popoverViewController](sfsafariextensionhandling/popoverviewcontroller%28%29.md): Asks the handler to provide a popover view controller for display.
- [popoverWillShowInWindow:](sfsafariextensionhandling/popoverwillshow%28in_%29.md): Tells the handler that the app extension’s popover is about to be opened.
- [popoverDidCloseInWindow:](sfsafariextensionhandling/popoverdidclose%28in_%29.md): Tells the handler that the app extension’s popover was closed.

### Working with Content Blockers

- [contentBlockerWithIdentifier:blockedResourcesWithURLs:onPage:](sfsafariextensionhandling/contentblocker%28withidentifier_blockedresourceswith_on_%29.md): Tells the handler which resources a content blocker blocked on a webpage.

### Responding to Page Navigation

- [page:willNavigateToURL:](sfsafariextensionhandling/page%28__willnavigateto_%29.md): A method the system calls when a webpage is about to navigate to a new URL.

### Instance Methods

- [additionalRequestHeadersForURL:completionHandler:](sfsafariextensionhandling/additionalrequestheaders%28for_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SFSafariExtensionHandler](sfsafariextensionhandler.md)

## See Also

### Related Documentation

- [dispatchMessageWithName:toExtensionWithIdentifier:userInfo:completionHandler:](sfsafariapplication/dispatchmessage%28withname_toextensionwithidentifier_userinfo_completionhandler_%29.md): Sends a message to a Safari app extension, launching Safari if necessary.

### Injected style sheets and scripts

- [Using injected style sheets and scripts](using-injected-style-sheets-and-scripts.md): Learn how you can affect the appearance or behavior of a webpage by using injected style sheets and scripts.
- [Injecting a script into a webpage](injecting-a-script-into-a-webpage.md): Inject a script that you write for a Safari app extension into a webpage.
- [Injecting CSS style sheets into a webpage](injecting-css-style-sheets-into-a-webpage.md): Add to or override styles by injecting CSS style sheets into webpages.
- [Passing messages between Safari app extensions and injected scripts](passing-messages-between-safari-app-extensions-and-injected-scripts.md): Communicate between your Safari app extension and injected scripts.
- [SFSafariExtensionHandler](sfsafariextensionhandler.md): A base class that you subclass to handle events in your Safari app extension.
- [SFSafariExtensionManager](sfsafariextensionmanager.md): A class that your app uses to find out the current state of a Safari extension.
- [SFSafariExtensionState](sfsafariextensionstate.md): The state of a Safari extension.
- [SFSafariPageProperties](sfsafaripageproperties.md): An object that captures information about a webpage.
- [SFExtensionProfileKey](sfextensionprofilekey.md): A string the system uses as a key in a user info dictionary to identify a profile identifier.
