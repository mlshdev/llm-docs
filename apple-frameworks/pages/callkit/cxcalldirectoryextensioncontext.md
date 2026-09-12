> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectoryextensioncontext](https://developer.apple.com/documentation/callkit/cxcalldirectoryextensioncontext)

# CXCallDirectoryExtensionContext (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

A programmatic interface for adding identification and blocking entries to a Call Directory app extension.

## Declaration

```swift
class CXCallDirectoryExtensionContext
```

<a id="overview"></a>

## Overview

The system doesn’t initialize [CXCallDirectoryExtensionContext](cxcalldirectoryextensioncontext.md) objects directly, but instead passes them as arguments to the [CXCallDirectoryProvider](cxcalldirectoryprovider.md) instance method [beginRequest(with:)](cxcalldirectoryprovider/beginrequest%28with_%29.md).

## Topics

### Setting the Delegate

- [delegate](cxcalldirectoryextensioncontext/delegate.md): Sets a delegate that can handle request failures for the Call Directory extension context object.

### Adding Entries

- [addIdentificationEntry(withNextSequentialPhoneNumber:label:)](cxcalldirectoryextensioncontext/addidentificationentry%28withnextsequentialphonenumber_label_%29.md): Adds an identification entry with the specified phone number and label.
- [addBlockingEntry(withNextSequentialPhoneNumber:)](cxcalldirectoryextensioncontext/addblockingentry%28withnextsequentialphonenumber_%29.md): Adds a blocking entry with the specified phone number.

### Removing Entries

- [removeAllBlockingEntries()](cxcalldirectoryextensioncontext/removeallblockingentries%28%29.md): Removes all stored blocking entries.
- [removeAllIdentificationEntries()](cxcalldirectoryextensioncontext/removeallidentificationentries%28%29.md): Removes all stored identification entries.
- [removeBlockingEntry(withPhoneNumber:)](cxcalldirectoryextensioncontext/removeblockingentry%28withphonenumber_%29.md): Removes a blocking entry that contains the specified phone number.
- [removeIdentificationEntry(withPhoneNumber:)](cxcalldirectoryextensioncontext/removeidentificationentry%28withphonenumber_%29.md): Removes an identification entry that contains the specified phone number.

### Completing Requests

- [isIncremental](cxcalldirectoryextensioncontext/isincremental.md): A Boolean value that indicates whether the request provides data incrementally.
- [completeRequest(completionHandler:)](cxcalldirectoryextensioncontext/completerequest%28completionhandler_%29.md): Completes the request to the extension context.

### Types

- [CXCallDirectoryPhoneNumber](cxcalldirectoryphonenumber.md): A value that represents a phone number consisting of a country calling code followed by a sequence of digits.
- [CXCallDirectoryPhoneNumberMax](cxcalldirectoryphonenumbermax.md): The maximum allowable value for a phone number.

## Relationships

### Inherits From

- [NSExtensionContext](../foundation/nsextensioncontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Caller ID

- [Identifying and blocking calls](identifying-and-blocking-calls.md): Create a Call Directory app extension to identify and block incoming callers by their phone number.
- [CXCallDirectoryProvider](cxcalldirectoryprovider.md): The principal object for a Call Directory app extension for a host app.
- [CXCallDirectoryExtensionContextDelegate](cxcalldirectoryextensioncontextdelegate.md): A collection of methods a Call Directory extension context object calls when a request fails.
- [CXCallDirectoryManager](cxcalldirectorymanager.md): The programmatic interface to an object that manages a Call Directory app extension.

# CXCallDirectoryExtensionContext (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A programmatic interface for adding identification and blocking entries to a Call Directory app extension.

## Declaration

```objectivec
@interface CXCallDirectoryExtensionContext : NSExtensionContext
```

<a id="overview"></a>

## Overview

The system doesn’t initialize [CXCallDirectoryExtensionContext](cxcalldirectoryextensioncontext.md) objects directly, but instead passes them as arguments to the [CXCallDirectoryProvider](cxcalldirectoryprovider.md) instance method [beginRequestWithExtensionContext:](cxcalldirectoryprovider/beginrequest%28with_%29.md).

## Topics

### Setting the Delegate

- [delegate](cxcalldirectoryextensioncontext/delegate.md): Sets a delegate that can handle request failures for the Call Directory extension context object.

### Adding Entries

- [addIdentificationEntryWithNextSequentialPhoneNumber:label:](cxcalldirectoryextensioncontext/addidentificationentry%28withnextsequentialphonenumber_label_%29.md): Adds an identification entry with the specified phone number and label.
- [addBlockingEntryWithNextSequentialPhoneNumber:](cxcalldirectoryextensioncontext/addblockingentry%28withnextsequentialphonenumber_%29.md): Adds a blocking entry with the specified phone number.

### Removing Entries

- [removeAllBlockingEntries](cxcalldirectoryextensioncontext/removeallblockingentries%28%29.md): Removes all stored blocking entries.
- [removeAllIdentificationEntries](cxcalldirectoryextensioncontext/removeallidentificationentries%28%29.md): Removes all stored identification entries.
- [removeBlockingEntryWithPhoneNumber:](cxcalldirectoryextensioncontext/removeblockingentry%28withphonenumber_%29.md): Removes a blocking entry that contains the specified phone number.
- [removeIdentificationEntryWithPhoneNumber:](cxcalldirectoryextensioncontext/removeidentificationentry%28withphonenumber_%29.md): Removes an identification entry that contains the specified phone number.

### Completing Requests

- [incremental](cxcalldirectoryextensioncontext/isincremental.md): A Boolean value that indicates whether the request provides data incrementally.
- [completeRequestWithCompletionHandler:](cxcalldirectoryextensioncontext/completerequest%28completionhandler_%29.md): Completes the request to the extension context.

### Types

- [CXCallDirectoryPhoneNumber](cxcalldirectoryphonenumber.md): A value that represents a phone number consisting of a country calling code followed by a sequence of digits.
- [CXCallDirectoryPhoneNumberMax](cxcalldirectoryphonenumbermax.md): The maximum allowable value for a phone number.

## Relationships

### Inherits From

- [NSExtensionContext](../foundation/nsextensioncontext.md)

## See Also

### Caller ID

- [Identifying and blocking calls](identifying-and-blocking-calls.md): Create a Call Directory app extension to identify and block incoming callers by their phone number.
- [CXCallDirectoryProvider](cxcalldirectoryprovider.md): The principal object for a Call Directory app extension for a host app.
- [CXCallDirectoryExtensionContextDelegate](cxcalldirectoryextensioncontextdelegate.md): A collection of methods a Call Directory extension context object calls when a request fails.
- [CXCallDirectoryManager](cxcalldirectorymanager.md): The programmatic interface to an object that manages a Call Directory app extension.
