> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/wait(for:toequal:timeout:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/wait(for:toequal:timeout:))

# wait(for:toEqual:timeout:)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Waits a specified amount of time for a property value to equal a specified value.

## Declaration

```swift
@MainActor @preconcurrency func wait<V>(for keyPath: KeyPath<XCUIElement, V>, toEqual expectedValue: V, timeout: TimeInterval) -> Bool where V : Equatable
```

## Parameters

- `keyPath`: The observed property on an [XCUIElement](../xcuielement.md).
- `expectedValue`: The desired value, which must conform to `Equatable`.
- `timeout`: The length of time in seconds to wait for the observed property to equal the expected value.

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if the timeout expires before the observed property equals the expected value.

## See Also

### Querying element state

- [waitForExistence(timeout:)](waitforexistence%28timeout_%29.md): Waits the specified amount of time for an element to exist.
- [waitForNonExistence(timeout:)](waitfornonexistence%28timeout_%29.md): Waits the specified amount of time for an element to no longer exist.
- [exists](exists.md): Determines if the element exists.
- [isHittable](ishittable.md): Determines if the system can compute a hit point for the element.
- [debugDescription](debugdescription.md): Provides debugging information about the element.
