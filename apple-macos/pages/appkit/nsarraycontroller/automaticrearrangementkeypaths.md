> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/automaticrearrangementkeypaths](https://developer.apple.com/documentation/appkit/nsarraycontroller/automaticrearrangementkeypaths)

# automaticRearrangementKeyPaths (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of key paths that trigger automatic content sorting or filtering

## Declaration

```swift
var automaticRearrangementKeyPaths: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

Subclasses can override this property to customize the default behavior of the sort descriptors and filtering predicates, for example, if additional arrangement criteria are used in a custom implementation of [arrangedObjects](arrangedobjects.md).

## See Also

### Automatic Content Rearranging

- [automaticallyRearrangesObjects](automaticallyrearrangesobjects.md): A Boolean that indicates if the receiver automatically rearranges its content to correspond to the current sort descriptors and filter predicates
- [didChangeArrangementCriteria()](didchangearrangementcriteria%28%29.md): Invoked when any criteria for arranging objects change.

# automaticRearrangementKeyPaths (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of key paths that trigger automatic content sorting or filtering

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSString *> * automaticRearrangementKeyPaths;
```

<a id="Discussion"></a>

## Discussion

Subclasses can override this property to customize the default behavior of the sort descriptors and filtering predicates, for example, if additional arrangement criteria are used in a custom implementation of [arrangedObjects](arrangedobjects.md).

## See Also

### Automatic Content Rearranging

- [automaticallyRearrangesObjects](automaticallyrearrangesobjects.md): A Boolean that indicates if the receiver automatically rearranges its content to correspond to the current sort descriptors and filter predicates
- [didChangeArrangementCriteria](didchangearrangementcriteria%28%29.md): Invoked when any criteria for arranging objects change.
