> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxundoapi/startundogroup(_:)](https://developer.apple.com/documentation/professional_video_applications/fxundoapi/startundogroup(_:))

# startUndoGroup(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Begins a new undo group.

## Declaration

```swift
func startUndoGroup(_ name: String!) -> Bool
```

## Parameters

- `name`: The name of the undo group. Some hosts may display this name in their undo menu. This name should be localized and suitable for user display.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the undo group was successfully started; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

A plug-in can use this method to collapse multiple operations into one undo operation. Subsequent undo operations will be coalesced into this group until [endUndoGroup()](endundogroup%28%29.md) is called. Each call to [startUndoGroup(\_:)](startundogroup%28__%29.md) must be balanced with a call to [endUndoGroup()](endundogroup%28%29.md).

For example, a plug-in may implement a “preset” popup, which changes the values of 20 other parameters using the FxParameterSettingAPI. By nesting the parameter changes in a `startUndoGroup`/`endUndoGroup` block, the 20 changes will be collapsed into one undo operation. This allows the user to undo the preset app by hitting undo once, instead of once per each changed parameter.

## See Also

### Creating Undo Groups

- [endUndoGroup()](endundogroup%28%29.md): Closes the current undo group.

# startUndoGroup: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Begins a new undo group.

## Declaration

```objectivec
- (BOOL) startUndoGroup:(NSString *) name;
```

## Parameters

- `name`: The name of the undo group. Some hosts may display this name in their undo menu. This name should be localized and suitable for user display.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the undo group was successfully started; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

A plug-in can use this method to collapse multiple operations into one undo operation. Subsequent undo operations will be coalesced into this group until [endUndoGroup](endundogroup%28%29.md) is called. Each call to [startUndoGroup:](startundogroup%28__%29.md) must be balanced with a call to [endUndoGroup](endundogroup%28%29.md).

For example, a plug-in may implement a “preset” popup, which changes the values of 20 other parameters using the FxParameterSettingAPI. By nesting the parameter changes in a `startUndoGroup`/`endUndoGroup` block, the 20 changes will be collapsed into one undo operation. This allows the user to undo the preset app by hitting undo once, instead of once per each changed parameter.

## See Also

### Creating Undo Groups

- [endUndoGroup](endundogroup%28%29.md): Closes the current undo group.
