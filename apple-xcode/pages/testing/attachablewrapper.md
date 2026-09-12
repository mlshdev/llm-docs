> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachablewrapper](https://developer.apple.com/documentation/testing/attachablewrapper)

# AttachableWrapper

**Framework:** Swift Testing  
**Kind:** Protocol  
**Availability:** Swift 6.2+ · Xcode 26.0+

A protocol describing a type whose instances can be recorded and saved as part of a test run and which contains another value that it stands in for.

## Declaration

```swift
protocol AttachableWrapper<Wrapped> : Attachable, ~Copyable
```

<a id="overview"></a>

## Overview

To attach an attachable value to a test, pass it to [record(\_:named:sourceLocation:)](attachment/record%28__named_sourcelocation_%29.md). To further configure an attachable value before you attach it, use it to initialize an instance of [Attachment](attachment.md) and set its properties before passing it to [record(\_:sourceLocation:)](attachment/record%28__sourcelocation_%29.md). An attachable value can only be attached to a test once.

A type can conform to this protocol if it represents another type that cannot directly conform to [Attachable](attachable.md), such as a non-final class or a type declared in a third-party module.

## Topics

### Associated Types

- [Wrapped](attachablewrapper/wrapped.md): The type of the underlying value represented by this type.

### Instance Properties

- [wrappedValue](attachablewrapper/wrappedvalue.md): The underlying value represented by this instance.

## Relationships

### Inherits From

- [Attachable](attachable.md)

## See Also

### Attaching values to tests

- [Attachment](attachment.md): A type describing values that can be attached to the output of a test run and inspected later by the user.
- [Attachable](attachable.md): A protocol describing a type whose instances can be recorded and saved as part of a test run.
