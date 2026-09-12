> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/accessibilitychildren](https://developer.apple.com/documentation/spritekit/sknode/accessibilitychildren)

# accessibilityChildren (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of user interface elements that represent children of this element.

## Declaration

```swift
var accessibilityChildren: [Any]? { get set }
```

## See Also

### Providing Accessibility

- [accessibilityFrame](accessibilityframe.md): The size of this user interface element, in screen points.
- [accessibilityHelp](accessibilityhelp.md): The help description of this user interface element; for example, the text shown in a tooltip.
- [accessibilityLabel](accessibilitylabel.md): A short description of this user interface element.
- [accessibilityParent](accessibilityparent.md): The user interface element that contains this element.
- [accessibilityRole](accessibilityrole.md): A string value describing the user interface element type; for example, a button.
- [accessibilityRoleDescription](accessibilityroledescription.md): A string value describing the user interface element name and type; for example, the Buy button.
- [accessibilitySubrole](accessibilitysubrole.md): A string that defines this user interface element’s subrole; for example, a full-screen button.
- [isAccessibilityElement](isaccessibilityelement.md): A toggle you implement to indicate to the system whether this user interface element should be exposed to the user.
- [isAccessibilityEnabled](isaccessibilityenabled.md): A toggle you implement to indicate to the system whether this user interface element should respond to user input.
- [accessibilityHitTest(\_:)](accessibilityhittest%28__%29.md): Returns the frontmost user interface element in the element hierarchy.

# accessibilityChildren (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of user interface elements that represent children of this element.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray * accessibilityChildren;
```

## See Also

### Providing Accessibility

- [accessibilityFrame](accessibilityframe.md): The size of this user interface element, in screen points.
- [accessibilityHelp](accessibilityhelp.md): The help description of this user interface element; for example, the text shown in a tooltip.
- [accessibilityLabel](accessibilitylabel.md): A short description of this user interface element.
- [accessibilityParent](accessibilityparent.md): The user interface element that contains this element.
- [accessibilityRole](accessibilityrole.md): A string value describing the user interface element type; for example, a button.
- [accessibilityRoleDescription](accessibilityroledescription.md): A string value describing the user interface element name and type; for example, the Buy button.
- [accessibilitySubrole](accessibilitysubrole.md): A string that defines this user interface element’s subrole; for example, a full-screen button.
- [accessibilityElement](isaccessibilityelement.md): A toggle you implement to indicate to the system whether this user interface element should be exposed to the user.
- [accessibilityEnabled](isaccessibilityenabled.md): A toggle you implement to indicate to the system whether this user interface element should respond to user input.
- [accessibilityHitTest:](accessibilityhittest%28__%29.md): Returns the frontmost user interface element in the element hierarchy.
