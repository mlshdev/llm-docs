> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/app-extensions](https://developer.apple.com/documentation/appkit/app-extensions)

# App Extensions (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Extend your app’s basic functionality to other parts of the system.

## Topics

### Extension Support

- [NSExtensionContext](https://developer.apple.com/documentation/foundation/nsextensioncontext): The host app context from which an app extension is invoked.
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling): The interface an app extension uses to respond to a request from a host app.

### Quick Actions

Quick Actions allow your app extension to appear in the Finder Preview pane, Quick Actions menu, and Touch Bar.

- [Add Functionality to Finder with Action Extensions](add-functionality-to-finder-with-action-extensions.md): Implement Action Extensions to provide quick access to commonly used features of your app.
- [NSExtensionServiceAllowsFinderPreviewItem](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionserviceallowsfinderpreviewitem): A Boolean value indicating whether the extension appears in the Finder Preview pane and Quick Actions menu.
- [NSExtensionServiceFinderPreviewLabel](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicefinderpreviewlabel): A name for display when the extension appears in the Finder Preview pane and Quick Actions menu.
- [NSExtensionServiceFinderPreviewIconName](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicefinderpreviewiconname): The name of an icon for display when the extension appears in the Finder Preview pane and Quick Actions menu.
- [NSExtensionServiceAllowsTouchBarItem](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionserviceallowstouchbaritem): A Boolean value indicating whether the extension appears as a Quick Action in the Touch Bar.
- [NSExtensionServiceTouchBarLabel](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicetouchbarlabel): A name for display when the extension appears as a Quick Action in the Touch Bar.
- [NSExtensionServiceTouchBarIconName](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicetouchbariconname): The name of an icon for display when the extension appears as a Quick Action in the Touch Bar
- [NSExtensionServiceTouchBarBezelColorName](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicetouchbarbezelcolorname): The color to use for the bezel around the extension when it appears as a Quick Action in the Touch Bar.

### Mail Extensions

- [Build Mail App Extensions](../mailkit/build-mail-app-extensions.md): Create app extensions that block content, perform message and composing actions, and help message security.

### UTI Subtypes for Data Detector Types

- [NSTypeIdentifierAddressText](nstypeidentifieraddresstext.md)
- [NSTypeIdentifierDateText](nstypeidentifierdatetext.md)
- [NSTypeIdentifierPhoneNumberText](nstypeidentifierphonenumbertext.md)
- [NSTypeIdentifierTransitInformationText](nstypeidentifiertransitinformationtext.md)

## See Also

### App Structure

- [App and Environment](app-and-environment.md): Learn about the objects that you use to interact with the system.
- [Documents, Data, and Pasteboard](documents-data-and-pasteboard.md): Organize your app’s data and preferences, and share that data on the pasteboard or in iCloud.
- [Cocoa Bindings](cocoa-bindings.md): Automatically synchronize your data model with your app’s interface using Cocoa Bindings.
- [Resource Management](resource-management.md): Manage the storyboards and nib files containing your app’s user interface, and learn how to load data that is stored in resource files.

# App Extensions (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Extend your app’s basic functionality to other parts of the system.

## Topics

### Extension Support

- [NSExtensionContext](https://developer.apple.com/documentation/foundation/nsextensioncontext): The host app context from which an app extension is invoked.
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling): The interface an app extension uses to respond to a request from a host app.

### Quick Actions

Quick Actions allow your app extension to appear in the Finder Preview pane, Quick Actions menu, and Touch Bar.

- [NSExtensionServiceAllowsFinderPreviewItem](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionserviceallowsfinderpreviewitem): A Boolean value indicating whether the extension appears in the Finder Preview pane and Quick Actions menu.
- [NSExtensionServiceFinderPreviewLabel](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicefinderpreviewlabel): A name for display when the extension appears in the Finder Preview pane and Quick Actions menu.
- [NSExtensionServiceFinderPreviewIconName](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicefinderpreviewiconname): The name of an icon for display when the extension appears in the Finder Preview pane and Quick Actions menu.
- [NSExtensionServiceAllowsTouchBarItem](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionserviceallowstouchbaritem): A Boolean value indicating whether the extension appears as a Quick Action in the Touch Bar.
- [NSExtensionServiceTouchBarLabel](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicetouchbarlabel): A name for display when the extension appears as a Quick Action in the Touch Bar.
- [NSExtensionServiceTouchBarIconName](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicetouchbariconname): The name of an icon for display when the extension appears as a Quick Action in the Touch Bar
- [NSExtensionServiceTouchBarBezelColorName](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionservicetouchbarbezelcolorname): The color to use for the bezel around the extension when it appears as a Quick Action in the Touch Bar.

### Mail Extensions

- [Build Mail App Extensions](../mailkit/build-mail-app-extensions.md): Create app extensions that block content, perform message and composing actions, and help message security.

### UTI Subtypes for Data Detector Types

- [NSTypeIdentifierAddressText](nstypeidentifieraddresstext.md)
- [NSTypeIdentifierDateText](nstypeidentifierdatetext.md)
- [NSTypeIdentifierPhoneNumberText](nstypeidentifierphonenumbertext.md)
- [NSTypeIdentifierTransitInformationText](nstypeidentifiertransitinformationtext.md)

## See Also

### App Structure

- [App and Environment](app-and-environment.md): Learn about the objects that you use to interact with the system.
- [Documents, Data, and Pasteboard](documents-data-and-pasteboard.md): Organize your app’s data and preferences, and share that data on the pasteboard or in iCloud.
- [Cocoa Bindings](cocoa-bindings.md): Automatically synchronize your data model with your app’s interface using Cocoa Bindings.
- [Resource Management](resource-management.md): Manage the storyboards and nib files containing your app’s user interface, and learn how to load data that is stored in resource files.
