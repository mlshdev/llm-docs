> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureslider/init(_:symbolname:in:step:)](https://developer.apple.com/documentation/avfoundation/avcaptureslider/init(_:symbolname:in:step:))

# init(\_:symbolName:in:step:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates a discrete slider control that selects a stepped value from a bounded range.

## Declaration

```swift
@nonobjc convenience init(_ localizedTitle: String, symbolName: String, in range: ClosedRange<Float>, step: Float)
```

## Parameters

- `localizedTitle`: A localized title that describes the slider’s action.
- `symbolName`: A symbol name from the SF Symbols library.
- `range`: A bounded range of floating point values.
- `step`: The distance between each valid value. This specified value must be greater than `0` or the system throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md).

<a id="Discussion"></a>

## Discussion

Use discrete sliders when your use case supports selecting stepped values within the specified range.

## See Also

### Creating a slider

- [init(\_:symbolName:in:)](init%28__symbolname_in_%29.md): Creates a continuous slider control that selects a value from a bounded range.
- [init(\_:symbolName:values:)](init%28__symbolname_values_%29.md): Creates a discrete slider control that selects a value from a list.
