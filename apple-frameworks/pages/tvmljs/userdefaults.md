> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/userdefaults](https://developer.apple.com/documentation/tvmljs/userdefaults)

# UserDefaults

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Class  
**Availability:** tvOS 10.0+

An object that contains the app's default preferences.

## Declaration

```
interface UserDefaults
```

<a id="overview"></a>

## Overview

The `UserDefaults` class is exposed to the JavaScript context as `userDefaults`.

## Topics

### Modifying User Defaults

- [getData](userdefaults/1682084-getdata.md): Returns the data associated with a particular key.
- [removeData](userdefaults/1682085-removedata.md): Removes the data associated with a particular key.
- [setData](userdefaults/1682089-setdata.md): Stores the data for a given key.

## See Also

### App Initialization

- [App](app.md): An object that provides access to—and a means to respond to—app life-cycle events.
- [NavigationDocument](navigationdocument.md): A document stack that holds the individual TVML documents for a client-server app.
- [Responding to User Interaction](responding_to_user_interaction.md): Update onscreen information by adding event listeners to your Apple TV app.
- [EventListenerObject](eventlistenerobject.md): An object that communicates events and allows other objects to add themselves as listeners.
