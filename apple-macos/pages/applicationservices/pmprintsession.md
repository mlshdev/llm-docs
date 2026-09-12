> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/pmprintsession](https://developer.apple.com/documentation/applicationservices/pmprintsession)

# PMPrintSession (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

An opaque type that stores information about a print job.

## Declaration

```swift
typealias PMPrintSession = OpaquePointer
```

<a id="discussion"></a>

## Discussion

A printing session object contains information that’s needed by the page format and print settings objects, such as default page format and print settings values. For this reason, some printing functions can be called only after you have created a printing session object. For example, setting defaults for or validating page format and print settings objects can only be done after you have created a printing session object. Your application creates a printing session object using the function [PMCreateSession(\_:)](1463247-pmcreatesession.md).

You can use a printing session to implement multithreaded printing, and you can create multiple sessions within a single-threaded application. If your application does not use sheets, then your application can open only one dialog at a time. Each printing session can have its own dialog, and settings changed in one dialog are independent of settings in any other dialog.

# PMPrintSession (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

An opaque type that stores information about a print job.

## Declaration

```objectivec
typedef struct OpaquePMPrintSession *PMPrintSession;
```

<a id="discussion"></a>

## Discussion

A printing session object contains information that’s needed by the page format and print settings objects, such as default page format and print settings values. For this reason, some printing functions can be called only after you have created a printing session object. For example, setting defaults for or validating page format and print settings objects can only be done after you have created a printing session object. Your application creates a printing session object using the function [PMCreateSession](1463247-pmcreatesession.md).

You can use a printing session to implement multithreaded printing, and you can create multiple sessions within a single-threaded application. If your application does not use sheets, then your application can open only one dialog at a time. Each printing session can have its own dialog, and settings changed in one dialog are independent of settings in any other dialog.
