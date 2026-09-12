> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellulardata](https://developer.apple.com/documentation/coretelephony/ctcellulardata)

# CTCellularData (Swift)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

An object indicating whether the app can access cellular data.

## Declaration

```swift
class CTCellularData
```

<a id="overview"></a>

## Overview

This property represents all access to cellular data. If the [restrictedState](ctcellulardata/restrictedstate.md) is [CTCellularDataRestrictedState.restricted](ctcellulardatarestrictedstate/restricted.md), the app cannot use the cellular network.

## Topics

### Determining the Cellular Data Restricted State

- [restrictedState](ctcellulardata/restrictedstate.md): The current state of cellular data restrictions.
- [CTCellularDataRestrictedState](ctcellulardatarestrictedstate.md): The possible states of the cellular data policy.

### Handling Policy Changes

- [cellularDataRestrictionDidUpdateNotifier](ctcellulardata/cellulardatarestrictiondidupdatenotifier.md): A block that handles cellular data restriction state changes.
- [CellularDataRestrictionDidUpdateNotifier](cellulardatarestrictiondidupdatenotifier.md): A block to provide updates on the app’s cellular data restriction state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# CTCellularData (Objective-C)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

An object indicating whether the app can access cellular data.

## Declaration

```objectivec
@interface CTCellularData : NSObject
```

<a id="overview"></a>

## Overview

This property represents all access to cellular data. If the [restrictedState](ctcellulardata/restrictedstate.md) is [kCTCellularDataRestricted](ctcellulardatarestrictedstate/restricted.md), the app cannot use the cellular network.

## Topics

### Determining the Cellular Data Restricted State

- [restrictedState](ctcellulardata/restrictedstate.md): The current state of cellular data restrictions.
- [CTCellularDataRestrictedState](ctcellulardatarestrictedstate.md): The possible states of the cellular data policy.

### Handling Policy Changes

- [cellularDataRestrictionDidUpdateNotifier](ctcellulardata/cellulardatarestrictiondidupdatenotifier.md): A block that handles cellular data restriction state changes.
- [CellularDataRestrictionDidUpdateNotifier](cellulardatarestrictiondidupdatenotifier.md): A block to provide updates on the app’s cellular data restriction state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
