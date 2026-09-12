> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/behavior-swift.struct](https://developer.apple.com/documentation/appkit/nsstatusitem/behavior-swift.struct)

# NSStatusItem.Behavior (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.12+

A set of optional status item behaviors.

## Declaration

```swift
struct Behavior
```

## Topics

### Behaviors

- [removalAllowed](behavior-swift.struct/removalallowed.md): A status item that allows interactive removal.
- [terminationOnRemoval](behavior-swift.struct/terminationonremoval.md): A status item that quits the application upon removal.

### Initializers

- [init(rawValue:)](behavior-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing the status item’s behavior

- [behavior](behavior-swift.property.md): The set of allowed behaviors for the status item.
- [button](button.md): The button displayed in the status bar.
- [menu](menu.md): The pull-down menu displayed when the user clicks the status item.

# NSStatusItemBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

A set of optional status item behaviors.

## Declaration

```objectivec
enum NSStatusItemBehavior : NSUInteger;
```

## Topics

### Behaviors

- [NSStatusItemBehaviorRemovalAllowed](behavior-swift.struct/removalallowed.md): A status item that allows interactive removal.
- [NSStatusItemBehaviorTerminationOnRemoval](behavior-swift.struct/terminationonremoval.md): A status item that quits the application upon removal.

## See Also

### Managing the status item’s behavior

- [behavior](behavior-swift.property.md): The set of allowed behaviors for the status item.
- [button](button.md): The button displayed in the status bar.
- [menu](menu.md): The pull-down menu displayed when the user clicks the status item.
