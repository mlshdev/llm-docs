> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/axchartdescriptorrepresentable/updatechartdescriptor(_:)](https://developer.apple.com/documentation/swiftui/axchartdescriptorrepresentable/updatechartdescriptor(_:))

# updateChartDescriptor(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Update the existing `AXChartDescriptor` for your view, based on changes in your view or in the `Environment`.

## Declaration

```swift
func updateChartDescriptor(_ descriptor: AXChartDescriptor)
```

<a id="discussion"></a>

## Discussion

This will be called as needed, when accessibility needs your `AXChartDescriptor` for VoiceOver. It will only be called if the inputs to your views, or a relevant part of the `Environment`, have changed.

## Default Implementations

### AXChartDescriptorRepresentable Implementations

- [updateChartDescriptor(\_:)](updatechartdescriptor%28__%29-7cxy6.md): Update the existing `AXChartDescriptor` for your view, based on changes in your view or in the `Environment`.

## See Also

### Managing a descriptor

- [makeChartDescriptor()](makechartdescriptor%28%29.md): Create the `AXChartDescriptor` for this view, and return it.
