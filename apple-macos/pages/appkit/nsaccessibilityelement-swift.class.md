> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityelement-swift.class](https://developer.apple.com/documentation/appkit/nsaccessibilityelement-swift.class)

# NSAccessibilityElement (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

The basic infrastructure necessary for interacting with an assistive app.

## Declaration

```swift
class NSAccessibilityElement
```

<a id="overview"></a>

## Overview

Create subclasses of the [NSAccessibilityElement](nsaccessibilityelement-swift.class.md) class to represent any of your user interface elements that don’t inherit from [NSView](nsview.md) or from one of the standard AppKit controls. This class represents your user interface element in the accessibility hierarchy and manages the details necessary for working with assistive apps.

To support accessibility features for a custom user interface element:

1. Create your [NSAccessibilityElement](nsaccessibilityelement-swift.class.md) subclass by using [element(withRole:frame:label:parent:)](nsaccessibilityelement-swift.class/element%28withrole_frame_label_parent_%29.md). You can also set these values using [setAccessibilityRole(\_:)](nsaccessibilityprotocol/setaccessibilityrole%28__%29.md), [setAccessibilityLabel(\_:)](nsaccessibilityprotocol/setaccessibilitylabel%28__%29.md) and [setAccessibilityParent(\_:)](nsaccessibilityprotocol/setaccessibilityparent%28__%29.md).
2. Call the parent’s [accessibilityAddChildElement(\_:)](nsaccessibilityelement-swift.class/accessibilityaddchildelement%28__%29.md) method to add your subclass. You can also add the subclass to its parent’s [accessibilityChildren](nsaccessibility-c.protocol/accessibilitychildren.md) array using [setAccessibilityChildren(\_:)](nsaccessibilityprotocol/setaccessibilitychildren%28__%29.md).
3. In your subclass, call [setAccessibilityFrameInParentSpace(\_:)](nsaccessibilityelement-swift.class/setaccessibilityframeinparentspace%28__%29.md). This ensures that your control moves with its superview.
4. In your subclass, adopt a role-specific protocol, customize the role, and post notifications just as you would handle any other accessible control. See [Custom Controls](custom-controls.md).
5. In your subclass, implement any additional properties and methods you may need to use to further customize your user interface element’s accessibility behavior. See [NSAccessibilityProtocol](nsaccessibilityprotocol.md).

## Topics

### Supporting the Accessibility Hierarchy

- [element(withRole:frame:label:parent:)](nsaccessibilityelement-swift.class/element%28withrole_frame_label_parent_%29.md): Instantiates and configures a new accessibility element.
- [accessibilityAddChildElement(\_:)](nsaccessibilityelement-swift.class/accessibilityaddchildelement%28__%29.md): Adds a child to the accessibility element in the accessibility hierarchy.
- [accessibilityFrameInParentSpace()](nsaccessibilityelement-swift.class/accessibilityframeinparentspace%28%29.md): Returns the accessibility element’s frame in its parent’s coordinate system.
- [setAccessibilityFrameInParentSpace(\_:)](nsaccessibilityelement-swift.class/setaccessibilityframeinparentspace%28__%29.md): Sets the accessibility element’s frame in its parent’s coordinate system.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# NSAccessibilityElement (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

The basic infrastructure necessary for interacting with an assistive app.

## Declaration

```objectivec
@interface NSAccessibilityElement : NSObject
```

<a id="overview"></a>

## Overview

Create subclasses of the [NSAccessibilityElement](nsaccessibilityelement-swift.class.md) class to represent any of your user interface elements that don’t inherit from [NSView](nsview.md) or from one of the standard AppKit controls. This class represents your user interface element in the accessibility hierarchy and manages the details necessary for working with assistive apps.

To support accessibility features for a custom user interface element:

1. Create your [NSAccessibilityElement](nsaccessibilityelement-swift.class.md) subclass by using [accessibilityElementWithRole:frame:label:parent:](nsaccessibilityelement-swift.class/element%28withrole_frame_label_parent_%29.md). You can also set these values using [setAccessibilityRole(\_:)](nsaccessibilityprotocol/setaccessibilityrole%28__%29.md), [setAccessibilityLabel(\_:)](nsaccessibilityprotocol/setaccessibilitylabel%28__%29.md) and [setAccessibilityParent(\_:)](nsaccessibilityprotocol/setaccessibilityparent%28__%29.md).
2. Call the parent’s [accessibilityAddChildElement:](nsaccessibilityelement-swift.class/accessibilityaddchildelement%28__%29.md) method to add your subclass. You can also add the subclass to its parent’s [accessibilityChildren](nsaccessibility-c.protocol/accessibilitychildren.md) array using [setAccessibilityChildren(\_:)](nsaccessibilityprotocol/setaccessibilitychildren%28__%29.md).
3. In your subclass, call [setAccessibilityFrameInParentSpace(\_:)](nsaccessibilityelement-swift.class/setaccessibilityframeinparentspace%28__%29.md). This ensures that your control moves with its superview.
4. In your subclass, adopt a role-specific protocol, customize the role, and post notifications just as you would handle any other accessible control. See [Custom Controls](custom-controls.md).
5. In your subclass, implement any additional properties and methods you may need to use to further customize your user interface element’s accessibility behavior. See [NSAccessibility](nsaccessibilityprotocol.md).

## Topics

### Supporting the Accessibility Hierarchy

- [accessibilityElementWithRole:frame:label:parent:](nsaccessibilityelement-swift.class/element%28withrole_frame_label_parent_%29.md): Instantiates and configures a new accessibility element.
- [accessibilityAddChildElement:](nsaccessibilityelement-swift.class/accessibilityaddchildelement%28__%29.md): Adds a child to the accessibility element in the accessibility hierarchy.
- [accessibilityFrameInParentSpace](nsaccessibilityelement-swift.class/accessibilityframeinparentspace.md): The accessibility element’s frame in its parent’s coordinate system.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSAccessibility](nsaccessibilityprotocol.md)
