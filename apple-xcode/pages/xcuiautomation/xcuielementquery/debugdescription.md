> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xcuiautomation/xcuielementquery/debugdescription

# debugDescription (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Provides debugging information about the query.

## Declaration

```swift
var debugDescription: String { get }
```

<a id="Discussion"></a>

## Discussion

The data in the string varies based on the time at which it’s captured, but it may include any of the following as well as additional data:

- A description of each step of the query evaluation
- Information about the inputs and matched outputs of each step of the query

The data this method returns is for debugging your test. Don’t depend on any part the resulting string for test evaluation.

# debugDescription (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Provides debugging information about the query.

## Declaration

```objectivec
@property (copy, readonly) NSString * debugDescription;
```

<a id="Discussion"></a>

## Discussion

The data in the string varies based on the time at which it’s captured, but it may include any of the following as well as additional data:

- A description of each step of the query evaluation
- Information about the inputs and matched outputs of each step of the query

The data this method returns is for debugging your test. Don’t depend on any part the resulting string for test evaluation.
