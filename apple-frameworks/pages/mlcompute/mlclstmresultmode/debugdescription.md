> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclstmresultmode/debugdescription](https://developer.apple.com/documentation/mlcompute/mlclstmresultmode/debugdescription)

# debugDescription (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A textual description of the LSTM result mode you use for debugging.

## Declaration

```swift
var debugDescription: String { get }
```

## See Also

### Enumeration Cases

- [MLCLSTMResultMode.output](output.md): Deprecated. A result mode that indicates the layer produces a single result tensor that represents the final output of the LSTM.
- [MLCLSTMResultMode.outputAndStates](outputandstates.md): Deprecated. A result mode that indicates the layer produces three result tensors that represent the final output of the LSTM, the last hidden state, and the cell state.

# MLCLSTMResultModeDebugDescription (Objective-C)

**Framework:** ML Compute  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A textual description of the LSTM result mode you use for debugging.

## Declaration

```objectivec
NSString *MLCLSTMResultModeDebugDescription(MLCLSTMResultMode mode);
```

## See Also

### Enumeration Cases

- [MLCLSTMResultModeOutput](output.md): Deprecated. A result mode that indicates the layer produces a single result tensor that represents the final output of the LSTM.
- [MLCLSTMResultModeOutputAndStates](outputandstates.md): Deprecated. A result mode that indicates the layer produces three result tensors that represent the final output of the LSTM, the last hidden state, and the cell state.
