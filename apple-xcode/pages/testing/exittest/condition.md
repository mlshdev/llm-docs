> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/exittest/condition](https://developer.apple.com/documentation/testing/exittest/condition)

# ExitTest.Condition

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** Swift 6.2+ · Xcode 26.0+

The possible conditions under which an exit test will complete.

## Declaration

```swift
struct Condition
```

## Mentioned In

- [Exit testing](../exit-testing.md)

<a id="overview"></a>

## Overview

Values of this type are used to describe the conditions under which an exit test is expected to pass or fail by passing them to [expect(processExitsWith:observing:\_:sourceLocation:performing:)](../expect%28processexitswith_observing___sourcelocation_performing_%29.md) or [require(processExitsWith:observing:\_:sourceLocation:performing:)](../require%28processexitswith_observing___sourcelocation_performing_%29.md).

## Topics

### Successful exit conditions

- [success](condition/success.md): A condition that matches when a process exits normally.

### Failing exit conditions

- [failure](condition/failure.md): A condition that matches when a process exits abnormally
- [exitCode(\_:)](condition/exitcode%28__%29.md): Creates a condition that matches when a process terminates with a given exit code.
- [signal(\_:)](condition/signal%28__%29.md): Creates a condition that matches when a process exits with a given signal.

### Initializers

- [init(\_:)](condition/init%28__%29.md): Initialize an instance of this type that matches the specified exit status.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
