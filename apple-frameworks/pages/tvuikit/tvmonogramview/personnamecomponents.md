> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvmonogramview/personnamecomponents](https://developer.apple.com/documentation/tvuikit/tvmonogramview/personnamecomponents)

# personNameComponents (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 27.0)

The names used to create a monogram image.

## Declaration

```swift
var personNameComponents: PersonNameComponents? { get set }
```

<a id="Discussion"></a>

## Discussion

If no image is provided, the monogram object creates an image using the first initial of the [givenName](../../foundation/nspersonnamecomponents/givenname.md) and [familyName](../../foundation/personnamecomponents/familyname.md) attributes contained in this property. The person’s name appears below the monogram image.

## See Also

### Configuring a Monogram

- [image](image.md): Deprecated. The custom image for the monogram.
- [title](title.md): Deprecated. The title for the monogram.
- [subtitle](subtitle.md): Deprecated. The subtitle for the monogram.

# personNameComponents (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 27.0)

The names used to create a monogram image.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSPersonNameComponents * personNameComponents;
```

<a id="Discussion"></a>

## Discussion

If no image is provided, the monogram object creates an image using the first initial of the [givenName](../../foundation/nspersonnamecomponents/givenname.md) and [familyName](../../foundation/personnamecomponents/familyname.md) attributes contained in this property. The person’s name appears below the monogram image.

## See Also

### Configuring a Monogram

- [image](image.md): Deprecated. The custom image for the monogram.
- [title](title.md): Deprecated. The title for the monogram.
- [subtitle](subtitle.md): Deprecated. The subtitle for the monogram.
