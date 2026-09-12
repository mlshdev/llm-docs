> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctsubscriber/issiminserted](https://developer.apple.com/documentation/coretelephony/ctsubscriber/issiminserted)

# isSIMInserted (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A Boolean property that indicates whether a SIM is present.

## Declaration

```swift
var isSIMInserted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value property is `true` if the system finds a SIM matching the `Info.plist` carrier information (MCC / MNC / GID1 / GID2).

# SIMInserted (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A Boolean property that indicates whether a SIM is present.

## Declaration

```objectivec
@property (readonly, getter=isSIMInserted) BOOL SIMInserted;
```

<a id="Discussion"></a>

## Discussion

This value property is `true` if the system finds a SIM matching the `Info.plist` carrier information (MCC / MNC / GID1 / GID2).
