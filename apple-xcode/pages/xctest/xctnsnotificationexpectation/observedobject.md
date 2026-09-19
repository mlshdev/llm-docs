> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctnsnotificationexpectation/observedobject

# observedObject (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The object by which the notification must be posted, or nil if the notification can be posted by any object.

## Declaration

```swift
var observedObject: Any? { get }
```

## See Also

### Expectation Properties

- [notificationName](notificationname.md): The name of the notification that the expectation is waiting for.
- [notificationCenter](notificationcenter.md): The notification center from which the notification must be posted.

# observedObject (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The object by which the notification must be posted, or nil if the notification can be posted by any object.

## Declaration

```objectivec
@property (strong, readonly, nullable) id observedObject;
```

## See Also

### Expectation Properties

- [notificationName](notificationname.md): The name of the notification that the expectation is waiting for.
- [notificationCenter](notificationcenter.md): The notification center from which the notification must be posted.
