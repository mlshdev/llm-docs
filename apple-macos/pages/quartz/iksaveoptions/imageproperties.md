> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/iksaveoptions/imageproperties](https://developer.apple.com/documentation/quartz/iksaveoptions/imageproperties)

# imageProperties (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns a dictionary of updated image properties that reflects the user’s selection.

## Declaration

```swift
var imageProperties: [AnyHashable : Any]! { get }
```

## See Also

### Retrieving User Responses

- [imageUTType](imageuttype.md): Returns the uniform type identifier that reflects the user’s selection.
- [userSelection](userselection.md): Returns a dictionary that contains the save options selected by the user.

# imageProperties (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns a dictionary of updated image properties that reflects the user’s selection.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary * imageProperties;
```

## See Also

### Retrieving User Responses

- [imageUTType](imageuttype.md): Returns the uniform type identifier that reflects the user’s selection.
- [userSelection](userselection.md): Returns a dictionary that contains the save options selected by the user.
