> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/waitforexistence(timeout:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/waitforexistence(timeout:))

# waitForExistence(timeout:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Waits the specified amount of time for an element to exist.

## Declaration

```swift
func waitForExistence(timeout: TimeInterval) -> Bool
```

<a id="Discussion"></a>

## Discussion

Returns [false](https://developer.apple.com/documentation/swift/false) if the timeout expires while the element’s [exists](exists.md) property equals [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Querying element state

- [waitForNonExistence(timeout:)](waitfornonexistence%28timeout_%29.md): Waits the specified amount of time for an element to no longer exist.
- [wait(for:toEqual:timeout:)](wait%28for_toequal_timeout_%29.md): Waits a specified amount of time for a property value to equal a specified value.
- [exists](exists.md): Determines if the element exists.
- [isHittable](ishittable.md): Determines if the system can compute a hit point for the element.
- [debugDescription](debugdescription.md): Provides debugging information about the element.

# waitForExistenceWithTimeout: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Waits the specified amount of time for an element to exist.

## Declaration

```objectivec
- (BOOL) waitForExistenceWithTimeout:(NSTimeInterval) timeout;
```

<a id="Discussion"></a>

## Discussion

Returns [false](https://developer.apple.com/documentation/swift/false) if the timeout expires while the element’s [exists](exists.md) property equals [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Querying element state

- [waitForNonExistenceWithTimeout:](waitfornonexistence%28timeout_%29.md): Waits the specified amount of time for an element to no longer exist.
- [exists](exists.md): Determines if the element exists.
- [hittable](ishittable.md): Determines if the system can compute a hit point for the element.
- [debugDescription](debugdescription.md): Provides debugging information about the element.
