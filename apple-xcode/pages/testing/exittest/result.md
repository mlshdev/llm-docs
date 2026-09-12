> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/exittest/result](https://developer.apple.com/documentation/testing/exittest/result)

# ExitTest.Result

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** Swift 6.2+ · Xcode 26.0+

A type representing the result of an exit test after it has exited and returned control to the calling test function.

## Declaration

```swift
struct Result
```

## Mentioned In

- [Exit testing](../exit-testing.md)

<a id="overview"></a>

## Overview

Both [expect(processExitsWith:observing:\_:sourceLocation:performing:)](../expect%28processexitswith_observing___sourcelocation_performing_%29.md) and [require(processExitsWith:observing:\_:sourceLocation:performing:)](../require%28processexitswith_observing___sourcelocation_performing_%29.md) return instances of this type.

## Topics

### Instance Properties

- [exitStatus](result/exitstatus.md): The exit status reported by the process hosting the exit test.
- [standardErrorContent](result/standarderrorcontent.md): All bytes written to the standard error stream of the exit test before it exited.
- [standardOutputContent](result/standardoutputcontent.md): All bytes written to the standard output stream of the exit test before it exited.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
