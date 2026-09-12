> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutxaxisanchor](https://developer.apple.com/documentation/appkit/nslayoutxaxisanchor)

# NSLayoutXAxisAnchor (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A factory class for creating horizontal layout constraint objects using a fluent API.

## Declaration

```swift
class NSLayoutXAxisAnchor
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
[self.cancelButton.leadingAnchor constraintEqualToAnchor:self.saveButton.trailingAnchor  constant: 8.0].active = true;
 
// This constraint generates an incompatible pointer type warning
[self.cancelButton.leadingAnchor constraintEqualToAnchor:self.saveButton.topAnchor constant: 8.0].active = true;
```

For more information on using layout anchors, see [NSLayoutAnchor](nslayoutanchor.md).

## Topics

### Building system spacing constraints

- [constraint(equalToSystemSpacingAfter:multiplier:)](nslayoutxaxisanchor/constraint%28equaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines by how much the current anchor trails the specified anchor.
- [constraint(greaterThanOrEqualToSystemSpacingAfter:multiplier:)](nslayoutxaxisanchor/constraint%28greaterthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the minimum amount by which the current anchor trails the specified anchor.
- [constraint(lessThanOrEqualToSystemSpacingAfter:multiplier:)](nslayoutxaxisanchor/constraint%28lessthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the maximum amount by which the current anchor trails the specified anchor.
- [Creating self-sizing table view cells](https://developer.apple.com/documentation/uikit/creating-self-sizing-table-view-cells): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.

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
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [NSLayoutConstraint](nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.
- [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md): A factory class for creating vertical layout constraint objects using a fluent API.

### Anchors

- [NSLayoutAnchor](nslayoutanchor.md): A factory class for creating layout constraint objects using a fluent API.
- [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md): A factory class for creating vertical layout constraint objects using a fluent API.

# NSLayoutXAxisAnchor (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

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
[self.cancelButton.leadingAnchor constraintEqualToAnchor:self.saveButton.trailingAnchor  constant: 8.0].active = true;
 
// This constraint generates an incompatible pointer type warning
[self.cancelButton.leadingAnchor constraintEqualToAnchor:self.saveButton.topAnchor constant: 8.0].active = true;
```

For more information on using layout anchors, see [NSLayoutAnchor](nslayoutanchor.md).

## Topics

### Building system spacing constraints

- [constraintEqualToSystemSpacingAfterAnchor:multiplier:](nslayoutxaxisanchor/constraint%28equaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines by how much the current anchor trails the specified anchor.
- [constraintGreaterThanOrEqualToSystemSpacingAfterAnchor:multiplier:](nslayoutxaxisanchor/constraint%28greaterthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the minimum amount by which the current anchor trails the specified anchor.
- [constraintLessThanOrEqualToSystemSpacingAfterAnchor:multiplier:](nslayoutxaxisanchor/constraint%28lessthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the maximum amount by which the current anchor trails the specified anchor.
- [Creating self-sizing table view cells](https://developer.apple.com/documentation/uikit/creating-self-sizing-table-view-cells): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.

### Creating a layout dimension

- [anchorWithOffsetToAnchor:](nslayoutxaxisanchor/anchorwithoffset%28to_%29.md): Creates a layout dimension object from two anchors.

## Relationships

### Inherits From

- [NSLayoutAnchor](nslayoutanchor.md)

## See Also

### Related Documentation

- [NSLayoutConstraint](nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.
- [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md): A factory class for creating vertical layout constraint objects using a fluent API.

### Anchors

- [NSLayoutAnchor](nslayoutanchor.md): A factory class for creating layout constraint objects using a fluent API.
- [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md): A factory class for creating vertical layout constraint objects using a fluent API.
