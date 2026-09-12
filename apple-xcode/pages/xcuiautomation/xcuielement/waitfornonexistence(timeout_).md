> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/waitfornonexistence(timeout:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/waitfornonexistence(timeout:))

# waitForNonExistence(timeout:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Waits the specified amount of time for an element to no longer exist.

## Declaration

```swift
func waitForNonExistence(timeout: TimeInterval) -> Bool
```

## Parameters

- `timeout`: The time, in seconds, the test allows for the element to become unavailable. The default timeout allows the test to run until it reaches its execution time allowance.

<a id="Discussion"></a>

## Discussion

## See Also

### Querying element state

- [waitForExistence(timeout:)](waitforexistence%28timeout_%29.md): Waits the specified amount of time for an element to exist.
- [wait(for:toEqual:timeout:)](wait%28for_toequal_timeout_%29.md): Waits a specified amount of time for a property value to equal a specified value.
- [exists](exists.md): Determines if the element exists.
- [isHittable](ishittable.md): Determines if the system can compute a hit point for the element.
- [debugDescription](debugdescription.md): Provides debugging information about the element.

# waitForNonExistenceWithTimeout: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Waits the specified amount of time for an element to no longer exist.

## Declaration

```objectivec
- (BOOL) waitForNonExistenceWithTimeout:(NSTimeInterval) timeout;
```

## Parameters

- `timeout`: The time, in seconds, the test allows for the element to become unavailable. The default timeout allows the test to run until it reaches its execution time allowance.

<a id="Discussion"></a>

## Discussion

## See Also

### Querying element state

- [waitForExistenceWithTimeout:](waitforexistence%28timeout_%29.md): Waits the specified amount of time for an element to exist.
- [exists](exists.md): Determines if the element exists.
- [hittable](ishittable.md): Determines if the system can compute a hit point for the element.
- [debugDescription](debugdescription.md): Provides debugging information about the element.
