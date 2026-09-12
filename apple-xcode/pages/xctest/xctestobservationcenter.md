> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestobservationcenter](https://developer.apple.com/documentation/xctest/xctestobservationcenter)

# XCTestObservationCenter (Swift)

**Framework:** XCTest  
**Kind:** Class

Provides information about the progress of test runs to registered observers.

## Declaration

```swift
class XCTestObservationCenter
```

<a id="overview"></a>

## Overview

Observers can be any object that conforms to the [XCTestObservation](xctestobservation.md) protocol. Register new observers with the [addTestObserver(\_:)](xctestobservationcenter/addtestobserver%28__%29.md) method and remove them with the [removeTestObserver(\_:)](xctestobservationcenter/removetestobserver%28__%29.md) method.

If an [NSPrincipalClass](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/NSPrincipalClass) key is declared in the test bundle’s Info.plist file, XCTest automatically creates a single instance of that class when the test bundle is loaded. You can use this instance as a place to register observers or do other pretesting global setup before testing for that bundle begins.

> **Important**

>  Observers must be registered manually. The NSPrincipalClass instance is not automatically registered as an observer even if the class conforms to [XCTestObservation](xctestobservation.md).

## Topics

### Accessing the Shared Observation Center

- [shared](xctestobservationcenter/shared.md): The shared [XCTestObservationCenter](xctestobservationcenter.md) singleton instance.

### Managing Observers

- [addTestObserver(\_:)](xctestobservationcenter/addtestobserver%28__%29.md): Registers an object conforming to [XCTestObservation](xctestobservation.md) as an observer for the current test session.
- [removeTestObserver(\_:)](xctestobservationcenter/removetestobserver%28__%29.md): Unregisters an object conforming to [XCTestObservation](xctestobservation.md) as an observer for the current test session.

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

### Test Observation

- [XCTestObservation](xctestobservation.md): A protocol that defines methods the test runner calls in response to significant events during test runs.

# XCTestObservationCenter (Objective-C)

**Framework:** XCTest  
**Kind:** Class

Provides information about the progress of test runs to registered observers.

## Declaration

```objectivec
@interface XCTestObservationCenter : NSObject
```

<a id="overview"></a>

## Overview

Observers can be any object that conforms to the [XCTestObservation](xctestobservation.md) protocol. Register new observers with the [addTestObserver:](xctestobservationcenter/addtestobserver%28__%29.md) method and remove them with the [removeTestObserver:](xctestobservationcenter/removetestobserver%28__%29.md) method.

If an [NSPrincipalClass](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/NSPrincipalClass) key is declared in the test bundle’s Info.plist file, XCTest automatically creates a single instance of that class when the test bundle is loaded. You can use this instance as a place to register observers or do other pretesting global setup before testing for that bundle begins.

> **Important**

>  Observers must be registered manually. The NSPrincipalClass instance is not automatically registered as an observer even if the class conforms to [XCTestObservation](xctestobservation.md).

## Topics

### Accessing the Shared Observation Center

- [sharedTestObservationCenter](xctestobservationcenter/shared.md): The shared [XCTestObservationCenter](xctestobservationcenter.md) singleton instance.

### Managing Observers

- [addTestObserver:](xctestobservationcenter/addtestobserver%28__%29.md): Registers an object conforming to [XCTestObservation](xctestobservation.md) as an observer for the current test session.
- [removeTestObserver:](xctestobservationcenter/removetestobserver%28__%29.md): Unregisters an object conforming to [XCTestObservation](xctestobservation.md) as an observer for the current test session.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Test Observation

- [XCTestObservation](xctestobservation.md): A protocol that defines methods the test runner calls in response to significant events during test runs.
