> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/saveoptions(_:shouldshowuttype:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/saveoptions(_:shouldshowuttype:))

# saveOptions(\_:shouldShowUTType:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Called to determine if the specified uniform type identifier should be shown in the save panel.

## Declaration

```swift
func saveOptions(_ saveOptions: IKSaveOptions!, shouldShowUTType utType: String!) -> Bool
```

## Parameters

- `saveOptions`: The `IKSaveOptions` instance that called the delegate.
- `utType`: The uniform type identifier to test.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the specified type should be shown in the save options, otherwise [NO](../no.md).

# saveOptions:shouldShowUTType: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Called to determine if the specified uniform type identifier should be shown in the save panel.

## Declaration

```objectivec
- (BOOL) saveOptions:(IKSaveOptions *) saveOptions shouldShowUTType:(NSString *) utType;
```

## Parameters

- `saveOptions`: The `IKSaveOptions` instance that called the delegate.
- `utType`: The uniform type identifier to test.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the specified type should be shown in the save options, otherwise [NO](../no.md).
