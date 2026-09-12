> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdictionarycontroller/localizedkeydictionary](https://developer.apple.com/documentation/appkit/nsdictionarycontroller/localizedkeydictionary)

# localizedKeyDictionary (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The localized key names that are displayed by the receiver in place of the key names.

## Declaration

```swift
var localizedKeyDictionary: [String : String] { get set }
```

<a id="Discussion"></a>

## Discussion

The dictionary contains the key names as the keys, and the localized key names as the corresponding values.

## See Also

### Localizing Key Names

- [localizedKeyTable](localizedkeytable.md): the strings file used to localize key names.

# localizedKeyDictionary (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The localized key names that are displayed by the receiver in place of the key names.

## Declaration

```objectivec
@property (copy) NSDictionary<NSString *,NSString *> * localizedKeyDictionary;
```

<a id="Discussion"></a>

## Discussion

The dictionary contains the key names as the keys, and the localized key names as the corresponding values.

## See Also

### Localizing Key Names

- [localizedKeyTable](localizedkeytable.md): the strings file used to localize key names.
