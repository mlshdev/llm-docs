> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureindexpicker/init(_:symbolname:localizedindextitles:)](https://developer.apple.com/documentation/avfoundation/avcaptureindexpicker/init(_:symbolname:localizedindextitles:))

# init(\_:symbolName:localizedIndexTitles:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates an object to select an index from a set of values.

## Declaration

```swift
init(_ localizedTitle: String, symbolName: String, localizedIndexTitles: [String])
```

## Parameters

- `localizedTitle`: A localized title that describes the control’s action.
- `symbolName`: The name of an SF Symbol that represents the control.
- `localizedIndexTitles`: The titles to use for each index. The array must not be empty.

<a id="Discussion"></a>

## Discussion

Create a picker with this initializer when you already have an array containing a title for each picked value.

## See Also

### Creating an index picker

- [init(\_:symbolName:numberOfIndexes:)](init%28__symbolname_numberofindexes_%29.md): Creates a control to pick a value from the specified number of indexes.
- [init(\_:symbolName:numberOfIndexes:localizedTitleTransform:)](init%28__symbolname_numberofindexes_localizedtitletransform_%29.md): Creates a control to pick a value from the specified number of indices.

# initWithLocalizedTitle:symbolName:localizedIndexTitles: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates an object to select an index from a set of values.

## Declaration

```objectivec
- (instancetype) initWithLocalizedTitle:(NSString *) localizedTitle symbolName:(NSString *) symbolName localizedIndexTitles:(NSArray<NSString *> *) localizedIndexTitles;
```

## Parameters

- `localizedTitle`: A localized title that describes the control’s action.
- `symbolName`: The name of an SF Symbol that represents the control.
- `localizedIndexTitles`: The titles to use for each index. The array must not be empty.

<a id="Discussion"></a>

## Discussion

Create a picker with this initializer when you already have an array containing a title for each picked value.

## See Also

### Creating an index picker

- [initWithLocalizedTitle:symbolName:numberOfIndexes:](init%28__symbolname_numberofindexes_%29.md): Creates a control to pick a value from the specified number of indexes.
- [initWithLocalizedTitle:symbolName:numberOfIndexes:localizedTitleTransform:](init%28__symbolname_numberofindexes_localizedtitletransform_%29.md): Creates a control to pick a value from the specified number of indices.
