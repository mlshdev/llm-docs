> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/previewtrait/portraitupsidedown](https://developer.apple.com/documentation/developertoolssupport/previewtrait/portraitupsidedown)

# portraitUpsideDown

**Framework:** DeveloperToolsSupport  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The device is in portrait mode, but is upside down.

## Declaration

```swift
@MainActor static var portraitUpsideDown: PreviewTrait<Preview.ViewTraits> { get }
```

<a id="discussion"></a>

## Discussion

This is the same as [portraitUpsideDown](https://developer.apple.com/documentation/swiftui/interfaceorientation/portraitupsidedown).

## See Also

### Getting an orientation

- [portrait](portrait.md): Conforms when `T` is `Preview.ViewTraits`. The device is in portrait mode, with the top of the device on top.
- [landscapeLeft](landscapeleft.md): Conforms when `T` is `Preview.ViewTraits`. The device is in landscape mode, with the top of the device on the left.
- [landscapeRight](landscaperight.md): Conforms when `T` is `Preview.ViewTraits`. The device is in landscape mode, with the top of the device on the right.
