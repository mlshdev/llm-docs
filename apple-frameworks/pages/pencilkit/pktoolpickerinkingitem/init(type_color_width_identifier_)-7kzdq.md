> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickerinkingitem/init(type:color:width:identifier:)-7kzdq](https://developer.apple.com/documentation/pencilkit/pktoolpickerinkingitem/init(type:color:width:identifier:)-7kzdq)

# init(type:color:width:identifier:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Create a new inking tool item.

## Declaration

```swift
convenience init(type: PKInkingTool.InkType, color: UIColor? = nil, width: CGFloat? = nil, identifier: String? = nil)
```

## Parameters

- `type`: The ink type for the tool.
- `color`: The color for the tool. Passing `nil` resolves to a default value based on the `InkType`.
- `width`: The width for the tool. Passing `nil` resolves to a default value based on the `InkType`.
- `identifier`: The identifier for the tool item. Passing `nil` resolves to a default value based on the `InkType`.
