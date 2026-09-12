> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureslider/init(_:symbolname:values:)](https://developer.apple.com/documentation/avfoundation/avcaptureslider/init(_:symbolname:values:))

# init(\_:symbolName:values:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates a discrete slider control that selects a value from a list.

## Declaration

```swift
@nonobjc convenience init(_ localizedTitle: String, symbolName: String, values: [Float])
```

## Parameters

- `localizedTitle`: A localized title that describes the slider’s action.
- `symbolName`: A symbol name from the SF Symbols library.
- `values`: An array of floating-point values.

<a id="Discussion"></a>

## Discussion

Use discrete sliders when your app supports selecting from a specific list of values.

## See Also

### Creating a slider

- [init(\_:symbolName:in:)](init%28__symbolname_in_%29.md): Creates a continuous slider control that selects a value from a bounded range.
- [init(\_:symbolName:in:step:)](init%28__symbolname_in_step_%29.md): Creates a discrete slider control that selects a stepped value from a bounded range.
