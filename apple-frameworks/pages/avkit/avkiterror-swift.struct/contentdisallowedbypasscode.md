> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avkiterror-swift.struct/contentdisallowedbypasscode

# contentDisallowedByPasscode

**Framework:** AVKit  
**Kind:** Type Property  
**Availability:** tvOS 13.0+

A restriction disallows access to this content, but the user can override the restriction by entering the device passcode.

## Declaration

```swift
static var contentDisallowedByPasscode: AVKitError.Code { get }
```

## See Also

### Error codes

- [unknown](unknown.md): An unknown error.
- [contentRatingUnknown](contentratingunknown.md): The media content rating is missing or unrecognized.
- [contentDisallowedByProfile](contentdisallowedbyprofile.md): An installed profile restricts access to this content.
- [pictureInPictureStartFailed](pictureinpicturestartfailed.md): The system failed to start Picture in Picture.
