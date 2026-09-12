> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/exists](https://developer.apple.com/documentation/xcuiautomation/xcuielement/exists)

# exists (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Determines if the element exists.

## Declaration

```swift
var exists: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property determines if the element exists within the app’s current UI hierarchy.

> **Note**

>  The fact that an element exists doesn’t imply that it’s hittable. Elements can exist offscreen, or exist onscreen but be hidden by another element, causing their [isHittable](ishittable.md) property to return false.

## See Also

### Querying element state

- [waitForExistence(timeout:)](waitforexistence%28timeout_%29.md): Waits the specified amount of time for an element to exist.
- [waitForNonExistence(timeout:)](waitfornonexistence%28timeout_%29.md): Waits the specified amount of time for an element to no longer exist.
- [wait(for:toEqual:timeout:)](wait%28for_toequal_timeout_%29.md): Waits a specified amount of time for a property value to equal a specified value.
- [isHittable](ishittable.md): Determines if the system can compute a hit point for the element.
- [debugDescription](debugdescription.md): Provides debugging information about the element.

# exists (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Determines if the element exists.

## Declaration

```objectivec
@property (readonly) BOOL exists;
```

<a id="Discussion"></a>

## Discussion

This property determines if the element exists within the app’s current UI hierarchy.

> **Note**

>  The fact that an element exists doesn’t imply that it’s hittable. Elements can exist offscreen, or exist onscreen but be hidden by another element, causing their [hittable](ishittable.md) property to return false.

## See Also

### Querying element state

- [waitForExistenceWithTimeout:](waitforexistence%28timeout_%29.md): Waits the specified amount of time for an element to exist.
- [waitForNonExistenceWithTimeout:](waitfornonexistence%28timeout_%29.md): Waits the specified amount of time for an element to no longer exist.
- [hittable](ishittable.md): Determines if the system can compute a hit point for the element.
- [debugDescription](debugdescription.md): Provides debugging information about the element.
