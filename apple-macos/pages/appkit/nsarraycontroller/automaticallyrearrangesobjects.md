> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/automaticallyrearrangesobjects](https://developer.apple.com/documentation/appkit/nsarraycontroller/automaticallyrearrangesobjects)

# automaticallyRearrangesObjects (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean that indicates if the receiver automatically rearranges its content to correspond to the current sort descriptors and filter predicates

## Declaration

```swift
var automaticallyRearrangesObjects: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Automatic Content Rearranging

- [automaticRearrangementKeyPaths](automaticrearrangementkeypaths.md): An array of key paths that trigger automatic content sorting or filtering
- [didChangeArrangementCriteria()](didchangearrangementcriteria%28%29.md): Invoked when any criteria for arranging objects change.

# automaticallyRearrangesObjects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean that indicates if the receiver automatically rearranges its content to correspond to the current sort descriptors and filter predicates

## Declaration

```objectivec
@property BOOL automaticallyRearrangesObjects;
```

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Automatic Content Rearranging

- [automaticRearrangementKeyPaths](automaticrearrangementkeypaths.md): An array of key paths that trigger automatic content sorting or filtering
- [didChangeArrangementCriteria](didchangearrangementcriteria%28%29.md): Invoked when any criteria for arranging objects change.
