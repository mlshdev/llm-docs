> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/previewtrait/portrait](https://developer.apple.com/documentation/developertoolssupport/previewtrait/portrait)

# portrait

**Framework:** DeveloperToolsSupport  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The device is in portrait mode, with the top of the device on top.

## Declaration

```swift
@MainActor static var portrait: PreviewTrait<Preview.ViewTraits> { get }
```

<a id="discussion"></a>

## Discussion

This is the same as [portrait](https://developer.apple.com/documentation/swiftui/interfaceorientation/portrait) and is the default orientation if you don’t specify one.

## See Also

### Getting an orientation

- [portraitUpsideDown](portraitupsidedown.md): Conforms when `T` is `Preview.ViewTraits`. The device is in portrait mode, but is upside down.
- [landscapeLeft](landscapeleft.md): Conforms when `T` is `Preview.ViewTraits`. The device is in landscape mode, with the top of the device on the left.
- [landscapeRight](landscaperight.md): Conforms when `T` is `Preview.ViewTraits`. The device is in landscape mode, with the top of the device on the right.
