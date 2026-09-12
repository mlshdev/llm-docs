> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/keycommands](https://developer.apple.com/documentation/uikit/uiresponder/keycommands)

# keyCommands (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The key commands that trigger actions on this responder.

## Declaration

```swift
var keyCommands: [UIKeyCommand]? { get }
```

<a id="Discussion"></a>

## Discussion

A responder object that supports hardware keyboard commands can redefine this property and use it to return an array of [UIKeyCommand](../uikeycommand.md) objects that it supports. Each key command object represents the keyboard sequence to recognize and the action method of the responder to call in response.

The key commands you return from this method are applied to the entire responder chain. When a key combination is pressed that matches a key command object, UIKit walks the responder chain looking for an object that implements the corresponding action method. It calls that method on the first object it finds and then stops processing the event.

# keyCommands (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The key commands that trigger actions on this responder.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<UIKeyCommand *> * keyCommands;
```

<a id="Discussion"></a>

## Discussion

A responder object that supports hardware keyboard commands can redefine this property and use it to return an array of [UIKeyCommand](../uikeycommand.md) objects that it supports. Each key command object represents the keyboard sequence to recognize and the action method of the responder to call in response.

The key commands you return from this method are applied to the entire responder chain. When a key combination is pressed that matches a key command object, UIKit walks the responder chain looking for an object that implements the corresponding action method. It calls that method on the first object it finds and then stops processing the event.
