> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmerror/maximumaccessoriesoftypeinhome

# maximumAccessoriesOfTypeInHome

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The home already has the maximum number of accessories of the given type.

## Declaration

```swift
static var maximumAccessoriesOfTypeInHome: HMError.Code { get }
```

## See Also

### Detecting home and room errors

- [roomForHomeCannotBeInZone](roomforhomecannotbeinzone.md): An attempt to add the room that represents the entire home to a zone.
- [roomForHomeCannotBeUpdated](roomforhomecannotbeupdated.md): An attempt to change the room that represents the entire home.
