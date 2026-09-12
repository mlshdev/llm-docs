> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager)

# Apple Event Manager (Swift)

**Framework:** Core Services  
**Kind:** API Collection

<a id="overview"></a>

## Overview

The Apple Event Manager, a part of the Open Scripting Architecture (OSA), provides facilities for applications to send and respond to Apple events and to make their operations and data available to AppleScript scripts. For related API reference, see Open Scripting Architecture Reference.

An Apple event is a type of interprocess message that can specify complex operations and data. Apple events provide a data transport and event dispatching mechanism  that can be used within a single application, between applications on the same computer, and between applications on different computers connected to a network.

Applications typically use Apple events to request services and information from other applications or to provide services and information in response to such requests. All applications that present a graphical interface to the user through the Human Interface Toolbox (Carbon applications) or the Cocoa application framework should be able to respond, if appropriate, to certain events sent by the Mac OS. These include the `open application` (or `launch`), `reopen`, `open documents`, `print documents`, and `quit` events.

Some Apple Event Manager functions are marked as being thread safe—for all other functions, you should call them only on the main thread.

For an overview of technologies that take advantage of the Apple Event Manager, see [AppleScript Overview](https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptX/AppleScriptX.html#//apple_ref/doc/uid/10000156i).

For information on working with Apple events, including events sent by the Mac OS, see Responding to Apple Events in Apple Events Programming Guide. For information about individual four-character codes used in Apple events, see AppleScript Terminology and Apple Event Codes Reference.

The Apple Event Manager is implemented by the AE framework, a subframework of the Core Services framework. You don’t link directly with the AE framework—instead, you typically link with  the Carbon framework, which includes it. Some AppleEvent definitions are only available to clients of the Carbon framework, which includes, for example, `AEInteraction.h` in the HIToolbox framework.

The AE framework does not force a connection to the window server. This allows daemons and startup items that work with Apple events to continue working across log outs.

<a id="1770164"></a>

### Gestalt Constants

You can check for version and feature availabilityinformation by using the Apple Event Manager selectors defined inthe Gestalt Manager. For more information see *Inside macOS: Gestalt Manager Reference*.

## Topics

### Adding Items to Descriptor Lists

- [AEPutArray(\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1442535-aeputarray): Inserts the data for an Apple event array into a descriptor list, replacing any previous descriptors in the list.
- [AEPutDesc(\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1450093-aeputdesc): Adds a descriptor to any descriptor list, possibly replacing an existing descriptor in the list.
- [AEPutPtr(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1445287-aeputptr): Inserts data specified in a buffer into a descriptor list as a descriptor, possibly replacing an existing descriptor in the list.

### Adding Parameters and Attributes to Apple Events and Apple Event Records

- [AEPutAttributeDesc(\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1441790-aeputattributedesc): Adds a descriptor and a keyword to an Apple event as an attribute.
- [AEPutAttributePtr(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1445940-aeputattributeptr): Adds a pointer to data, a descriptor type, and a keyword to an Apple event as an attribute.
- [AEPutParamDesc(\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1447576-aeputparamdesc): Inserts a descriptor and a keyword into an Apple event or Apple event record as an Apple event parameter.
- [AEPutParamPtr(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1449263-aeputparamptr): Inserts data, a descriptor type, and a keyword into an Apple event or Apple event record as an Apple event parameter.

### Coercing Descriptor Types

- [AECoerceDesc(\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1446519-aecoercedesc): Coerces the data in a descriptor to another descriptor type and creates a descriptor containing the newly coerced data.
- [AECoercePtr(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1441846-aecoerceptr): Coerces data to a desired descriptor type and creates a descriptor containing the newly coerced data.

### Counting the Items in Descriptor Lists

- [AECountItems(\_:\_:)](https://developer.apple.com/documentation/coreservices/1449533-aecountitems): Counts the number of descriptors in a descriptor list.

### Creating an Apple Event

- [AECreateAppleEvent(\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1448525-aecreateappleevent): Creates an Apple event with several important attributes but no parameters.

### Creating and Duplicating Descriptors

- [AECreateDesc(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1448535-aecreatedesc): Creates a new descriptor that incorporates the specified data.
- [AECreateDescFromExternalPtr(\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1446239-aecreatedescfromexternalptr): Creates a new descriptor that uses a memory buffer supplied by the caller.
- [AEDuplicateDesc(\_:\_:)](https://developer.apple.com/documentation/coreservices/1442661-aeduplicatedesc): Creates a copy of a descriptor.

### Creating, Calling, and Deleting Universal Procedure Pointers

- [DisposeAECoerceDescUPP(\_:)](https://developer.apple.com/documentation/coreservices/1448721-disposeaecoercedescupp): Disposes of a universal procedure pointer to a function that coerces data stored in a descriptor.
- [DisposeAECoercePtrUPP(\_:)](https://developer.apple.com/documentation/coreservices/1450664-disposeaecoerceptrupp): Disposes of a universal procedure pointer to a function that coerces data stored in a buffer.
- [DisposeAEDisposeExternalUPP(\_:)](https://developer.apple.com/documentation/coreservices/1447284-disposeaedisposeexternalupp): Disposes of a universal procedure pointer to a function that disposes of data supplied to the `AECreateDescFromExternalPtr` function.
- [DisposeAEEventHandlerUPP(\_:)](https://developer.apple.com/documentation/coreservices/1442066-disposeaeeventhandlerupp): Disposes of a universal procedure pointer to an event handler function.
- [DisposeOSLAccessorUPP(\_:)](https://developer.apple.com/documentation/coreservices/1444684-disposeoslaccessorupp): Disposes of a universal procedure pointer to an object accessor function.
- [DisposeOSLAdjustMarksUPP(\_:)](https://developer.apple.com/documentation/coreservices/1443940-disposeosladjustmarksupp): Disposes of a universal procedure pointer to an object callback adjust marks function.
- [DisposeOSLCompareUPP(\_:)](https://developer.apple.com/documentation/coreservices/1448398-disposeoslcompareupp): Disposes of a universal procedure pointer to an object callback comparison function.
- [DisposeOSLCountUPP(\_:)](https://developer.apple.com/documentation/coreservices/1443984-disposeoslcountupp): Disposes of a universal procedure pointer to an object callback count function.
- [DisposeOSLDisposeTokenUPP(\_:)](https://developer.apple.com/documentation/coreservices/1442670-disposeosldisposetokenupp): Disposes of a universal procedure pointer to an object callback dispose token function.
- [DisposeOSLGetErrDescUPP(\_:)](https://developer.apple.com/documentation/coreservices/1446061-disposeoslgeterrdescupp): Disposes of a universal procedure pointer to an object callback get error descriptor function.
- [DisposeOSLGetMarkTokenUPP(\_:)](https://developer.apple.com/documentation/coreservices/1442377-disposeoslgetmarktokenupp): Disposes of a universal procedure pointer to an object callback get mark function.
- [DisposeOSLMarkUPP(\_:)](https://developer.apple.com/documentation/coreservices/1449253-disposeoslmarkupp): Disposes of a universal procedure pointer to an object callback mark function.
- [InvokeAECoerceDescUPP(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1445450-invokeaecoercedescupp): Calls a universal procedure pointer to a function that coerces data stored in a descriptor.
- [InvokeAECoercePtrUPP(\_:\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1447079-invokeaecoerceptrupp): Calls a universal procedure pointer to a function that coerces data stored in a buffer.
- [InvokeAEDisposeExternalUPP(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1441717-invokeaedisposeexternalupp): Calls a dispose external universal procedure pointer.
- [InvokeAEEventHandlerUPP(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1446585-invokeaeeventhandlerupp): Calls an event handler universal procedure pointer.
- [InvokeOSLAccessorUPP(\_:\_:\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1448978-invokeoslaccessorupp): Calls an object accessor universal procedure pointer.
- [InvokeOSLAdjustMarksUPP(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1448506-invokeosladjustmarksupp): Calls an object callback adjust marks universal procedure pointer.
- [InvokeOSLCompareUPP(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1443110-invokeoslcompareupp): Calls an object callback comparison universal procedure pointer.
- [InvokeOSLCountUPP(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1448030-invokeoslcountupp): Calls an object callback count universal procedure pointer.
- [InvokeOSLDisposeTokenUPP(\_:\_:)](https://developer.apple.com/documentation/coreservices/1443963-invokeosldisposetokenupp): Calls an object callback dispose token universal procedure pointer.
- [InvokeOSLGetErrDescUPP(\_:\_:)](https://developer.apple.com/documentation/coreservices/1448420-invokeoslgeterrdescupp): Calls an object callback get error descriptor universal procedure pointer.
- [InvokeOSLGetMarkTokenUPP(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1441894-invokeoslgetmarktokenupp): Calls an object callback get mark universal procedure pointer.
- [InvokeOSLMarkUPP(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1447444-invokeoslmarkupp): Calls an object callback mark universal procedure pointer.
- [NewAECoerceDescUPP(\_:)](https://developer.apple.com/documentation/coreservices/1445885-newaecoercedescupp): Creates a new universal procedure pointer to a function that coerces data stored in a descriptor.
- [NewAECoercePtrUPP(\_:)](https://developer.apple.com/documentation/coreservices/1449962-newaecoerceptrupp): Creates a new universal procedure pointer to a function that coerces data stored in a buffer.
- [NewAEDisposeExternalUPP(\_:)](https://developer.apple.com/documentation/coreservices/1447774-newaedisposeexternalupp): Creates a new universal procedure pointer to a function that disposes of data stored in a buffer.
- [NewAEEventHandlerUPP(\_:)](https://developer.apple.com/documentation/coreservices/1446862-newaeeventhandlerupp): Creates a new universal procedure pointer to an event handler function.
- [NewOSLAccessorUPP(\_:)](https://developer.apple.com/documentation/coreservices/1449584-newoslaccessorupp): Creates a new universal procedure pointer to an object accessor function.
- [NewOSLAdjustMarksUPP(\_:)](https://developer.apple.com/documentation/coreservices/1443347-newosladjustmarksupp): Creates a new universal procedure pointer to an object callback adjust marks function.
- [NewOSLCompareUPP(\_:)](https://developer.apple.com/documentation/coreservices/1444603-newoslcompareupp): Creates a new universal procedure pointer to an object callback comparison function.
- [NewOSLCountUPP(\_:)](https://developer.apple.com/documentation/coreservices/1448156-newoslcountupp): Creates a new universal procedure pointer to an object callback count function.
- [NewOSLDisposeTokenUPP(\_:)](https://developer.apple.com/documentation/coreservices/1450027-newosldisposetokenupp): Creates a new universal procedure pointer to an object callback dispose token function.
- [NewOSLGetErrDescUPP(\_:)](https://developer.apple.com/documentation/coreservices/1447934-newoslgeterrdescupp): Creates a new universal procedure pointer to an object callback get error descriptor function.
- [NewOSLGetMarkTokenUPP(\_:)](https://developer.apple.com/documentation/coreservices/1445166-newoslgetmarktokenupp): Creates a new universal procedure pointer to an object callback get mark function.
- [NewOSLMarkUPP(\_:)](https://developer.apple.com/documentation/coreservices/1446942-newoslmarkupp): Creates a new universal procedure pointer to an object callback mark function.

### Creating Descriptor Lists and Apple Event Records

- [AECreateList(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1448643-aecreatelist): Creates an empty descriptor list or Apple event record.

### Creating Object Specifiers

- [CreateCompDescriptor(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1449155-createcompdescriptor): Creates a comparison descriptor that specifies how to compare one or more Apple event objects with either another Apple event object or a descriptor.
- [CreateLogicalDescriptor(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1445212-createlogicaldescriptor): Creates a logical descriptor that specifies a logical operator and one or more logical terms for the Apple Event Manager to evaluate.
- [CreateObjSpecifier(\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1450244-createobjspecifier): Assembles an object specifier that identifies one or more Apple event objects, from other descriptors.
- [CreateOffsetDescriptor(\_:\_:)](https://developer.apple.com/documentation/coreservices/1444957-createoffsetdescriptor): Creates an offset descriptor that specifies the position of an element in relation to the beginning or end of its container.
- [CreateRangeDescriptor(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1444087-createrangedescriptor): Creates a range descriptor that specifies a series of consecutive elements in the same container.

### Deallocating Memory for Descriptors

- [AEDisposeDesc(\_:)](https://developer.apple.com/documentation/coreservices/1444208-aedisposedesc): Deallocates the memory used by a descriptor.

### Deallocating Memory for Tokens

- [AEDisposeToken(\_:)](https://developer.apple.com/documentation/coreservices/1446783-aedisposetoken): Deallocates the memory used by a token.

### Deleting Descriptors

- [AEDeleteItem(\_:\_:)](https://developer.apple.com/documentation/coreservices/1447164-aedeleteitem): Deletes a descriptor from a descriptor list, causing all subsequent descriptors to move up one place.
- [AEDeleteParam(\_:\_:)](https://developer.apple.com/documentation/coreservices/1444338-aedeleteparam): Deletes a keyword-specified parameter from an Apple event record.

### Getting, Calling, and Removing Object Accessor Functions

- [AECallObjectAccessor(\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1447059-aecallobjectaccessor): Invokes the appropriate object accessor function for a specific desired type and container type.
- [AEGetObjectAccessor(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1449054-aegetobjectaccessor): Gets an object accessor function from an object accessor dispatch table.
- [AEInstallObjectAccessor(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1447905-aeinstallobjectaccessor): Adds or replaces an entry for an object accessor function to an object accessor dispatch table.
- [AERemoveObjectAccessor(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1442552-aeremoveobjectaccessor): Removes an object accessor function from an object accessor dispatch table.

### Getting Data or Descriptors From Apple Events and Apple Event Records

- [AEGetAttributeDesc(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1450314-aegetattributedesc): Gets a copy of the descriptor for a specified Apple event attribute from an Apple event; typically used when your application needs to pass the descriptor on to another function.
- [AEGetAttributePtr(\_:\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1445109-aegetattributeptr): Gets a copy of the data for a specified Apple event attribute from an Apple event; typically used when your application needs to work with the data directly.
- [AEGetParamDesc(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1449233-aegetparamdesc): Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event or an Apple event record.
- [AEGetParamPtr(\_:\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1444069-aegetparamptr): Gets a copy of the data for a specified Apple event parameter from an Apple event or an Apple event record.

### Getting Information About the Apple Event Manager

- [AEManagerInfo(\_:\_:)](https://developer.apple.com/documentation/coreservices/1449373-aemanagerinfo): Provides information about the version of the Apple Event Manager currently available or the number of processes that are currently recording Apple events.

### Getting Items From Descriptor Lists

- [AEGetArray(\_:\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1445720-aegetarray): Extracts data from an Apple event array created with the `AEPutArray` function and stores it as a standard array of fixed size items in the specified buffer.
- [AEGetNthDesc(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1448326-aegetnthdesc): Copies a descriptor from a specified position in a descriptor list into a specified descriptor; typically used when your application needs to pass the extracted data to another function as a descriptor.
- [AEGetNthPtr(\_:\_:\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1447539-aegetnthptr): Gets a copy of the data from a descriptor at a specified position in a descriptor list; typically used when your application needs to work with the extracted data directly.

### Getting the Sizes and Descriptor Types of Descriptors

- [AESizeOfAttribute(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1445764-aesizeofattribute): Gets the size and descriptor type of an Apple event attribute from a descriptor of type `AppleEvent`.
- [AESizeOfNthItem(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1447307-aesizeofnthitem): Gets the data size and descriptor type of the descriptor at a specified position in a descriptor list.
- [AESizeOfParam(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1449998-aesizeofparam): Gets the size and descriptor type of an Apple event parameter from a descriptor of type `AERecord` or `AppleEvent`.

### Initializing the Object Support Library

- [AEObjectInit()](https://developer.apple.com/documentation/coreservices/1447372-aeobjectinit): Initializes the Object Support Library.
- [AESetObjectCallbacks(\_:\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1447756-aesetobjectcallbacks): Specifies the object callback functions for your application.

### Locating Processes on Remote Computers

Available starting in macOS version v10.3, these functions allow you to locate processes on remote computers (a task supported by the PPCToolbox in Mac OS 9).

- [AECreateRemoteProcessResolver(\_:\_:)](https://developer.apple.com/documentation/coreservices/1445692-aecreateremoteprocessresolver): Creates an object for resolving a list of remote processes.
- [AEDisposeRemoteProcessResolver(\_:)](https://developer.apple.com/documentation/coreservices/1442572-aedisposeremoteprocessresolver): Disposes of an `AERemoteProcessResolverRef`.
- [AERemoteProcessResolverGetProcesses(\_:\_:)](https://developer.apple.com/documentation/coreservices/1444456-aeremoteprocessresolvergetproces): Returns an array of objects containing information about processes running on a remote machine.
- [AERemoteProcessResolverScheduleWithRunLoop(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1447259-aeremoteprocessresolverschedulew): Schedules a resolver for execution on a given run loop in a given mode.

### Managing Apple Event Dispatch Tables

- [AEGetEventHandler(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1445631-aegeteventhandler): Gets an event handler from an Apple event dispatch table.
- [AEInstallEventHandler(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1448596-aeinstalleventhandler): Adds an entry for an event handler to an Apple event dispatch table.
- [AERemoveEventHandler(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1445239-aeremoveeventhandler): Removes an event handler entry from an Apple event dispatch table.

### Managing Coercion Handler Dispatch Tables

- [AEGetCoercionHandler(\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1445348-aegetcoercionhandler): Gets the coercion handler for a specified descriptor type.
- [AEInstallCoercionHandler(\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1445548-aeinstallcoercionhandler): Installs a coercion handler in either the application or system coercion handler dispatch table.
- [AERemoveCoercionHandler(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1441907-aeremovecoercionhandler): Removes a coercion handler from a coercion handler dispatch table.

### Managing Special Handler Dispatch Tables

- [AEGetSpecialHandler(\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1444274-aegetspecialhandler): Gets a specified handler from a special handler dispatch table.
- [AEInstallSpecialHandler(\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1445532-aeinstallspecialhandler): Installs a callback function in a special handler dispatch table.
- [AERemoveSpecialHandler(\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1447960-aeremovespecialhandler): Removes a handler from a special handler dispatch table.

### Operating On Descriptor Data

- [AEGetDescData(\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1444427-aegetdescdata): Gets the data from the specified descriptor.
- [AEGetDescDataSize(\_:)](https://developer.apple.com/documentation/coreservices/1450119-aegetdescdatasize): Gets the size, in bytes, of the data in the specified descriptor.
- [AEGetDescDataRange(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1446560-aegetdescdatarange): Retrieves a specified series of bytes from the specified descriptor.
- [AEReplaceDescData(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1446695-aereplacedescdata): Copies the specified data into the specified descriptor, replacing any previous data.

### Resolving Object Specifiers

- [AEResolve(\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1449720-aeresolve): Resolves an object specifier.

### Creating Apple Event Structures in Memory

- [AEPrintDescToHandle(\_:\_:)](https://developer.apple.com/documentation/coreservices/1445158-aeprintdesctohandle): Provides a pretty printer facility for displaying the contents of Apple event descriptors.
- [vAEBuildAppleEvent(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1441729-vaebuildappleevent): Allows you to encapsulate calls to `AEBuildAppleEvent` in a wrapper routine.
- [vAEBuildDesc(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1446775-vaebuilddesc): Allows you to encapsulate calls to `AEBuildDesc` in your own wrapper routines.
- [vAEBuildParameters(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1448040-vaebuildparameters): Allows you to encapsulate calls to `AEBuildParameters` in your own `stdarg`-style wrapper routines, using techniques similar to those allowed by vsprintf.

### Creating Apple Event Structures Using Streams

- [AEStreamClose(\_:\_:)](https://developer.apple.com/documentation/coreservices/1449821-aestreamclose): Closes and deallocates an `AEStreamRef`.
- [AEStreamCloseDesc(\_:)](https://developer.apple.com/documentation/coreservices/1449272-aestreamclosedesc): Marks the end of a descriptor in an `AEStreamRef`.
- [AEStreamCloseList(\_:)](https://developer.apple.com/documentation/coreservices/1448185-aestreamcloselist): Marks the end of a list of descriptors in an `AEStreamRef`.
- [AEStreamCloseRecord(\_:)](https://developer.apple.com/documentation/coreservices/1449522-aestreamcloserecord): Marks the end of a record in an `AEStreamRef`.
- [AEStreamCreateEvent(\_:\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1446562-aestreamcreateevent): Creates a new Apple event and opens a stream for writing data to it.
- [AEStreamOpen()](https://developer.apple.com/documentation/coreservices/1447732-aestreamopen): Opens a new `AEStreamRef` for use in building a descriptor.
- [AEStreamOpenDesc(\_:\_:)](https://developer.apple.com/documentation/coreservices/1446544-aestreamopendesc): Marks the beginning of a descriptor in an `AEStreamRef`.
- [AEStreamOpenEvent(\_:)](https://developer.apple.com/documentation/coreservices/1445366-aestreamopenevent): Opens a stream for an existing Apple event.
- [AEStreamOpenKeyDesc(\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1442897-aestreamopenkeydesc): Marks the beginning of a key descriptor in an `AEStreamRef`.
- [AEStreamOpenList(\_:)](https://developer.apple.com/documentation/coreservices/1448594-aestreamopenlist): Marks the beginning of a descriptor list in an `AEStreamRef`.
- [AEStreamOpenRecord(\_:\_:)](https://developer.apple.com/documentation/coreservices/1447141-aestreamopenrecord): Marks the beginning of an Apple event record in an `AEStreamRef`.
- [AEStreamOptionalParam(\_:\_:)](https://developer.apple.com/documentation/coreservices/1444481-aestreamoptionalparam): Designates a parameter in an Apple event as optional.
- [AEStreamSetRecordType(\_:\_:)](https://developer.apple.com/documentation/coreservices/1447704-aestreamsetrecordtype): Sets the type of the most recently created record in an `AEStreamRef`.
- [AEStreamWriteAEDesc(\_:\_:)](https://developer.apple.com/documentation/coreservices/1448487-aestreamwriteaedesc): Copies an existing descriptor into an `AEStreamRef`.
- [AEStreamWriteData(\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1442610-aestreamwritedata): Appends data to the current descriptor in an `AEStreamRef`.
- [AEStreamWriteDesc(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1450387-aestreamwritedesc): Appends the data for a complete descriptor to an `AEStreamRef`.
- [AEStreamWriteKey(\_:\_:)](https://developer.apple.com/documentation/coreservices/1448750-aestreamwritekey): Marks the beginning of a keyword/descriptor pair for a descriptor in an `AEStreamRef`.
- [AEStreamWriteKeyDesc(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1442568-aestreamwritekeydesc): Writes a complete keyword/descriptor pair to an `AEStreamRef`.

### Working With Lower Level Apple Event Functions

- [AEGetRegisteredMachPort()](https://developer.apple.com/documentation/coreservices/1449736-aegetregisteredmachport): Returns the Mach port (in the form of a `mach_port_t`) that was registered with the bootstrap server for this process.
- [AEDecodeMessage(\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1447827-aedecodemessage): Decodes a Mach message and converts it into an Apple event and its related reply.
- [AESendMessage(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1442994-aesendmessage): Sends an AppleEvent to a target process without some of the overhead required by `AESend`.
- [AEProcessMessage(\_:)](https://developer.apple.com/documentation/coreservices/1444387-aeprocessmessage): Decodes and dispatches a low level Mach message event to an event handler, including packaging and returning the reply to the sender.

### Serializing Apple Event Data

- [AESizeOfFlattenedDesc(\_:)](https://developer.apple.com/documentation/coreservices/1447305-aesizeofflatteneddesc): Returns the amount of buffer space needed to store the descriptor after flattening it.
- [AEFlattenDesc(\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1441808-aeflattendesc): Flattens the specified descriptor and stores the data in the supplied buffer.
- [AEUnflattenDesc(\_:\_:)](https://developer.apple.com/documentation/coreservices/1448997-aeunflattendesc): Deprecated. Unflattens the data in the passed buffer and creates a descriptor from it.

### Miscellaneous

- [AECheckIsRecord(\_:)](https://developer.apple.com/documentation/coreservices/1444011-aecheckisrecord): Determines whether a descriptor is truly an `AERecord`.
- [AEInitializeDesc(\_:)](https://developer.apple.com/documentation/coreservices/1446047-aeinitializedesc): Initializes a new descriptor.

### Callbacks

- [AERemoteProcessResolverCallback](https://developer.apple.com/documentation/coreservices/aeremoteprocessresolvercallback): Defines a pointer to a function the Apple Event Manager calls when the asynchronous execution of a remote process resolver completes, either due to success or failure, after a call to the `AERemoteProcessResolverScheduleWithRunLoop` function. Your callback function can use the reference passed to it to get the remote process information.
- [AEDisposeExternalProcPtr](https://developer.apple.com/documentation/coreservices/aedisposeexternalprocptr): Defines a pointer to a function the Apple Event Manager calls to dispose of a descriptor created by the `AECreateDescFromExternalPtr` function. Your callback function disposes of the buffer you originally passed to that function.
- [AECoerceDescProcPtr](https://developer.apple.com/documentation/coreservices/aecoercedescprocptr): Defines a pointer to a function that coerces data stored in a descriptor. Your descriptor coercion callback function coerces the data from the passed descriptor to the specified type, returning the coerced data in a second descriptor.
- [AECoercePtrProcPtr](https://developer.apple.com/documentation/coreservices/aecoerceptrprocptr): Defines a pointer to a function that coerces data stored in a buffer. Your pointer coercion callback routine coerces the data from the passed buffer to the specified type, returning the coerced data in a descriptor.
- [AEEventHandlerProcPtr](https://developer.apple.com/documentation/coreservices/aeeventhandlerprocptr): Defines a pointer to a function that handles one or more Apple events. Your Apple event handler function performs any action requested by the Apple event, adds parameters to the reply Apple event if appropriate (possibly including error information), and returns a result code.
- [OSLAccessorProcPtr](https://developer.apple.com/documentation/coreservices/oslaccessorprocptr): Your object accessor function either finds elements or properties of an Apple event object.
- [OSLAdjustMarksProcPtr](https://developer.apple.com/documentation/coreservices/osladjustmarksprocptr): Defines a pointer to an adjust marks callback function. Your adjust marks function unmarks objects previously marked by a call to your marking function.
- [OSLCompareProcPtr](https://developer.apple.com/documentation/coreservices/oslcompareprocptr): Defines a pointer to an object comparison callback function. Your object comparison function compares one Apple event object to another or to the data for a descriptor.
- [OSLCountProcPtr](https://developer.apple.com/documentation/coreservices/oslcountprocptr): Defines a pointer to an object counting callback function. Your object counting function counts the number of Apple event objects of a specified class in a specified container object.
- [OSLDisposeTokenProcPtr](https://developer.apple.com/documentation/coreservices/osldisposetokenprocptr): Defines a pointer to a dispose token callback function. Your dispose token function, required only if you use a complex token format, disposes of the specified token.
- [OSLGetErrDescProcPtr](https://developer.apple.com/documentation/coreservices/oslgeterrdescprocptr): Defines a pointer to an error descriptor callback function. Your error descriptor callback function supplies a pointer to an address where the Apple Event Manager can store the current descriptor if an error occurs during a call to the `AEResolve` function.
- [OSLGetMarkTokenProcPtr](https://developer.apple.com/documentation/coreservices/oslgetmarktokenprocptr): Defines a pointer to a mark token callback function. Your mark token function returns a mark token.
- [OSLMarkProcPtr](https://developer.apple.com/documentation/coreservices/oslmarkprocptr): Defines a pointer to an object marking callback function. Your object-marking function marks a specific Apple event object.

### Data Types

- [AEArrayData](https://developer.apple.com/documentation/coreservices/aearraydata): Stores array information to be put into a descriptor listwith the `AEPutArray` functionor extracted from a descriptor list with the `AEGetArray` function.
- [AEBuildError](https://developer.apple.com/documentation/coreservices/aebuilderror): Defines a structure for storing additional error codeinformation for “AEBuild” routines.
- [AEDesc](https://developer.apple.com/documentation/coreservices/aedesc): Stores data and an accompanying descriptor type to formthe basic building block of all Apple Events.
- [AEKeyDesc](https://developer.apple.com/documentation/coreservices/aekeydesc): Associates a keyword with a descriptor to form a keyword-specifieddescriptor.
- [AERemoteProcessResolverContext](https://developer.apple.com/documentation/coreservices/aeremoteprocessresolvercontext): Supplied as a parameter when performing asynchronous resolutionof remote processes.
- [ccntTokenRecord](https://developer.apple.com/documentation/coreservices/ccnttokenrecord): Stores token information used by the AEResolve functionwhile locating a range of objects.
- [IntlText](https://developer.apple.com/documentation/coreservices/intltext): Deprecated. International text consists of an ordered series of bytes, beginning with a 4-byte language code and a 4-byte script code that together determine the format of the bytes that follow.
- [OffsetArray](https://developer.apple.com/documentation/coreservices/offsetarray): Specifies offsets of ranges of text. Not typically used by developers.
- [TextRange](https://developer.apple.com/documentation/coreservices/textrange): Specifies a range of text. Not typically used by developers.
- [TextRangeArray](https://developer.apple.com/documentation/coreservices/textrangearray): Specifies an array of text ranges. Not typically used by developers.
- [TScriptingSizeResource](https://developer.apple.com/documentation/coreservices/tscriptingsizeresource): Defines a data type to store stack and heap information. Not typically used by developers.
- [WritingCode](https://developer.apple.com/documentation/coreservices/writingcode)
- [AEAddressDesc](https://developer.apple.com/documentation/coreservices/aeaddressdesc): A descriptor that contains the address of an application, used to describe the target application for an Apple event.
- [AEArrayDataPointer](https://developer.apple.com/documentation/coreservices/aearraydatapointer): A pointer to a union of type `AEArrayData`.
- [AEArrayType](https://developer.apple.com/documentation/coreservices/aearraytype): Stores a value that specifies an array type.
- [AECoerceDescUPP](https://developer.apple.com/documentation/coreservices/aecoercedescupp): Defines a data type for the universal procedure pointer for the `AECoerceDescProcPtr` callback function pointer.
- [AECoercePtrUPP](https://developer.apple.com/documentation/coreservices/aecoerceptrupp): Defines a data type for the universal procedure pointer for the `AECoercePtrProcPtr` callback function pointer.
- [AECoercionHandlerUPP](https://developer.apple.com/documentation/coreservices/aecoercionhandlerupp): Defines a data type for the universal procedure pointer for the `AECoercionHandlerUPP` callback function pointer.
- [AEDataStorage](https://developer.apple.com/documentation/coreservices/aedatastorage): A pointer to an opaque data type that provides storage for an `AEDesc` descriptor.
- [AEDataStorageType](https://developer.apple.com/documentation/coreservices/aedatastoragetype): An opaque data type used to store data in Apple event descriptors.
- [AEDescList](https://developer.apple.com/documentation/coreservices/aedesclist): A descriptor whose data consists of a list of one or more descriptors.
- [AEEventSource](https://developer.apple.com/documentation/coreservices/aeeventsource): A data type for values that specify how an Apple event was delivered.
- [AEDisposeExternalUPP](https://developer.apple.com/documentation/coreservices/aedisposeexternalupp): Defines a universal procedure pointer to a function the Apple Event Manager calls to dispose of a descriptor created by the `AECreateDescFromExternalPtr` function.
- [AEEventClass](https://developer.apple.com/documentation/coreservices/aeeventclass): Specifies the event class of an Apple event.
- [AEEventHandlerUPP](https://developer.apple.com/documentation/coreservices/aeeventhandlerupp): Defines a data type for the universal procedure pointer for the `AEEventHandlerUPP` callback function pointer.
- [AEEventID](https://developer.apple.com/documentation/coreservices/aeeventid): Specifies the event ID of an Apple event.
- [AEKeyword](https://developer.apple.com/documentation/coreservices/aekeyword): A four-character code that uniquely identifies a descriptor in an Apple event record or an Apple event.
- [AERecord](https://developer.apple.com/documentation/coreservices/aerecord): A descriptor whose data is a list of keyword-specified descriptors.
- [AERemoteProcessResolverRef](https://developer.apple.com/documentation/coreservices/aeremoteprocessresolverref): An opaque reference to an object that encapsulates the mechanism for obtaining a list of processes running on a remote machine.
- [AEReturnID](https://developer.apple.com/documentation/coreservices/aereturnid): Specifies a return ID for a created Apple event.
- [AESendPriority](https://developer.apple.com/documentation/coreservices/aesendpriority): Specifies the processing priority for a sent Apple event.
- [AEStreamRef](https://developer.apple.com/documentation/coreservices/aestreamref): An opaque data structure for storing stream-based descriptor data.
- [AETransactionID](https://developer.apple.com/documentation/coreservices/aetransactionid): Specifies a transaction ID.
- [AppleEvent](https://developer.apple.com/documentation/coreservices/appleevent): A descriptor whose data is a list of descriptors containing both attributes and parameters that make up an Apple event.
- [DescType](https://developer.apple.com/documentation/coreservices/desctype): Specifies the type of the data stored in an `AEDesc` descriptor.
- [OffsetArrayHandle](https://developer.apple.com/documentation/coreservices/offsetarrayhandle): Defines a data type that points to an `OffsetArray`. Not typically used by developers.
- [OSLAccessorUPP](https://developer.apple.com/documentation/coreservices/oslaccessorupp): Defines a data type for the universal procedure pointer for the `OSLAccessorProcPtr` callback function pointer.
- [OSLAdjustMarksUPP](https://developer.apple.com/documentation/coreservices/osladjustmarksupp): Defines a data type for the universal procedure pointer for the `OSLAdjustMarksProcPtr` callback function pointer.
- [OSLCompareUPP](https://developer.apple.com/documentation/coreservices/oslcompareupp): Defines a data type for the universal procedure pointer for the `OSLCompareProcPtr` callback function pointer.
- [OSLCountUPP](https://developer.apple.com/documentation/coreservices/oslcountupp): Defines a data type for the universal procedure pointer for the `OSLCountProcPtr` callback function pointer.
- [OSLDisposeTokenUPP](https://developer.apple.com/documentation/coreservices/osldisposetokenupp): Defines a data type for the universal procedure pointer for the `OSLDisposeTokenProcPtr` callback function pointer.
- [OSLGetErrDescUPP](https://developer.apple.com/documentation/coreservices/oslgeterrdescupp): Defines a data type for the universal procedure pointer for the `OSLGetErrDescProcPtr` callback function pointer.
- [OSLGetMarkTokenUPP](https://developer.apple.com/documentation/coreservices/oslgetmarktokenupp): Defines a data type for the universal procedure pointer for the `OSLGetMarkTokenProcPtr` callback function pointer.
- [OSLMarkUPP](https://developer.apple.com/documentation/coreservices/oslmarkupp): Defines a data type for the universal procedure pointer for the `OSLMarkProcPtr` callback function pointer.

### Constants

- [AEBuildErrorCode](https://developer.apple.com/documentation/coreservices/aebuilderrorcode): Represents syntax errors found by an Apple Event build routine.
- [AESendMode](https://developer.apple.com/documentation/coreservices/aesendmode): Specify send preferences to the `AESend` function.
- [Apple Event Recording Event ID Constants](https://developer.apple.com/documentation/coreservices/apple_events/1527224-apple_event_recording_event_id_c): Specify event IDs for events that deal with Apple event recording.
- [cAEList](apple_event_manager/1556411-caelist.md)
- [Callback Constants for the AEResolve Function](https://developer.apple.com/documentation/coreservices/apple_events/1572741-callback_constants_for_the_aeres): Specify supported callback features to the `AEResolve` function.
- [cInsertionLoc](apple_event_manager/1556389-cinsertionloc.md)
- [cKeystroke](apple_event_manager/1556385-ckeystroke.md)
- [Comparison Operator Constants](apple_event_manager/comparison_operator_constants.md): Specify a comparison operation to perform on two operands.
- [Constants for Object Specifiers, Positions, and Logical and Comparison Operations](https://developer.apple.com/documentation/coreservices/apple_events/1572744-constants_for_object_specifiers_): Specify the types of the four keyword-specified descriptors that make up the data in an object specifier, as well as constants for position, logical operations, and comparison operations.
- [cURL](apple_event_manager/1556375-curl.md)
- [cVersion](apple_event_manager/cversion.md)
- [Data Array Constants](https://developer.apple.com/documentation/coreservices/apple_events/1542848-data_array_constants): Specify an array type for storing or extracting descriptor lists with the `AEPutArray` and `AEGetArray` functions.
- [Descriptor Type Constants](https://developer.apple.com/documentation/coreservices/apple_events/1542788-descriptor_type_constants): Specify types for descriptors.
- [eScheme](apple_event_manager/1556397-escheme.md)
- [Event Class Constants](https://developer.apple.com/documentation/coreservices/apple_events/1527210-event_class_constants): Specify the event class for an Apple event.
- [Event ID Constants](https://developer.apple.com/documentation/coreservices/apple_events/1527223-event_id_constants): Specify the event ID for an Apple event.
- [Event Source Constants](https://developer.apple.com/documentation/coreservices/apple_events/1527201-event_source_constants): Identify how an Apple event was delivered.
- [Factoring Constants](https://developer.apple.com/documentation/coreservices/apple_events/1542928-factoring_constants)
- [ID Constants for the AECreateAppleEvent Function](https://developer.apple.com/documentation/coreservices/apple_events/1542799-id_constants_for_the_aecreateapp): Specify values for the ID parameters of the `AECreateAppleEvent` function.
- [Key Form and Descriptor Type Object Specifier Constants](https://developer.apple.com/documentation/coreservices/apple_events/1572731-key_form_and_descriptor_type_obj): Specify possible values for the `keyAEKeyForm` field of an object specifier, as well as descriptor types used in resolving object specifiers.
- [Keyword Attribute Constants](https://developer.apple.com/documentation/coreservices/apple_events/1542920-keyword_attribute_constants): Specify keyword values for Apple event attributes.
- [Keyword Parameter Constants](https://developer.apple.com/documentation/coreservices/apple_events/1527206-keyword_parameter_constants): Specify keyword values for Apple event parameters, as well as information for the `AEManagerInfo` function to retrieve. Some common key word values are shown here.
- [Launch Apple Event Constants](https://developer.apple.com/documentation/coreservices/apple_events/1556410-launch_apple_event_constants): In a `kAEOpenApplication` event, specify information about how the receiving application was launched.
- [Numeric Descriptor Type Constants](https://developer.apple.com/documentation/coreservices/apple_events/1542872-numeric_descriptor_type_constant): Specify types for numeric descriptors.
- [Object Class ID Constants](https://developer.apple.com/documentation/coreservices/apple_events/1556368-object_class_id_constants): Specify the object class for an Apple event object.
- [Other Descriptor Type Constants](https://developer.apple.com/documentation/coreservices/apple_events/1542760-other_descriptor_type_constants): Specify types for Boolean and character descriptors.
- [Priority Constants for the AESend Function (Deprecated in macOS)](https://developer.apple.com/documentation/coreservices/apple_events/1542840-priority_constants_for_the_aesen): Specify a value for the `sendPriority` parameter of the `AESend` function.
- [Remote Process Dictionary Keys](apple_event_manager/remote_process_dictionary_keys.md): Used to extract information from dictionaries with entries that describe remote processes.
- [Special Handler Callback Constants](https://developer.apple.com/documentation/coreservices/apple_events/1572726-special_handler_callback_constan): Specify an object callback function to install, get, or remove from the special handler dispatch table.
- [Timeout Constants](https://developer.apple.com/documentation/coreservices/apple_events/1542814-timeout_constants): Specify a timeout value.
- [Whose Test Constants](apple_event_manager/whose_test_constants.md)
- [kAEDoObjectsExist](apple_event_manager/kaedoobjectsexist.md)
- [kAEDebugPOSTHeader](https://developer.apple.com/documentation/coreservices/apple_events/1542854-kaedebugpostheader)
- [kAEGetPrivilegeSelection](apple_event_manager/kaegetprivilegeselection.md)
- [kAEHandleArray](https://developer.apple.com/documentation/coreservices/apple_events/1542886-kaehandlearray)
- [kAEInfo](https://developer.apple.com/documentation/coreservices/apple_events/1556393-kaeinfo)
- [kAEInternetSuite](https://developer.apple.com/documentation/coreservices/apple_events/1556388-kaeinternetsuite)
- [kAEISGetURL](https://developer.apple.com/documentation/coreservices/apple_events/1556362-kaeisgeturl)
- [kAEISHTTPSearchArgs](https://developer.apple.com/documentation/coreservices/apple_events/1556404-kaeishttpsearchargs)
- [kAELogOut](https://developer.apple.com/documentation/coreservices/apple_events/1556395-kaelogout)
- [kAEMenuClass](https://developer.apple.com/documentation/coreservices/apple_events/1556392-kaemenuclass)
- [kAEMouseClass](https://developer.apple.com/documentation/coreservices/apple_events/1556409-kaemouseclass)
- [kAENonmodifiable](https://developer.apple.com/documentation/coreservices/apple_events/1556386-kaenonmodifiable)
- [kAEQDNotOr](https://developer.apple.com/documentation/coreservices/apple_events/1556377-kaeqdnotor)
- [kAESetPosition](https://developer.apple.com/documentation/coreservices/apple_events/1556407-kaesetposition)
- [kAESocks4Protocol](https://developer.apple.com/documentation/coreservices/apple_events/1542847-kaesocks4protocol)
- [kAEUseHTTPProxyAttr](https://developer.apple.com/documentation/coreservices/apple_events/1542824-kaeusehttpproxyattr): Web Services Proxy support—these constants should be added as attributes of the event that is being sent (not as part of the direct object).
- [kAEUserTerminology](https://developer.apple.com/documentation/coreservices/apple_events/1457902-kaeuserterminology)
- [kAEUseSocksAttr](https://developer.apple.com/documentation/coreservices/apple_events/1542933-kaeusesocksattr)
- [kAEUTHasReturningParam](https://developer.apple.com/documentation/coreservices/apple_events/1457911-kaeuthasreturningparam)
- [kAEZoomIn](https://developer.apple.com/documentation/coreservices/apple_events/1556365-kaezoomin)
- [kBySmallIcon](apple_event_manager/1556391-kbysmallicon.md)
- [kConnSuite](apple_event_manager/1556369-kconnsuite.md)
- [keyAEAngle](https://developer.apple.com/documentation/coreservices/apple_events/1556380-keyaeangle)
- [keyAEBaseAddr](https://developer.apple.com/documentation/coreservices/apple_events/1556383-keyaebaseaddr)
- [keyAEDoScale](https://developer.apple.com/documentation/coreservices/apple_events/1556387-keyaedoscale)
- [keyAEHiliteRange](https://developer.apple.com/documentation/coreservices/apple_events/1556379-keyaehiliterange)
- [keyAEKeyword](https://developer.apple.com/documentation/coreservices/apple_events/1556374-keyaekeyword)
- [keyAEPropData](apple_event_manager/keyaepropdata.md)
- [keyAESuiteID](https://developer.apple.com/documentation/coreservices/apple_events/1556370-keyaesuiteid)
- [keyMenuID](https://developer.apple.com/documentation/coreservices/apple_events/1556381-keymenuid)
- [keyMiscellaneous](https://developer.apple.com/documentation/coreservices/apple_events/1556399-keymiscellaneous)
- [keyReplyPortAttr](https://developer.apple.com/documentation/coreservices/apple_events/1571648-keyreplyportattr)
- [keySOAPStructureMetaData](https://developer.apple.com/documentation/coreservices/apple_events/1542797-keysoapstructuremetadata)
- [keyUserNameAttr](https://developer.apple.com/documentation/coreservices/apple_events/1542780-keyusernameattr)
- [kFAServerApp](apple_event_manager/1556384-kfaserverapp.md)
- [kLaunchToGetTerminology](apple_event_manager/1457909-klaunchtogetterminology.md)
- [kNextBody](apple_event_manager/1556402-knextbody.md)
- [kOSIZDontOpenResourceFile](apple_event_manager/1457903-kosizdontopenresourcefile.md)
- [kReadExtensionTermsMask](apple_event_manager/1457896-kreadextensiontermsmask.md)
- [kSOAP1999Schema](apple_event_manager/1542943-ksoap1999schema.md)
- [kTextServiceClass](apple_event_manager/1556406-ktextserviceclass.md)
- [kTSMHiliteCaretPosition](apple_event_manager/1556398-ktsmhilitecaretposition.md): Specify text highlighting information.
- [kTSMOutsideOfBody](apple_event_manager/1556371-ktsmoutsideofbody.md)
- [pArcAngle](apple_event_manager/1556376-parcangle.md)
- [pFormula](apple_event_manager/1556373-pformula.md)
- [pNewElementLoc](apple_event_manager/1556400-pnewelementloc.md)
- [pScheme](apple_event_manager/1556408-pscheme.md)
- [pTextStyles](apple_event_manager/1556367-ptextstyles.md)
- [typeAEText](apple_event_manager/1556366-typeaetext.md)
- [typeApplicationBundleID](apple_event_manager/1542896-typeapplicationbundleid.md): For specifying a target application by bundle ID.
- [typeFinderWindow](apple_event_manager/typefinderwindow.md)
- [typeHIMenu](apple_event_manager/1556372-typehimenu.md)
- [typeKernelProcessID](apple_event_manager/1542936-typekernelprocessid.md): For specifying an application by UNIX process ID.
- [typeMachPort](apple_event_manager/typemachport.md): For specifying a Mach port.
- [typeMeters](apple_event_manager/1556382-typemeters.md)
- [typePixelMap](apple_event_manager/typepixelmap.md)
- [typeReplyPortAttr](apple_event_manager/1571649-typereplyportattr.md)
- [typeTIFF](apple_event_manager/1556405-typetiff.md)
- [typeUnicodeText](apple_event_manager/1542918-typeunicodetext.md)

### Result Codes

- [noPortErr](https://developer.apple.com/documentation/coreservices/noporterr): Client hasn’t set `'SIZE'` resource toindicate awareness of high-level events
- [destPortErr](https://developer.apple.com/documentation/coreservices/destporterr): Server hasn’t set `'SIZE'` resource toindicate awareness of high-level events, or else is not present
- [sessClosedErr](https://developer.apple.com/documentation/coreservices/sessclosederr): The `kAEDontReconnect` flagin the `sendMode` parameterwas set and the server quit, then restarted
- [errAECoercionFail](https://developer.apple.com/documentation/coreservices/erraecoercionfail): Data could not be coerced to the requesteddescriptor type
- [errAEDescNotFound](https://developer.apple.com/documentation/coreservices/erraedescnotfound): Descriptor was not found
- [errAECorruptData](https://developer.apple.com/documentation/coreservices/erraecorruptdata): Data in an Apple event could not be read
- [errAEWrongDataType](https://developer.apple.com/documentation/coreservices/erraewrongdatatype): Wrong descriptor type
- [errAENotAEDesc](https://developer.apple.com/documentation/coreservices/erraenotaedesc): Not a valid descriptor
- [errAEBadListItem](https://developer.apple.com/documentation/coreservices/erraebadlistitem): Operation involving a list item failed
- [errAENewerVersion](https://developer.apple.com/documentation/coreservices/erraenewerversion): Need a newer version of the Apple EventManager
- [errAENotAppleEvent](https://developer.apple.com/documentation/coreservices/erraenotappleevent): The event is not in AppleEvent format.
- [errAEEventNotHandled](https://developer.apple.com/documentation/coreservices/erraeeventnothandled): Event wasn’t handled by an Apple eventhandler
- [errAEReplyNotValid](https://developer.apple.com/documentation/coreservices/erraereplynotvalid): `AEResetTimer` was passed an invalid reply
- [errAEUnknownSendMode](https://developer.apple.com/documentation/coreservices/erraeunknownsendmode): Invalid sending mode was passed
- [errAEWaitCanceled](https://developer.apple.com/documentation/coreservices/erraewaitcanceled): User canceled out of wait loop for replyor receipt
- [errAETimeout](https://developer.apple.com/documentation/coreservices/erraetimeout): Apple event timed out
- [errAENoUserInteraction](https://developer.apple.com/documentation/coreservices/erraenouserinteraction): No user interaction allowed
- [errAENotASpecialFunction](https://developer.apple.com/documentation/coreservices/erraenotaspecialfunction): Wrong keyword for a special function
- [errAEParamMissed](https://developer.apple.com/documentation/coreservices/erraeparammissed): A required parameter was not accessed.
- [errAEUnknownAddressType](https://developer.apple.com/documentation/coreservices/erraeunknownaddresstype): Unknown Apple event address type
- [errAEHandlerNotFound](https://developer.apple.com/documentation/coreservices/erraehandlernotfound): No handler found for an Apple event
- [errAEReplyNotArrived](https://developer.apple.com/documentation/coreservices/erraereplynotarrived): Reply has not yet arrived
- [errAEIllegalIndex](https://developer.apple.com/documentation/coreservices/erraeillegalindex): Not a valid list index
- [errAEImpossibleRange](https://developer.apple.com/documentation/coreservices/erraeimpossiblerange): The range is not valid because it is impossiblefor a range to include the first and last objects that were specified;an example is a range in which the offset of the first object is greaterthan the offset of the last object
- [errAEWrongNumberArgs](https://developer.apple.com/documentation/coreservices/erraewrongnumberargs): The number of operands provided for the `kAENOT` logicaloperator is not 1
- [errAEAccessorNotFound](https://developer.apple.com/documentation/coreservices/erraeaccessornotfound): There is no object accessor function forthe specified object class and container type
- [errAENoSuchLogical](https://developer.apple.com/documentation/coreservices/erraenosuchlogical): The logical operator in a logical descriptoris not `kAEAND`, `kAEOR`,or `kAENOT`
- [errAEBadTestKey](https://developer.apple.com/documentation/coreservices/erraebadtestkey): The descriptor in a test key is neithera comparison descriptor nor a logical descriptor
- [errAENoSuchObject](https://developer.apple.com/documentation/coreservices/erraenosuchobject): Runtime resolution of an object failed.
- [errAENegativeCount](https://developer.apple.com/documentation/coreservices/erraenegativecount): An object-counting function returned a negativeresult
- [errAEEmptyListContainer](https://developer.apple.com/documentation/coreservices/erraeemptylistcontainer): The container for an Apple event objectis specified by an empty list
- [errAEUnknownObjectType](https://developer.apple.com/documentation/coreservices/erraeunknownobjecttype): The object type isn’t recognized
- [errAERecordingIsAlreadyOn](https://developer.apple.com/documentation/coreservices/erraerecordingisalreadyon): Recording is already on
- [errAEReceiveTerminate](https://developer.apple.com/documentation/coreservices/erraereceiveterminate): Break out of all levels of `AEReceive` tothe topmost (1.1 or greater)
- [errAEReceiveEscapeCurrent](https://developer.apple.com/documentation/coreservices/erraereceiveescapecurrent): Break out of lowest level only of `AEReceive` (1.1or greater)
- [errAEEventFiltered](https://developer.apple.com/documentation/coreservices/erraeeventfiltered): Event has been filtered and should not bepropagated (1.1 or greater)
- [errAEDuplicateHandler](https://developer.apple.com/documentation/coreservices/erraeduplicatehandler): Attempt to install handler in table foridentical class and ID (1.1 or greater)
- [errAEStreamBadNesting](https://developer.apple.com/documentation/coreservices/erraestreambadnesting): Nesting violation while streaming
- [errAEStreamAlreadyConverted](https://developer.apple.com/documentation/coreservices/erraestreamalreadyconverted): Attempt to convert a stream that has alreadybeen converted
- [errAEDescIsNull](https://developer.apple.com/documentation/coreservices/erraedescisnull): Attempt to perform an invalid operationon a null descriptor
- [errAEBuildSyntaxError](https://developer.apple.com/documentation/coreservices/erraebuildsyntaxerror): `AEBuildDesc` andrelated functions detected a syntax error
- [errAEBufferTooSmall](https://developer.apple.com/documentation/coreservices/erraebuffertoosmall): Buffer for `AEFlattenDesc` toosmall
- [errASCantConsiderAndIgnore](https://developer.apple.com/documentation/coreservices/errascantconsiderandignore): Can’t both consider and ignore \<attribute\>.
- [errASCantCompareMoreThan32k](https://developer.apple.com/documentation/coreservices/errascantcomparemorethan32k): Can’t perform operation on text longerthan 32K bytes.
- [errASTerminologyNestingTooDeep](https://developer.apple.com/documentation/coreservices/errasterminologynestingtoodeep): Tell statements are nested too deeply.
- [errASIllegalFormalParameter](https://developer.apple.com/documentation/coreservices/errasillegalformalparameter): \<name\> is illegal as a formal parameter.
- [errASParameterNotForEvent](https://developer.apple.com/documentation/coreservices/errasparameternotforevent): \<name\> is not a parameter name for the event \<event\>.
- [errASNoResultReturned](https://developer.apple.com/documentation/coreservices/errasnoresultreturned): No result was returned for some argumentof this expression.
- [errAEEventFailed](https://developer.apple.com/documentation/coreservices/erraeeventfailed): Apple event handler failed.
- [errAETypeError](https://developer.apple.com/documentation/coreservices/erraetypeerror): A descriptor type mismatch occurred.
- [errAEBadKeyForm](https://developer.apple.com/documentation/coreservices/erraebadkeyform): Invalid key form.
- [errAENotModifiable](https://developer.apple.com/documentation/coreservices/erraenotmodifiable): Can't set \<object or data\> to \<object or data\>. Access not allowed.
- [errAEPrivilegeError](https://developer.apple.com/documentation/coreservices/erraeprivilegeerror): A privilege violation occurred.
- [errAEReadDenied](https://developer.apple.com/documentation/coreservices/erraereaddenied): The read operation was not allowed.
- [errAEWriteDenied](https://developer.apple.com/documentation/coreservices/erraewritedenied): Can't set \<object or data\> to \<object or data\>.
- [errAEIndexTooLarge](https://developer.apple.com/documentation/coreservices/erraeindextoolarge): The index of the event is too large to bevalid.
- [errAENotAnElement](https://developer.apple.com/documentation/coreservices/erraenotanelement): The specified object is a property, notan element.
- [errAECantSupplyType](https://developer.apple.com/documentation/coreservices/erraecantsupplytype): Can’t supply the requested descriptortype for the data.
- [errAECantHandleClass](https://developer.apple.com/documentation/coreservices/erraecanthandleclass): The Apple event handler can’t handle objectsof this class.
- [errAEInTransaction](https://developer.apple.com/documentation/coreservices/erraeintransaction): Couldn’t handle this command because itwasn’t part of the current transaction.
- [errAENoSuchTransaction](https://developer.apple.com/documentation/coreservices/erraenosuchtransaction): The transaction to which this command belongedisn’t a valid transaction.
- [errAENoUserSelection](https://developer.apple.com/documentation/coreservices/erraenouserselection): There is no user selection.
- [errAENotASingleObject](https://developer.apple.com/documentation/coreservices/erraenotasingleobject): Handler only handles single objects.
- [errAECantUndo](https://developer.apple.com/documentation/coreservices/erraecantundo): Can’t undo the previous Apple event oruser action.
- [errAENotAnEnumMember](https://developer.apple.com/documentation/coreservices/erraenotanenummember): Enumerated value in `SetData` is notallowed for this property
- [errAECantPutThatThere](https://developer.apple.com/documentation/coreservices/erraecantputthatthere): In make new, duplicate, etc. class can'tbe an element of container
- [errAEPropertiesClash](https://developer.apple.com/documentation/coreservices/erraepropertiesclash): Illegal combination of properties settingsfor SetData, make new, or duplicate

## See Also

### Managers

- [ColorSync Manager](colorsync_manager.md)
- [Speech Synthesis Manager](speech_synthesis_manager.md)

# Apple Event Manager (Objective-C)

**Framework:** Core Services  
**Kind:** API Collection

<a id="overview"></a>

## Overview

The Apple Event Manager, a part of the Open Scripting Architecture (OSA), provides facilities for applications to send and respond to Apple events and to make their operations and data available to AppleScript scripts. For related API reference, see Open Scripting Architecture Reference.

An Apple event is a type of interprocess message that can specify complex operations and data. Apple events provide a data transport and event dispatching mechanism  that can be used within a single application, between applications on the same computer, and between applications on different computers connected to a network.

Applications typically use Apple events to request services and information from other applications or to provide services and information in response to such requests. All applications that present a graphical interface to the user through the Human Interface Toolbox (Carbon applications) or the Cocoa application framework should be able to respond, if appropriate, to certain events sent by the Mac OS. These include the `open application` (or `launch`), `reopen`, `open documents`, `print documents`, and `quit` events.

Some Apple Event Manager functions are marked as being thread safe—for all other functions, you should call them only on the main thread.

For an overview of technologies that take advantage of the Apple Event Manager, see [AppleScript Overview](https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptX/AppleScriptX.html#//apple_ref/doc/uid/10000156i).

For information on working with Apple events, including events sent by the Mac OS, see Responding to Apple Events in Apple Events Programming Guide. For information about individual four-character codes used in Apple events, see AppleScript Terminology and Apple Event Codes Reference.

The Apple Event Manager is implemented by the AE framework, a subframework of the Core Services framework. You don’t link directly with the AE framework—instead, you typically link with  the Carbon framework, which includes it. Some AppleEvent definitions are only available to clients of the Carbon framework, which includes, for example, `AEInteraction.h` in the HIToolbox framework.

The AE framework does not force a connection to the window server. This allows daemons and startup items that work with Apple events to continue working across log outs.

<a id="1770164"></a>

### Gestalt Constants

You can check for version and feature availabilityinformation by using the Apple Event Manager selectors defined inthe Gestalt Manager. For more information see *Inside macOS: Gestalt Manager Reference*.

## Topics

### Adding Items to Descriptor Lists

- [AEPutArray](https://developer.apple.com/documentation/coreservices/1442535-aeputarray): Inserts the data for an Apple event array into a descriptor list, replacing any previous descriptors in the list.
- [AEPutDesc](https://developer.apple.com/documentation/coreservices/1450093-aeputdesc): Adds a descriptor to any descriptor list, possibly replacing an existing descriptor in the list.
- [AEPutPtr](https://developer.apple.com/documentation/coreservices/1445287-aeputptr): Inserts data specified in a buffer into a descriptor list as a descriptor, possibly replacing an existing descriptor in the list.

### Adding Parameters and Attributes to Apple Events and Apple Event Records

- [AEPutAttributeDesc](https://developer.apple.com/documentation/coreservices/1441790-aeputattributedesc): Adds a descriptor and a keyword to an Apple event as an attribute.
- [AEPutAttributePtr](https://developer.apple.com/documentation/coreservices/1445940-aeputattributeptr): Adds a pointer to data, a descriptor type, and a keyword to an Apple event as an attribute.
- [AEPutKeyDesc](apple_event_manager/1805634-aeputkeydesc.md): Inserts a descriptor and a keyword into an Apple event record as an Apple event parameter.
- [AEPutKeyPtr](apple_event_manager/1805645-aeputkeyptr.md): Inserts data, a descriptor type, and a keyword into an Apple event record as an Apple event parameter.
- [AEPutParamDesc](https://developer.apple.com/documentation/coreservices/1447576-aeputparamdesc): Inserts a descriptor and a keyword into an Apple event or Apple event record as an Apple event parameter.
- [AEPutParamPtr](https://developer.apple.com/documentation/coreservices/1449263-aeputparamptr): Inserts data, a descriptor type, and a keyword into an Apple event or Apple event record as an Apple event parameter.

### Coercing Descriptor Types

- [AECoerceDesc](https://developer.apple.com/documentation/coreservices/1446519-aecoercedesc): Coerces the data in a descriptor to another descriptor type and creates a descriptor containing the newly coerced data.
- [AECoercePtr](https://developer.apple.com/documentation/coreservices/1441846-aecoerceptr): Coerces data to a desired descriptor type and creates a descriptor containing the newly coerced data.

### Counting the Items in Descriptor Lists

- [AECountItems](https://developer.apple.com/documentation/coreservices/1449533-aecountitems): Counts the number of descriptors in a descriptor list.

### Creating an Apple Event

- [AECreateAppleEvent](https://developer.apple.com/documentation/coreservices/1448525-aecreateappleevent): Creates an Apple event with several important attributes but no parameters.

### Creating and Duplicating Descriptors

- [AECreateDesc](https://developer.apple.com/documentation/coreservices/1448535-aecreatedesc): Creates a new descriptor that incorporates the specified data.
- [AECreateDescFromExternalPtr](https://developer.apple.com/documentation/coreservices/1446239-aecreatedescfromexternalptr): Creates a new descriptor that uses a memory buffer supplied by the caller.
- [AEDuplicateDesc](https://developer.apple.com/documentation/coreservices/1442661-aeduplicatedesc): Creates a copy of a descriptor.

### Creating, Calling, and Deleting Universal Procedure Pointers

- [DisposeAECoerceDescUPP](https://developer.apple.com/documentation/coreservices/1448721-disposeaecoercedescupp): Disposes of a universal procedure pointer to a function that coerces data stored in a descriptor.
- [DisposeAECoercePtrUPP](https://developer.apple.com/documentation/coreservices/1450664-disposeaecoerceptrupp): Disposes of a universal procedure pointer to a function that coerces data stored in a buffer.
- [DisposeAEDisposeExternalUPP](https://developer.apple.com/documentation/coreservices/1447284-disposeaedisposeexternalupp): Disposes of a universal procedure pointer to a function that disposes of data supplied to the `AECreateDescFromExternalPtr` function.
- [DisposeAEEventHandlerUPP](https://developer.apple.com/documentation/coreservices/1442066-disposeaeeventhandlerupp): Disposes of a universal procedure pointer to an event handler function.
- [DisposeOSLAccessorUPP](https://developer.apple.com/documentation/coreservices/1444684-disposeoslaccessorupp): Disposes of a universal procedure pointer to an object accessor function.
- [DisposeOSLAdjustMarksUPP](https://developer.apple.com/documentation/coreservices/1443940-disposeosladjustmarksupp): Disposes of a universal procedure pointer to an object callback adjust marks function.
- [DisposeOSLCompareUPP](https://developer.apple.com/documentation/coreservices/1448398-disposeoslcompareupp): Disposes of a universal procedure pointer to an object callback comparison function.
- [DisposeOSLCountUPP](https://developer.apple.com/documentation/coreservices/1443984-disposeoslcountupp): Disposes of a universal procedure pointer to an object callback count function.
- [DisposeOSLDisposeTokenUPP](https://developer.apple.com/documentation/coreservices/1442670-disposeosldisposetokenupp): Disposes of a universal procedure pointer to an object callback dispose token function.
- [DisposeOSLGetErrDescUPP](https://developer.apple.com/documentation/coreservices/1446061-disposeoslgeterrdescupp): Disposes of a universal procedure pointer to an object callback get error descriptor function.
- [DisposeOSLGetMarkTokenUPP](https://developer.apple.com/documentation/coreservices/1442377-disposeoslgetmarktokenupp): Disposes of a universal procedure pointer to an object callback get mark function.
- [DisposeOSLMarkUPP](https://developer.apple.com/documentation/coreservices/1449253-disposeoslmarkupp): Disposes of a universal procedure pointer to an object callback mark function.
- [InvokeAECoerceDescUPP](https://developer.apple.com/documentation/coreservices/1445450-invokeaecoercedescupp): Calls a universal procedure pointer to a function that coerces data stored in a descriptor.
- [InvokeAECoercePtrUPP](https://developer.apple.com/documentation/coreservices/1447079-invokeaecoerceptrupp): Calls a universal procedure pointer to a function that coerces data stored in a buffer.
- [InvokeAEDisposeExternalUPP](https://developer.apple.com/documentation/coreservices/1441717-invokeaedisposeexternalupp): Calls a dispose external universal procedure pointer.
- [InvokeAEEventHandlerUPP](https://developer.apple.com/documentation/coreservices/1446585-invokeaeeventhandlerupp): Calls an event handler universal procedure pointer.
- [InvokeOSLAccessorUPP](https://developer.apple.com/documentation/coreservices/1448978-invokeoslaccessorupp): Calls an object accessor universal procedure pointer.
- [InvokeOSLAdjustMarksUPP](https://developer.apple.com/documentation/coreservices/1448506-invokeosladjustmarksupp): Calls an object callback adjust marks universal procedure pointer.
- [InvokeOSLCompareUPP](https://developer.apple.com/documentation/coreservices/1443110-invokeoslcompareupp): Calls an object callback comparison universal procedure pointer.
- [InvokeOSLCountUPP](https://developer.apple.com/documentation/coreservices/1448030-invokeoslcountupp): Calls an object callback count universal procedure pointer.
- [InvokeOSLDisposeTokenUPP](https://developer.apple.com/documentation/coreservices/1443963-invokeosldisposetokenupp): Calls an object callback dispose token universal procedure pointer.
- [InvokeOSLGetErrDescUPP](https://developer.apple.com/documentation/coreservices/1448420-invokeoslgeterrdescupp): Calls an object callback get error descriptor universal procedure pointer.
- [InvokeOSLGetMarkTokenUPP](https://developer.apple.com/documentation/coreservices/1441894-invokeoslgetmarktokenupp): Calls an object callback get mark universal procedure pointer.
- [InvokeOSLMarkUPP](https://developer.apple.com/documentation/coreservices/1447444-invokeoslmarkupp): Calls an object callback mark universal procedure pointer.
- [NewAECoerceDescUPP](https://developer.apple.com/documentation/coreservices/1445885-newaecoercedescupp): Creates a new universal procedure pointer to a function that coerces data stored in a descriptor.
- [NewAECoercePtrUPP](https://developer.apple.com/documentation/coreservices/1449962-newaecoerceptrupp): Creates a new universal procedure pointer to a function that coerces data stored in a buffer.
- [NewAEDisposeExternalUPP](https://developer.apple.com/documentation/coreservices/1447774-newaedisposeexternalupp): Creates a new universal procedure pointer to a function that disposes of data stored in a buffer.
- [NewAEEventHandlerUPP](https://developer.apple.com/documentation/coreservices/1446862-newaeeventhandlerupp): Creates a new universal procedure pointer to an event handler function.
- [NewOSLAccessorUPP](https://developer.apple.com/documentation/coreservices/1449584-newoslaccessorupp): Creates a new universal procedure pointer to an object accessor function.
- [NewOSLAdjustMarksUPP](https://developer.apple.com/documentation/coreservices/1443347-newosladjustmarksupp): Creates a new universal procedure pointer to an object callback adjust marks function.
- [NewOSLCompareUPP](https://developer.apple.com/documentation/coreservices/1444603-newoslcompareupp): Creates a new universal procedure pointer to an object callback comparison function.
- [NewOSLCountUPP](https://developer.apple.com/documentation/coreservices/1448156-newoslcountupp): Creates a new universal procedure pointer to an object callback count function.
- [NewOSLDisposeTokenUPP](https://developer.apple.com/documentation/coreservices/1450027-newosldisposetokenupp): Creates a new universal procedure pointer to an object callback dispose token function.
- [NewOSLGetErrDescUPP](https://developer.apple.com/documentation/coreservices/1447934-newoslgeterrdescupp): Creates a new universal procedure pointer to an object callback get error descriptor function.
- [NewOSLGetMarkTokenUPP](https://developer.apple.com/documentation/coreservices/1445166-newoslgetmarktokenupp): Creates a new universal procedure pointer to an object callback get mark function.
- [NewOSLMarkUPP](https://developer.apple.com/documentation/coreservices/1446942-newoslmarkupp): Creates a new universal procedure pointer to an object callback mark function.

### Creating Descriptor Lists and Apple Event Records

- [AECreateList](https://developer.apple.com/documentation/coreservices/1448643-aecreatelist): Creates an empty descriptor list or Apple event record.

### Creating Object Specifiers

- [CreateCompDescriptor](https://developer.apple.com/documentation/coreservices/1449155-createcompdescriptor): Creates a comparison descriptor that specifies how to compare one or more Apple event objects with either another Apple event object or a descriptor.
- [CreateLogicalDescriptor](https://developer.apple.com/documentation/coreservices/1445212-createlogicaldescriptor): Creates a logical descriptor that specifies a logical operator and one or more logical terms for the Apple Event Manager to evaluate.
- [CreateObjSpecifier](https://developer.apple.com/documentation/coreservices/1450244-createobjspecifier): Assembles an object specifier that identifies one or more Apple event objects, from other descriptors.
- [CreateOffsetDescriptor](https://developer.apple.com/documentation/coreservices/1444957-createoffsetdescriptor): Creates an offset descriptor that specifies the position of an element in relation to the beginning or end of its container.
- [CreateRangeDescriptor](https://developer.apple.com/documentation/coreservices/1444087-createrangedescriptor): Creates a range descriptor that specifies a series of consecutive elements in the same container.

### Deallocating Memory for Descriptors

- [AEDisposeDesc](https://developer.apple.com/documentation/coreservices/1444208-aedisposedesc): Deallocates the memory used by a descriptor.

### Deallocating Memory for Tokens

- [AEDisposeToken](https://developer.apple.com/documentation/coreservices/1446783-aedisposetoken): Deallocates the memory used by a token.

### Deleting Descriptors

- [AEDeleteItem](https://developer.apple.com/documentation/coreservices/1447164-aedeleteitem): Deletes a descriptor from a descriptor list, causing all subsequent descriptors to move up one place.
- [AEDeleteKeyDesc](apple_event_manager/1806085-aedeletekeydesc.md): Deletes a keyword-specified parameter from an Apple event record.
- [AEDeleteParam](https://developer.apple.com/documentation/coreservices/1444338-aedeleteparam): Deletes a keyword-specified parameter from an Apple event record.

### Getting, Calling, and Removing Object Accessor Functions

- [AECallObjectAccessor](https://developer.apple.com/documentation/coreservices/1447059-aecallobjectaccessor): Invokes the appropriate object accessor function for a specific desired type and container type.
- [AEGetObjectAccessor](https://developer.apple.com/documentation/coreservices/1449054-aegetobjectaccessor): Gets an object accessor function from an object accessor dispatch table.
- [AEInstallObjectAccessor](https://developer.apple.com/documentation/coreservices/1447905-aeinstallobjectaccessor): Adds or replaces an entry for an object accessor function to an object accessor dispatch table.
- [AERemoveObjectAccessor](https://developer.apple.com/documentation/coreservices/1442552-aeremoveobjectaccessor): Removes an object accessor function from an object accessor dispatch table.

### Getting Data or Descriptors From Apple Events and Apple Event Records

- [AEGetAttributeDesc](https://developer.apple.com/documentation/coreservices/1450314-aegetattributedesc): Gets a copy of the descriptor for a specified Apple event attribute from an Apple event; typically used when your application needs to pass the descriptor on to another function.
- [AEGetAttributePtr](https://developer.apple.com/documentation/coreservices/1445109-aegetattributeptr): Gets a copy of the data for a specified Apple event attribute from an Apple event; typically used when your application needs to work with the data directly.
- [AEGetKeyDesc](apple_event_manager/1806211-aegetkeydesc.md): Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event record
- [AEGetKeyPtr](apple_event_manager/1806223-aegetkeyptr.md): Gets a copy of the data for a specified Apple event parameter from an Apple event record.
- [AEGetParamDesc](https://developer.apple.com/documentation/coreservices/1449233-aegetparamdesc): Gets a copy of the descriptor for a keyword-specified Apple event parameter from an Apple event or an Apple event record.
- [AEGetParamPtr](https://developer.apple.com/documentation/coreservices/1444069-aegetparamptr): Gets a copy of the data for a specified Apple event parameter from an Apple event or an Apple event record.

### Getting Information About the Apple Event Manager

- [AEManagerInfo](https://developer.apple.com/documentation/coreservices/1449373-aemanagerinfo): Provides information about the version of the Apple Event Manager currently available or the number of processes that are currently recording Apple events.

### Getting Items From Descriptor Lists

- [AEGetArray](https://developer.apple.com/documentation/coreservices/1445720-aegetarray): Extracts data from an Apple event array created with the `AEPutArray` function and stores it as a standard array of fixed size items in the specified buffer.
- [AEGetNthDesc](https://developer.apple.com/documentation/coreservices/1448326-aegetnthdesc): Copies a descriptor from a specified position in a descriptor list into a specified descriptor; typically used when your application needs to pass the extracted data to another function as a descriptor.
- [AEGetNthPtr](https://developer.apple.com/documentation/coreservices/1447539-aegetnthptr): Gets a copy of the data from a descriptor at a specified position in a descriptor list; typically used when your application needs to work with the extracted data directly.

### Getting the Sizes and Descriptor Types of Descriptors

- [AESizeOfAttribute](https://developer.apple.com/documentation/coreservices/1445764-aesizeofattribute): Gets the size and descriptor type of an Apple event attribute from a descriptor of type `AppleEvent`.
- [AESizeOfKeyDesc](apple_event_manager/1806296-aesizeofkeydesc.md): Gets the size and descriptor type of an Apple event parameter from a descriptor of type `AERecord`.
- [AESizeOfNthItem](https://developer.apple.com/documentation/coreservices/1447307-aesizeofnthitem): Gets the data size and descriptor type of the descriptor at a specified position in a descriptor list.
- [AESizeOfParam](https://developer.apple.com/documentation/coreservices/1449998-aesizeofparam): Gets the size and descriptor type of an Apple event parameter from a descriptor of type `AERecord` or `AppleEvent`.

### Initializing the Object Support Library

- [AEObjectInit](https://developer.apple.com/documentation/coreservices/1447372-aeobjectinit): Initializes the Object Support Library.
- [AESetObjectCallbacks](https://developer.apple.com/documentation/coreservices/1447756-aesetobjectcallbacks): Specifies the object callback functions for your application.

### Locating Processes on Remote Computers

Available starting in macOS version v10.3, these functions allow you to locate processes on remote computers (a task supported by the PPCToolbox in Mac OS 9).

- [AECreateRemoteProcessResolver](https://developer.apple.com/documentation/coreservices/1445692-aecreateremoteprocessresolver): Creates an object for resolving a list of remote processes.
- [AEDisposeRemoteProcessResolver](https://developer.apple.com/documentation/coreservices/1442572-aedisposeremoteprocessresolver): Disposes of an `AERemoteProcessResolverRef`.
- [AERemoteProcessResolverGetProcesses](https://developer.apple.com/documentation/coreservices/1444456-aeremoteprocessresolvergetproces): Returns an array of objects containing information about processes running on a remote machine.
- [AERemoteProcessResolverScheduleWithRunLoop](https://developer.apple.com/documentation/coreservices/1447259-aeremoteprocessresolverschedulew): Schedules a resolver for execution on a given run loop in a given mode.

### Managing Apple Event Dispatch Tables

- [AEGetEventHandler](https://developer.apple.com/documentation/coreservices/1445631-aegeteventhandler): Gets an event handler from an Apple event dispatch table.
- [AEInstallEventHandler](https://developer.apple.com/documentation/coreservices/1448596-aeinstalleventhandler): Adds an entry for an event handler to an Apple event dispatch table.
- [AERemoveEventHandler](https://developer.apple.com/documentation/coreservices/1445239-aeremoveeventhandler): Removes an event handler entry from an Apple event dispatch table.

### Managing Coercion Handler Dispatch Tables

- [AEGetCoercionHandler](https://developer.apple.com/documentation/coreservices/1445348-aegetcoercionhandler): Gets the coercion handler for a specified descriptor type.
- [AEInstallCoercionHandler](https://developer.apple.com/documentation/coreservices/1445548-aeinstallcoercionhandler): Installs a coercion handler in either the application or system coercion handler dispatch table.
- [AERemoveCoercionHandler](https://developer.apple.com/documentation/coreservices/1441907-aeremovecoercionhandler): Removes a coercion handler from a coercion handler dispatch table.

### Managing Special Handler Dispatch Tables

- [AEGetSpecialHandler](https://developer.apple.com/documentation/coreservices/1444274-aegetspecialhandler): Gets a specified handler from a special handler dispatch table.
- [AEInstallSpecialHandler](https://developer.apple.com/documentation/coreservices/1445532-aeinstallspecialhandler): Installs a callback function in a special handler dispatch table.
- [AERemoveSpecialHandler](https://developer.apple.com/documentation/coreservices/1447960-aeremovespecialhandler): Removes a handler from a special handler dispatch table.

### Operating On Descriptor Data

- [AEGetDescData](https://developer.apple.com/documentation/coreservices/1444427-aegetdescdata): Gets the data from the specified descriptor.
- [AEGetDescDataSize](https://developer.apple.com/documentation/coreservices/1450119-aegetdescdatasize): Gets the size, in bytes, of the data in the specified descriptor.
- [AEGetDescDataRange](https://developer.apple.com/documentation/coreservices/1446560-aegetdescdatarange): Retrieves a specified series of bytes from the specified descriptor.
- [AEReplaceDescData](https://developer.apple.com/documentation/coreservices/1446695-aereplacedescdata): Copies the specified data into the specified descriptor, replacing any previous data.

### Resolving Object Specifiers

- [AEResolve](https://developer.apple.com/documentation/coreservices/1449720-aeresolve): Resolves an object specifier.

### Creating Apple Event Structures in Memory

- [AEBuildAppleEvent](https://developer.apple.com/documentation/coreservices/1573757-aebuildappleevent): Constructs an entire Apple event in a single call.
- [AEBuildDesc](https://developer.apple.com/documentation/coreservices/1573758-aebuilddesc): Provides a facility for compiling AEBuild descriptor strings into Apple event descriptors (`AEDesc`).
- [AEBuildParameters](https://developer.apple.com/documentation/coreservices/1573755-aebuildparameters): Adds additional parameters or attributes to an existing Apple event.
- [AEPrintDescToHandle](https://developer.apple.com/documentation/coreservices/1445158-aeprintdesctohandle): Provides a pretty printer facility for displaying the contents of Apple event descriptors.
- [vAEBuildAppleEvent](https://developer.apple.com/documentation/coreservices/1441729-vaebuildappleevent): Allows you to encapsulate calls to `AEBuildAppleEvent` in a wrapper routine.
- [vAEBuildDesc](https://developer.apple.com/documentation/coreservices/1446775-vaebuilddesc): Allows you to encapsulate calls to `AEBuildDesc` in your own wrapper routines.
- [vAEBuildParameters](https://developer.apple.com/documentation/coreservices/1448040-vaebuildparameters): Allows you to encapsulate calls to `AEBuildParameters` in your own `stdarg`-style wrapper routines, using techniques similar to those allowed by vsprintf.

### Creating Apple Event Structures Using Streams

- [AEStreamClose](https://developer.apple.com/documentation/coreservices/1449821-aestreamclose): Closes and deallocates an `AEStreamRef`.
- [AEStreamCloseDesc](https://developer.apple.com/documentation/coreservices/1449272-aestreamclosedesc): Marks the end of a descriptor in an `AEStreamRef`.
- [AEStreamCloseList](https://developer.apple.com/documentation/coreservices/1448185-aestreamcloselist): Marks the end of a list of descriptors in an `AEStreamRef`.
- [AEStreamCloseRecord](https://developer.apple.com/documentation/coreservices/1449522-aestreamcloserecord): Marks the end of a record in an `AEStreamRef`.
- [AEStreamCreateEvent](https://developer.apple.com/documentation/coreservices/1446562-aestreamcreateevent): Creates a new Apple event and opens a stream for writing data to it.
- [AEStreamOpen](https://developer.apple.com/documentation/coreservices/1447732-aestreamopen): Opens a new `AEStreamRef` for use in building a descriptor.
- [AEStreamOpenDesc](https://developer.apple.com/documentation/coreservices/1446544-aestreamopendesc): Marks the beginning of a descriptor in an `AEStreamRef`.
- [AEStreamOpenEvent](https://developer.apple.com/documentation/coreservices/1445366-aestreamopenevent): Opens a stream for an existing Apple event.
- [AEStreamOpenKeyDesc](https://developer.apple.com/documentation/coreservices/1442897-aestreamopenkeydesc): Marks the beginning of a key descriptor in an `AEStreamRef`.
- [AEStreamOpenList](https://developer.apple.com/documentation/coreservices/1448594-aestreamopenlist): Marks the beginning of a descriptor list in an `AEStreamRef`.
- [AEStreamOpenRecord](https://developer.apple.com/documentation/coreservices/1447141-aestreamopenrecord): Marks the beginning of an Apple event record in an `AEStreamRef`.
- [AEStreamOptionalParam](https://developer.apple.com/documentation/coreservices/1444481-aestreamoptionalparam): Designates a parameter in an Apple event as optional.
- [AEStreamSetRecordType](https://developer.apple.com/documentation/coreservices/1447704-aestreamsetrecordtype): Sets the type of the most recently created record in an `AEStreamRef`.
- [AEStreamWriteAEDesc](https://developer.apple.com/documentation/coreservices/1448487-aestreamwriteaedesc): Copies an existing descriptor into an `AEStreamRef`.
- [AEStreamWriteData](https://developer.apple.com/documentation/coreservices/1442610-aestreamwritedata): Appends data to the current descriptor in an `AEStreamRef`.
- [AEStreamWriteDesc](https://developer.apple.com/documentation/coreservices/1450387-aestreamwritedesc): Appends the data for a complete descriptor to an `AEStreamRef`.
- [AEStreamWriteKey](https://developer.apple.com/documentation/coreservices/1448750-aestreamwritekey): Marks the beginning of a keyword/descriptor pair for a descriptor in an `AEStreamRef`.
- [AEStreamWriteKeyDesc](https://developer.apple.com/documentation/coreservices/1442568-aestreamwritekeydesc): Writes a complete keyword/descriptor pair to an `AEStreamRef`.

### Working With Lower Level Apple Event Functions

- [AEGetRegisteredMachPort](https://developer.apple.com/documentation/coreservices/1449736-aegetregisteredmachport): Returns the Mach port (in the form of a `mach_port_t`) that was registered with the bootstrap server for this process.
- [AEDecodeMessage](https://developer.apple.com/documentation/coreservices/1447827-aedecodemessage): Decodes a Mach message and converts it into an Apple event and its related reply.
- [AESendMessage](https://developer.apple.com/documentation/coreservices/1442994-aesendmessage): Sends an AppleEvent to a target process without some of the overhead required by `AESend`.
- [AEProcessMessage](https://developer.apple.com/documentation/coreservices/1444387-aeprocessmessage): Decodes and dispatches a low level Mach message event to an event handler, including packaging and returning the reply to the sender.

### Serializing Apple Event Data

- [AESizeOfFlattenedDesc](https://developer.apple.com/documentation/coreservices/1447305-aesizeofflatteneddesc): Returns the amount of buffer space needed to store the descriptor after flattening it.
- [AEFlattenDesc](https://developer.apple.com/documentation/coreservices/1441808-aeflattendesc): Flattens the specified descriptor and stores the data in the supplied buffer.
- [AEUnflattenDesc](https://developer.apple.com/documentation/coreservices/1448997-aeunflattendesc): Deprecated. Unflattens the data in the passed buffer and creates a descriptor from it.

### Miscellaneous

- [AECheckIsRecord](https://developer.apple.com/documentation/coreservices/1444011-aecheckisrecord): Determines whether a descriptor is truly an `AERecord`.
- [AEInitializeDesc](https://developer.apple.com/documentation/coreservices/1446047-aeinitializedesc): Initializes a new descriptor.

### Callbacks

- [AERemoteProcessResolverCallback](https://developer.apple.com/documentation/coreservices/aeremoteprocessresolvercallback): Defines a pointer to a function the Apple Event Manager calls when the asynchronous execution of a remote process resolver completes, either due to success or failure, after a call to the `AERemoteProcessResolverScheduleWithRunLoop` function. Your callback function can use the reference passed to it to get the remote process information.
- [AEDisposeExternalProcPtr](https://developer.apple.com/documentation/coreservices/aedisposeexternalprocptr): Defines a pointer to a function the Apple Event Manager calls to dispose of a descriptor created by the `AECreateDescFromExternalPtr` function. Your callback function disposes of the buffer you originally passed to that function.
- [AECoerceDescProcPtr](https://developer.apple.com/documentation/coreservices/aecoercedescprocptr): Defines a pointer to a function that coerces data stored in a descriptor. Your descriptor coercion callback function coerces the data from the passed descriptor to the specified type, returning the coerced data in a second descriptor.
- [AECoercePtrProcPtr](https://developer.apple.com/documentation/coreservices/aecoerceptrprocptr): Defines a pointer to a function that coerces data stored in a buffer. Your pointer coercion callback routine coerces the data from the passed buffer to the specified type, returning the coerced data in a descriptor.
- [AEEventHandlerProcPtr](https://developer.apple.com/documentation/coreservices/aeeventhandlerprocptr): Defines a pointer to a function that handles one or more Apple events. Your Apple event handler function performs any action requested by the Apple event, adds parameters to the reply Apple event if appropriate (possibly including error information), and returns a result code.
- [OSLAccessorProcPtr](https://developer.apple.com/documentation/coreservices/oslaccessorprocptr): Your object accessor function either finds elements or properties of an Apple event object.
- [OSLAdjustMarksProcPtr](https://developer.apple.com/documentation/coreservices/osladjustmarksprocptr): Defines a pointer to an adjust marks callback function. Your adjust marks function unmarks objects previously marked by a call to your marking function.
- [OSLCompareProcPtr](https://developer.apple.com/documentation/coreservices/oslcompareprocptr): Defines a pointer to an object comparison callback function. Your object comparison function compares one Apple event object to another or to the data for a descriptor.
- [OSLCountProcPtr](https://developer.apple.com/documentation/coreservices/oslcountprocptr): Defines a pointer to an object counting callback function. Your object counting function counts the number of Apple event objects of a specified class in a specified container object.
- [OSLDisposeTokenProcPtr](https://developer.apple.com/documentation/coreservices/osldisposetokenprocptr): Defines a pointer to a dispose token callback function. Your dispose token function, required only if you use a complex token format, disposes of the specified token.
- [OSLGetErrDescProcPtr](https://developer.apple.com/documentation/coreservices/oslgeterrdescprocptr): Defines a pointer to an error descriptor callback function. Your error descriptor callback function supplies a pointer to an address where the Apple Event Manager can store the current descriptor if an error occurs during a call to the `AEResolve` function.
- [OSLGetMarkTokenProcPtr](https://developer.apple.com/documentation/coreservices/oslgetmarktokenprocptr): Defines a pointer to a mark token callback function. Your mark token function returns a mark token.
- [OSLMarkProcPtr](https://developer.apple.com/documentation/coreservices/oslmarkprocptr): Defines a pointer to an object marking callback function. Your object-marking function marks a specific Apple event object.

### Data Types

- [AEArrayData](https://developer.apple.com/documentation/coreservices/1443170-aearraydata): Stores array information to be put into a descriptor listwith the `AEPutArray` functionor extracted from a descriptor list with the `AEGetArray` function.
- [AEBuildError](https://developer.apple.com/documentation/coreservices/aebuilderror): Defines a structure for storing additional error codeinformation for “AEBuild” routines.
- [AEDesc](https://developer.apple.com/documentation/coreservices/aedesc): Stores data and an accompanying descriptor type to formthe basic building block of all Apple Events.
- [AEKeyDesc](https://developer.apple.com/documentation/coreservices/aekeydesc): Associates a keyword with a descriptor to form a keyword-specifieddescriptor.
- [AERemoteProcessResolverContext](https://developer.apple.com/documentation/coreservices/aeremoteprocessresolvercontext): Supplied as a parameter when performing asynchronous resolutionof remote processes.
- [ccntTokenRecord](https://developer.apple.com/documentation/coreservices/ccnttokenrecord): Stores token information used by the AEResolve functionwhile locating a range of objects.
- [IntlText](https://developer.apple.com/documentation/coreservices/intltext): Deprecated. International text consists of an ordered series of bytes, beginning with a 4-byte language code and a 4-byte script code that together determine the format of the bytes that follow.
- [OffsetArray](https://developer.apple.com/documentation/coreservices/offsetarray): Specifies offsets of ranges of text. Not typically used by developers.
- [TextRange](https://developer.apple.com/documentation/coreservices/textrange): Specifies a range of text. Not typically used by developers.
- [TextRangeArray](https://developer.apple.com/documentation/coreservices/textrangearray): Specifies an array of text ranges. Not typically used by developers.
- [TScriptingSizeResource](https://developer.apple.com/documentation/coreservices/tscriptingsizeresource): Defines a data type to store stack and heap information. Not typically used by developers.
- [WritingCode](https://developer.apple.com/documentation/coreservices/writingcode)
- [AEAddressDesc](https://developer.apple.com/documentation/coreservices/aeaddressdesc): A descriptor that contains the address of an application, used to describe the target application for an Apple event.
- [AEArrayDataPointer](https://developer.apple.com/documentation/coreservices/aearraydatapointer): A pointer to a union of type `AEArrayData`.
- [AEArrayType](https://developer.apple.com/documentation/coreservices/aearraytype): Stores a value that specifies an array type.
- [AECoerceDescUPP](https://developer.apple.com/documentation/coreservices/aecoercedescupp): Defines a data type for the universal procedure pointer for the `AECoerceDescProcPtr` callback function pointer.
- [AECoercePtrUPP](https://developer.apple.com/documentation/coreservices/aecoerceptrupp): Defines a data type for the universal procedure pointer for the `AECoercePtrProcPtr` callback function pointer.
- [AECoercionHandlerUPP](https://developer.apple.com/documentation/coreservices/aecoercionhandlerupp): Defines a data type for the universal procedure pointer for the `AECoercionHandlerUPP` callback function pointer.
- [AEDataStorage](https://developer.apple.com/documentation/coreservices/aedatastorage): A pointer to an opaque data type that provides storage for an `AEDesc` descriptor.
- [AEDataStorageType](https://developer.apple.com/documentation/coreservices/aedatastoragetype): An opaque data type used to store data in Apple event descriptors.
- [AEDescList](https://developer.apple.com/documentation/coreservices/aedesclist): A descriptor whose data consists of a list of one or more descriptors.
- [AEEventSource](https://developer.apple.com/documentation/coreservices/aeeventsource): A data type for values that specify how an Apple event was delivered.
- [AEDisposeExternalUPP](https://developer.apple.com/documentation/coreservices/aedisposeexternalupp): Defines a universal procedure pointer to a function the Apple Event Manager calls to dispose of a descriptor created by the `AECreateDescFromExternalPtr` function.
- [AEEventClass](https://developer.apple.com/documentation/coreservices/aeeventclass): Specifies the event class of an Apple event.
- [AEEventHandlerUPP](https://developer.apple.com/documentation/coreservices/aeeventhandlerupp): Defines a data type for the universal procedure pointer for the `AEEventHandlerUPP` callback function pointer.
- [AEEventID](https://developer.apple.com/documentation/coreservices/aeeventid): Specifies the event ID of an Apple event.
- [AEKeyword](https://developer.apple.com/documentation/coreservices/aekeyword): A four-character code that uniquely identifies a descriptor in an Apple event record or an Apple event.
- [AERecord](https://developer.apple.com/documentation/coreservices/aerecord): A descriptor whose data is a list of keyword-specified descriptors.
- [AERemoteProcessResolverRef](https://developer.apple.com/documentation/coreservices/aeremoteprocessresolverref): An opaque reference to an object that encapsulates the mechanism for obtaining a list of processes running on a remote machine.
- [AEReturnID](https://developer.apple.com/documentation/coreservices/aereturnid): Specifies a return ID for a created Apple event.
- [AESendOptions](apple_event_manager/aesendoptions.md): Deprecated. This data type is not available.
- [AESendPriority](https://developer.apple.com/documentation/coreservices/aesendpriority): Specifies the processing priority for a sent Apple event.
- [AEStreamRef](https://developer.apple.com/documentation/coreservices/aestreamref): An opaque data structure for storing stream-based descriptor data.
- [AETransactionID](https://developer.apple.com/documentation/coreservices/aetransactionid): Specifies a transaction ID.
- [AppleEvent](https://developer.apple.com/documentation/coreservices/appleevent): A descriptor whose data is a list of descriptors containing both attributes and parameters that make up an Apple event.
- [DescType](https://developer.apple.com/documentation/coreservices/desctype): Specifies the type of the data stored in an `AEDesc` descriptor.
- [OffsetArrayHandle](https://developer.apple.com/documentation/coreservices/offsetarrayhandle): Defines a data type that points to an `OffsetArray`. Not typically used by developers.
- [OSLAccessorUPP](https://developer.apple.com/documentation/coreservices/oslaccessorupp): Defines a data type for the universal procedure pointer for the `OSLAccessorProcPtr` callback function pointer.
- [OSLAdjustMarksUPP](https://developer.apple.com/documentation/coreservices/osladjustmarksupp): Defines a data type for the universal procedure pointer for the `OSLAdjustMarksProcPtr` callback function pointer.
- [OSLCompareUPP](https://developer.apple.com/documentation/coreservices/oslcompareupp): Defines a data type for the universal procedure pointer for the `OSLCompareProcPtr` callback function pointer.
- [OSLCountUPP](https://developer.apple.com/documentation/coreservices/oslcountupp): Defines a data type for the universal procedure pointer for the `OSLCountProcPtr` callback function pointer.
- [OSLDisposeTokenUPP](https://developer.apple.com/documentation/coreservices/osldisposetokenupp): Defines a data type for the universal procedure pointer for the `OSLDisposeTokenProcPtr` callback function pointer.
- [OSLGetErrDescUPP](https://developer.apple.com/documentation/coreservices/oslgeterrdescupp): Defines a data type for the universal procedure pointer for the `OSLGetErrDescProcPtr` callback function pointer.
- [OSLGetMarkTokenUPP](https://developer.apple.com/documentation/coreservices/oslgetmarktokenupp): Defines a data type for the universal procedure pointer for the `OSLGetMarkTokenProcPtr` callback function pointer.
- [OSLMarkUPP](https://developer.apple.com/documentation/coreservices/oslmarkupp): Defines a data type for the universal procedure pointer for the `OSLMarkProcPtr` callback function pointer.

### Constants

- [AEBuildErrorCode](https://developer.apple.com/documentation/coreservices/aebuilderrorcode): Represents syntax errors found by an Apple Event build routine.
- [AESendMode](https://developer.apple.com/documentation/coreservices/aesendmode): Specify send preferences to the `AESend` function.
- [Apple Event Recording Event ID Constants](https://developer.apple.com/documentation/coreservices/1527224-apple_event_recording_event_id_c): Specify event IDs for events that deal with Apple event recording.
- [cAEList](https://developer.apple.com/documentation/coreservices/1556411-caelist)
- [Callback Constants for the AEResolve Function](https://developer.apple.com/documentation/coreservices/1572741-callback_constants_for_the_aeres): Specify supported callback features to the `AEResolve` function.
- [cInsertionLoc](https://developer.apple.com/documentation/coreservices/1556389-cinsertionloc)
- [cKeystroke](https://developer.apple.com/documentation/coreservices/1556385-ckeystroke)
- [Comparison Operator Constants](apple_event_manager/comparison_operator_constants.md): Specify a comparison operation to perform on two operands.
- [Constants for Object Specifiers, Positions, and Logical and Comparison Operations](https://developer.apple.com/documentation/coreservices/1572744-constants_for_object_specifiers_): Specify the types of the four keyword-specified descriptors that make up the data in an object specifier, as well as constants for position, logical operations, and comparison operations.
- [cURL](https://developer.apple.com/documentation/coreservices/1556375-curl)
- [cVersion](apple_event_manager/cversion.md)
- [Data Array Constants](https://developer.apple.com/documentation/coreservices/1542848-data_array_constants): Specify an array type for storing or extracting descriptor lists with the `AEPutArray` and `AEGetArray` functions.
- [Descriptor Type Constants](https://developer.apple.com/documentation/coreservices/1542788-descriptor_type_constants): Specify types for descriptors.
- [eScheme](https://developer.apple.com/documentation/coreservices/1556397-escheme)
- [Event Class Constants](https://developer.apple.com/documentation/coreservices/1527210-event_class_constants): Specify the event class for an Apple event.
- [Event ID Constants](https://developer.apple.com/documentation/coreservices/1527223-event_id_constants): Specify the event ID for an Apple event.
- [Event Source Constants](https://developer.apple.com/documentation/coreservices/1527201-event_source_constants): Identify how an Apple event was delivered.
- [Factoring Constants](https://developer.apple.com/documentation/coreservices/1542928-factoring_constants)
- [ID Constants for the AECreateAppleEvent Function](https://developer.apple.com/documentation/coreservices/1542799-id_constants_for_the_aecreateapp): Specify values for the ID parameters of the `AECreateAppleEvent` function.
- [Key Form and Descriptor Type Object Specifier Constants](https://developer.apple.com/documentation/coreservices/1572731-key_form_and_descriptor_type_obj): Specify possible values for the `keyAEKeyForm` field of an object specifier, as well as descriptor types used in resolving object specifiers.
- [Keyword Attribute Constants](https://developer.apple.com/documentation/coreservices/1542920-keyword_attribute_constants): Specify keyword values for Apple event attributes.
- [Keyword Parameter Constants](https://developer.apple.com/documentation/coreservices/1527206-keyword_parameter_constants): Specify keyword values for Apple event parameters, as well as information for the `AEManagerInfo` function to retrieve. Some common key word values are shown here.
- [Launch Apple Event Constants](https://developer.apple.com/documentation/coreservices/1556410-launch_apple_event_constants): In a `kAEOpenApplication` event, specify information about how the receiving application was launched.
- [Numeric Descriptor Type Constants](https://developer.apple.com/documentation/coreservices/1542872-numeric_descriptor_type_constant): Specify types for numeric descriptors.
- [Object Class ID Constants](https://developer.apple.com/documentation/coreservices/1556368-object_class_id_constants): Specify the object class for an Apple event object.
- [Other Descriptor Type Constants](https://developer.apple.com/documentation/coreservices/1542760-other_descriptor_type_constants): Specify types for Boolean and character descriptors.
- [Priority Constants for the AESend Function (Deprecated in macOS)](https://developer.apple.com/documentation/coreservices/1542840-priority_constants_for_the_aesen): Specify a value for the `sendPriority` parameter of the `AESend` function.
- [Remote Process Dictionary Keys](apple_event_manager/remote_process_dictionary_keys.md): Used to extract information from dictionaries with entries that describe remote processes.
- [Special Handler Callback Constants](https://developer.apple.com/documentation/coreservices/1572726-special_handler_callback_constan): Specify an object callback function to install, get, or remove from the special handler dispatch table.
- [Timeout Constants](https://developer.apple.com/documentation/coreservices/1542814-timeout_constants): Specify a timeout value.
- [Whose Test Constants](apple_event_manager/whose_test_constants.md)
- [kAEDoObjectsExist](apple_event_manager/kaedoobjectsexist.md)
- [kAEDebugPOSTHeader](https://developer.apple.com/documentation/coreservices/1542854-kaedebugpostheader)
- [kAEGetPrivilegeSelection](apple_event_manager/kaegetprivilegeselection.md)
- [kAEHandleArray](https://developer.apple.com/documentation/coreservices/1542886-kaehandlearray)
- [kAEInfo](https://developer.apple.com/documentation/coreservices/1556393-kaeinfo)
- [kAEInternetSuite](https://developer.apple.com/documentation/coreservices/1556388-kaeinternetsuite)
- [kAEISGetURL](https://developer.apple.com/documentation/coreservices/1556362-kaeisgeturl)
- [kAEISHTTPSearchArgs](https://developer.apple.com/documentation/coreservices/1556404-kaeishttpsearchargs)
- [kAELogOut](https://developer.apple.com/documentation/coreservices/1556395-kaelogout)
- [kAEMenuClass](https://developer.apple.com/documentation/coreservices/1556392-kaemenuclass)
- [kAEMouseClass](https://developer.apple.com/documentation/coreservices/1556409-kaemouseclass)
- [kAENonmodifiable](https://developer.apple.com/documentation/coreservices/1556386-kaenonmodifiable)
- [kAEQDNotOr](https://developer.apple.com/documentation/coreservices/1556377-kaeqdnotor)
- [kAESetPosition](https://developer.apple.com/documentation/coreservices/1556407-kaesetposition)
- [kAESocks4Protocol](https://developer.apple.com/documentation/coreservices/1542847-kaesocks4protocol)
- [kAEUseHTTPProxyAttr](https://developer.apple.com/documentation/coreservices/1542824-kaeusehttpproxyattr): Web Services Proxy support—these constants should be added as attributes of the event that is being sent (not as part of the direct object).
- [kAEUserTerminology](https://developer.apple.com/documentation/coreservices/1457902-kaeuserterminology)
- [kAEUseSocksAttr](https://developer.apple.com/documentation/coreservices/1542933-kaeusesocksattr)
- [kAEUTHasReturningParam](https://developer.apple.com/documentation/coreservices/1457911-kaeuthasreturningparam)
- [kAEZoomIn](https://developer.apple.com/documentation/coreservices/1556365-kaezoomin)
- [kBySmallIcon](https://developer.apple.com/documentation/coreservices/1556391-kbysmallicon)
- [kConnSuite](https://developer.apple.com/documentation/coreservices/1556369-kconnsuite)
- [keyAEAngle](https://developer.apple.com/documentation/coreservices/1556380-keyaeangle)
- [keyAEBaseAddr](https://developer.apple.com/documentation/coreservices/1556383-keyaebaseaddr)
- [keyAEDoScale](https://developer.apple.com/documentation/coreservices/1556387-keyaedoscale)
- [keyAEHiliteRange](https://developer.apple.com/documentation/coreservices/1556379-keyaehiliterange)
- [keyAEKeyword](https://developer.apple.com/documentation/coreservices/1556374-keyaekeyword)
- [keyAEPropData](apple_event_manager/keyaepropdata.md)
- [keyAESuiteID](https://developer.apple.com/documentation/coreservices/1556370-keyaesuiteid)
- [keyMenuID](https://developer.apple.com/documentation/coreservices/1556381-keymenuid)
- [keyMiscellaneous](https://developer.apple.com/documentation/coreservices/1556399-keymiscellaneous)
- [keyReplyPortAttr](https://developer.apple.com/documentation/coreservices/1571648-keyreplyportattr)
- [keySOAPStructureMetaData](https://developer.apple.com/documentation/coreservices/1542797-keysoapstructuremetadata)
- [keyUserNameAttr](https://developer.apple.com/documentation/coreservices/1542780-keyusernameattr)
- [kFAServerApp](https://developer.apple.com/documentation/coreservices/1556384-kfaserverapp)
- [kLaunchToGetTerminology](https://developer.apple.com/documentation/coreservices/1457909-klaunchtogetterminology)
- [kNextBody](https://developer.apple.com/documentation/coreservices/1556402-knextbody)
- [kOSIZDontOpenResourceFile](https://developer.apple.com/documentation/coreservices/1457903-kosizdontopenresourcefile)
- [kReadExtensionTermsMask](https://developer.apple.com/documentation/coreservices/1457896-kreadextensiontermsmask)
- [kSOAP1999Schema](https://developer.apple.com/documentation/coreservices/1542943-ksoap1999schema)
- [kTextServiceClass](https://developer.apple.com/documentation/coreservices/1556406-ktextserviceclass)
- [kTSMHiliteCaretPosition](https://developer.apple.com/documentation/coreservices/1556398-ktsmhilitecaretposition): Specify text highlighting information.
- [kTSMOutsideOfBody](https://developer.apple.com/documentation/coreservices/1556371-ktsmoutsideofbody)
- [pArcAngle](https://developer.apple.com/documentation/coreservices/1556376-parcangle)
- [pFormula](https://developer.apple.com/documentation/coreservices/1556373-pformula)
- [pNewElementLoc](https://developer.apple.com/documentation/coreservices/1556400-pnewelementloc)
- [pScheme](https://developer.apple.com/documentation/coreservices/1556408-pscheme)
- [pTextStyles](https://developer.apple.com/documentation/coreservices/1556367-ptextstyles)
- [typeAEText](https://developer.apple.com/documentation/coreservices/1556366-typeaetext)
- [typeApplicationBundleID](https://developer.apple.com/documentation/coreservices/1542896-typeapplicationbundleid): For specifying a target application by bundle ID.
- [typeFinderWindow](apple_event_manager/typefinderwindow.md)
- [typeHIMenu](https://developer.apple.com/documentation/coreservices/1556372-typehimenu)
- [typeKernelProcessID](https://developer.apple.com/documentation/coreservices/1542936-typekernelprocessid): For specifying an application by UNIX process ID.
- [typeMachPort](apple_event_manager/typemachport.md): For specifying a Mach port.
- [typeMeters](https://developer.apple.com/documentation/coreservices/1556382-typemeters)
- [typePixelMap](apple_event_manager/typepixelmap.md)
- [typeReplyPortAttr](https://developer.apple.com/documentation/coreservices/1571649-typereplyportattr)
- [typeSessionID](apple_event_manager/typesessionid.md)
- [typeTIFF](https://developer.apple.com/documentation/coreservices/1556405-typetiff)
- [typeUnicodeText](https://developer.apple.com/documentation/coreservices/1542918-typeunicodetext)

### Result Codes

- [noPortErr](https://developer.apple.com/documentation/coreservices/1560074-anonymous/noporterr): Client hasn’t set `'SIZE'` resource toindicate awareness of high-level events
- [destPortErr](https://developer.apple.com/documentation/coreservices/1560074-anonymous/destporterr): Server hasn’t set `'SIZE'` resource toindicate awareness of high-level events, or else is not present
- [sessClosedErr](https://developer.apple.com/documentation/coreservices/1560074-anonymous/sessclosederr): The `kAEDontReconnect` flagin the `sendMode` parameterwas set and the server quit, then restarted
- [errAECoercionFail](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraecoercionfail): Data could not be coerced to the requesteddescriptor type
- [errAEDescNotFound](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraedescnotfound): Descriptor was not found
- [errAECorruptData](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraecorruptdata): Data in an Apple event could not be read
- [errAEWrongDataType](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraewrongdatatype): Wrong descriptor type
- [errAENotAEDesc](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenotaedesc): Not a valid descriptor
- [errAEBadListItem](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraebadlistitem): Operation involving a list item failed
- [errAENewerVersion](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenewerversion): Need a newer version of the Apple EventManager
- [errAENotAppleEvent](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenotappleevent): The event is not in AppleEvent format.
- [errAEEventNotHandled](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeeventnothandled): Event wasn’t handled by an Apple eventhandler
- [errAEReplyNotValid](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraereplynotvalid): `AEResetTimer` was passed an invalid reply
- [errAEUnknownSendMode](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeunknownsendmode): Invalid sending mode was passed
- [errAEWaitCanceled](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraewaitcanceled): User canceled out of wait loop for replyor receipt
- [errAETimeout](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraetimeout): Apple event timed out
- [errAENoUserInteraction](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenouserinteraction): No user interaction allowed
- [errAENotASpecialFunction](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenotaspecialfunction): Wrong keyword for a special function
- [errAEParamMissed](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeparammissed): A required parameter was not accessed.
- [errAEUnknownAddressType](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeunknownaddresstype): Unknown Apple event address type
- [errAEHandlerNotFound](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraehandlernotfound): No handler found for an Apple event
- [errAEReplyNotArrived](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraereplynotarrived): Reply has not yet arrived
- [errAEIllegalIndex](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeillegalindex): Not a valid list index
- [errAEImpossibleRange](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeimpossiblerange): The range is not valid because it is impossiblefor a range to include the first and last objects that were specified;an example is a range in which the offset of the first object is greaterthan the offset of the last object
- [errAEWrongNumberArgs](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraewrongnumberargs): The number of operands provided for the `kAENOT` logicaloperator is not 1
- [errAEAccessorNotFound](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeaccessornotfound): There is no object accessor function forthe specified object class and container type
- [errAENoSuchLogical](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenosuchlogical): The logical operator in a logical descriptoris not `kAEAND`, `kAEOR`,or `kAENOT`
- [errAEBadTestKey](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraebadtestkey): The descriptor in a test key is neithera comparison descriptor nor a logical descriptor
- [errAENotAnObjectSpec](apple_event_manager/erraenotanobjectspec.md): The `objSpecifier` parameterof `AEResolve` is not anobject specifier
- [errAENoSuchObject](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenosuchobject): Runtime resolution of an object failed.
- [errAENegativeCount](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraenegativecount): An object-counting function returned a negativeresult
- [errAEEmptyListContainer](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeemptylistcontainer): The container for an Apple event objectis specified by an empty list
- [errAEUnknownObjectType](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeunknownobjecttype): The object type isn’t recognized
- [errAERecordingIsAlreadyOn](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraerecordingisalreadyon): Recording is already on
- [errAEReceiveTerminate](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraereceiveterminate): Break out of all levels of `AEReceive` tothe topmost (1.1 or greater)
- [errAEReceiveEscapeCurrent](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraereceiveescapecurrent): Break out of lowest level only of `AEReceive` (1.1or greater)
- [errAEEventFiltered](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeeventfiltered): Event has been filtered and should not bepropagated (1.1 or greater)
- [errAEDuplicateHandler](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraeduplicatehandler): Attempt to install handler in table foridentical class and ID (1.1 or greater)
- [errAEStreamBadNesting](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraestreambadnesting): Nesting violation while streaming
- [errAEStreamAlreadyConverted](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraestreamalreadyconverted): Attempt to convert a stream that has alreadybeen converted
- [errAEDescIsNull](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraedescisnull): Attempt to perform an invalid operationon a null descriptor
- [errAEBuildSyntaxError](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraebuildsyntaxerror): `AEBuildDesc` andrelated functions detected a syntax error
- [errAEBufferTooSmall](https://developer.apple.com/documentation/coreservices/1560059-anonymous/erraebuffertoosmall): Buffer for `AEFlattenDesc` toosmall
- [errASCantConsiderAndIgnore](https://developer.apple.com/documentation/coreservices/1559945-anonymous/errascantconsiderandignore): Can’t both consider and ignore \<attribute\>.
- [errASCantCompareMoreThan32k](https://developer.apple.com/documentation/coreservices/1559945-anonymous/errascantcomparemorethan32k): Can’t perform operation on text longerthan 32K bytes.
- [errASTerminologyNestingTooDeep](https://developer.apple.com/documentation/coreservices/1559945-anonymous/errasterminologynestingtoodeep): Tell statements are nested too deeply.
- [errASIllegalFormalParameter](https://developer.apple.com/documentation/coreservices/1559945-anonymous/errasillegalformalparameter): \<name\> is illegal as a formal parameter.
- [errASParameterNotForEvent](https://developer.apple.com/documentation/coreservices/1559945-anonymous/errasparameternotforevent): \<name\> is not a parameter name for the event \<event\>.
- [errASNoResultReturned](https://developer.apple.com/documentation/coreservices/1559945-anonymous/errasnoresultreturned): No result was returned for some argumentof this expression.
- [errAEEventFailed](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraeeventfailed): Apple event handler failed.
- [errAETypeError](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraetypeerror): A descriptor type mismatch occurred.
- [errAEBadKeyForm](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraebadkeyform): Invalid key form.
- [errAENotModifiable](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenotmodifiable): Can't set \<object or data\> to \<object or data\>. Access not allowed.
- [errAEPrivilegeError](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraeprivilegeerror): A privilege violation occurred.
- [errAEReadDenied](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraereaddenied): The read operation was not allowed.
- [errAEWriteDenied](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraewritedenied): Can't set \<object or data\> to \<object or data\>.
- [errAEIndexTooLarge](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraeindextoolarge): The index of the event is too large to bevalid.
- [errAENotAnElement](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenotanelement): The specified object is a property, notan element.
- [errAECantSupplyType](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraecantsupplytype): Can’t supply the requested descriptortype for the data.
- [errAECantHandleClass](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraecanthandleclass): The Apple event handler can’t handle objectsof this class.
- [errAEInTransaction](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraeintransaction): Couldn’t handle this command because itwasn’t part of the current transaction.
- [errAENoSuchTransaction](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenosuchtransaction): The transaction to which this command belongedisn’t a valid transaction.
- [errAENoUserSelection](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenouserselection): There is no user selection.
- [errAENotASingleObject](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenotasingleobject): Handler only handles single objects.
- [errAECantUndo](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraecantundo): Can’t undo the previous Apple event oruser action.
- [errAENotAnEnumMember](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraenotanenummember): Enumerated value in `SetData` is notallowed for this property
- [errAECantPutThatThere](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraecantputthatthere): In make new, duplicate, etc. class can'tbe an element of container
- [errAEPropertiesClash](https://developer.apple.com/documentation/coreservices/1560036-anonymous/erraepropertiesclash): Illegal combination of properties settingsfor SetData, make new, or duplicate

## See Also

### Managers

- [ColorSync Manager](colorsync_manager.md)
- [Speech Synthesis Manager](speech_synthesis_manager.md)
