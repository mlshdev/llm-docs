> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontact/informativetext](https://developer.apple.com/documentation/carplay/cpcontact/informativetext)

# informativeText (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Additional text that the template displays.

## Declaration

```swift
var informativeText: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to display additional information about the contact. For example, their address or a short bio.

The default value is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0).

## See Also

### Configuring the Contact’s Attributes

- [image](image.md): The contact’s image.
- [name](name.md): The contact’s name.
- [subtitle](subtitle.md): A subtitle that the template displays in addition to the contact’s name.

# informativeText (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Additional text that the template displays.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * informativeText;
```

<a id="Discussion"></a>

## Discussion

Use this property to display additional information about the contact. For example, their address or a short bio.

The default value is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0).

## See Also

### Configuring the Contact’s Attributes

- [image](image.md): The contact’s image.
- [name](name.md): The contact’s name.
- [subtitle](subtitle.md): A subtitle that the template displays in addition to the contact’s name.
