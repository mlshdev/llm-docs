> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontact/subtitle](https://developer.apple.com/documentation/carplay/cpcontact/subtitle)

# subtitle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A subtitle that the template displays in addition to the contact’s name.

## Declaration

```swift
var subtitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to display secondary information about the contact. For example, their job title or email address.

The default value is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0).

## See Also

### Configuring the Contact’s Attributes

- [image](image.md): The contact’s image.
- [name](name.md): The contact’s name.
- [informativeText](informativetext.md): Additional text that the template displays.

# subtitle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A subtitle that the template displays in addition to the contact’s name.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * subtitle;
```

<a id="Discussion"></a>

## Discussion

Use this property to display secondary information about the contact. For example, their job title or email address.

The default value is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0).

## See Also

### Configuring the Contact’s Attributes

- [image](image.md): The contact’s image.
- [name](name.md): The contact’s name.
- [informativeText](informativetext.md): Additional text that the template displays.
