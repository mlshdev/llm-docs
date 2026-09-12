> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickerinkingitem/init(type:color:width:identifier:)-1tsup](https://developer.apple.com/documentation/pencilkit/pktoolpickerinkingitem/init(type:color:width:identifier:)-1tsup)

# init(type:color:width:identifier:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** macOS 26.0+

Create a new inking tool item.

## Declaration

```swift
convenience init(type: PKInkingTool.InkType, color: NSColor? = nil, width: CGFloat? = nil, identifier: String? = nil)
```

## Parameters

- `type`: The ink type for the tool.
- `color`: The color for the tool. Passing `nil` resolves to a default value based on the `InkType`.
- `width`: The width for the tool. Passing `nil` resolves to a default value based on the `InkType`.
- `identifier`: The identifier for the tool item. Passing `nil` resolves to a default value based on the `InkType`.
