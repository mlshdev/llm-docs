> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/enablesuddentermination()](https://developer.apple.com/documentation/foundation/processinfo/enablesuddentermination())

# enableSuddenTermination() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Enables the application for quick killing using sudden termination.

## Declaration

```swift
func enableSuddenTermination()
```

<a id="Discussion"></a>

## Discussion

This method decrements the sudden termination counter. When the termination counter reaches `0` the application allows sudden termination.

By default the sudden termination counter is set to 1. This can be overridden in your application Info.plist. See [Support Sudden Termination](../processinfo.md#Support-Sudden-Termination) for more information and debugging suggestions.

## See Also

### Working with sudden application termination

- [disableSuddenTermination()](disablesuddentermination%28%29.md): Disables the application for quickly killing using sudden termination.

# enableSuddenTermination (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Enables the application for quick killing using sudden termination.

## Declaration

```objectivec
- (void) enableSuddenTermination;
```

<a id="Discussion"></a>

## Discussion

This method decrements the sudden termination counter. When the termination counter reaches `0` the application allows sudden termination.

By default the sudden termination counter is set to 1. This can be overridden in your application Info.plist. See [Support Sudden Termination](../processinfo.md#Support-Sudden-Termination) for more information and debugging suggestions.

## See Also

### Working with sudden application termination

- [disableSuddenTermination](disablesuddentermination%28%29.md): Disables the application for quickly killing using sudden termination.
