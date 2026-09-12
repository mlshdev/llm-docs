> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/accessibilityhittest(_:)](https://developer.apple.com/documentation/spritekit/sknode/accessibilityhittest(_:))

# accessibilityHitTest(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the frontmost user interface element in the element hierarchy.

## Declaration

```swift
func accessibilityHitTest(_ point: CGPoint) -> Any?
```

## Parameters

- `point`: Relative to the bottom-left of the screen, in screen points, and guaranteed to lie within the receiver.

<a id="Discussion"></a>

## Discussion

Override this method to implement your own, deeper hit testing within a user interface element.

## See Also

### Providing Accessibility

- [accessibilityChildren](accessibilitychildren.md): An array of user interface elements that represent children of this element.
- [accessibilityFrame](accessibilityframe.md): The size of this user interface element, in screen points.
- [accessibilityHelp](accessibilityhelp.md): The help description of this user interface element; for example, the text shown in a tooltip.
- [accessibilityLabel](accessibilitylabel.md): A short description of this user interface element.
- [accessibilityParent](accessibilityparent.md): The user interface element that contains this element.
- [accessibilityRole](accessibilityrole.md): A string value describing the user interface element type; for example, a button.
- [accessibilityRoleDescription](accessibilityroledescription.md): A string value describing the user interface element name and type; for example, the Buy button.
- [accessibilitySubrole](accessibilitysubrole.md): A string that defines this user interface element’s subrole; for example, a full-screen button.
- [isAccessibilityElement](isaccessibilityelement.md): A toggle you implement to indicate to the system whether this user interface element should be exposed to the user.
- [isAccessibilityEnabled](isaccessibilityenabled.md): A toggle you implement to indicate to the system whether this user interface element should respond to user input.

# accessibilityHitTest: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the frontmost user interface element in the element hierarchy.

## Declaration

```objectivec
- (id) accessibilityHitTest:(CGPoint) point;
```

## Parameters

- `point`: Relative to the bottom-left of the screen, in screen points, and guaranteed to lie within the receiver.

<a id="Discussion"></a>

## Discussion

Override this method to implement your own, deeper hit testing within a user interface element.

## See Also

### Providing Accessibility

- [accessibilityChildren](accessibilitychildren.md): An array of user interface elements that represent children of this element.
- [accessibilityFrame](accessibilityframe.md): The size of this user interface element, in screen points.
- [accessibilityHelp](accessibilityhelp.md): The help description of this user interface element; for example, the text shown in a tooltip.
- [accessibilityLabel](accessibilitylabel.md): A short description of this user interface element.
- [accessibilityParent](accessibilityparent.md): The user interface element that contains this element.
- [accessibilityRole](accessibilityrole.md): A string value describing the user interface element type; for example, a button.
- [accessibilityRoleDescription](accessibilityroledescription.md): A string value describing the user interface element name and type; for example, the Buy button.
- [accessibilitySubrole](accessibilitysubrole.md): A string that defines this user interface element’s subrole; for example, a full-screen button.
- [accessibilityElement](isaccessibilityelement.md): A toggle you implement to indicate to the system whether this user interface element should be exposed to the user.
- [accessibilityEnabled](isaccessibilityenabled.md): A toggle you implement to indicate to the system whether this user interface element should respond to user input.
