> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementquery](https://developer.apple.com/documentation/xcuiautomation/xcuielementquery)

# XCUIElementQuery (Swift)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

An object that defines the search criteria a test uses to identify UI elements.

## Declaration

```swift
@MainActor class XCUIElementQuery
```

## Mentioned In

- [Recording UI automation for testing](recording-ui-automation-for-testing.md)

<a id="Discussion"></a>

## Discussion

Use element queries to find UI elements in your app that you interact with in the tests, to test for the presence of expected elements, or to discover elements to test their values.

For example, this test uses an element query to find the “Add Book” button, and after clicking the button, checks that there’s one button in an outline view cell titled “Untitled Book”. If the test can’t find the “Add Book” button, or there isn’t one “Untitled Book” cell, then the test fails.

```swift
@MainActor
func testClickingAddCreatesAnUntitledBook() throws {
    let app = XCUIApplication()
    app.launch()
    let list = app.windows["Reading Journal"]
    list.toolbars.children(matching: .button)["Add Book"].click()
    XCTAssertEqual(list.outlines["Sidebar"].cells.containing(.button, identifier:"Untitled Book").count, 1)
}
```

## Topics

### Creating new queries

- [children(matching:)](xcuielementquery/children%28matching_%29.md): Returns a new query that matches all direct children of the requested type.
- [descendants(matching:)](xcuielementquery/descendants%28matching_%29.md): Returns a new query that matches all descendants of the requested type.
- [containing(\_:)](xcuielementquery/containing%28__%29.md): Returns a new query that matches elements containing a descendant that meets the logical conditions of the provided predicate.
- [containing(\_:identifier:)](xcuielementquery/containing%28__identifier_%29.md): Returns a new query that matches elements that contain a descendant of the requested type and an identifying property that matches a provided identifier.
- [matching(identifier:)](xcuielementquery/matching%28identifier_%29.md): Returns a new query that matches elements that have an identifying property that matches a provided identifier.
- [matching(\_:)](xcuielementquery/matching%28__%29.md): Returns a new query that matches elements that meet the logical conditions of the provided predicate.
- [matching(\_:identifier:)](xcuielementquery/matching%28__identifier_%29.md): Returns a new query that matches elements of the requested type and have an identifying property that matches a provided identifier.

### Accessing matched elements

- [allElementsBoundByAccessibilityElement](xcuielementquery/allelementsboundbyaccessibilityelement.md): Immediately evaluates the query and returns an array of elements bound to the resulting accessibility elements.
- [allElementsBoundByIndex](xcuielementquery/allelementsboundbyindex.md): Immediately evaluates the query and returns an array of elements bound by the index of each result.
- [count](xcuielementquery/count.md): Evaluates the query and returns the number of elements that match.
- [element](xcuielementquery/element.md): The query’s single matching element.
- [element(boundBy:)](xcuielementquery/element%28boundby_%29.md): Uses an index into the query’s results to determine which underlying accessibility element to use.
- [element(matching:)](xcuielementquery/element%28matching_%29.md): Matches the predicate.
- [element(matching:identifier:)](xcuielementquery/element%28matching_identifier_%29.md): Matches the provided element type and identifier.
- [subscript(\_:)](xcuielementquery/subscript%28__%29.md): Returns a descendant element that matches a provided identifier.
- [element(at:)](xcuielementquery/element%28at_%29.md): Deprecated. Returns an element that resolves to the index into the query’s result set.

### Debugging element queries

- [debugDescription](xcuielementquery/debugdescription.md): Provides debugging information about the query.

### Identifying window buttons

- [XCUIIdentifierCloseWindow](xcuiidentifierclosewindow.md): The identifier for a window’s close button.
- [XCUIIdentifierFullScreenWindow](xcuiidentifierfullscreenwindow.md): The identifier for a window’s full-screen button.
- [XCUIIdentifierMinimizeWindow](xcuiidentifierminimizewindow.md): The identifier for a window’s minimize button.
- [XCUIIdentifierZoomWindow](xcuiidentifierzoomwindow.md): The identifier for a window’s zoom button.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [XCUIElementTypeQueryProvider](xcuielementtypequeryprovider.md)

## See Also

### UI element queries

- [XCUIElementTypeQueryProvider](xcuielementtypequeryprovider.md): A type that provides ready-made queries for locating descendant UI elements.

# XCUIElementQuery (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

An object that defines the search criteria a test uses to identify UI elements.

## Declaration

```objectivec
@interface XCUIElementQuery : NSObject
```

## Mentioned In

- [Recording UI automation for testing](recording-ui-automation-for-testing.md)

<a id="Discussion"></a>

## Discussion

Use element queries to find UI elements in your app that you interact with in the tests, to test for the presence of expected elements, or to discover elements to test their values.

For example, this test uses an element query to find the “Add Book” button, and after clicking the button, checks that there’s one button in an outline view cell titled “Untitled Book”. If the test can’t find the “Add Book” button, or there isn’t one “Untitled Book” cell, then the test fails.

```swift
@MainActor
func testClickingAddCreatesAnUntitledBook() throws {
    let app = XCUIApplication()
    app.launch()
    let list = app.windows["Reading Journal"]
    list.toolbars.children(matching: .button)["Add Book"].click()
    XCTAssertEqual(list.outlines["Sidebar"].cells.containing(.button, identifier:"Untitled Book").count, 1)
}
```

## Topics

### Creating new queries

- [childrenMatchingType:](xcuielementquery/children%28matching_%29.md): Returns a new query that matches all direct children of the requested type.
- [descendantsMatchingType:](xcuielementquery/descendants%28matching_%29.md): Returns a new query that matches all descendants of the requested type.
- [containingPredicate:](xcuielementquery/containing%28__%29.md): Returns a new query that matches elements containing a descendant that meets the logical conditions of the provided predicate.
- [containingType:identifier:](xcuielementquery/containing%28__identifier_%29.md): Returns a new query that matches elements that contain a descendant of the requested type and an identifying property that matches a provided identifier.
- [matchingIdentifier:](xcuielementquery/matching%28identifier_%29.md): Returns a new query that matches elements that have an identifying property that matches a provided identifier.
- [matchingPredicate:](xcuielementquery/matching%28__%29.md): Returns a new query that matches elements that meet the logical conditions of the provided predicate.
- [matchingType:identifier:](xcuielementquery/matching%28__identifier_%29.md): Returns a new query that matches elements of the requested type and have an identifying property that matches a provided identifier.

### Accessing matched elements

- [allElementsBoundByAccessibilityElement](xcuielementquery/allelementsboundbyaccessibilityelement.md): Immediately evaluates the query and returns an array of elements bound to the resulting accessibility elements.
- [allElementsBoundByIndex](xcuielementquery/allelementsboundbyindex.md): Immediately evaluates the query and returns an array of elements bound by the index of each result.
- [count](xcuielementquery/count.md): Evaluates the query and returns the number of elements that match.
- [element](xcuielementquery/element.md): The query’s single matching element.
- [elementBoundByIndex:](xcuielementquery/element%28boundby_%29.md): Uses an index into the query’s results to determine which underlying accessibility element to use.
- [elementMatchingPredicate:](xcuielementquery/element%28matching_%29.md): Matches the predicate.
- [elementMatchingType:identifier:](xcuielementquery/element%28matching_identifier_%29.md): Matches the provided element type and identifier.
- [objectForKeyedSubscript:](xcuielementquery/subscript%28__%29.md): Returns a descendant element that matches a provided identifier.
- [elementAtIndex:](xcuielementquery/element%28at_%29.md): Deprecated. Returns an element that resolves to the index into the query’s result set.

### Debugging element queries

- [debugDescription](xcuielementquery/debugdescription.md): Provides debugging information about the query.

### Identifying window buttons

- [XCUIIdentifierCloseWindow](xcuiidentifierclosewindow.md): The identifier for a window’s close button.
- [XCUIIdentifierFullScreenWindow](xcuiidentifierfullscreenwindow.md): The identifier for a window’s full-screen button.
- [XCUIIdentifierMinimizeWindow](xcuiidentifierminimizewindow.md): The identifier for a window’s minimize button.
- [XCUIIdentifierZoomWindow](xcuiidentifierzoomwindow.md): The identifier for a window’s zoom button.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [XCUIElementTypeQueryProvider](xcuielementtypequeryprovider.md)

## See Also

### UI element queries

- [XCUIElementTypeQueryProvider](xcuielementtypequeryprovider.md): A type that provides ready-made queries for locating descendant UI elements.
