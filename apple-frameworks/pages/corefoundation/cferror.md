> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cferror](https://developer.apple.com/documentation/corefoundation/cferror)

# CFError (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFError
```

<a id="Overview"></a>

## Overview

A CFError object encapsulates more rich and extensible error information than is possible using only an error code or error string. The core attributes of a CFError object are an error domain (represented by a string), a domain-specific error code, and a “user info” dictionary containing application-specific information. Errors are required to have a domain and an error code within that domain. Several well-known domains are defined corresponding to Mach, POSIX, and OSStatus errors.

The optional “user info” dictionary may provide additional information that might be useful for the interpretation and reporting of the error, including a human-readable description for the error. The “user info” dictionary sometimes includes another CFError object that represents an error in a subsystem underlying the error represented by the containing CFError object. This underlying error object may provide more specific information about the cause of the error.

In general, a method should signal an error condition by returning, for example, `false` or `NULL` rather than by the simple presence of an error object. The method can then optionally return an CFError object by reference, in order to further describe the error.

CFError is toll-free bridged to [NSError](../foundation/nserror.md) in the Foundation framework—for more details on toll-free bridging, see [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677). `NSError` has some additional guidelines that make it easy to report errors automatically to users and attempt to recover from them. See [Error Handling Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ErrorHandlingCocoa/ErrorHandling/ErrorHandling.html#//apple_ref/doc/uid/TP40001806) for more information on `NSError` programming guidelines.

## Topics

### Creating a CFError

- [CFErrorCreate(\_:\_:\_:\_:)](cferrorcreate%28________%29.md): Creates a new CFError object.
- [CFErrorCreateWithUserInfoKeysAndValues(\_:\_:\_:\_:\_:\_:)](cferrorcreatewithuserinfokeysandvalues%28____________%29.md): Creates a new CFError object using given keys and values to create the user info dictionary.

### Getting Information About an Error

- [CFErrorGetDomain(\_:)](cferrorgetdomain%28__%29.md): Returns the error domain for a given CFError.
- [CFErrorGetCode(\_:)](cferrorgetcode%28__%29.md): Returns the error code for a given CFError.
- [CFErrorCopyUserInfo(\_:)](cferrorcopyuserinfo%28__%29.md): Returns the user info dictionary for a given CFError.
- [CFErrorCopyDescription(\_:)](cferrorcopydescription%28__%29.md): Returns a human-presentable description for a given error.
- [CFErrorCopyFailureReason(\_:)](cferrorcopyfailurereason%28__%29.md): Returns a human-presentable failure reason for a given error.
- [CFErrorCopyRecoverySuggestion(\_:)](cferrorcopyrecoverysuggestion%28__%29.md): Returns a human presentable recovery suggestion for a given error.

### Getting the CFError Type ID

- [CFErrorGetTypeID()](cferrorgettypeid%28%29.md): Returns the type identifier for the CFError opaque type.

### Constants

- [Error domains](error-domains.md): These constants define domains for CFError objects.
- [Keys for the user info dictionary](keys-for-the-user-info-dictionary.md): Keys in the `userInfo` dictionary.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [Error Handling Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ErrorHandlingCocoa/ErrorHandling/ErrorHandling.html#//apple_ref/doc/uid/TP40001806)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFFileDescriptor](cffiledescriptor.md)

# CFErrorRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFError * CFErrorRef;
```

<a id="Overview"></a>

## Overview

A CFError object encapsulates more rich and extensible error information than is possible using only an error code or error string. The core attributes of a CFError object are an error domain (represented by a string), a domain-specific error code, and a “user info” dictionary containing application-specific information. Errors are required to have a domain and an error code within that domain. Several well-known domains are defined corresponding to Mach, POSIX, and OSStatus errors.

The optional “user info” dictionary may provide additional information that might be useful for the interpretation and reporting of the error, including a human-readable description for the error. The “user info” dictionary sometimes includes another CFError object that represents an error in a subsystem underlying the error represented by the containing CFError object. This underlying error object may provide more specific information about the cause of the error.

In general, a method should signal an error condition by returning, for example, `false` or `NULL` rather than by the simple presence of an error object. The method can then optionally return an CFError object by reference, in order to further describe the error.

CFError is toll-free bridged to [NSError](../foundation/nserror.md) in the Foundation framework—for more details on toll-free bridging, see [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677). `NSError` has some additional guidelines that make it easy to report errors automatically to users and attempt to recover from them. See [Error Handling Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ErrorHandlingCocoa/ErrorHandling/ErrorHandling.html#//apple_ref/doc/uid/TP40001806) for more information on `NSError` programming guidelines.

## Topics

### Creating a CFError

- [CFErrorCreate](cferrorcreate%28________%29.md): Creates a new CFError object.
- [CFErrorCreateWithUserInfoKeysAndValues](cferrorcreatewithuserinfokeysandvalues%28____________%29.md): Creates a new CFError object using given keys and values to create the user info dictionary.

### Getting Information About an Error

- [CFErrorGetDomain](cferrorgetdomain%28__%29.md): Returns the error domain for a given CFError.
- [CFErrorGetCode](cferrorgetcode%28__%29.md): Returns the error code for a given CFError.
- [CFErrorCopyUserInfo](cferrorcopyuserinfo%28__%29.md): Returns the user info dictionary for a given CFError.
- [CFErrorCopyDescription](cferrorcopydescription%28__%29.md): Returns a human-presentable description for a given error.
- [CFErrorCopyFailureReason](cferrorcopyfailurereason%28__%29.md): Returns a human-presentable failure reason for a given error.
- [CFErrorCopyRecoverySuggestion](cferrorcopyrecoverysuggestion%28__%29.md): Returns a human presentable recovery suggestion for a given error.

### Getting the CFError Type ID

- [CFErrorGetTypeID](cferrorgettypeid%28%29.md): Returns the type identifier for the CFError opaque type.

### Constants

- [Error domains](error-domains.md): These constants define domains for CFError objects.
- [Keys for the user info dictionary](keys-for-the-user-info-dictionary.md): Keys in the `userInfo` dictionary.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [Error Handling Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ErrorHandlingCocoa/ErrorHandling/ErrorHandling.html#//apple_ref/doc/uid/TP40001806)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFFileDescriptorRef](cffiledescriptor.md)
