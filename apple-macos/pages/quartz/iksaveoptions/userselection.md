> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/iksaveoptions/userselection

# userSelection (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns a dictionary that contains the save options selected by the user.

## Declaration

```swift
var userSelection: [AnyHashable : Any]! { get }
```

## See Also

### Retrieving User Responses

- [imageProperties](imageproperties.md): Returns a dictionary of updated image properties that reflects the user’s selection.
- [imageUTType](imageuttype.md): Returns the uniform type identifier that reflects the user’s selection.

# userSelection (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns a dictionary that contains the save options selected by the user.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary * userSelection;
```

## See Also

### Retrieving User Responses

- [imageProperties](imageproperties.md): Returns a dictionary of updated image properties that reflects the user’s selection.
- [imageUTType](imageuttype.md): Returns the uniform type identifier that reflects the user’s selection.
