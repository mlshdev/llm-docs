> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikey/characters](https://developer.apple.com/documentation/uikit/uikey/characters)

# characters (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 13.4+ · visionOS 1.0+

A string that represents the text value of the key combined with any active modifier keys.

## Declaration

```swift
var characters: String { get }
```

<a id="Discussion"></a>

## Discussion

When the user holds one or more modifier keys, this property contains the modified characters according to the rules of the particular modifier keys. For example, if the user holds Shift while pressing a letter button on a Latin keyboard, this property contains a capital letter.

## See Also

### Getting key characters

- [charactersIgnoringModifiers](charactersignoringmodifiers.md): A string that represents the text value of the key without modifier keys.

# characters (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 13.4+ · visionOS 1.0+

A string that represents the text value of the key combined with any active modifier keys.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * characters;
```

<a id="Discussion"></a>

## Discussion

When the user holds one or more modifier keys, this property contains the modified characters according to the rules of the particular modifier keys. For example, if the user holds Shift while pressing a letter button on a Latin keyboard, this property contains a capital letter.

## See Also

### Getting key characters

- [charactersIgnoringModifiers](charactersignoringmodifiers.md): A string that represents the text value of the key without modifier keys.
