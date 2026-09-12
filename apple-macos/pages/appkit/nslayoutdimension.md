> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutdimension](https://developer.apple.com/documentation/appkit/nslayoutdimension)

# NSLayoutDimension (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A factory class for creating size-based layout constraint objects using a fluent API.

## Declaration

```swift
class NSLayoutDimension
```

<a id="overview"></a>

## Overview

Use these constraints to programmatically define your layout using Auto Layout. All sizes are measured in points. In addition to providing size-specific methods for creating constraints, this class adds type information to the methods inherited from [NSLayoutAnchor](nslayoutanchor.md). Specifically, the generic methods declared by [NSLayoutAnchor](nslayoutanchor.md) must now take a matching [NSLayoutDimension](nslayoutdimension.md) object.

**Swift**

```swift
// This code works as expected.
saveButton.widthAnchor.constraint(equalTo: cancelButton.widthAnchor).isActive = true

// This code generates an incompatible pointer type warning.
saveButton.widthAnchor.constraint(equalTo: cancelButton.leadingAnchor).isActive = true
```

**Objective-C**

```objc
// This code works as expected.
[self.saveButton.widthAnchor constraintEqualToAnchor:self.cancelButton.widthAnchor].active = YES;
 
// This code generates an incompatible pointer type warning.
[self.saveButton.widthAnchor constraintEqualToAnchor:self.cancelButton.leadingAnchor].active = YES;
```

For more information on using layout anchors, see [NSLayoutAnchor](nslayoutanchor.md).

## Topics

### Building constraints

- [constraint(equalTo:multiplier:)](nslayoutdimension/constraint%28equalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified anchor multiplied by the constant.
- [constraint(equalTo:multiplier:constant:)](nslayoutdimension/constraint%28equalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified size attribute multiplied by a constant plus an offset.
- [constraint(equalToConstant:)](nslayoutdimension/constraint%28equaltoconstant_%29.md): Returns a constraint that defines a constant size for the anchor’s size attribute.
- [constraint(greaterThanOrEqualTo:multiplier:)](nslayoutdimension/constraint%28greaterthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant.
- [constraint(greaterThanOrEqualTo:multiplier:constant:)](nslayoutdimension/constraint%28greaterthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraint(greaterThanOrEqualToConstant:)](nslayoutdimension/constraint%28greaterthanorequaltoconstant_%29.md): Returns a constraint that defines the minimum size for the anchor’s size attribute.
- [constraint(lessThanOrEqualTo:multiplier:)](nslayoutdimension/constraint%28lessthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as less than or equal to the specified anchor multiplied by the constant.
- [constraint(lessThanOrEqualTo:multiplier:constant:)](nslayoutdimension/constraint%28lessthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraint(lessThanOrEqualToConstant:)](nslayoutdimension/constraint%28lessthanorequaltoconstant_%29.md): Returns a constraint that defines the maximum size for the anchor’s size attribute.

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

### Layout Guides

- [NSLayoutGuide](nslayoutguide.md): A rectangular area that can interact with Auto Layout.

# NSLayoutDimension (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A factory class for creating size-based layout constraint objects using a fluent API.

## Declaration

```objectivec
@interface NSLayoutDimension : NSLayoutAnchor
```

<a id="overview"></a>

## Overview

Use these constraints to programmatically define your layout using Auto Layout. All sizes are measured in points. In addition to providing size-specific methods for creating constraints, this class adds type information to the methods inherited from [NSLayoutAnchor](nslayoutanchor.md). Specifically, the generic methods declared by [NSLayoutAnchor](nslayoutanchor.md) must now take a matching [NSLayoutDimension](nslayoutdimension.md) object.

**Swift**

```swift
// This code works as expected.
saveButton.widthAnchor.constraint(equalTo: cancelButton.widthAnchor).isActive = true

// This code generates an incompatible pointer type warning.
saveButton.widthAnchor.constraint(equalTo: cancelButton.leadingAnchor).isActive = true
```

**Objective-C**

```objc
// This code works as expected.
[self.saveButton.widthAnchor constraintEqualToAnchor:self.cancelButton.widthAnchor].active = YES;
 
// This code generates an incompatible pointer type warning.
[self.saveButton.widthAnchor constraintEqualToAnchor:self.cancelButton.leadingAnchor].active = YES;
```

For more information on using layout anchors, see [NSLayoutAnchor](nslayoutanchor.md).

## Topics

### Building constraints

- [constraintEqualToAnchor:multiplier:](nslayoutdimension/constraint%28equalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified anchor multiplied by the constant.
- [constraintEqualToAnchor:multiplier:constant:](nslayoutdimension/constraint%28equalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified size attribute multiplied by a constant plus an offset.
- [constraintEqualToConstant:](nslayoutdimension/constraint%28equaltoconstant_%29.md): Returns a constraint that defines a constant size for the anchor’s size attribute.
- [constraintGreaterThanOrEqualToAnchor:multiplier:](nslayoutdimension/constraint%28greaterthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant.
- [constraintGreaterThanOrEqualToAnchor:multiplier:constant:](nslayoutdimension/constraint%28greaterthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraintGreaterThanOrEqualToConstant:](nslayoutdimension/constraint%28greaterthanorequaltoconstant_%29.md): Returns a constraint that defines the minimum size for the anchor’s size attribute.
- [constraintLessThanOrEqualToAnchor:multiplier:](nslayoutdimension/constraint%28lessthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as less than or equal to the specified anchor multiplied by the constant.
- [constraintLessThanOrEqualToAnchor:multiplier:constant:](nslayoutdimension/constraint%28lessthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraintLessThanOrEqualToConstant:](nslayoutdimension/constraint%28lessthanorequaltoconstant_%29.md): Returns a constraint that defines the maximum size for the anchor’s size attribute.

## Relationships

### Inherits From

- [NSLayoutAnchor](nslayoutanchor.md)

## See Also

### Layout Guides

- [NSLayoutGuide](nslayoutguide.md): A rectangular area that can interact with Auto Layout.
- [NSViewLayoutRegion](nsviewlayoutregion.md)
- [NSViewLayoutRegionAdaptivityAxis](nsviewlayoutregionadaptivityaxis.md)
