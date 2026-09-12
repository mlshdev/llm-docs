> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/didchangearrangementcriteria()](https://developer.apple.com/documentation/appkit/nsarraycontroller/didchangearrangementcriteria())

# didChangeArrangementCriteria() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked when any criteria for arranging objects change.

## Declaration

```swift
func didChangeArrangementCriteria()
```

<a id="Discussion"></a>

## Discussion

This method is invoked by the controller itself when any criteria for arranging objects change (sort descriptors or filter predicates) to reset the key paths for automatic rearranging.

<a id="Special-Considerations"></a>

### Special Considerations

If you implement a subclass of `NSArrayController` and override [rearrangeObjects()](rearrangeobjects%28%29.md) to use additional arrangement criteria, you should invoke this method if those criteria change.

## See Also

### Related Documentation

- [rearrangeObjects()](rearrangeobjects%28%29.md): Triggers filtering of the receiver’s content.

### Automatic Content Rearranging

- [automaticallyRearrangesObjects](automaticallyrearrangesobjects.md): A Boolean that indicates if the receiver automatically rearranges its content to correspond to the current sort descriptors and filter predicates
- [automaticRearrangementKeyPaths](automaticrearrangementkeypaths.md): An array of key paths that trigger automatic content sorting or filtering

# didChangeArrangementCriteria (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked when any criteria for arranging objects change.

## Declaration

```objectivec
- (void) didChangeArrangementCriteria;
```

<a id="Discussion"></a>

## Discussion

This method is invoked by the controller itself when any criteria for arranging objects change (sort descriptors or filter predicates) to reset the key paths for automatic rearranging.

<a id="Special-Considerations"></a>

### Special Considerations

If you implement a subclass of `NSArrayController` and override [rearrangeObjects](rearrangeobjects%28%29.md) to use additional arrangement criteria, you should invoke this method if those criteria change.

## See Also

### Related Documentation

- [rearrangeObjects](rearrangeobjects%28%29.md): Triggers filtering of the receiver’s content.

### Automatic Content Rearranging

- [automaticallyRearrangesObjects](automaticallyrearrangesobjects.md): A Boolean that indicates if the receiver automatically rearranges its content to correspond to the current sort descriptors and filter predicates
- [automaticRearrangementKeyPaths](automaticrearrangementkeypaths.md): An array of key paths that trigger automatic content sorting or filtering
