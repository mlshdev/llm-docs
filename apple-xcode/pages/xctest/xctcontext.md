> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctcontext](https://developer.apple.com/documentation/xctest/xctcontext)

# XCTContext (Swift)

**Framework:** XCTest  
**Kind:** Class

A proxy for the current testing context.

## Declaration

```swift
class XCTContext
```

## Mentioned In

- [Adding Attachments to Tests, Activities, and Issues](adding-attachments-to-tests-activities-and-issues.md)
- [Grouping Tests into Substeps with Activities](grouping-tests-into-substeps-with-activities.md)

<a id="overview"></a>

## Overview

`XCTContext` provides a way for activities ([XCTActivity](xctactivity.md)) to run against the current testing context, either directly in a test case or in custom testing utilities. You can break up long test methods in UI tests or integration tests into activities to reuse, and to simplify results in the Xcode test reports. Use [runActivity(named:block:)](xctcontext/runactivity%28named_block_%29.md) to run a block of code as a named substep in a test. For more information, see [Grouping Tests into Substeps with Activities](grouping-tests-into-substeps-with-activities.md).

## Topics

### Running Activities

- [runActivity(named:block:)](xctcontext/runactivity%28named_block_%29.md): Creates and runs an activity with the provided block of code.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Activities

- [Grouping Tests into Substeps with Activities](grouping-tests-into-substeps-with-activities.md): Simplify test reports by creating activities that organize substeps within complex test methods.
- [XCTActivity](xctactivity.md): A named substep of a test method.

# XCTContext (Objective-C)

**Framework:** XCTest  
**Kind:** Class

A proxy for the current testing context.

## Declaration

```objectivec
@interface XCTContext : NSObject
```

## Mentioned In

- [Adding Attachments to Tests, Activities, and Issues](adding-attachments-to-tests-activities-and-issues.md)
- [Grouping Tests into Substeps with Activities](grouping-tests-into-substeps-with-activities.md)

<a id="overview"></a>

## Overview

`XCTContext` provides a way for activities ([XCTActivity](xctactivity.md)) to run against the current testing context, either directly in a test case or in custom testing utilities. You can break up long test methods in UI tests or integration tests into activities to reuse, and to simplify results in the Xcode test reports. Use [runActivity(named:block:)](xctcontext/runactivity%28named_block_%29.md) to run a block of code as a named substep in a test. For more information, see [Grouping Tests into Substeps with Activities](grouping-tests-into-substeps-with-activities.md).

## Topics

### Running Activities

- [runActivityNamed:block:](xctcontext/runactivitynamed_block_.md): Creates and runs an activity with the provided block of code.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Activities

- [Grouping Tests into Substeps with Activities](grouping-tests-into-substeps-with-activities.md): Simplify test reports by creating activities that organize substeps within complex test methods.
- [XCTActivity](xctactivity.md): A named substep of a test method.
