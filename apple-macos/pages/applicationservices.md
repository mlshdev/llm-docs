> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices](https://developer.apple.com/documentation/applicationservices)

# Application Services (Swift)

**Kind:** Framework  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Perform common application tasks.

<a id="overview"></a>

## Overview

This collection of documents provides the API reference for the Application Services framework, which includes several services that are essential to Carbon applications. The Application Services framework also includes support for a number of legacy technologies—such as QuickDraw and the Font Manager—that have been superseded with newer technologies like Quartz 2D and ATSUI.

## Topics

### Managers

- [Apple Event Manager](applicationservices/apple_event_manager.md)
- [ColorSync Manager](applicationservices/colorsync_manager.md)
- [Speech Synthesis Manager](applicationservices/speech_synthesis_manager.md)

### Reference

- [Carbon Accessibility](applicationservices/carbon_accessibility.md)
- [Core Printing](applicationservices/core_printing.md)
- [AXActionConstants.h](applicationservices/axactionconstants_h.md): Many UIElements have a set of actions that they can perform. Actions are designed to be simple. Actions roughly correspond to things you could do with a single click of the mouse on the UIElement. Buttons and menu items, for example, have a single action: push or pick, respectively. A scroll bar has several actions: page up, page down, up one line, down one line.
- [AXAttributeConstants.h](applicationservices/axattributeconstants_h.md)
- [AXError.h](applicationservices/axerror_h.md): These error codes can be returned from the accessibility functions defined in AXUIElement.h.
- [AXNotificationConstants.h](applicationservices/axnotificationconstants_h.md)
- [AXRoleConstants.h](applicationservices/axroleconstants_h.md)
- [AXTextAttributedString.h](applicationservices/axtextattributedstring_h.md): This header file contains definitions of constants used with accessibility objects that represent attributed strings. An attributed string is an association of a range of characters and their attributes, such as color and font. If an accessibility object represents an attributed string, the value of its `kAXParameterizedAttributeStringAttribute` attribute is an attributed string object (a `CFAttributedStringRef` or an `NSAttributedString`) that uses the constants defined in this header file to define its attributes.
- [AXUIElement.h](applicationservices/axuielement_h.md)
- [AXValue.h](applicationservices/axvalue_h.md): This header contains functions and data types for working with AXValueType wrappers.
- [AXValueConstants.h](applicationservices/axvalueconstants_h.md)
- [UniversalAccess.h](applicationservices/universalaccess_h.md): This header file contains functions that give applications the ability to control the zoom focus. Using these functions, an application can tell the macOS Universal Access zoom feature what part of its user interface needs focus.
- [ApplicationServices Structures](applicationservices/applicationservices_structures.md)
- [ApplicationServices Enumerations](applicationservices/applicationservices_enumerations.md)
- [ApplicationServices Constants](applicationservices/applicationservices_constants.md)
- [ApplicationServices Functions](applicationservices/applicationservices_functions.md)
- [ApplicationServices Data Types](applicationservices/applicationservices_data_types.md)

### Classes

- [ColorSyncCMM](https://developer.apple.com/documentation/colorsync/colorsynccmm)
- [ColorSyncMutableProfile](https://developer.apple.com/documentation/colorsync/colorsyncmutableprofile)
- [ColorSyncProfile](https://developer.apple.com/documentation/colorsync/colorsyncprofile)
- [ColorSyncTransform](https://developer.apple.com/documentation/colorsync/colorsynctransform)
- [HIMutableShape](applicationservices/himutableshape.md)
- [HIShape](applicationservices/hishape.md)
- [Pasteboard](applicationservices/pasteboard.md)
- [Translation](applicationservices/translation.md)
- [AXTextMarker](applicationservices/axtextmarker.md)
- [AXTextMarkerRange](applicationservices/axtextmarkerrange.md)

### Protocols

- [PDEPanel](applicationservices/pdepanel.md)
- [PDEPlugIn](applicationservices/pdeplugin.md)
- [PDEPlugInCallbackProtocol](applicationservices/pdeplugincallbackprotocol.md)

# Application Services (Objective-C)

**Kind:** Framework  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Perform common application tasks.

<a id="overview"></a>

## Overview

This collection of documents provides the API reference for the Application Services framework, which includes several services that are essential to Carbon applications. The Application Services framework also includes support for a number of legacy technologies—such as QuickDraw and the Font Manager—that have been superseded with newer technologies like Quartz 2D and ATSUI.

## Topics

### Managers

- [Apple Event Manager](applicationservices/apple_event_manager.md)
- [ColorSync Manager](applicationservices/colorsync_manager.md)
- [Speech Synthesis Manager](applicationservices/speech_synthesis_manager.md)

### Reference

- [Carbon Accessibility](applicationservices/carbon_accessibility.md)
- [Core Printing](applicationservices/core_printing.md)
- [AXActionConstants.h](applicationservices/axactionconstants_h.md): Many UIElements have a set of actions that they can perform. Actions are designed to be simple. Actions roughly correspond to things you could do with a single click of the mouse on the UIElement. Buttons and menu items, for example, have a single action: push or pick, respectively. A scroll bar has several actions: page up, page down, up one line, down one line.
- [AXAttributeConstants.h](applicationservices/axattributeconstants_h.md)
- [AXError.h](applicationservices/axerror_h.md): These error codes can be returned from the accessibility functions defined in AXUIElement.h.
- [AXNotificationConstants.h](applicationservices/axnotificationconstants_h.md)
- [AXRoleConstants.h](applicationservices/axroleconstants_h.md)
- [AXTextAttributedString.h](applicationservices/axtextattributedstring_h.md): This header file contains definitions of constants used with accessibility objects that represent attributed strings. An attributed string is an association of a range of characters and their attributes, such as color and font. If an accessibility object represents an attributed string, the value of its `kAXParameterizedAttributeStringAttribute` attribute is an attributed string object (a `CFAttributedStringRef` or an `NSAttributedString`) that uses the constants defined in this header file to define its attributes.
- [AXUIElement.h](applicationservices/axuielement_h.md)
- [AXValue.h](applicationservices/axvalue_h.md): This header contains functions and data types for working with AXValueType wrappers.
- [AXValueConstants.h](applicationservices/axvalueconstants_h.md)
- [UniversalAccess.h](applicationservices/universalaccess_h.md): This header file contains functions that give applications the ability to control the zoom focus. Using these functions, an application can tell the macOS Universal Access zoom feature what part of its user interface needs focus.
- [ApplicationServices Structures](applicationservices/applicationservices_structures.md)
- [ApplicationServices Enumerations](applicationservices/applicationservices_enumerations.md)
- [ApplicationServices Constants](applicationservices/applicationservices_constants.md)
- [ApplicationServices Functions](applicationservices/applicationservices_functions.md)
- [ApplicationServices Data Types](applicationservices/applicationservices_data_types.md)

### Protocols

- [PDEPanel](applicationservices/pdepanel.md)
- [PDEPlugIn](applicationservices/pdeplugin.md)
- [PDEPlugInCallbackProtocol](applicationservices/pdeplugincallbackprotocol.md)
