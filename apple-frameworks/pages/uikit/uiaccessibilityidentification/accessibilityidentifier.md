> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityidentification/accessibilityidentifier](https://developer.apple.com/documentation/uikit/uiaccessibilityidentification/accessibilityidentifier)

# accessibilityIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A string that identifies the element.

## Declaration

```swift
@MainActor var accessibilityIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

An identifier can be used to uniquely identify an element in the scripts you write using the UI Automation interfaces. Using an identifier allows you to avoid inappropriately setting or accessing an element’s accessibility label.

# accessibilityIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A string that identifies the element.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * accessibilityIdentifier;
```

<a id="Discussion"></a>

## Discussion

An identifier can be used to uniquely identify an element in the scripts you write using the UI Automation interfaces. Using an identifier allows you to avoid inappropriately setting or accessing an element’s accessibility label.
