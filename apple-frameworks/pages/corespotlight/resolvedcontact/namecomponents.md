> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corespotlight/resolvedcontact/namecomponents

# nameComponents

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The contact’s names as a set of structured name components.

## Declaration

```swift
var nameComponents: [PersonNameComponents]
```

<a id="discussion"></a>

## Discussion

Specify each distinct name as a separate [PersonNameComponents](../../foundation/personnamecomponents.md) type in the array.

## See Also

### Specifying the person’s name

- [displayName](displayname.md): The name your app displays for the contact.
- [names](names.md): Alternate names you use to refer to the contact.
