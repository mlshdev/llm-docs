> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/axuielement_h](https://developer.apple.com/documentation/applicationservices/axuielement_h)

# AXUIElement.h (Swift)

**Framework:** Application Services  
**Kind:** API Collection

<a id="overview"></a>

## Overview

See the Overview section above for header-level documentation.

<a id="1678823"></a>

### Overview

Assistive applications use the functions defined in this header file to communicate with and control accessible applications running in macOS.

Each accessible user interface element in an application is represented by an AXUIElementRef, which is a CFTypeRef. AXUIElementRefs (like all CFTypeRefs) can be used with all the Core Foundation polymorphic functions, such as [CFRetain](https://developer.apple.com/documentation/corefoundation/cfretain), [CFRelease](https://developer.apple.com/documentation/corefoundation/cfrelease), and [CFEqual(\_:\_:)](https://developer.apple.com/documentation/corefoundation/cfequal%28_:_:%29).

All functions defined in this header file return `kAXErrorSuccess` on success. If there is some sort of system memory failure, such as the failure to allocate an object, all functions can return `kAXErrorFailure`. In the unlikely event that some process does not fully support the accessibility API, a function can return `kAXErrorNotImplemented`.

In addition, some functions can return the following error codes:

- **`kAXErrorInvalidUIElement`**: The passed-in AXUIElementRef is invalid. All functions that include an AXUIElementRef parameter can return this error code.
- **`kAXErrorIllegalArgument`**: At least one of the arguments is illegal (for example, NIL passed in for a pointer).
- **`kAXErrorCannotComplete`**: There is a problem with messaging (such as when messaging to the server fails or when the accessible application is unresponsive or waiting for user input). All functions that perform messaging can return this error code.
- **`kAXErrorAPIDisabled`**: The accessibility API is disabled. All functions that perform messaging can return this error code.

For more information on the definition and use of accessibility objects and in macOS accessibility support in general, see [Accessibility Programming Guide for OS X](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/index.html#//apple_ref/doc/uid/TP40001078).

<a id="1777679"></a>

#### Included Headers

- \<AvailabilityMacros.h\>
- \<CoreFoundation/CoreFoundation.h\>
- \<ApplicationServices/ApplicationServices.h\>

## Topics

### Notification API

- [AXObserverAddNotification(\_:\_:\_:\_:)](1462089-axobserveraddnotification.md): Registers the specified observer to receive notifications from the specified accessibility object.
- [AXObserverCreate(\_:\_:\_:)](1460133-axobservercreate.md): Creates a new observer that can receive notifications from the specified application.
- [AXObserverCreateWithInfoCallback(\_:\_:\_:)](1460610-axobservercreatewithinfocallback.md): Creates a new observer that can receive notifications with an information dictionary from the specified application.
- [AXObserverGetRunLoopSource(\_:)](1459139-axobservergetrunloopsource.md): Returns the observer's run loop source.
- [AXObserverGetTypeID()](1461244-axobservergettypeid.md): Returns the unique type identifier for the AXObserverRef type.
- [AXObserverRemoveNotification(\_:\_:\_:)](1462066-axobserverremovenotification.md): Removes the specified notification from the list of notifications the observer wants to receive from the accessibility object.

### Miscellaneous

- [AXIsProcessTrusted()](1460720-axisprocesstrusted.md): Returns whether the current process is a trusted accessibility client.
- [AXIsProcessTrustedWithOptions(\_:)](1459186-axisprocesstrustedwithoptions.md): Returns whether the current process is a trusted accessibility client.
- [AXUIElementCopyActionDescription(\_:\_:\_:)](1462075-axuielementcopyactiondescription.md): Returns a localized description of the specified accessibility object's action.
- [AXUIElementCopyActionNames(\_:\_:)](1462053-axuielementcopyactionnames.md): Returns a list of all the actions the specified accessibility object can perform.
- [AXUIElementCopyAttributeNames(\_:\_:)](1459475-axuielementcopyattributenames.md): Returns a list of all the attributes supported by the specified accessibility object.
- [AXUIElementCopyAttributeValue(\_:\_:\_:)](1462085-axuielementcopyattributevalue.md): Returns the value of an accessibility object's attribute.
- [AXUIElementCopyAttributeValues(\_:\_:\_:\_:\_:)](1462060-axuielementcopyattributevalues.md): Returns an array of attribute values for the accessibility object's attribute, starting at the specified index.
- [AXUIElementCopyElementAtPosition(\_:\_:\_:\_:)](1462077-axuielementcopyelementatposition.md): Returns the accessibility object at the specified position in top-left relative screen coordinates.
- [AXUIElementCopyMultipleAttributeValues(\_:\_:\_:\_:)](1462051-axuielementcopymultipleattribute.md): Returns the values of multiple attributes in the accessibility object.
- [AXUIElementCopyParameterizedAttributeNames(\_:\_:)](1458783-axuielementcopyparameterizedattr.md): Returns a list of all the parameterized attributes supported by the specified accessibility object.
- [AXUIElementCopyParameterizedAttributeValue(\_:\_:\_:\_:)](1461203-axuielementcopyparameterizedattr.md): Returns the value of an accessibility object's parameterized attribute.
- [AXUIElementCreateApplication(\_:)](1459374-axuielementcreateapplication.md): Creates and returns the top-level accessibility object for the application with the specified process ID.
- [AXUIElementCreateSystemWide()](1462095-axuielementcreatesystemwide.md): Returns an accessibility object that provides access to system attributes.
- [AXUIElementGetAttributeValueCount(\_:\_:\_:)](1459066-axuielementgetattributevaluecoun.md): Returns the count of the array of an accessibility object's attribute value.
- [AXUIElementGetPid(\_:\_:)](1460337-axuielementgetpid.md): Returns the process ID associated with the specified accessibility object.
- [AXUIElementGetTypeID()](1460085-axuielementgettypeid.md): Returns the unique type identifier for the AXUIElementRef type.
- [AXUIElementIsAttributeSettable(\_:\_:\_:)](1459972-axuielementisattributesettable.md): Returns whether the specified accessibility object's attribute can be modified.
- [AXUIElementPerformAction(\_:\_:)](1462091-axuielementperformaction.md): Requests that the specified accessibility object perform the specified action.
- [AXUIElementSetAttributeValue(\_:\_:\_:)](1460434-axuielementsetattributevalue.md): Sets the accessibility object's attribute to the specified value.
- [AXUIElementSetMessagingTimeout(\_:\_:)](1459345-axuielementsetmessagingtimeout.md): Sets the timeout value used in the accessibility API.

### Callbacks

- [AXObserverCallback](axobservercallback.md)
- [AXObserverCallbackWithInfo](axobservercallbackwithinfo.md)

### Data Types

- [AXCopyMultipleAttributeOptions](axcopymultipleattributeoptions.md)
- [AXObserver](axobserver.md)
- [AXUIElement](axuielement.md): A structure used to refer to an accessibility object.

# AXUIElement.h (Objective-C)

**Framework:** Application Services  
**Kind:** API Collection

<a id="overview"></a>

## Overview

See the Overview section above for header-level documentation.

<a id="1678823"></a>

### Overview

Assistive applications use the functions defined in this header file to communicate with and control accessible applications running in macOS.

Each accessible user interface element in an application is represented by an AXUIElementRef, which is a CFTypeRef. AXUIElementRefs (like all CFTypeRefs) can be used with all the Core Foundation polymorphic functions, such as [CFRetain](https://developer.apple.com/documentation/corefoundation/cfretain), [CFRelease](https://developer.apple.com/documentation/corefoundation/cfrelease), and [CFEqual](https://developer.apple.com/documentation/corefoundation/cfequal%28_:_:%29).

All functions defined in this header file return `kAXErrorSuccess` on success. If there is some sort of system memory failure, such as the failure to allocate an object, all functions can return `kAXErrorFailure`. In the unlikely event that some process does not fully support the accessibility API, a function can return `kAXErrorNotImplemented`.

In addition, some functions can return the following error codes:

- **`kAXErrorInvalidUIElement`**: The passed-in AXUIElementRef is invalid. All functions that include an AXUIElementRef parameter can return this error code.
- **`kAXErrorIllegalArgument`**: At least one of the arguments is illegal (for example, NIL passed in for a pointer).
- **`kAXErrorCannotComplete`**: There is a problem with messaging (such as when messaging to the server fails or when the accessible application is unresponsive or waiting for user input). All functions that perform messaging can return this error code.
- **`kAXErrorAPIDisabled`**: The accessibility API is disabled. All functions that perform messaging can return this error code.

For more information on the definition and use of accessibility objects and in macOS accessibility support in general, see [Accessibility Programming Guide for OS X](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/index.html#//apple_ref/doc/uid/TP40001078).

<a id="1777679"></a>

#### Included Headers

- \<AvailabilityMacros.h\>
- \<CoreFoundation/CoreFoundation.h\>
- \<ApplicationServices/ApplicationServices.h\>

## Topics

### Notification API

- [AXObserverAddNotification](1462089-axobserveraddnotification.md): Registers the specified observer to receive notifications from the specified accessibility object.
- [AXObserverCreate](1460133-axobservercreate.md): Creates a new observer that can receive notifications from the specified application.
- [AXObserverCreateWithInfoCallback](1460610-axobservercreatewithinfocallback.md): Creates a new observer that can receive notifications with an information dictionary from the specified application.
- [AXObserverGetRunLoopSource](1459139-axobservergetrunloopsource.md): Returns the observer's run loop source.
- [AXObserverGetTypeID](1461244-axobservergettypeid.md): Returns the unique type identifier for the AXObserverRef type.
- [AXObserverRemoveNotification](1462066-axobserverremovenotification.md): Removes the specified notification from the list of notifications the observer wants to receive from the accessibility object.

### Miscellaneous

- [AXAPIEnabled](1462072-axapienabled.md): Deprecated. Returns whether the accessibility API is enabled.
- [AXIsProcessTrusted](1460720-axisprocesstrusted.md): Returns whether the current process is a trusted accessibility client.
- [AXIsProcessTrustedWithOptions](1459186-axisprocesstrustedwithoptions.md): Returns whether the current process is a trusted accessibility client.
- [AXMakeProcessTrusted](1462083-axmakeprocesstrusted.md): Deprecated. Attempts to make the process represented by the specified path a trusted accessibility client.
- [AXUIElementCopyActionDescription](1462075-axuielementcopyactiondescription.md): Returns a localized description of the specified accessibility object's action.
- [AXUIElementCopyActionNames](1462053-axuielementcopyactionnames.md): Returns a list of all the actions the specified accessibility object can perform.
- [AXUIElementCopyAttributeNames](1459475-axuielementcopyattributenames.md): Returns a list of all the attributes supported by the specified accessibility object.
- [AXUIElementCopyAttributeValue](1462085-axuielementcopyattributevalue.md): Returns the value of an accessibility object's attribute.
- [AXUIElementCopyAttributeValues](1462060-axuielementcopyattributevalues.md): Returns an array of attribute values for the accessibility object's attribute, starting at the specified index.
- [AXUIElementCopyElementAtPosition](1462077-axuielementcopyelementatposition.md): Returns the accessibility object at the specified position in top-left relative screen coordinates.
- [AXUIElementCopyMultipleAttributeValues](1462051-axuielementcopymultipleattribute.md): Returns the values of multiple attributes in the accessibility object.
- [AXUIElementCopyParameterizedAttributeNames](1458783-axuielementcopyparameterizedattr.md): Returns a list of all the parameterized attributes supported by the specified accessibility object.
- [AXUIElementCopyParameterizedAttributeValue](1461203-axuielementcopyparameterizedattr.md): Returns the value of an accessibility object's parameterized attribute.
- [AXUIElementCreateApplication](1459374-axuielementcreateapplication.md): Creates and returns the top-level accessibility object for the application with the specified process ID.
- [AXUIElementCreateSystemWide](1462095-axuielementcreatesystemwide.md): Returns an accessibility object that provides access to system attributes.
- [AXUIElementGetAttributeValueCount](1459066-axuielementgetattributevaluecoun.md): Returns the count of the array of an accessibility object's attribute value.
- [AXUIElementGetPid](1460337-axuielementgetpid.md): Returns the process ID associated with the specified accessibility object.
- [AXUIElementGetTypeID](1460085-axuielementgettypeid.md): Returns the unique type identifier for the AXUIElementRef type.
- [AXUIElementIsAttributeSettable](1459972-axuielementisattributesettable.md): Returns whether the specified accessibility object's attribute can be modified.
- [AXUIElementPerformAction](1462091-axuielementperformaction.md): Requests that the specified accessibility object perform the specified action.
- [AXUIElementPostKeyboardEvent](1462057-axuielementpostkeyboardevent.md): Deprecated. Posts keys to the specified application.
- [AXUIElementSetAttributeValue](1460434-axuielementsetattributevalue.md): Sets the accessibility object's attribute to the specified value.
- [AXUIElementSetMessagingTimeout](1459345-axuielementsetmessagingtimeout.md): Sets the timeout value used in the accessibility API.

### Callbacks

- [AXObserverCallback](axobservercallback.md)
- [AXObserverCallbackWithInfo](axobservercallbackwithinfo.md)

### Data Types

- [AXCopyMultipleAttributeOptions](axcopymultipleattributeoptions.md)
- [AXObserverRef](axobserverref.md)
- [AXUIElementRef](axuielementref.md): A structure used to refer to an accessibility object.

### Constants

- [kAXCopyMultipleAttributeOptionStopOnError](axuielement_h/kaxcopymultipleattributeoptionstoponerror.md)
