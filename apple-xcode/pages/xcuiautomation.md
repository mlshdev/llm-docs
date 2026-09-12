> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation](https://developer.apple.com/documentation/xcuiautomation)

# XCUIAutomation (Swift)

**Framework:** XCUIAutomation  
**Kind:** Framework  
**Availability:** Xcode 16.3+

Replicate sequences of interactions and make sure that your app’s user interface behaves as intended.

<a id="overview"></a>

## Overview

UI testing lets you verify that when you change parts of your app’s data model, your app’s view controllers, views, and controls respond appropriately. You can also create test cases to manipulate your app’s views and controls, as if a person is interacting with your interface. Use the XCUIAutomation framework to control your app’s user interface and inspect its state. Use [XCTest](xctest.md) to write tests that control your app using XCUIAutomation, and check if your app’s state matches your expectations.

> **Note**

>  UI testing isn’t available to apps you build using the visionOS SDK. You can still use it to test compatible iPad and iPhone apps that you build using the iOS SDK but run in visionOS.

## Topics

### Essentials

- [Recording UI automation for testing](xcuiautomation/recording-ui-automation-for-testing.md): Capture and replay interaction sequences to verify your app’s behavior.

### UI element queries

- [XCUIElementQuery](xcuiautomation/xcuielementquery.md): An object that defines the search criteria a test uses to identify UI elements.
- [XCUIElementTypeQueryProvider](xcuiautomation/xcuielementtypequeryprovider.md): A type that provides ready-made queries for locating descendant UI elements.

### UI elements

- [XCUIElement](xcuiautomation/xcuielement.md): A UI element in an application.
- [XCUIElementAttributes](xcuiautomation/xcuielementattributes.md): Attributes exposed by UI elements.
- [XCUIElementSnapshot](xcuiautomation/xcuielementsnapshot.md): A set of attributes to express a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUIElementSnapshotProviding](xcuiautomation/xcuielementsnapshotproviding.md): A method to capture a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUICoordinate](xcuiautomation/xcuicoordinate.md): A location on screen relative to a UI element.

### Application lifecycle

- [XCUIApplication](xcuiautomation/xcuiapplication.md): A proxy that can launch, monitor, and terminate a test application.

### Screenshots

- [XCUIScreen](xcuiautomation/xcuiscreen.md): A physical screen attached to a device.
- [XCUIScreenshot](xcuiautomation/xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
- [XCUIScreenshotProviding](xcuiautomation/xcuiscreenshotproviding.md): A type that can provide a screenshot of its current UI state.

### Device simulation

- [XCUIDevice](xcuiautomation/xcuidevice.md): A proxy that can simulate physical buttons, device orientation, and Siri interaction for an iOS, watchOS, or tvOS device.
- [XCUISystem](xcuiautomation/xcuisystem.md): A proxy that provides an interface to OS-specific properties and actions.
- [XCUISiriService](xcuiautomation/xcuisiriservice.md): A proxy that simulates a device’s Siri interface.

### Remote control simulation

- [XCUIRemote](xcuiautomation/xcuiremote.md): A class that simulates interaction with a physical remote control.

### UI testing availability

- [XCUI_UI_TESTING_AVAILABLE](xcuiautomation/xcui_ui_testing_available.md): Indicates whether the current environment supports UI testing.

### Classes

- [XCUIVoiceOverService](xcuiautomation/xcuivoiceoverservice.md)

### Variables

- [XCUIVoiceOverServiceErrorDomain](xcuiautomation/xcuivoiceoverserviceerrordomain.md): Error domain for XCUIVoiceOverService errors.

# XCUIAutomation (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Framework  
**Availability:** Xcode 16.3+

Replicate sequences of interactions and make sure that your app’s user interface behaves as intended.

<a id="overview"></a>

## Overview

UI testing lets you verify that when you change parts of your app’s data model, your app’s view controllers, views, and controls respond appropriately. You can also create test cases to manipulate your app’s views and controls, as if a person is interacting with your interface. Use the XCUIAutomation framework to control your app’s user interface and inspect its state. Use [XCTest](xctest.md) to write tests that control your app using XCUIAutomation, and check if your app’s state matches your expectations.

> **Note**

>  UI testing isn’t available to apps you build using the visionOS SDK. You can still use it to test compatible iPad and iPhone apps that you build using the iOS SDK but run in visionOS.

## Topics

### Essentials

- [Recording UI automation for testing](xcuiautomation/recording-ui-automation-for-testing.md): Capture and replay interaction sequences to verify your app’s behavior.

### UI element queries

- [XCUIElementQuery](xcuiautomation/xcuielementquery.md): An object that defines the search criteria a test uses to identify UI elements.
- [XCUIElementTypeQueryProvider](xcuiautomation/xcuielementtypequeryprovider.md): A type that provides ready-made queries for locating descendant UI elements.

### UI elements

- [XCUIElement](xcuiautomation/xcuielement.md): A UI element in an application.
- [XCUIElementAttributes](xcuiautomation/xcuielementattributes.md): Attributes exposed by UI elements.
- [XCUIElementSnapshot](xcuiautomation/xcuielementsnapshot.md): A set of attributes to express a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUIElementSnapshotProviding](xcuiautomation/xcuielementsnapshotproviding.md): A method to capture a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUICoordinate](xcuiautomation/xcuicoordinate.md): A location on screen relative to a UI element.

