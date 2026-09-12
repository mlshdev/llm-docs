> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visibility/hidden](https://developer.apple.com/documentation/swiftui/visibility/hidden)

# Visibility.hidden

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The element may be hidden.

## Declaration

```swift
case hidden
```

<a id="discussion"></a>

## Discussion

Some APIs may use this value to represent a hint or preference, rather than a mandatory assertion. For example, setting confirmation dialog title visibility to `hidden` using the [confirmationDialog(\_:isPresented:titleVisibility:actions:)](../view/confirmationdialog%28__ispresented_titlevisibility_actions_%29.md) modifier may not always hide the dialog title, which is required on some platforms.

## See Also

### Getting visibility options

- [Visibility.automatic](automatic.md): The element may be visible or hidden depending on the policies of the component accepting the visibility configuration.
- [Visibility.visible](visible.md): The element may be visible.
