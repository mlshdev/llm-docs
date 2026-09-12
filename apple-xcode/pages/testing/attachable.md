> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachable](https://developer.apple.com/documentation/testing/attachable)

# Attachable

**Framework:** Swift Testing  
**Kind:** Protocol  
**Availability:** Swift 6.2+ · Xcode 26.0+

A protocol describing a type whose instances can be recorded and saved as part of a test run.

## Declaration

```swift
protocol Attachable : ~Copyable
```

## Mentioned In

- [Migrating a test from XCTest](migratingfromxctest.md)

<a id="overview"></a>

## Overview

To attach an attachable value to a test, pass it to [record(\_:named:sourceLocation:)](attachment/record%28__named_sourcelocation_%29.md). To further configure an attachable value before you attach it, use it to initialize an instance of [Attachment](attachment.md) and set its properties before passing it to [record(\_:sourceLocation:)](attachment/record%28__sourcelocation_%29.md).

The testing library provides default conformances to this protocol for a variety of standard library types. Most user-defined types do not need to conform to this protocol.

A type should conform to this protocol if it can be represented as a sequence of bytes that would be diagnostically useful if a test fails. If a type cannot conform directly to this protocol (such as a non-final class or a type declared in a third-party module), you can create a wrapper type that conforms to [AttachableWrapper](attachablewrapper.md) to act as a proxy.

## Topics

### Instance Properties

- [estimatedAttachmentByteCount](attachable/estimatedattachmentbytecount.md): An estimate of the number of bytes of memory needed to store this value as an attachment.

### Instance Methods

- [preferredName(for:basedOn:)](attachable/preferredname%28for_basedon_%29.md): Generate a preferred name for the given attachment.
- [withUnsafeBytes(for:\_:)](attachable/withunsafebytes%28for___%29.md): Call a function and pass a buffer representing this instance to it.

## Relationships

### Inherited By

- [AttachableWrapper](attachablewrapper.md)

## See Also

### Attaching values to tests

- [Attachment](attachment.md): A type describing values that can be attached to the output of a test run and inspected later by the user.
- [AttachableWrapper](attachablewrapper.md): A protocol describing a type whose instances can be recorded and saved as part of a test run and which contains another value that it stands in for.
