> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutyaxisanchor](https://developer.apple.com/documentation/appkit/nslayoutyaxisanchor)

# NSLayoutYAxisAnchor (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A factory class for creating vertical layout constraint objects using a fluent API.

## Declaration

```swift
class NSLayoutYAxisAnchor
```

<a id="overview"></a>

## Overview

[NSLayoutYAxisAnchor](nslayoutyaxisanchor.md) adds type information to the methods inherited from [NSLayoutAnchor](nslayoutanchor.md). Specifically, the generic methods declared by [NSLayoutAnchor](nslayoutanchor.md) must now take a matching [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md) object.

**Swift**

```swift
// This constraint is valid
cancelButton.topAnchor.constraintEqualToAnchor(saveButton.topAnchor, constant: 8.0).isActive = true
 
// This constraint generates an incompatible pointer type warning
cancelButton.topAnchor.constraintEqualToAnchor(saveButton.trailingAnchor, constant: 8.0).isActive = true
```

**Objective-C**

```objc
// This constraint is valid
[self.cancelButton.leadingAnchor constraintEqualToAnchor:self.saveButton.trailingAnchor  constant: 8.0].active = true;
 
// This constraint generates an incompatible pointer type warning
[self.cancelButton.topAnchor constraintEqualToAnchor:self.saveButton.trailingAnchor constant: 8.0].active = true;
```

For more information on using layout anchors, see [NSLayoutAnchor](nslayoutanchor.md).

## Topics

### Building system spacing constraints

- [constraint(equalToSystemSpacingBelow:multiplier:)](nslayoutyaxisanchor/constraint%28equaltosystemspacingbelow_multiplier_%29.md): Returns a constraint that defines the specific distance at which the current anchor is positioned below the specified anchor.
- [constraint(greaterThanOrEqualToSystemSpacingBelow:multiplier:)](nslayoutyaxisanchor/constraint%28greaterthanorequaltosystemspacingbelow_multiplier_%29.md): Returns a constraint that defines the minimum distance by which the current anchor is positioned below the specified anchor.
- [constraint(lessThanOrEqualToSystemSpacingBelow:multiplier:)](nslayoutyaxisanchor/constraint%28lessthanorequaltosystemspacingbelow_multiplier_%29.md): Returns a constraint that defines the maximum distance by which the current anchor is positioned below the specified anchor.
- [Creating self-sizing table view cells](https://developer.apple.com/documentation/uikit/creating-self-sizing-table-view-cells): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.

### Creating a layout dimension

- [anchorWithOffset(to:)](nslayoutyaxisanchor/anchorwithoffset%28to_%29.md): Creates a layout dimension object from two anchors.

## Relationships

### Inherits From

- [NSLayoutAnchor](nslayoutanchor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [NSLayoutConstraint](nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.
- [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md): A factory class for creating horizontal layout constraint objects using a fluent API.

### Anchors

- [NSLayoutAnchor](nslayoutanchor.md): A factory class for creating layout constraint objects using a fluent API.
- [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md): A factory class for creating horizontal layout constraint objects using a fluent API.

# NSLayoutYAxisAnchor (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A factory class for creating vertical layout constraint objects using a fluent API.

## Declaration

```objectivec
@interface NSLayoutYAxisAnchor : NSLayoutAnchor
```

<a id="overview"></a>

## Overview

[NSLayoutYAxisAnchor](nslayoutyaxisanchor.md) adds type information to the methods inherited from [NSLayoutAnchor](nslayoutanchor.md). Specifically, the generic methods declared by [NSLayoutAnchor](nslayoutanchor.md) must now take a matching [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md) object.

**Swift**

```swift
// This constraint is valid
cancelButton.topAnchor.constraintEqualToAnchor(saveButton.topAnchor, constant: 8.0).isActive = true
 
// This constraint generates an incompatible pointer type warning
cancelButton.topAnchor.constraintEqualToAnchor(saveButton.trailingAnchor, constant: 8.0).isActive = true
```

**Objective-C**

```objc
// This constraint is valid
[self.cancelButton.leadingAnchor constraintEqualToAnchor:self.saveButton.trailingAnchor  constant: 8.0].active = true;
 
// This constraint generates an incompatible pointer type warning
[self.cancelButton.topAnchor constraintEqualToAnchor:self.saveButton.trailingAnchor constant: 8.0].active = true;
```

For more information on using layout anchors, see [NSLayoutAnchor](nslayoutanchor.md).

## Topics

### Building system spacing constraints

- [constraintEqualToSystemSpacingBelowAnchor:multiplier:](nslayoutyaxisanchor/constraint%28equaltosystemspacingbelow_multiplier_%29.md): Returns a constraint that defines the specific distance at which the current anchor is positioned below the specified anchor.
- [constraintGreaterThanOrEqualToSystemSpacingBelowAnchor:multiplier:](nslayoutyaxisanchor/constraint%28greaterthanorequaltosystemspacingbelow_multiplier_%29.md): Returns a constraint that defines the minimum distance by which the current anchor is positioned below the specified anchor.
- [constraintLessThanOrEqualToSystemSpacingBelowAnchor:multiplier:](nslayoutyaxisanchor/constraint%28lessthanorequaltosystemspacingbelow_multiplier_%29.md): Returns a constraint that defines the maximum distance by which the current anchor is positioned below the specified anchor.
- [Creating self-sizing table view cells](https://developer.apple.com/documentation/uikit/creating-self-sizing-table-view-cells): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.

### Creating a layout dimension

- [anchorWithOffsetToAnchor:](nslayoutyaxisanchor/anchorwithoffset%28to_%29.md): Creates a layout dimension object from two anchors.

## Relationships

### Inherits From

- [NSLayoutAnchor](nslayoutanchor.md)

## See Also

### Related Documentation

- [NSLayoutConstraint](nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.
- [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md): A factory class for creating horizontal layout constraint objects using a fluent API.

### Anchors

- [NSLayoutAnchor](nslayoutanchor.md): A factory class for creating layout constraint objects using a fluent API.
- [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md): A factory class for creating horizontal layout constraint objects using a fluent API.
