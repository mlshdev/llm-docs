> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abactiondelegate](https://developer.apple.com/documentation/addressbook/abactiondelegate)

# ABActionDelegate (Swift)

**Framework:** Address Book

Implement an Address Book action plug-in to support the display of rollover menus on top of custom items.

<a id="overview"></a>

## Overview

The `ABActionDelegate` informal protocol allows you to populate the rollover menus of Address Book with custom items. You do this by implementing an Address Book action plug-in. The plug-in’s [Bundle](../foundation/bundle.md) must implement [actionProperty()](../objectivec/nsobject-swift.class/actionproperty%28%29.md), [title(for:identifier:)](../objectivec/nsobject-swift.class/title%28for_identifier_%29.md), and [performAction(for:identifier:)](../objectivec/nsobject-swift.class/performaction%28for_identifier_%29.md).

Each action plug-in can implement only one action. Actions can only apply to items with labels. An action can display a simple window inside the Address Book application; if your action actions needs to do anything else, it should launch your own application to perform the action.

Use Xcode to create Address Book action plug-ins. Place action plug-ins in `~/Library/Address Book Plug-Ins` or `/Library/Address Book Plug-Ins`, depending on the scope you want for the action.

## Topics

### Performing actions

- [performAction(for:identifier:)](../objectivec/nsobject-swift.class/performaction%28for_identifier_%29.md): Sent to the delegate to perform the action.

### Querying

- [actionProperty()](../objectivec/nsobject-swift.class/actionproperty%28%29.md): Sent to the delegate to request the property the action applies to.
- [shouldEnableAction(for:identifier:)](../objectivec/nsobject-swift.class/shouldenableaction%28for_identifier_%29.md): Sent to the delegate to determine whether the action should be enabled.
- [title(for:identifier:)](../objectivec/nsobject-swift.class/title%28for_identifier_%29.md): Sent to the delegate to request the title of the menu item for the action.

# ABActionDelegate (Objective-C)

**Framework:** Address Book

Implement an Address Book action plug-in to support the display of rollover menus on top of custom items.

<a id="overview"></a>

## Overview

The `ABActionDelegate` informal protocol allows you to populate the rollover menus of Address Book with custom items. You do this by implementing an Address Book action plug-in. The plug-in’s [NSBundle](../foundation/bundle.md) must implement [actionProperty](../objectivec/nsobject-swift.class/actionproperty%28%29.md), [titleForPerson:identifier:](../objectivec/nsobject-swift.class/title%28for_identifier_%29.md), and [performActionForPerson:identifier:](../objectivec/nsobject-swift.class/performaction%28for_identifier_%29.md).

Each action plug-in can implement only one action. Actions can only apply to items with labels. An action can display a simple window inside the Address Book application; if your action actions needs to do anything else, it should launch your own application to perform the action.

Use Xcode to create Address Book action plug-ins. Place action plug-ins in `~/Library/Address Book Plug-Ins` or `/Library/Address Book Plug-Ins`, depending on the scope you want for the action.

## Topics

### Performing actions

- [performActionForPerson:identifier:](../objectivec/nsobject-swift.class/performaction%28for_identifier_%29.md): Sent to the delegate to perform the action.

### Querying

- [actionProperty](../objectivec/nsobject-swift.class/actionproperty%28%29.md): Sent to the delegate to request the property the action applies to.
- [shouldEnableActionForPerson:identifier:](../objectivec/nsobject-swift.class/shouldenableaction%28for_identifier_%29.md): Sent to the delegate to determine whether the action should be enabled.
- [titleForPerson:identifier:](../objectivec/nsobject-swift.class/title%28for_identifier_%29.md): Sent to the delegate to request the title of the menu item for the action.
