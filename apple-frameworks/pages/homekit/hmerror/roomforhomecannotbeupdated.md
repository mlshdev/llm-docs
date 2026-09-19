> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmerror/roomforhomecannotbeupdated

# roomForHomeCannotBeUpdated

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An attempt to change the room that represents the entire home.

## Declaration

```swift
static var roomForHomeCannotBeUpdated: HMError.Code { get }
```

## See Also

### Detecting home and room errors

- [maximumAccessoriesOfTypeInHome](maximumaccessoriesoftypeinhome.md): The home already has the maximum number of accessories of the given type.
- [roomForHomeCannotBeInZone](roomforhomecannotbeinzone.md): An attempt to add the room that represents the entire home to a zone.
