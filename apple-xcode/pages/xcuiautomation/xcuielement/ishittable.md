> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/ishittable](https://developer.apple.com/documentation/xcuiautomation/xcuielement/ishittable)

# isHittable (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Determines if the system can compute a hit point for the element.

## Declaration

```swift
var isHittable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[isHittable](ishittable.md) returns [true](https://developer.apple.com/documentation/swift/true) if the element exists and can be clicked, tapped, or pressed at its current location. It returns [false](https://developer.apple.com/documentation/swift/false) if the element doesn’t exist, is offscreen, or is covered by another element.

> **Note**

>  [isHittable](ishittable.md) only returns [true](https://developer.apple.com/documentation/swift/true) if the element is already visible and hittable onscreen. It returns [false](https://developer.apple.com/documentation/swift/false) for an offscreen element in a scrollable view, even if the element can be scrolled into a hittable position by calling [click()](click%28%29.md), [tap()](tap%28%29.md), or another hit-point-related interaction method.

## See Also

### Querying element state

- [waitForExistence(timeout:)](waitforexistence%28timeout_%29.md): Waits the specified amount of time for an element to exist.
- [waitForNonExistence(timeout:)](waitfornonexistence%28timeout_%29.md): Waits the specified amount of time for an element to no longer exist.
- [wait(for:toEqual:timeout:)](wait%28for_toequal_timeout_%29.md): Waits a specified amount of time for a property value to equal a specified value.
- [exists](exists.md): Determines if the element exists.
- [debugDescription](debugdescription.md): Provides debugging information about the element.

# hittable (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Determines if the system can compute a hit point for the element.

## Declaration

```objectivec
@property (readonly, getter=isHittable) BOOL hittable;
```

<a id="Discussion"></a>

## Discussion

[hittable](ishittable.md) returns [true](https://developer.apple.com/documentation/swift/true) if the element exists and can be clicked, tapped, or pressed at its current location. It returns [false](https://developer.apple.com/documentation/swift/false) if the element doesn’t exist, is offscreen, or is covered by another element.

> **Note**

>  [hittable](ishittable.md) only returns [true](https://developer.apple.com/documentation/swift/true) if the element is already visible and hittable onscreen. It returns [false](https://developer.apple.com/documentation/swift/false) for an offscreen element in a scrollable view, even if the element can be scrolled into a hittable position by calling [click](click%28%29.md), [tap](tap%28%29.md), or another hit-point-related interaction method.

## See Also

### Querying element state

- [waitForExistenceWithTimeout:](waitforexistence%28timeout_%29.md): Waits the specified amount of time for an element to exist.
- [waitForNonExistenceWithTimeout:](waitfornonexistence%28timeout_%29.md): Waits the specified amount of time for an element to no longer exist.
- [exists](exists.md): Determines if the element exists.
- [debugDescription](debugdescription.md): Provides debugging information about the element.
