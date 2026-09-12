> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrollabel/role-swift.enum](https://developer.apple.com/documentation/touchcontroller/tccontrollabel/role-swift.enum)

# TCControlLabel.Role (Swift)

**Framework:** Touch Controller  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Defines the role for a control label. This determines the type of control on the touch controller’s associated GCController.

## Declaration

```swift
enum Role
```

## Topics

### Roles

- [TCControlLabel.Role.button](role-swift.enum/button.md): A label for a button input controller.
- [TCControlLabel.Role.directionPad](role-swift.enum/directionpad.md): A label for a direction pad controller.

### Creating a role

- [init(rawValue:)](role-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the control

- [role](role-swift.property.md): The type of the control label.

# TCControlLabelRole (Objective-C)

**Framework:** Touch Controller  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Defines the role for a control label. This determines the type of control on the touch controller’s associated GCController.

## Declaration

```objectivec
enum TCControlLabelRole : NSInteger;
```

## Topics

### Roles

- [TCControlLabelRoleButton](role-swift.enum/button.md): A label for a button input controller.
- [TCControlLabelRoleDirectionPad](role-swift.enum/directionpad.md): A label for a direction pad controller.

## See Also

### Inspecting the control

- [role](role-swift.property.md): The type of the control label.
