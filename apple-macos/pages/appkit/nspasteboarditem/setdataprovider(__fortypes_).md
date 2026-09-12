> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem/setdataprovider(_:fortypes:)](https://developer.apple.com/documentation/appkit/nspasteboarditem/setdataprovider(_:fortypes:))

# setDataProvider(\_:forTypes:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the data provider for the specified types.

## Declaration

```swift
func setDataProvider(_ dataProvider: any NSPasteboardItemDataProvider, forTypes types: [NSPasteboard.PasteboardType]) -> Bool
```

## Parameters

- `dataProvider`: A pasteboard data provider.
- `types`: An array of strings indicating the UTIs for the data representations `dataProvider` may provide.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data provider was set successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method registers the data provider to be messaged to provide the data for any of the specified types when requested.

# setDataProvider:forTypes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the data provider for the specified types.

## Declaration

```objectivec
- (BOOL) setDataProvider:(id<NSPasteboardItemDataProvider>) dataProvider forTypes:(NSArray<NSString *> *) types;
```

## Parameters

- `dataProvider`: A pasteboard data provider.
- `types`: An array of strings indicating the UTIs for the data representations `dataProvider` may provide.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data provider was set successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method registers the data provider to be messaged to provide the data for any of the specified types when requested.
