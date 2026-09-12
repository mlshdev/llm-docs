> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutxaxisanchor](https://developer.apple.com/documentation/uikit/nslayoutxaxisanchor)

# NSLayoutXAxisAnchor (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A factory class for creating horizontal layout constraint objects using a fluent API.

## Declaration

```swift
@MainActor class NSLayoutXAxisAnchor
```

<a id="overview"></a>

## Overview

[NSLayoutXAxisAnchor](nslayoutxaxisanchor.md) adds type information to the methods inherited from [NSLayoutAnchor](nslayoutanchor.md). Specifically, the generic methods declared by [NSLayoutAnchor](nslayoutanchor.md) must now take a matching [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md) object.

**Swift**

```swift
// This constraint is valid
cancelButton.leadingAnchor.constraintEqualToAnchor(saveButton.trailingAnchor, constant: 8.0).isActive = true
 
// This constraint generates an incompatible pointer type warning
cancelButton.leadingAnchor.constraintEqualToAnchor(saveButton.topAnchor, constant: 8.0).isActive = true
```

**Objective-C**

```objc
// This constraint is valid
[self.cancelButton.leadingAnchor constraintEqualToAnchor:self.saveButton.trailingAnchor constant: 8.0].active = true;
 
// This constraint generates an incompatible pointer type warning
[self.cancelButton.leadingAnchor constraintEqualToAnchor:self.saveButton.topAnchor constant: 8.0].active = true;
```

For more information on using layout anchors, see [NSLayoutAnchor](nslayoutanchor.md).

## Topics

### Building system spacing constraints

- [constraint(equalToSystemSpacingAfter:multiplier:)](nslayoutxaxisanchor/constraint%28equaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines by how much the current anchor trails the specified anchor.
- [constraint(greaterThanOrEqualToSystemSpacingAfter:multiplier:)](nslayoutxaxisanchor/constraint%28greaterthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the minimum amount by which the current anchor trails the specified anchor.
- [constraint(lessThanOrEqualToSystemSpacingAfter:multiplier:)](nslayoutxaxisanchor/constraint%28lessthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the maximum amount by which the current anchor trails the specified anchor.
- [Creating self-sizing table view cells](creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.

### Creating a layout dimension

- [anchorWithOffset(to:)](nslayoutxaxisanchor/anchorwithoffset%28to_%29.md): Creates a layout dimension object from two anchors.

## Relationships

### Inherits From

- [NSLayoutAnchor](nslayoutanchor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [NSLayoutConstraint](nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.
- [Auto Layout Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/index.html?language=swift#//apple_ref/doc/uid/TP40010853)

### Anchors

- [NSLayoutAnchor](nslayoutanchor.md): A factory class for creating layout constraint objects using a fluent API.
- [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md): A factory class for creating vertical layout constraint objects using a fluent API.
- [NSLAYOUTANCHOR_H](nslayoutanchor_h.md)

# NSLayoutXAxisAnchor (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A factory class for creating horizontal layout constraint objects using a fluent API.

## Declaration

```objectivec
@interface NSLayoutXAxisAnchor : NSLayoutAnchor
```

<a id="overview"></a>

## Overview

[NSLayoutXAxisAnchor](nslayoutxaxisanchor.md) adds type information to the methods inherited from [NSLayoutAnchor](nslayoutanchor.md). Specifically, the generic methods declared by [NSLayoutAnchor](nslayoutanchor.md) must now take a matching [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md) object.

**Swift**

```swift
// This constraint is valid
cancelButton.leadingAnchor.constraintEqualToAnchor(saveButton.trailingAnchor, constant: 8.0).isActive = true
 
// This constraint generates an incompatible pointer type warning
cancelButton.leadingAnchor.constraintEqualToAnchor(saveButton.topAnchor, constant: 8.0).isActive = true
```

**Objective-C**

```objc
// This constraint is valid
[self.cancelButton.leadingAnchor constraintEqualToAnchor:self.saveButton.trailingAnchor constant: 8.0].active = true;
 
// This constraint generates an incompatible pointer type warning
[self.cancelButton.leadingAnchor constraintEqualToAnchor:self.saveButton.topAnchor constant: 8.0].active = true;
```

For more information on using layout anchors, see [NSLayoutAnchor](nslayoutanchor.md).

## Topics

### Building system spacing constraints

- [constraintEqualToSystemSpacingAfterAnchor:multiplier:](nslayoutxaxisanchor/constraint%28equaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines by how much the current anchor trails the specified anchor.
- [constraintGreaterThanOrEqualToSystemSpacingAfterAnchor:multiplier:](nslayoutxaxisanchor/constraint%28greaterthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the minimum amount by which the current anchor trails the specified anchor.
- [constraintLessThanOrEqualToSystemSpacingAfterAnchor:multiplier:](nslayoutxaxisanchor/constraint%28lessthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the maximum amount by which the current anchor trails the specified anchor.
- [Creating self-sizing table view cells](creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.

### Creating a layout dimension

- [anchorWithOffsetToAnchor:](nslayoutxaxisanchor/anchorwithoffset%28to_%29.md): Creates a layout dimension object from two anchors.

## Relationships

### Inherits From

- [NSLayoutAnchor](nslayoutanchor.md)

## See Also

### Related Documentation

- [NSLayoutConstraint](nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.
- [Auto Layout Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/index.html?language=swift#//apple_ref/doc/uid/TP40010853)

### Anchors

- [NSLayoutAnchor](nslayoutanchor.md): A factory class for creating layout constraint objects using a fluent API.
- [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md): A factory class for creating vertical layout constraint objects using a fluent API.