### Application lifecycle

- [XCUIApplication](xcuiautomation/xcuiapplication.md): A proxy that can launch, monitor, and terminate a test application.

### Screenshots

- [XCUIScreen](xcuiautomation/xcuiscreen.md): A physical screen attached to a device.
- [XCUIScreenshot](xcuiautomation/xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
- [XCUIScreenshotProviding](xcuiautomation/xcuiscreenshotproviding.md): A type that can provide a screenshot of its current UI state.

### Device simulation

- [XCUIDevice](xcuiautomation/xcuidevice.md): A proxy that can simulate physical buttons, device orientation, and Siri interaction for an iOS, watchOS, or tvOS device.
- [XCUISystem](xcuiautomation/xcuisystem.md): A proxy that provides an interface to OS-specific properties and actions.
- [XCUISiriService](xcuiautomation/xcuisiriservice.md): A proxy that simulates a device’s Siri interface.

### Remote control simulation

- [XCUIRemote](xcuiautomation/xcuiremote.md): A class that simulates interaction with a physical remote control.

### UI testing availability

- [XCUI_UI_TESTING_AVAILABLE](xcuiautomation/xcui_ui_testing_available.md): Indicates whether the current environment supports UI testing.

### Classes

- [XCUIVoiceOverService](xcuiautomation/xcuivoiceoverservice.md)
- [XCUIVoiceOverOutput](xcuiautomation/xcuivoiceoverservice/output.md)

### Variables

- [XCUIVoiceOverServiceErrorDomain](xcuiautomation/xcuivoiceoverserviceerrordomain.md): Error domain for XCUIVoiceOverService errors.

### Macros

- [XCUI_DEPRECATED_WITH_DIRECT_REPLACEMENT](xcuiautomation/xcui_deprecated_with_direct_replacement.md)
- [XCUI_DEPRECATED_WITH_REPLACEMENT](xcuiautomation/xcui_deprecated_with_replacement.md)
- [XCUI_DEPRECATED_WITH_SWIFT_REPLACEMENT](xcuiautomation/xcui_deprecated_with_swift_replacement.md)
- [XCUI_EXPORT](xcuiautomation/xcui_export.md)
- [XCUI_NOESCAPE](xcuiautomation/xcui_noescape.md)
- [XCUI_PROTECTED_RESOURCES_RESET_API_AVAILABLE](xcuiautomation/xcui_protected_resources_reset_api_available.md)
- [XCUI_SIMULATOR_UNAVAILABLE](xcuiautomation/xcui_simulator_unavailable.md)
- [XCUI_SWIFT_MAIN_ACTOR](xcuiautomation/xcui_swift_main_actor.md)
- [XCUI_UNAVAILABLE](xcuiautomation/xcui_unavailable.md)
- [XCUI_WARN_UNUSED](xcuiautomation/xcui_warn_unused.md)

### Enumerations

- [XCUIVoiceOverServiceError](xcuiautomation/xcuivoiceoverservice/error/code.md): Error codes for XCUIVoiceOverService operations.
