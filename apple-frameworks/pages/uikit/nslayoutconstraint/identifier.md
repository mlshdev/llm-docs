> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutconstraint/identifier](https://developer.apple.com/documentation/uikit/nslayoutconstraint/identifier)

# identifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The name that identifies the constraint.

## Declaration

```swift
var identifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A constraint’s identifier is available in its description. Identifiers that start with `NS` are reserved by the system.

# identifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name that identifies the constraint.

## Declaration

```objectivec
@property (copy, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

A constraint’s identifier is available in its description. Identifiers that start with `NS` are reserved by the system.
