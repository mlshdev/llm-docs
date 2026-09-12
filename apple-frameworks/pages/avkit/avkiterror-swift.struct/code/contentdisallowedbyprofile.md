> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avkiterror-swift.struct/code/contentdisallowedbyprofile](https://developer.apple.com/documentation/avkit/avkiterror-swift.struct/code/contentdisallowedbyprofile)

# AVKitError.Code.contentDisallowedByProfile (Swift)

**Framework:** AVKit  
**Kind:** Case  
**Availability:** tvOS 13.0+

An installed profile restricts access to this content.

## Declaration

```swift
case contentDisallowedByProfile
```

<a id="Discussion"></a>

## Discussion

The user can’t override this restriction by entering the device passcode, but they may be able to override it in the Settings app.

## See Also

### Error Codes

- [AVKitError.Code.unknown](unknown.md): An unknown error.
- [AVKitError.Code.contentRatingUnknown](contentratingunknown.md): The media content rating is missing or unrecognized.
- [AVKitError.Code.contentDisallowedByPasscode](contentdisallowedbypasscode.md): A restriction disallows access to this content, but the user can override the restriction by entering the device passcode.
- [AVKitError.Code.pictureInPictureStartFailed](pictureinpicturestartfailed.md): The system failed to start Picture in Picture.

# AVKitErrorContentDisallowedByProfile (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration Case  
**Availability:** tvOS 13.0+

An installed profile restricts access to this content.

## Declaration

```objectivec
AVKitErrorContentDisallowedByProfile
```

<a id="Discussion"></a>

## Discussion

The user can’t override this restriction by entering the device passcode, but they may be able to override it in the Settings app.

## See Also

### Error Codes

- [AVKitErrorUnknown](unknown.md): An unknown error.
- [AVKitErrorContentRatingUnknown](contentratingunknown.md): The media content rating is missing or unrecognized.
- [AVKitErrorContentDisallowedByPasscode](contentdisallowedbypasscode.md): A restriction disallows access to this content, but the user can override the restriction by entering the device passcode.
- [AVKitErrorPictureInPictureStartFailed](pictureinpicturestartfailed.md): The system failed to start Picture in Picture.
