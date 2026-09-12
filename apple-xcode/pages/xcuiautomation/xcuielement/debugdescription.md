> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/debugdescription](https://developer.apple.com/documentation/xcuiautomation/xcuielement/debugdescription)

# debugDescription (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Provides debugging information about the element.

## Declaration

```swift
var debugDescription: String { get }
```

<a id="Discussion"></a>

## Discussion

The data in the string varies based on the time at which it’s captured, but it may include any of the following, as well as additional data:

- Values for the element’s attributes
- The entire tree of descendants rooted at the element
- The element’s query

Use this data for debugging only. Depending on any of the data as part of a test is unsupported.

## See Also

### Querying element state

- [waitForExistence(timeout:)](waitforexistence%28timeout_%29.md): Waits the specified amount of time for an element to exist.
- [waitForNonExistence(timeout:)](waitfornonexistence%28timeout_%29.md): Waits the specified amount of time for an element to no longer exist.
- [wait(for:toEqual:timeout:)](wait%28for_toequal_timeout_%29.md): Waits a specified amount of time for a property value to equal a specified value.
- [exists](exists.md): Determines if the element exists.
- [isHittable](ishittable.md): Determines if the system can compute a hit point for the element.

# debugDescription (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Provides debugging information about the element.

## Declaration

```objectivec
@property (copy, readonly) NSString * debugDescription;
```

<a id="Discussion"></a>

## Discussion

The data in the string varies based on the time at which it’s captured, but it may include any of the following, as well as additional data:

- Values for the element’s attributes
- The entire tree of descendants rooted at the element
- The element’s query

Use this data for debugging only. Depending on any of the data as part of a test is unsupported.

## See Also

### Querying element state

- [waitForExistenceWithTimeout:](waitforexistence%28timeout_%29.md): Waits the specified amount of time for an element to exist.
- [waitForNonExistenceWithTimeout:](waitfornonexistence%28timeout_%29.md): Waits the specified amount of time for an element to no longer exist.
- [exists](exists.md): Determines if the element exists.
- [hittable](ishittable.md): Determines if the system can compute a hit point for the element.
