> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeycommand/init(input:modifierflags:action:discoverabilitytitle:)](https://developer.apple.com/documentation/uikit/uikeycommand/init(input:modifierflags:action:discoverabilitytitle:))

# init(input:modifierFlags:action:discoverabilityTitle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

Creates a key command object that matches the specified input and has a title.

> Use [init(input:modifierFlags:action:)](init%28input_modifierflags_action_%29.md) instead.

## Declaration

```swift
convenience init(input: String, modifierFlags: UIKeyModifierFlags, action: Selector, discoverabilityTitle: String)
```

## Parameters

- `input`: The keys that a person must press. The string must contain one or more characters corresponding to the keys a person pressed. For a list of special characters that don’t have a textual representation, see [Input strings for special keys](../input-strings-for-special-keys.md).
- `modifierFlags`: The bit mask of modifier keys that a person must press. You can use this parameter to specify which modifier keys (Command, Option, and so on) a person must also press. You may specify more than one modifier key. For a list of possible values, see [UIKeyModifierFlags](../uikeymodifierflags.md).
- `action`: The action method to execute on the responder object.
- `discoverabilityTitle`: An elaborated title that explains the purpose of the key command.

<a id="return-value"></a>

## Return Value

The initialized key command object.

<a id="Discussion"></a>

## Discussion

After creating a key command object, you can add it to a view controller using the [addKeyCommand(\_:)](../uiviewcontroller/addkeycommand%28__%29.md) method of the view controller. You can also override any responder class and return the key command directly from the responder’s [keyCommands](../uiresponder/keycommands.md) property.

# keyCommandWithInput:modifierFlags:action:discoverabilityTitle: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

Creates a key command object that matches the specified input and has a title.

> Use [keyCommandWithInput:modifierFlags:action:](init%28input_modifierflags_action_%29.md) instead.

## Declaration

```objectivec
+ (instancetype) keyCommandWithInput:(NSString *) input modifierFlags:(UIKeyModifierFlags) modifierFlags action:(SEL) action discoverabilityTitle:(NSString *) discoverabilityTitle;
```

## Parameters

- `input`: The keys that a person must press. The string must contain one or more characters corresponding to the keys a person pressed. For a list of special characters that don’t have a textual representation, see [Input strings for special keys](../input-strings-for-special-keys.md).
- `modifierFlags`: The bit mask of modifier keys that a person must press. You can use this parameter to specify which modifier keys (Command, Option, and so on) a person must also press. You may specify more than one modifier key. For a list of possible values, see [UIKeyModifierFlags](../uikeymodifierflags.md).
- `action`: The action method to execute on the responder object.
- `discoverabilityTitle`: An elaborated title that explains the purpose of the key command.

<a id="return-value"></a>

## Return Value

The initialized key command object.

<a id="Discussion"></a>

## Discussion

After creating a key command object, you can add it to a view controller using the [addKeyCommand:](../uiviewcontroller/addkeycommand%28__%29.md) method of the view controller. You can also override any responder class and return the key command directly from the responder’s [keyCommands](../uiresponder/keycommands.md) property.
