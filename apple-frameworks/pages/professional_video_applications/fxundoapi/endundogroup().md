> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxundoapi/endundogroup()](https://developer.apple.com/documentation/professional_video_applications/fxundoapi/endundogroup())

# endUndoGroup() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Closes the current undo group.

## Declaration

```swift
func endUndoGroup() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the undo group was successfully ended; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating Undo Groups

- [startUndoGroup(\_:)](startundogroup%28__%29.md): Begins a new undo group.

# endUndoGroup (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Closes the current undo group.

## Declaration

```objectivec
- (BOOL) endUndoGroup;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the undo group was successfully ended; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating Undo Groups

- [startUndoGroup:](startundogroup%28__%29.md): Begins a new undo group.
