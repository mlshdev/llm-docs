> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphgetfunctionnames(_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphgetfunctionnames(_:_:_:))

# BNNSGraphGetFunctionNames(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Extracts the names of callable functions in the graph.

## Declaration

```swift
func BNNSGraphGetFunctionNames(_ graph: bnns_graph_t, _ function_name_count: Int, _ function_names: UnsafeMutablePointer<UnsafePointer<CChar>?>) -> Int32
```

## Parameters

- `graph`: The compiled graph object.
- `function_name_count`: The number of elements in the `function_names` array.
- `function_names`: On output, an array of pointers to strings that contain the function names.

<a id="return-value"></a>

## Return Value

`0` on success, nonzero on failure.

## See Also

### Querying a graph’s properties

- [BNNSGraphGetArgumentIntents(\_:\_:\_:\_:)](bnnsgraphgetargumentintents%28________%29.md): Extracts the intents of arguments for the given function argument.
- [BNNSGraphArgumentIntent](bnnsgraphargumentintent.md): Constants that describe argument intents.
- [BNNSGraphGetArgumentCount(\_:\_:)](bnnsgraphgetargumentcount%28____%29.md): Returns the number of arguments for the given function argument.
- [BNNSGraphGetArgumentNames(\_:\_:\_:\_:)](bnnsgraphgetargumentnames%28________%29.md): Extracts the names of arguments for the given function argument.
- [BNNSGraphGetFunctionCount(\_:)](bnnsgraphgetfunctioncount%28__%29.md): Returns the number of callable functions in the specified graph.
- [BNNSGraphGetInputCount(\_:\_:)](bnnsgraphgetinputcount%28____%29.md): Returns the number of input arguments for the given function argument.
- [BNNSGraphGetInputNames(\_:\_:\_:\_:)](bnnsgraphgetinputnames%28________%29.md): Extracts the names of input arguments for the given function argument.
- [BNNSGraphGetOutputCount(\_:\_:)](bnnsgraphgetoutputcount%28____%29.md): Returns the number of output arguments for the given function argument.
- [BNNSGraphGetOutputNames(\_:\_:\_:\_:)](bnnsgraphgetoutputnames%28________%29.md): Extracts the names of output arguments for the given function argument.
- [BNNSGraphGetArgumentPosition(\_:\_:\_:)](bnnsgraphgetargumentposition%28______%29.md): Returns the index into the arguments array for the given function argument.
- [BNNSGraphGetArgumentInterleaveFactors(\_:\_:\_:\_:\_:)](bnnsgraphgetargumentinterleavefactors%28__________%29.md): Returns the interleave factors for arguments, if present

# BNNSGraphGetFunctionNames (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Extracts the names of callable functions in the graph.

## Declaration

```objectivec
int BNNSGraphGetFunctionNames(bnns_graph_t graph, size_t function_name_count, const char **function_names);
```

## Parameters

- `graph`: The compiled graph object.
- `function_name_count`: The number of elements in the `function_names` array.
- `function_names`: On output, an array of pointers to strings that contain the function names.

<a id="return-value"></a>

## Return Value

`0` on success, nonzero on failure.

## See Also

### Querying a graph’s properties

- [BNNSGraphGetArgumentIntents](bnnsgraphgetargumentintents%28________%29.md): Extracts the intents of arguments for the given function argument.
- [BNNSGraphArgumentIntent](bnnsgraphargumentintent.md): Constants that describe argument intents.
- [BNNSGraphGetArgumentCount](bnnsgraphgetargumentcount%28____%29.md): Returns the number of arguments for the given function argument.
- [BNNSGraphGetArgumentNames](bnnsgraphgetargumentnames%28________%29.md): Extracts the names of arguments for the given function argument.
- [BNNSGraphGetFunctionCount](bnnsgraphgetfunctioncount%28__%29.md): Returns the number of callable functions in the specified graph.
- [BNNSGraphGetInputCount](bnnsgraphgetinputcount%28____%29.md): Returns the number of input arguments for the given function argument.
- [BNNSGraphGetInputNames](bnnsgraphgetinputnames%28________%29.md): Extracts the names of input arguments for the given function argument.
- [BNNSGraphGetOutputCount](bnnsgraphgetoutputcount%28____%29.md): Returns the number of output arguments for the given function argument.
- [BNNSGraphGetOutputNames](bnnsgraphgetoutputnames%28________%29.md): Extracts the names of output arguments for the given function argument.
- [BNNSGraphGetArgumentPosition](bnnsgraphgetargumentposition%28______%29.md): Returns the index into the arguments array for the given function argument.
- [BNNSGraphGetArgumentInterleaveFactors](bnnsgraphgetargumentinterleavefactors%28__________%29.md): Returns the interleave factors for arguments, if present
