> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachment](https://developer.apple.com/documentation/testing/attachment)

# Attachment

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** Swift 6.2+ · Xcode 26.0+

A type describing values that can be attached to the output of a test run and inspected later by the user.

## Declaration

```swift
struct Attachment<AttachableValue> where AttachableValue : Attachable, AttachableValue : ~Copyable
```

## Mentioned In

- [Migrating a test from XCTest](migratingfromxctest.md)

<a id="overview"></a>

## Overview

To create an attachment, you need a value of some type that conforms to [Attachable](attachable.md). Initialize an instance of [Attachment](attachment.md) with that value and, optionally, a preferred filename to use when saving the attachment. To record the attachment, call [record(\_:sourceLocation:)](attachment/record%28__sourcelocation_%29.md). Alternatively, pass your attachable value directly to [record(\_:named:sourceLocation:)](attachment/record%28__named_sourcelocation_%29.md).

## Topics

### Initializers

- [init(\_:named:as:sourceLocation:)](attachment/init%28__named_as_sourcelocation_%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Initialize an instance of this type that encloses the given image.
- [init(\_:named:sourceLocation:)](attachment/init%28__named_sourcelocation_%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Initialize an instance of this type that encloses the given attachable value.
- [init(contentsOf:named:sourceLocation:)](attachment/init%28contentsof_named_sourcelocation_%29.md): Conforms when `AttachableValue` is `_AttachableURLWrapper`. Initialize an instance of this type with the contents of the given URL.
- [init(exporting:as:named:sourceLocation:)](attachment/init%28exporting_as_named_sourcelocation_%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Initialize an instance of this type that encloses the given transferable value.

### Instance Properties

- [attachableValue](attachment/attachablevalue-2tnj5.md): Conforms when `AttachableValue` conforms to `Attachable`. The value of this attachment.
- [attachableValue](attachment/attachablevalue-vkrw.md): Conforms when `AttachableValue` conforms to `AttachableWrapper`. The value of this attachment.
- [imageFormat](attachment/imageformat.md): Conforms when `AttachableValue` conforms to `AttachableWrapper` and `AttachableValue.Wrapped` conforms to `AttachableAsImage`. The image format to use when encoding the represented image, if specified.
- [preferredName](attachment/preferredname.md): A filename to use when saving this attachment.

### Instance Methods

- [withUnsafeBytes(\_:)](attachment/withunsafebytes%28__%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Call a function and pass a buffer representing the value of this instance’s [attachableValue](attachment/attachablevalue-2tnj5.md) property to it.

### Type Methods

- [record(\_:named:as:sourceLocation:)](attachment/record%28__named_as_sourcelocation_%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Attach an image to the current test.
- [record(\_:named:sourceLocation:)](attachment/record%28__named_sourcelocation_%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Attach a value to the current test.
- [record(\_:sourceLocation:)](attachment/record%28__sourcelocation_%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Attach an attachment to the current test.

### Default Implementations

- [CustomStringConvertible Implementations](attachment/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Attaching values to tests

- [Attachable](attachable.md): A protocol describing a type whose instances can be recorded and saved as part of a test run.
- [AttachableWrapper](attachablewrapper.md): A protocol describing a type whose instances can be recorded and saved as part of a test run and which contains another value that it stands in for.
