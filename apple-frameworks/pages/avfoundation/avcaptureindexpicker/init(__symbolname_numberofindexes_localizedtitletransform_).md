> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureindexpicker/init(_:symbolname:numberofindexes:localizedtitletransform:)](https://developer.apple.com/documentation/avfoundation/avcaptureindexpicker/init(_:symbolname:numberofindexes:localizedtitletransform:))

# init(\_:symbolName:numberOfIndexes:localizedTitleTransform:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates a control to pick a value from the specified number of indices.

## Declaration

```swift
init(_ localizedTitle: String, symbolName: String, numberOfIndexes: Int, localizedTitleTransform: (Int) -> String)
```

## Parameters

- `localizedTitle`: A localized title that describes the picker’s action.
- `symbolName`: The name of the symbol from the SF Symbols library to use to represent this control.
- `numberOfIndexes`: The number of indexes to pick between. This value must be greater than `0`.
- `localizedTitleTransform`: A transformation from index to localized title.

<a id="Discussion"></a>

## Discussion

Create a picker with this initializer if your app requires specifying a title for each value lazily.

## See Also

### Creating an index picker

- [init(\_:symbolName:numberOfIndexes:)](init%28__symbolname_numberofindexes_%29.md): Creates a control to pick a value from the specified number of indexes.
- [init(\_:symbolName:localizedIndexTitles:)](init%28__symbolname_localizedindextitles_%29.md): Creates an object to select an index from a set of values.

# initWithLocalizedTitle:symbolName:numberOfIndexes:localizedTitleTransform: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates a control to pick a value from the specified number of indices.

## Declaration

```objectivec
- (instancetype) initWithLocalizedTitle:(NSString *) localizedTitle symbolName:(NSString *) symbolName numberOfIndexes:(NSInteger) numberOfIndexes localizedTitleTransform:(NSString * (^)(NSInteger index)) localizedTitleTransform;
```

## Parameters

- `localizedTitle`: A localized title that describes the picker’s action.
- `symbolName`: The name of the symbol from the SF Symbols library to use to represent this control.
- `numberOfIndexes`: The number of indexes to pick between. This value must be greater than `0`.
- `localizedTitleTransform`: A transformation from index to localized title.

<a id="Discussion"></a>

## Discussion

Create a picker with this initializer if your app requires specifying a title for each value lazily.

## See Also

### Creating an index picker

- [initWithLocalizedTitle:symbolName:numberOfIndexes:](init%28__symbolname_numberofindexes_%29.md): Creates a control to pick a value from the specified number of indexes.
- [initWithLocalizedTitle:symbolName:localizedIndexTitles:](init%28__symbolname_localizedindextitles_%29.md): Creates an object to select an index from a set of values.
