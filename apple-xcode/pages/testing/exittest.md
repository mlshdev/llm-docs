> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/exittest](https://developer.apple.com/documentation/testing/exittest)

# ExitTest

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** Swift 6.2+ · Xcode 26.0+

A type describing an exit test.

## Declaration

```swift
struct ExitTest
```

<a id="overview"></a>

## Overview

Instances of this type describe exit tests you create using the [expect(processExitsWith:observing:\_:sourceLocation:performing:)](expect%28processexitswith_observing___sourcelocation_performing_%29.md) or [require(processExitsWith:observing:\_:sourceLocation:performing:)](require%28processexitswith_observing___sourcelocation_performing_%29.md) macro. You don’t usually need to interact directly with an instance of this type.

## Topics

### Structures

- [ExitTest.Condition](exittest/condition.md): The possible conditions under which an exit test will complete.
- [ExitTest.Result](exittest/result.md): A type representing the result of an exit test after it has exited and returned control to the calling test function.

### Type Properties

- [current](exittest/current.md): The exit test that is running in the current process, if any.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking how processes exit

- [Exit testing](exit-testing.md): Use exit tests to test functionality that might cause a test process to exit.
- [expect(processExitsWith:observing:\_:sourceLocation:performing:)](expect%28processexitswith_observing___sourcelocation_performing_%29.md): Check that an expression causes the process to terminate in a given fashion.
- [require(processExitsWith:observing:\_:sourceLocation:performing:)](require%28processexitswith_observing___sourcelocation_performing_%29.md): Check that an expression causes the process to terminate in a given fashion and throw an error if it did not.
- [ExitStatus](exitstatus.md): An enumeration describing possible status a process will report on exit.
