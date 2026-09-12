> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicommandalternate/init(title:action:modifierflags:)](https://developer.apple.com/documentation/uikit/uicommandalternate/init(title:action:modifierflags:))

# init(title:action:modifierFlags:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a command alternative with the specified title, action, and modifier flags.

## Declaration

```swift
convenience init(title: String, action: Selector, modifierFlags: UIKeyModifierFlags)
```

## Parameters

- `title`: The command alternative’s title.
- `action`: The action to take after a person selects the alternative command.
- `modifierFlags`: The bit mask of modifier keys that a person must press. You can use this parameter to specify which modifier keys (Command, Option, and so on) a person must also press. You may specify more than one modifier key. For a list of possible values, see [UIKeyModifierFlags](../uikeymodifierflags.md).

<a id="return-value"></a>

## Return Value

A command alternative object.

## See Also

### Creating a command alternative

- [init(coder:)](init%28coder_%29.md): Creates a command alternative from data in an unarchiver.

# alternateWithTitle:action:modifierFlags: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a command alternative with the specified title, action, and modifier flags.

## Declaration

```objectivec
+ (instancetype) alternateWithTitle:(NSString *) title action:(SEL) action modifierFlags:(UIKeyModifierFlags) modifierFlags;
```

## Parameters

- `title`: The command alternative’s title.
- `action`: The action to take after a person selects the alternative command.
- `modifierFlags`: The bit mask of modifier keys that a person must press. You can use this parameter to specify which modifier keys (Command, Option, and so on) a person must also press. You may specify more than one modifier key. For a list of possible values, see [UIKeyModifierFlags](../uikeymodifierflags.md).

<a id="return-value"></a>

## Return Value

A command alternative object.

## See Also

### Creating a command alternative

- [initWithCoder:](init%28coder_%29.md): Creates a command alternative from data in an unarchiver.
