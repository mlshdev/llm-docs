> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/axchartdescriptorrepresentable/makechartdescriptor()](https://developer.apple.com/documentation/swiftui/axchartdescriptorrepresentable/makechartdescriptor())

# makeChartDescriptor()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Create the `AXChartDescriptor` for this view, and return it.

## Declaration

```swift
func makeChartDescriptor() -> AXChartDescriptor
```

<a id="discussion"></a>

## Discussion

This will be called once per identity of your `View`. It will not be run again unless the identity of your `View` changes. If you need to update the `AXChartDescriptor` based on changes in your `View`, or in the `Environment`, implement `updateChartDescriptor`. This method will only be called if / when accessibility needs the `AXChartDescriptor` of your view, for VoiceOver.

## See Also

### Managing a descriptor

- [updateChartDescriptor(\_:)](updatechartdescriptor%28__%29.md): Update the existing `AXChartDescriptor` for your view, based on changes in your view or in the `Environment`.
