> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentationsizing/sticky(horizontal:vertical:)](https://developer.apple.com/documentation/swiftui/presentationsizing/sticky(horizontal:vertical:))

# sticky(horizontal:vertical:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Modifies self to be sticky in the specified dimensions — growing, but not shrinking.

## Declaration

```swift
func sticky(horizontal: Bool = false, vertical: Bool = false) -> some PresentationSizing

```

## Parameters

- `horizontal`: A boolean indicating whether to maintain the largest size horizontally
- `vertical`: A boolean indicating whether to maintain the largest size vertically

<a id="return-value"></a>

## Return Value

A modified version of self sticking to dimensions specified

<a id="discussion"></a>

## Discussion

If `sticky` is `.vertical`, the presentation can grow in the vertical and horizontal dimensions when its content size grows, but will not shrink in the vertical dimension when content size shrinks.

```swift
ContentView()
  .sheet(isPresented: $presentSheet) {
    MyDynamicSheetContent()
      .presentationSizing(
        .form.sticky(horizontal: false, vertical: true))
  }
```

> **See Also**

> [fitted(horizontal:vertical:)](fitted%28horizontal_vertical_%29.md)

## See Also

### Creating custom presentation size

- [fitted(horizontal:vertical:)](fitted%28horizontal_vertical_%29.md)
- [proposedSize(for:context:)](proposedsize%28for_context_%29.md)
