> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avkiterror-swift.struct/contentdisallowedbyprofile](https://developer.apple.com/documentation/avkit/avkiterror-swift.struct/contentdisallowedbyprofile)

# contentDisallowedByProfile

**Framework:** AVKit  
**Kind:** Type Property  
**Availability:** tvOS 13.0+

An installed profile restricts access to this content.

## Declaration

```swift
static var contentDisallowedByProfile: AVKitError.Code { get }
```

<a id="Discussion"></a>

## Discussion

The user can’t override this restriction by entering the passcode, but they may be able to override it in the Settings app.

## See Also

### Error Code Constants

- [unknown](unknown.md): An unknown error.
- [contentRatingUnknown](contentratingunknown.md): The media content rating is missing or unrecognized.
- [contentDisallowedByPasscode](contentdisallowedbypasscode.md): A restriction disallows access to this content, but the user can override the restriction by entering the device passcode.
- [pictureInPictureStartFailed](pictureinpicturestartfailed.md): The system failed to start Picture in Picture.
