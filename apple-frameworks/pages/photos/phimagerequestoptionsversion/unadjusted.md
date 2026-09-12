> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptionsversion/unadjusted](https://developer.apple.com/documentation/photos/phimagerequestoptionsversion/unadjusted)

# PHImageRequestOptionsVersion.unadjusted (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Request a version of the image asset without adjustments.

## Declaration

```swift
case unadjusted
```

<a id="Discussion"></a>

## Discussion

If the asset has been edited, the resulting image reflects the state of the asset before any edits were performed.

## See Also

### Constants

- [PHImageRequestOptionsVersion.current](current.md): Request the most recent version of the image asset (the one that reflects all edits).
- [PHImageRequestOptionsVersion.original](original.md): Request the original, highest-fidelity version of the image asset.

# PHImageRequestOptionsVersionUnadjusted (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Request a version of the image asset without adjustments.

## Declaration

```objectivec
PHImageRequestOptionsVersionUnadjusted
```

<a id="Discussion"></a>

## Discussion

If the asset has been edited, the resulting image reflects the state of the asset before any edits were performed.

## See Also

### Constants

- [PHImageRequestOptionsVersionCurrent](current.md): Request the most recent version of the image asset (the one that reflects all edits).
- [PHImageRequestOptionsVersionOriginal](original.md): Request the original, highest-fidelity version of the image asset.
