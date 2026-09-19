> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corespotlight/resolvedcontact/names

# names

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Alternate names you use to refer to the contact.

## Declaration

```swift
var names: [String]
```

<a id="discussion"></a>

## Discussion

Specify each alternate name as a separate string in the array.

## See Also

### Specifying the person’s name

- [displayName](displayname.md): The name your app displays for the contact.
- [nameComponents](namecomponents.md): The contact’s names as a set of structured name components.
