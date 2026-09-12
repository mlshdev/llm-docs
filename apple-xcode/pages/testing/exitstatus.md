> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/exitstatus](https://developer.apple.com/documentation/testing/exitstatus)

# ExitStatus

**Framework:** Swift Testing  
**Kind:** Enumeration  
**Availability:** Swift 6.2+ · Xcode 26.0+

An enumeration describing possible status a process will report on exit.

## Declaration

```swift
enum ExitStatus
```

<a id="overview"></a>

## Overview

You can convert an instance of this type to an instance of [ExitTest.Condition](exittest/condition.md) using [init(\_:)](exittest/condition/init%28__%29.md). That value can then be used to describe the condition under which an exit test is expected to pass or fail by passing it to [expect(processExitsWith:observing:\_:sourceLocation:performing:)](expect%28processexitswith_observing___sourcelocation_performing_%29.md) or [require(processExitsWith:observing:\_:sourceLocation:performing:)](require%28processexitswith_observing___sourcelocation_performing_%29.md).

## Topics

### Enumeration Cases

- [ExitStatus.exitCode(\_:)](exitstatus/exitcode%28__%29.md): The process exited with the given exit code.
- [ExitStatus.signal(\_:)](exitstatus/signal%28__%29.md): The process exited with the given signal.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking how processes exit

- [Exit testing](exit-testing.md): Use exit tests to test functionality that might cause a test process to exit.
- [expect(processExitsWith:observing:\_:sourceLocation:performing:)](expect%28processexitswith_observing___sourcelocation_performing_%29.md): Check that an expression causes the process to terminate in a given fashion.
- [require(processExitsWith:observing:\_:sourceLocation:performing:)](require%28processexitswith_observing___sourcelocation_performing_%29.md): Check that an expression causes the process to terminate in a given fashion and throw an error if it did not.
- [ExitTest](exittest.md): A type describing an exit test.
